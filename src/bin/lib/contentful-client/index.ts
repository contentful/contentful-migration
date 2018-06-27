import { loadProxyFromEnv, agentFromProxy } from './proxy'
// One cannot rewire const's
// eslint-disable-next-line
import { createClient as _createClient } from 'contentful-management'
let createClient = _createClient

function createManagementClient (params) {
  const proxyConfig = loadProxyFromEnv(process.env)
  const { httpsAgent } = agentFromProxy(proxyConfig)

  const config = Object.assign({ httpsAgent }, params)

  if (!config.application) {
    throw new Error('Please specify the application name that uses this client instance')
  }

  return createClient(config)
}

export {
  createManagementClient
}
