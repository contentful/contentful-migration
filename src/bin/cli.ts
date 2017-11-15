import * as path from 'path'
import * as fs from 'fs'
import * as yargs from 'yargs'

import chalk from 'chalk'
import * as inquirer from 'inquirer'
import * as Listr from 'listr'
import { createManagementClient } from './lib/contentful-client'
const { version } = require('../../package.json')
const {
  SpaceAccessError
} = require('../lib/errors')
import createMigrationParser from '../lib/migration-parser'
import renderPlan from './lib/plan-messages'
import renderStepsErrors from './lib/steps-errors'
import { RequestBatch } from '../lib/offline-api/index'
import Fetcher from '../lib/fetcher'

const argv = yargs
  .usage('Parses and runs a migration script on a Contentful space.\n\nUsage: contentful-migration [args] <path-to-script-file>\n\nScript: path to a migration script.')
  .demandCommand(1, 'Please provide the file containing the migration script.')
  .check((args) => {
    const filePath = path.resolve(process.cwd(), args._[0])
    if (fs.existsSync(filePath)) {
      args.filePath = filePath
      return true
    }
    throw new Error(`Cannot find file ${filePath}.`)
  })
  .option('space-id', {
    alias: 's',
    describe: 'ID of the space to run the migration script on'
  })
  .option('access-token', {
    alias: 'a',
    describe: 'The access token to use\nThis takes precedence over environment variables or .contentfulrc'
  })
  .option('yes', {
    alias: 'y',
    describe: 'Skips any confirmation before applying the migration script',
    default: false
  })
  .demandOption(['space-id'], 'Please provide a space ID')
  .help('h')
  .alias('h', 'help')
  .example('contentful-migration', '--space-id abcedef my-migration.js')
  .strict()
  .argv

const renderFailedValidation = function (errors, renderer) {
  return [
    chalk`{red.bold Validation failed}\n`,
    renderer(errors),
    chalk`🚨  {bold.red Migration unsuccessful}`
  ].join('\n')
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
const run = async function () {
  let migrationFunction
  try {
    migrationFunction = require(argv.filePath)
  } catch (e) {
    console.log(chalk`{red.bold The ${argv.filePath} script could not be parsed, as it seems to contain syntax errors.}\n`)
    console.log(e)
    return
  }

  const spaceId = argv.spaceId

  const config = {
    accessToken: argv.accessToken,
    spaceId
  }

  const clientConfig = Object.assign({
    application: `contentful.migration-cli/${version}`
  }, config)

  const client = createManagementClient(clientConfig)
  const makeRequest = function (requestConfig) {
    requestConfig.url = path.join(config.spaceId, requestConfig.url)
    return client.rawRequest(requestConfig)
  }

  const fetcher = new Fetcher(makeRequest)
  const migrationParser = createMigrationParser(fetcher)

  let batches: RequestBatch[]

  try {
    ({ batches } = await migrationParser(migrationFunction))
  } catch (e) {
    let message = e.message

    if (e.errors) {
      const errors = e.errors
      message = renderFailedValidation(errors, renderStepsErrors)
    } else if (e instanceof SpaceAccessError) {
      message = [
        chalk`{red.bold ${e.message}}\n`,
        chalk`🚨  {bold.red Migration unsuccessful}`
      ].join('\n')
    } else {
      console.log(e)
      process.exit(1)
    }
    console.log(message)
    process.exit(1)
  }

  const hasErrors = batches.some((batch) => batch.errors.length > 0 || batch.contentTransformErrors.length > 0)

  if (hasErrors) {
    console.log(chalk`{bold.red The following migration has been planned but cannot be run because it contains errors}\n\n`)
  } else {
    console.log(chalk`{bold.green The following migration has been planned}\n`)
  }
  renderPlan(batches)

  if (hasErrors) {
    console.log(chalk`🚨  {bold.red Migration unsuccessful}`)
    process.exit(1)
  }

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
                const parsed = JSON.parse(error.message)
                requestErrors.push(Error(JSON.stringify(parsed.details) || parsed.message))
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
      console.log(chalk`🚨  {bold.red Migration unsuccessful}`)
      console.log(chalk`{red ${err.message}}`)
      console.log(err.errors.map((err) => chalk`{red ${err.message}}\n`))
    }
  } else {
    console.log(chalk`⚠️  {bold.yellow Migration aborted}`)
  }
}

export default run
