import * as path from 'path'
import * as fs from 'fs'
import * as yargs from 'yargs'
import * as globby from 'globby'

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
import Fetcher from '../lib/fetcher'
import { ParseResult } from '../lib/migration-parser'
import { MigrationHistory } from '../lib/entities/migration-history'

const argv = yargs
  .usage('Parses and runs a migration script on a Contentful space.\n\nUsage: contentful-migration [args] <path-to-script-file>\n\nScript: path to a migration script.')
  .command({
    command: 'single <filePath>',
    aliases: ['* <filePath>'],
    desc: 'Run a single migration script',
    handler: runSingle
  })
  .command('batch <directory|glob>', 'Run a set of migration scripts in filename order', {}, runBatch)
  .coerce('filePath', (filePath) => {
    filePath = path.resolve(process.cwd(), filePath)
    if (!fs.existsSync(filePath)) {
      throw new Error(chalk`{bold.red Cannot find file ${filePath}}`)
    }
    if (fs.statSync(filePath).isDirectory()) {
      throw new Error(chalk`{bold.red Cannot load migration file ${filePath}: is a directory.\n  Did you mean to run in 'batch' mode?}`)
    }
    return filePath
  })
  .option('space-id', {
    alias: 's',
    describe: 'ID of the space to run the migration script on'
  }).option('environment-id', {
    alias: 'e',
    describe: 'ID of the environment within the space to run the migration script on',
    default: 'master'
  })
  .option('access-token', {
    alias: 'a',
    describe: 'The access token to use\nThis takes precedence over environment variables or .contentfulrc'
  })
  .option('yes', {
    alias: 'y',
    boolean: true,
    describe: 'Skips any confirmation before applying the migration script',
    default: false
  })
  .option('force', {
    boolean: true,
    describe: 'Re-runs any migrations that previously errored or have already completed.',
    default: false
  })
  .option('persist', {
    alias: 'p',
    boolean: true,
    describe: 'Persists the fact that this migration ran in a History content-type in the Contentful space',
    default: false
  })
  .demandOption(['space-id'], 'Please provide a space ID')
  .help('h')
  .alias('h', 'help')
  .example('contentful-migration', '--space-id abcedef my-migration.js')
  .strict()
  .argv

class BatchError extends Error {
  public batch: RequestBatch
  public errors: Error[]
  constructor (message: string, batch: RequestBatch, errors: Error[]) {
    super(message)
    this.batch = batch
    this.errors = errors
  }
}

async function runSingle (argv) {
  const migrationFunction = loadMigrationFunction(argv.filePath)

  const spaceId = argv.spaceId

  const config = {
    accessToken: argv.accessToken,
    spaceId
  }

  execMigration(migrationFunction, config)
}

async function runBatch (argv) {
  const spaceId = argv.spaceId
  const environmentId = argv.environmentId

  const config = {
    accessToken: argv.accessToken,
    spaceId,
    environmentId
  }

  let migrationFunctions = []
  let glob
  if (argv.directory) {
    const stats = fs.statSync(argv.directory)
    if (stats.isDirectory()) {
      const extensions = ['js', 'ts']
      glob = path.join(argv.directory, `[0-9]*@(${extensions.join('|')})`)
    }
  }
  if (!glob) {
    glob = argv.glob
  }
  const files = await globby(glob)
  files.sort()

  migrationFunctions.push(...files.map(f => loadMigrationFunction(path.resolve(process.cwd(), f))))

  if (migrationFunctions.length === 0) {
    console.log(chalk`{bold.yellow No migrations found in ${glob}}`)
  } else {
    console.log(chalk`{bold.cyan ${migrationFunctions.length.toString()} migrations to be performed:}`)
    console.log(`${migrationFunctions.map((f, i) => (`  ${i + 1}: ${path.basename(f.filePath)}`)).join('\n')}`)
    for (let i = 0; i < migrationFunctions.length; i++) {
      const migration = migrationFunctions[i]
      console.log(chalk`{bold.cyan Migration ${(i + 1).toString()} of ${migrationFunctions.length.toString()}: ${path.basename(migration.filePath)}}`)
      await execMigration(migrationFunctions[i], config)
    }
  }
}

async function execMigration (migrationFunction, config) {

  const clientConfig = Object.assign({
    application: `contentful.migration-cli/${version}`
  }, config)

  const client = createManagementClient(clientConfig)
  const makeRequest = function (requestConfig) {
    const cfg = Object.assign({}, requestConfig, {
      url: path.join(config.spaceId, 'environments', config.environmentId, requestConfig.url)
    })
    return client.rawRequest(cfg)
  }

  const migrationName = path.basename(migrationFunction.filePath)
  const errorsFile = path.join(
    process.cwd(),
    `errors-${migrationName}-${Date.now()}.log`
  )

  const fetcher = new Fetcher(makeRequest)

  const history = await fetcher.getMigrationHistory()
  let thisMigrationHistory = history.filter(m => m.migrationName === migrationName && m.completed).pop()
  if (thisMigrationHistory) {
    console.log(chalk`{gray Migration previously completed at ${new Date(thisMigrationHistory.completed).toString()}}`)
    if (!argv.force) {
      return
    }
    console.log(chalk`  {gray Re-running migration anyways due to "--force" parameter}`)
  } else {
    thisMigrationHistory = history.filter(m => m.migrationName === migrationName).pop()
    if (thisMigrationHistory) {
      console.log(chalk`⚠️  {bold.yellow Migration failed before completion at ${new Date(thisMigrationHistory.started).toString()}}`)
      if (!argv.force) {
        console.log(chalk`  {bold.yellow Please manually inspect the data model for errors and then re-run using "--force"}`)
        return
      }
      console.log(chalk`  {gray Re-running migration anyways due to "--force" parameter}`)
    }
  }

  const migrationParser = createMigrationParser(fetcher)

  let parseResult: ParseResult

  try {
    parseResult = await migrationParser(migrationFunction)
  } catch (e) {
    if (e instanceof SpaceAccessError) {
      const message = [
        chalk`{red.bold ${e.message}}\n`,
        chalk`🚨  {bold.red Migration unsuccessful}`
      ].join('\n')
      console.log(message)
      process.exit(1)
    }
    console.log(e)
    process.exit(1)
  }

  if (parseResult.hasStepsValidationErrors()) {
    renderStepsErrors(parseResult.stepsValidationErrors)
    process.exit(1)
  }

  if (parseResult.hasPayloadValidationErrors()) {
    renderStepsErrors(parseResult.payloadValidationErrors)
    process.exit(1)
  }

  const batches = parseResult.batches

  if (parseResult.hasValidationErrors()) {
    renderValidationErrors(batches)
    process.exit(1)
  }

  if (parseResult.hasRuntimeErrors()) {
    renderRuntimeErrors(batches, errorsFile)
    await writeErrorsToLog(parseResult.getRuntimeErrors(), errorsFile)
    process.exit(1)
  }

  await renderPlan(batches)
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

  const space = await client.getSpace(config.spaceId)

  if (argv.persist) {
    tasks.splice(0, 0, {
      title: `Insert Migration "${migrationName}" into History`,
      task: async () => {
        await MigrationHistory.getOrCreateContentType(space)

        thisMigrationHistory = new MigrationHistory(migrationName)
        thisMigrationHistory.detail = batches
        const resp = await space.createEntry('migrationHistory', thisMigrationHistory.update({}))
        thisMigrationHistory.id = resp.sys.id
        history.push(thisMigrationHistory)
      }
    })

    tasks.push({
      title: 'Mark migration as completed',
      task: async () => {
        thisMigrationHistory.completed = Date.now()
        let entry = await space.getEntry(thisMigrationHistory.id)
        thisMigrationHistory.update(entry)
        entry = await entry.update()
        entry = await entry.publish()
      }
    })
  }

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
      console.log(chalk`{red ${err.message}}\n`)
      err.errors.forEach((err) => console.log(chalk`{red ${err}}\n\n`))
      await Promise.all(serverErrorsWritten)
      console.log(`Please check the errors log for more details: ${errorsFile}`)
    }
  } else {
    console.log(chalk`⚠️  {bold.yellow Migration aborted}`)
  }
}

function loadMigrationFunction (filePath) {
  try {
    const ret = require(filePath)
    ret.filePath = filePath
    return ret
  } catch (e) {
    console.log(chalk`{red.bold The ${filePath} script could not be parsed, as it seems to contain syntax errors.}\n`)
    console.log(e)
    process.exit(1)
  }
}
