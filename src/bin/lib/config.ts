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

/**
 * Turn header option into an object. Invalid header values
 * are ignored.
 *
 * @example
 * getHeadersConfig('Accept: Any')
 * // -> {Accept: 'Any'}
 *
 * @example
 * getHeadersConfig(['Accept: Any', 'X-Version: 1'])
 * // -> {Accept: 'Any', 'X-Version': '1'}
 */
function getHeadersConfig (value?: string | string[]) {
  if (!value) {
    return {}
  }

  const values = Array.isArray(value) ? value : [value]

  return values.reduce((headers, value) => {
    value = value.trim()

    const separatorIndex = value.indexOf(':')

    // Invalid header format
    if (separatorIndex === -1) {
      return headers
    }

    const headerKey = value.slice(0, separatorIndex).trim()
    const headerValue = value.slice(separatorIndex + 1).trim()

    return {
      ...headers,
      [headerKey]: headerValue
    }
  }, {})
}

function getConfig (argv) {
  const fileConfig = getFileConfig()
  const envConfig = getEnvConfig()
  const argvConfig = getArgvConfig({
    ...argv,
    headers: argv?.headers || getHeadersConfig(argv?.header)
  })

  globalConfig = Object.assign(fileConfig, envConfig, argvConfig)
  return globalConfig;
}

const hasAlphaHeader = (feature: 'assembly-types') => {
  if (globalConfig) {
    const alphaHeader = globalConfig.headers['x-contentful-enable-alpha-feature'] as string || ''
    return alphaHeader.includes(feature)
  }
  return false;
} 

export default getConfig

export {
  getConfig,
  ClientConfig,
  hasAlphaHeader
}
