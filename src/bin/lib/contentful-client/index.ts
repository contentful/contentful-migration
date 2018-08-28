import { loadProxyFromEnv, agentFromProxy } from './proxy'
// One cannot rewire const's
// eslint-disable-next-line
import { createClient as _createClient } from 'contentful-management'
let createClient = _createClient

function createManagementClient (params) {
  if (!params.application) {
    throw new Error('Please specify the application name that uses this client instance')
  }

  params.proxy = params.proxy || loadProxyFromEnv(process.env)

  if (!params.rawProxy) {
    const { httpsAgent } = agentFromProxy(params.proxy)
    params.httpsAgent = httpsAgent
    delete params.proxy
  }

  return createClient(params)
}

export {
  createManagementClient
}
