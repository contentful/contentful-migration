/**
 * Contentful Management API SDK. Allows you to create instances of a client
 * with access to the Contentful Content Management API.
 * @namespace contentfulManagement
 * @see ContentfulClientAPI
 */

import cloneDeep from 'lodash/cloneDeep'
import assign from 'lodash/assign'
import { createHttpClient, rateLimit } from 'contentful-sdk-core'
import version from '../version'
import createContentfulApi from './create-contentful-api'

/**
 * @typedef {ContentfulManagement} ContentfulManagement
 * @property {function(params: {accessToken: string, insecure?: boolean, host?: string, hostUpload?: string, agent?: Object, headers?: Object, concurrency?: number, delay?: number, maxRetries?: number, retryOnTooManyRequests?: boolean}): ClientAPI} createClient - Create a client instance, this is the entry point to the library
 *
 * @example
 * // require contentful-management
 * var contentfulManagement = require('contentful-management')
 * var client = contentfulManagement.createClient({
 * // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
 * accessToken: 'YOUR_ACCESS_TOKEN'
 * })
*/
export default function createClient (axios, params) {
  const defaultParameters = {
    rateLimit: 6,
    rateLimitPeriod: 1000,
    maxRetries: 5,
    retryOnTooManyRequests: true,
    defaultHostname: 'api.contentful.com',
    defaultHostnameUpload: 'upload.contentful.com'
  }
  const requiredHeaders = {
    'Content-Type': 'application/vnd.contentful.management.v1+json',
    'X-Contentful-User-Agent': 'contentful-management.js/' + version
  }
  params = assign(defaultParameters, cloneDeep(params))

  if (!params.accessToken) {
    throw new TypeError('Expected parameter accessToken')
  }

  params.headers = assign(params.headers || {}, requiredHeaders)

  const http = createHttpClient(axios, params)
  rateLimit(http, params.maxRetries)
  const api = createContentfulApi({
    http: http
  })

  return api
}
