import * as path from 'path'

import chalk from 'chalk'
import * as inquirer from 'inquirer'
import * as Listr from 'listr'
import { createManagementClient } from './lib/contentful-client'
const { version } = require('../../package.json')
const {
  SpaceAccessError
} = require('../lib/errors')
import createMigrationParser from '../lib/migration-parser'
import { renderPlan, renderValidationErrors, renderRuntimeErrors } from './lib/render-migration'
import renderStepsErrors from './lib/steps-errors'
import writeErrorsToLog from './lib/write-errors-to-log'
import { RequestBatch } from '../lib/offline-api/index'
import { ParseResult } from '../lib/migration-parser'
import { getConfig } from './lib/config'
import ValidationError from '../lib/interfaces/errors'

class ManyError extends Error {
  public errors: (Error | ValidationError)[]
  constructor (message: string, errors: (Error | ValidationError)[]) {
    super(message)
    this.errors = errors
  }
}

class BatchError extends Error {
  public batch: RequestBatch
  public errors: Error[]
  constructor (message: string, batch: RequestBatch, errors: Error[]) {
    super(message)
    this.batch = batch
    this.errors = errors
  }
}

const makeTerminatingFunction = ({ shouldThrow }) => (error: Error) => {
  if (shouldThrow) {
    throw error
  } else {
    process.exit(1)
  }
}

const createRun = ({ shouldThrow }) => async function run (argv) {
  let migrationFunction
  const terminate = makeTerminatingFunction({ shouldThrow })
  try {
    migrationFunction = require(argv.filePath)
  } catch (e) {
    console.error(chalk`{red.bold The ${argv.filePath} script could not be parsed, as it seems to contain syntax errors.}\n`)
    console.error(e)
    return
  }

  const application = argv.managementApplication || `contentful.migration-cli/${version}`
  const feature = argv.managementFeature || `migration-library`

  const clientConfig = Object.assign({
    application,
    feature
  }, getConfig(argv))

  const client = createManagementClient(clientConfig)
  const makeRequest = function (requestConfig) {
    const config = Object.assign({}, requestConfig, {
      url: path.join(clientConfig.spaceId, 'environments', clientConfig.environmentId, requestConfig.url)
    })
    return client.rawRequest(config)
  }

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

  const migrationName = path.basename(argv.filePath, '.js')
  const errorsFile = path.join(
    process.cwd(),
    `errors-${migrationName}-${Date.now()}.log`
  )

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

  await renderPlan(batches, argv.environmentId)

  const serverErrorsWritten = []

  const tasks = batches.map((batch) => {
    return {
      title: batch.intent.toPlanMessage().heading,
      task: () => new Listr([
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
                const parsed = JSON.parse(error.message)

                const errorMessage = {
                  status: parsed.statusText,
                  message: parsed.message,
                  details: parsed.details,
                  url: parsed.request.url
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

    return inquirer.prompt([{
      type: 'confirm',
      message: 'Do you want to apply the migration',
      name: 'applyMigration'
    }])
  }

  const answers = await confirm({ skipConfirmation: argv.yes })

  if (answers.applyMigration) {
    try {
      const successfulMigration = await (new Listr(tasks)).run()
      console.log(chalk`🎉  {bold.green Migration successful}`)
      return successfulMigration
    } catch (err) {
      console.error(chalk`🚨  {bold.red Migration unsuccessful}`)
      console.error(chalk`{red ${err.message}}\n`)
      err.errors.forEach((err) => console.error(chalk`{red ${err}}\n\n`))
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
