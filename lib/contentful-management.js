/**
 * Contentful Management API SDK. Allows you to create instances of a client
 * with access to the Contentful Content Management API.
 * @namespace contentfulManagement
 * @see ContentfulClientAPI
 */

import defaults from 'lodash/defaults'
import assign from 'lodash/assign'
import cloneDeep from 'lodash/cloneDeep'
import createHttpClient from 'contentful-sdk-core/create-http-client'
import wrapHttpClient from 'contentful-sdk-core/wrap-http-client'
import version from '../version'
import createContentfulApi from './create-contentful-api'

/**
 * Create a client instance
 * @func
 * @name createClient
 * @memberof contentfulManagement
 * @param {object} params - Client initialization parameters
 * @prop {string} params.accessToken - Contentful CDA Access Token
 * @prop {boolean=} params.insecure - Requests will be made over http instead of the default https (default: true)
 * @prop {string=} params.host - API host (default: cda.contentful.com)
 * @prop {object=} params.agent - Optional Node.js HTTP agent for proxying (see <a href="https://nodejs.org/api/http.html#http_class_http_agent">Node.js docs</a> and <a href="https://www.npmjs.com/package/https-proxy-agent">https-proxy-agent</a>)
 * @prop {object=} params.headers - Optional additional headers
 * @prop {number=} params.concurrency - Number of allowed concurrent requests. Changing this value is not recommended. (default: 6)
 * @prop {number=} params.delay - Delay in milliseconds for waiting after hitting the allowed number of concurrent requests. Changing this value is not recommended. (default: 1000)
 * @prop {number=} params.maxRetries - Maximum number of retries when a 429 is received (default: 5)
 * @prop {boolean=} params.retryOnTooManyRequests - If we should retry on 429s (default: true)
 * @returns {ContentfulClientAPI.ClientAPI}
 * @example
 * const client = contentfulManagement.createClient({
 *  accessToken: 'myAccessToken'
 * })
 */
export default function createClient (axios, params) {
  params = defaults(cloneDeep(params), {
    rateLimit: 6,
    rateLimitPeriod: 1000,
    maxRetries: 5,
    retryOnTooManyRequests: true
  })

  if (!params.accessToken) {
    throw new TypeError('Expected parameter accessToken')
  }

  params.defaultHostname = 'api.contentful.com'
  params.headers = assign(params.headers, {
    'Content-Type': 'application/vnd.contentful.management.v1+json',
    'X-Contentful-User-Agent': 'contentful-management.js/' + version
  })

  const http = wrapHttpClient(createHttpClient(axios, params), {
    concurrency: params.rateLimit,
    delay: params.rateLimitPeriod,
    maxRetries: params.maxRetries,
    retryOnTooManyRequests: params.retryOnTooManyRequests
  })
  const api = createContentfulApi({
    http: http
  })

  return api
}
