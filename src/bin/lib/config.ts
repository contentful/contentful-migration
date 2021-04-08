import * as path from 'path'
import * as os from 'os'

// TODO: I'm ugly, maybe change me
const homedir = process.env.NODE_ENV === 'test' ? '/tmp' : os.homedir()
const configPath = path.resolve(homedir, '.contentfulrc.json')

// We need to keep track of the config the user passes down
// to getConfig, because alpha headers can be used to conditionally
// enable/disable certain behaviors:
// e.g. the relationshipType field validation can be used only when
// the assembly-types alpha header is present in the config.
let globalConfig: ClientConfig;

interface ClientConfig {
  accessToken?: string
  spaceId?: string
  environmentId?: string,
  proxy?: string,
  rawProxy?: boolean
  requestBatchSize?: number
  headers?: Record<string, unknown>
}

function getFileConfig (): ClientConfig {
  try {
    const config = require(configPath)
    return config.cmaToken ?
      { accessToken: config.cmaToken } :
      {}
  } catch (e) {
    return {}
  }
}

function getEnvConfig (): ClientConfig {
  const envKey = 'CONTENTFUL_MANAGEMENT_ACCESS_TOKEN'
  return process.env[envKey] ?
    { accessToken : process.env[envKey] } :
    {}
}

function getArgvConfig ({ spaceId, environmentId = 'master', accessToken, proxy, rawProxy, requestBatchSize, headers }): ClientConfig {
  const config = {
    spaceId,
    environmentId,
    accessToken,
    proxy,
    rawProxy,
    requestBatchSize,
    headers
  }

  if (!config.accessToken) {
    delete config.accessToken
  }

  return config
}

function getConfig (argv) {
  const fileConfig = getFileConfig()
  const envConfig = getEnvConfig()
  const argvConfig = getArgvConfig(argv || {})

  globalConfig = Object.assign(fileConfig, envConfig, argvConfig)
  return globalConfig;
}

const hasAlphaHeader = (alphaHeader: 'assembly-types') => (globalConfig.headers?.['x-contentful-enable-alpha-feature'] as string)?.includes(alphaHeader)

export default getConfig

export {
  getConfig,
  ClientConfig,
  hasAlphaHeader
}
