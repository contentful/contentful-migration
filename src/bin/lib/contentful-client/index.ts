import { loadProxyFromEnv, agentFromProxy, proxyStringToObject } from './proxy'
// One cannot rewire const's
// eslint-disable-next-line
import { createClient as _createClient } from 'contentful-management'
// for rewiring during tests
let createClient = _createClient

function createManagementClient (params) {
  if (!params.application) {
    throw new Error('Please specify the application name that uses this client instance')
  }

  const proxyFromParams = params.proxy && proxyStringToObject(params.proxy)
  if (proxyFromParams) {
    params.proxy = proxyFromParams
  } else {
    const proxyFromEnv = loadProxyFromEnv(process.env)
    if (proxyFromEnv) {
      params.proxy = proxyFromEnv
    }
  }

  if (!params.rawProxy) {
    const { httpsAgent } = agentFromProxy(params.proxy)
    params.httpsAgent = httpsAgent
    delete params.proxy
  }

  return createClient(params, { type: 'plain' })
}

export {
  createManagementClient
}
