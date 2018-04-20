import * as path from 'path'
import * as fs from 'fs'
import * as yargs from 'yargs'

const { version } = require('../../package.json')

export default yargs
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
  .version(version || 'Version only available on installed package')
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
  .demandOption(['space-id'], 'Please provide a space ID')
  .help('h')
  .alias('h', 'help')
  .example('contentful-migration', '--space-id abcedef my-migration.js')
  .strict()
  .argv
