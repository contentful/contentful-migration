import * as path from 'path'
import type { RawAxiosRequestConfig } from 'axios'

import chalk from 'chalk'
import inquirer from 'inquirer'
import { Listr } from 'listr2'
import { createManagementClient } from './lib/contentful-client'
import createMigrationParser, { ParseResult } from '../lib/migration-parser'
import { renderPlan, renderRuntimeErrors, renderValidationErrors } from './lib/render-migration'
import renderStepsErrors from './lib/steps-errors'
import writeErrorsToLog from './lib/write-errors-to-log'
import { RequestBatch } from '../lib/offline-api'
import { getConfig } from './lib/config'
import ValidationError from '../lib/interfaces/errors'
import { PlainClientAPI } from 'contentful-management'
import trim from 'lodash/trim'

import { SpaceAccessError } from '../lib/errors'
import pThrottle from 'p-throttle'

const { version } = require('../../package.json')

class ManyError extends Error {
  public errors: (Error | ValidationError)[]

  constructor(message: string, errors: (Error | ValidationError)[]) {
    super(message)
    this.errors = errors
  }
}

class BatchError extends Error {
  public batch: RequestBatch
  public errors: Error[]

  constructor(message: string, batch: RequestBatch, errors: Error[]) {
    super(message)
    this.batch = batch
    this.errors = errors
  }
}

function hasManyErrors(error: unknown): error is ManyError | BatchError {
  return error instanceof ManyError || error instanceof BatchError
}

const makeTerminatingFunction =
  ({ shouldThrow }) =>
  (error: any) => {
    if (shouldThrow) {
      throw error
    } else {
      process.exit(1)
    }
  }

export enum UrlBaseType {
  Space = 'space',
  Org = 'org'
}

export const createMakeRequest = (
  client: PlainClientAPI,
  { spaceId, environmentId, organizationId, limit = 10, host = 'api.contentful.com' }
) => {
  const throttle = pThrottle({
    limit,
    interval: 1000,
    strict: false
  })

  const makeOrgBaseUrl = (url: string) => {
    const parts = [`https://${host}`, 'organizations', organizationId, trim(url, '/')]
    return parts.filter((x) => x !== '').join('/')
  }

  const makeSpaceBaseUrl = (url: string) => {
    const parts = [
      `https://${host}`,
      'spaces',
      spaceId,
      'environments',
      environmentId,
      trim(url, '/')
    ]
    return parts.filter((x) => x !== '').join('/')
  }

  return function makeRequest(requestConfig: RawAxiosRequestConfig & { baseType?: UrlBaseType }) {
    const { url, baseType, ...config } = requestConfig
    const fullUrl = baseType === UrlBaseType.Org ? makeOrgBaseUrl(url) : makeSpaceBaseUrl(url)

    return throttle(() => client.raw.http(fullUrl, config))()
  }
}

const getMigrationFunctionFromFile = (
  filePath: string,
  terminate: ReturnType<typeof makeTerminatingFunction>
) => {
  try {
    return require(filePath)
  } catch (e) {
    const message = chalk`{red.bold The ${filePath} script could not be parsed, as it seems to contain syntax errors.}\n`
    console.error(message)
    console.error(e)
    terminate(new Error(message))
  }
}

const createRun = ({ shouldThrow }) =>
  async function run(argv) {
    const terminate = makeTerminatingFunction({ shouldThrow })
    const migrationFunction =
      argv.migrationFunction || getMigrationFunctionFromFile(argv.filePath, terminate)
    const application = argv.managementApplication || `contentful.migration-cli/${version}`
    const feature = argv.managementFeature || `migration-library`

    const clientConfig = Object.assign(
      {
        application,
        feature
      },
      getConfig(argv)
    )
    // allow users to override the default host via the contentful-cli
    argv.host && Object.assign(clientConfig, { host: argv.host })

    const client = createManagementClient(clientConfig)
    const makeRequest = createMakeRequest(client, {
      spaceId: clientConfig.spaceId,
      environmentId: clientConfig.environmentId,
      organizationId: clientConfig.organizationId,
      limit: argv.requestLimit,
      host: clientConfig.host
    })

    const migrationParser = createMigrationParser(makeRequest, clientConfig)

    let parseResult: ParseResult

    try {
      parseResult = await migrationParser(migrationFunction)
    } catch (e) {
      if (e instanceof SpaceAccessError) {
        const message = [
          chalk`{red.bold ${e.message}}\n`,
          chalk`🚨  {bold.red Migration unsuccessful}`
        ].join('\n')
        console.error(message)
        terminate(new Error(message))
      }
      console.error(e)
      terminate(e)
    }

    if (parseResult.hasStepsValidationErrors()) {
      renderStepsErrors(parseResult.stepsValidationErrors)
      terminate(new ManyError('Step Validation Errors', parseResult.stepsValidationErrors))
    }

    if (parseResult.hasPayloadValidationErrors()) {
      renderStepsErrors(parseResult.payloadValidationErrors)
      terminate(new ManyError('Payload Validation Errors', parseResult.payloadValidationErrors))
    }

    const migrationName = argv.migrationFunction
      ? argv.migrationFunction.name
      : path.basename(argv.filePath, '.js')
    const errorsFile = path.join(process.cwd(), `errors-${migrationName}-${Date.now()}.log`)

    const batches = parseResult.batches

    if (parseResult.hasValidationErrors()) {
      renderValidationErrors(batches, argv.environmentId)
      terminate(new ManyError('Validation Errors', parseResult.getValidationErrors()))
    }

    if (parseResult.hasRuntimeErrors()) {
      renderRuntimeErrors(batches, errorsFile)
      await writeErrorsToLog(parseResult.getRuntimeErrors(), errorsFile)
      terminate(new ManyError('Runtime Errors', parseResult.getRuntimeErrors()))
    }

    await renderPlan(batches, argv.environmentId, argv.quiet)

    const serverErrorsWritten = []

    const tasks = batches.map((batch) => {
      return {
        title: batch.intent.toPlanMessage().heading,
        task: () =>
          new Listr([
            {
              title: 'Making requests',
              task: async (_ctx, task) => {
                // TODO: We wanted to make this an async interator
                // So we should not inspect the length but have a property for that
                const numRequests = batch.requests.length
                const requestErrors = []
                let requestsDone = 0
                for (const request of batch.requests) {
                  requestsDone += 1
                  task.title = `Making requests (${requestsDone}/${numRequests})`
                  task.output = `${request.method} ${request.url} at V${request.headers['X-Contentful-Version']}`

                  await makeRequest(request).catch((error) => {
                    serverErrorsWritten.push(writeErrorsToLog(error, errorsFile))
                    let errorMessage

                    if (error instanceof TypeError) {
                      errorMessage = {
                        message: 'Value does not match the expected type',
                        details: {
                          message: error.message.toString()
                        }
                      }
                    } else {
                      const parsed = JSON.parse(error.message)

                      errorMessage = {
                        status: parsed.statusText,
                        message: parsed.message,
                        details: parsed.details,
                        url: parsed.request.url
                      }
                    }

                    requestErrors.push(new Error(JSON.stringify(errorMessage)))
                  })
                }
                // Finish batch and only then throw all errors in there
                if (requestErrors.length) {
                  throw new BatchError(`Batch failed`, batch, requestErrors)
                }
              }
            }
          ])
      }
    })

    const confirm = async function (options: { skipConfirmation: boolean }) {
      if (options.skipConfirmation) {
        return { applyMigration: true }
      }

      return inquirer.prompt([
        {
          type: 'confirm',
          message: 'Do you want to apply the migration',
          name: 'applyMigration'
        }
      ])
    }

    const answers = await confirm({ skipConfirmation: argv.yes })

    if (answers.applyMigration) {
      try {
        const successfulMigration = await new Listr(tasks).run()
        console.log(chalk`🎉  {bold.green Migration successful}`)
        return successfulMigration
      } catch (err: unknown) {
        console.error(chalk`🚨  {bold.red Migration unsuccessful}`)

        if (err instanceof Error) {
          console.error(chalk`{red ${err.message}}\n`)
          if (hasManyErrors(err) && Array.isArray(err.errors)) {
            err.errors.forEach((err: any) => console.error(chalk`{red ${err}}\n\n`))
          }
        } else {
          console.error(chalk`{red ${err}}\n`)
        }

        await Promise.all(serverErrorsWritten)
        console.error(`Please check the errors log for more details: ${errorsFile}`)
        terminate(err)
      }
    } else {
      console.warn(chalk`⚠️  {bold.yellow Migration aborted}`)
    }
  }

export const runMigration = createRun({ shouldThrow: true })
export default createRun({ shouldThrow: false })
