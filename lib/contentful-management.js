/**
 * Contentful Management API SDK. Allows you to create instances of a client
 * with access to the Contentful Content Management API.
 * @namespace contentfulManagement
 * @see ContentfulClientAPI
 */

import {assign} from 'lodash/object'
import {cloneDeep} from 'lodash/lang'
import createHttpClient from 'contentful-sdk-core/create-http-client'
import wrapHttpClient from './wrap-http-client'
import version from '../version'
import createContentfulApi from './create-contentful-api'

/**
 * Create a client instance
 * @func
 * @name createClient
 * @memberof contentfulManagement
 * @param {Object} params - Client initialization parameters
 * @prop {string} params.accessToken - Contentful CDA Access Token
 * @prop {boolean=} params.insecure - Requests will be made over http instead of the default https (default: true)
 * @prop {string=} params.host - API host (default: cda.contentful.com)
 * @prop {Object=} params.agent - Optional Node.js HTTP agent for proxying (see <a href="https://nodejs.org/api/http.html#http_class_http_agent">Node.js docs</a> and <a href="https://www.npmjs.com/package/https-proxy-agent">https-proxy-agent</a>)
 * @prop {Object=} params.headers - Optional additional headers
 * @returns {ContentfulAPIClient.ClientAPI}
 * @example
 * const client = contentfulManagement.createClient({
 *  accessToken: 'myAccessToken'
 * })
 */
export default function createClient (axios, params) {
  params = cloneDeep(params)

  if (!params.accessToken) {
    throw new TypeError('Expected parameter accessToken')
  }

  params.defaultHostname = 'api.contentful.com'
  params.headers = assign(params.headers, {
    'Content-Type': 'application/vnd.contentful.management.v1+json',
    'X-Contentful-User-Agent': 'contentful-management.js/' + version
  })
  params.rateLimit = 6
  params.rateLimitPeriod = 1000

  const http = wrapHttpClient(createHttpClient(axios, params), params.rateLimit, params.rateLimitPeriod)
  const api = createContentfulApi({
    http: http
  })

  return api
}
