/**
 * Contentful Management API SDK. Allows you to create instances of a client
 * with access to the Contentful Content Management API.
 * @namespace contentfulManagement
 * @see ContentfulClientAPI
 */
import axios from 'axios'
import cloneDeep from 'lodash/cloneDeep'
import assign from 'lodash/assign'
import {createHttpClient, getUserAgentHeader} from 'contentful-sdk-core'
import createContentfulApi from './create-contentful-api'
import version from '../version'
/**
 * @typedef {ContentfulManagement} ContentfulManagement
 * @property {function(params: {accessToken: string, insecure?: boolean, host?: string, hostUpload?: string, httpAgent?: Object, httpsAgent?: Object, headers?: Object, proxy?:Object, application?: string, integration?: string}): ClientAPI} createClient - Create a client instance, this is the entry point to the library
 *
 * @example
 * // require contentful-management
 * var contentfulManagement = require('contentful-management')
 * var client = contentfulManagement.createClient({
 * // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
 * accessToken: 'YOUR_ACCESS_TOKEN'
 * })
*/
export function createClient (params) {
  const defaultParameters = {
    defaultHostname: 'api.contentful.com',
    defaultHostnameUpload: 'upload.contentful.com'
  }
  const userAgentHeader = getUserAgentHeader(`contentful-management.js/${version}`,
    params.application,
    params.integration
  )

  const requiredHeaders = {
    'Content-Type': 'application/vnd.contentful.management.v1+json',
    'X-Contentful-User-Agent': userAgentHeader
  }

  params = assign(defaultParameters, cloneDeep(params))

  if (!params.accessToken) {
    throw new TypeError('Expected parameter accessToken')
  }

  params.headers = assign(params.headers || {}, requiredHeaders)

  const http = createHttpClient(axios, params)
  const api = createContentfulApi({
    http: http
  })

  return api
}
