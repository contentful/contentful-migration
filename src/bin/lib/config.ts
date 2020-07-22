import * as path from 'path'
import * as os from 'os'

// TODO: I'm ugly, maybe change me
const homedir = process.env.NODE_ENV === 'test' ? '/tmp' : os.homedir()
const configPath = path.resolve(homedir, '.contentfulrc.json')

interface ClientConfig {
  accessToken?: string
  spaceId?: string
  environmentId?: string,
  proxy?: string,
  rawProxy?: boolean
  requestBatchSize?: number
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

function getArgvConfig ({ spaceId, environmentId = 'master', accessToken, proxy, rawProxy, requestBatchSize }): ClientConfig {
  const config = {
    spaceId,
    environmentId,
    accessToken,
    proxy,
    rawProxy,
    requestBatchSize
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

  return Object.assign(fileConfig, envConfig, argvConfig)
}

export default getConfig

export {
  getConfig,
  ClientConfig
}
