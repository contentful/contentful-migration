/**
 * Contentful Management API SDK. Allows you to create instances of a client
 * with access to the Contentful Content Management API.
 * @namespace contentfulManagement
 * @see ContentfulClientAPI
 */
import axios from 'axios'
import cloneDeep from 'lodash/cloneDeep'
import {createHttpClient, getUserAgentHeader} from 'contentful-sdk-core'
import createContentfulApi from './create-contentful-api'

/**
 * Create a client instance
 * @func
 * @name createClient
 * @memberof contentfulManagement
 * @param {object} params - Client initialization parameters
 * @prop {string=} params.accessToken - Contentful CDA Access Token
 * @prop {boolean=?} params.insecure - Requests will be made over http instead of the default https (default: false)
 * @prop {boolean=?} params.retryOnError - If we should retry on errors and 429 rate limit exceptions (default: true)
 * @prop {string=?} params.host - API host (default: cda.contentful.com)
 * @prop {string=?} params.hostUpload - direct file upload host (default : upload.contentful.com)
 * @prop {Object=?} params.httpAgent - Optional Node.js HTTP agent for proxying (see <a href="https://nodejs.org/api/http.html#http_class_http_agent">Node.js docs</a> and <a href="https://www.npmjs.com/package/https-proxy-agent">https-proxy-agent</a>)
 * @prop {Object=?} params.httpsAgent - Optional Node.js HTTP agent for proxying (see <a href="https://nodejs.org/api/http.html#http_class_http_agent">Node.js docs</a> and <a href="https://www.npmjs.com/package/https-proxy-agent">https-proxy-agent</a>)
 * @prop {Object=?} params.proxy - Optional Axios proxy (see <a href="https://github.com/mzabriskie/axios#request-config"> axios docs </a>)
 * @prop {object=?} params.headers - Optional additional headers
 * @prop {string=?} params.application - Application name and version e.g myApp/version
 * @prop {string=?} params.integration - Integration name and version e.g react/version
 * @returns {ContentfulClientAPI.ClientAPI}
 * @example
 * const client = contentfulManagement.createClient({
 *  accessToken: 'myAccessToken'
 * })
 */
export function createClient (params) {
  const defaultParameters = {
    defaultHostname: 'api.contentful.com',
    defaultHostnameUpload: 'upload.contentful.com'
  }
  const userAgentHeader = getUserAgentHeader('contentful-management.js/__VERSION__',
    params.application,
    params.integration
  )

  const requiredHeaders = {
    'Content-Type': 'application/vnd.contentful.management.v1+json',
    'X-Contentful-User-Agent': userAgentHeader
  }

  params = {
    ...defaultParameters,
    ...cloneDeep(params)
  }

  if (!params.accessToken) {
    throw new TypeError('Expected parameter accessToken')
  }

  params.headers = {
    ...params.headers,
    ...requiredHeaders
  }

  const http = createHttpClient(axios, params)
  const api = createContentfulApi({
    http: http
  })

  return api
}
