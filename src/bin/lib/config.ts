import * as path from 'path'
import * as os from 'os'
import { v4 as uuidv4 } from 'uuid'

// TODO: I'm ugly, maybe change me
const homedir = process.env.NODE_ENV === 'test' ? '/tmp' : os.homedir()
const configPath = path.resolve(homedir, '.contentfulrc.json')

interface ClientConfig {
  accessToken?: string
  spaceId?: string
  environmentId?: string
  proxy?: string
  rawProxy?: boolean
  requestBatchSize?: number
  headers?: Record<string, unknown>
  retryLimit?: number
}

function getFileConfig (): ClientConfig {
  try {
    const config = require(configPath)
    return config.cmaToken ? { accessToken: config.cmaToken } : {}
  } catch (e) {
    return {}
  }
}

function getEnvConfig (): ClientConfig {
  const envKey = 'CONTENTFUL_MANAGEMENT_ACCESS_TOKEN'
  return process.env[envKey] ? { accessToken: process.env[envKey] } : {}
}

function getArgvConfig ({
  spaceId,
  environmentId = 'master',
  accessToken,
  proxy,
  rawProxy,
  requestBatchSize,
  headers,
  retryLimit
}): ClientConfig {
  const config = {
    spaceId,
    environmentId,
    accessToken,
    proxy,
    rawProxy,
    requestBatchSize,
    headers: addSequenceHeader(headers),
    retryLimit
  }

  if (config.retryLimit && (config.retryLimit < 0 || config.retryLimit > 60)) {
    throw new Error('retryLimit must be between 0 and 60')
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

  return Object.assign(fileConfig, envConfig, argvConfig)
}

/**
 * Adds a sequence header to a header object
 * @param {object} headers
 */
function addSequenceHeader (headers) {
  if (typeof headers !== 'object') {
    throw new Error('addSequence function expects an object as input')
  }

  return {
    ...headers,
    // Unique sequence header
    'CF-Sequence': uuidv4()
  }
}

export default getConfig

export { getConfig, ClientConfig }
