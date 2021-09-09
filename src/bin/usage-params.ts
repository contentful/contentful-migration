import * as path from 'path'
import * as fs from 'fs'
import * as yargs from 'yargs'

const { version } = require('../../package.json')

export default yargs
  .usage('Parses and runs a migration script on a Contentful space.\n\nUsage: contentful-migration [args] <path-to-script-file>\n\nScript: path to a migration script.')
  .demandCommand(1, 'Please provide the file containing the migration script.')
  .check((args) => {
    const filePath = path.resolve(process.cwd(), args._[0].toString())
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
  .option('proxy', {
    describe: 'Proxy configuration in HTTP auth format: [http|https]://host:port or [http|https]://user:password@host:port',
    type: 'string'
  })
  .option('raw-proxy', {
    describe: 'Pass proxy config to Axios instead of creating a custom httpsAgent',
    type: 'boolean',
    default: false
  })
  .option('yes', {
    alias: 'y',
    boolean: true,
    describe: 'Skips any confirmation before applying the migration script',
    default: false
  })
  .option('quiet', {
    alias: 'q',
    boolean: false,
    describe: 'Reduce verbosity of information for the execution',
    default: false
  })
  .option('request-batch-size', {
    alias: 'l',
    boolean: false,
    describe: 'Batch size per request',
    type: 'number',
    default: 100
  })
  .option('header', {
    alias: 'H',
    type: 'string',
    describe: 'Pass an additional HTTP Header'
  })
  .demandOption(['space-id'], 'Please provide a space ID')
  .help('h')
  .alias('h', 'help')
  .example('contentful-migration', '--space-id abcedef my-migration.js')
  .strict()
  .argv
