'use-strict'
import Package from '../lib/package'
import path = require('path')
import fs = require('fs')
import yargs = require('yargs')

import Bluebird = require('bluebird')
import chalk = require('chalk')
import inquirer = require('inquirer')
import Listr = require('listr')
import { createManagementClient } from './lib/contentful-client'
const { version } = require('../../package.json')
import { renderWithoutErrors } from './lib/render-packages'
import createMigrationParser from '../lib/migration-parser'

const argv = yargs
  .usage('Parses and runs a migration script on a Contentful space.\n\nUsage: contentful-migration [args] <path-to-script-file>\n\nScript: path to a migration script.')
  .demandCommand(1, 'Please provide the file containing the migration script.')
  .check((args) => {
    const filePath = path.join(process.cwd(), args._[0])
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
  .demandOption(['space-id'], 'Please provide a space ID')
  .help('h')
  .alias('h', 'help')
  .example('contentful-migration', '--space-id abcedef my-migration.js')
  .strict()
  .argv

const run = Bluebird.coroutine(function * () {
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

  const migrationParser = createMigrationParser(makeRequest, {
    onPackages: function (packages: Package[]) {
      console.log(chalk`{bold.green The following migration has been planned}\n`)
      console.log(renderWithoutErrors(packages))
      console.log('\n')
    }
  })

  let requests

  try {
    requests = yield migrationParser(migrationFunction)
  } catch (error) {
    console.log(error)
    // how do we receive errors?

    process.exit(1)
  }

  const tasks = requests.map((request) => {
    return {
      title: `${request.method} ${request.url} at V${request.headers['X-Contentful-Version']}`,
      task: () => {
        return makeRequest(request).catch((error) => {
          const parsed = JSON.parse(error.message)
          throw new Error(JSON.stringify(parsed.details) || parsed.message)
        })
      }
    }
  })

  const answers = yield inquirer.prompt([{
    type: 'confirm',
    message: 'Do you want to apply the migration',
    name: 'applyMigration'
  }])

  if (answers.applyMigration) {
    try {
      const successfulMigration = yield (new Listr(tasks)).run()
      console.log(chalk`🎉  {bold.green Migration successful}`)
      return successfulMigration
    } catch (err) {
      console.log(chalk`🚨  {bold.red Migration unsuccessful}`)
      console.log(chalk`{red ${err.message}}`)
    }
  } else {
    console.log(chalk`⚠️  {bold.yellow Migration aborted}`)
  }
})

export default run
