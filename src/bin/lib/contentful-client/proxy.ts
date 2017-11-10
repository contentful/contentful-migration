import * as HttpsProxyAgent from 'https-proxy-agent'
import * as _ from 'lodash'
import * as url from 'url'
import { RequestOptions } from 'http'

type ProxyConfig = RequestOptions | {
  isHttps: boolean
  // auth: ProxyAuthConfig
}

function parseAuth (authString: string): { username: string, password: string } {
  // authString may be a falsy value like `null`
  const [username, password] = (authString || '').split(':')
  return { username, password }
}

function proxyStringToObject (proxyString: string): ProxyConfig {
  if (!proxyString.startsWith('http')) {
    return proxyStringToObject(`http://${proxyString}`)
  }

  const {
    hostname: host,
    port: portString,
    auth: authString,
    protocol
  } = url.parse(proxyString)

  const auth = parseAuth(authString)
  const port = _.toInteger(portString)
  const isHttps = protocol === 'https:'

  if (!auth.username) {
    return { host, port, isHttps }
  }

  return {
    host,
    port,
    auth,
    isHttps
  }
}

// TODO: should use @types/node ProcessEnv interface
function loadProxyFromEnv (env: { [key: string]: any }): ProxyConfig {
  const proxyString = env['https_proxy'] ||
    env['HTTPS_PROXY'] ||
    env['http_proxy'] ||
    env['HTTP_PROXY'] ||
    env['CONTENTFUL_PROXY']

  // Delete all potential proxy keys `axios` might use
  delete env['http_proxy']
  delete env['HTTP_PROXY']
  delete env['https_proxy']
  delete env['HTTPS_PROXY']

  if (!proxyString) {
    return
  }

  env['CONTENTFUL_PROXY'] = proxyString

  return proxyStringToObject(proxyString)
}

function agentFromProxy (proxy): { httpsAgent?: HttpsProxyAgent } {
  if (!proxy) {
    return {}
  }

  const { host, port, auth: { username, password } } = proxy
  const auth = `${username}:${password}`
  const agent = new HttpsProxyAgent({ host, port, auth })
  return { httpsAgent: agent }
}

export {
  loadProxyFromEnv,
  agentFromProxy
}
