/**
 * Api Key instances
 * @namespace ApiKey
 */

import cloneDeep from 'clone'
import { freezeSys, toPlainObject } from 'contentful-sdk-core'
import enhanceWithMethods from '../enhance-with-methods'
import {
  createUpdateEntity,
  createDeleteEntity
} from '../instance-actions'

/**
 * @memberof ApiKey
 * @typedef ApiKey
 * @prop {Meta.Sys} sys - System metadata
 * @prop {string} name
 * @prop {string} description
 * @prop {function(): Object} toPlainObject() - Returns this Api Key as a plain JS object
 */

function createApiKeyApi (http) {
  return {
    /**
     * Sends an update to the server with any changes made to the object's properties
     * @memberof ApiKey
     * @func update
     * @return {Promise<ApiKey>} Object returned from the server with updated changes.
     * @example
     * const contentful = require('contentful-management')
     *
     * const client = contentful.createClient({
     *   accessToken: '<content_management_api_key>'
     * })
     * client.getSpace('<space_id>')
     * .then((space) => space.getApiKey(<api-key-id>))
     * .then((apiKey) => {
     *  apiKey.name = 'New name'
     *  return apiKey.update()
     * })
     * .then(apiKey => console.log(apiKey.name))
     * .catch(console.error)
     */
    update: createUpdateEntity({
      http: http,
      entityPath: 'api_keys',
      wrapperMethod: wrapApiKey
    }),

    /**
     * Deletes this object on the server.
     * @memberof ApiKey
     * @func delete
     * @return {Promise} Promise for the deletion. It contains no data, but the Promise error case should be handled.
     * @example
     * const contentful = require('contentful-management')
     *
     * const client = contentful.createClient({
     *   accessToken: '<content_management_api_key>'
     * })
     * client.getSpace('<space_id>')
     * .then((space) => space.getApiKey(<api-key-id>))
     * .then((apiKey) => apiKey.delete())
     * .then(() => console.log('apikey deleted'))
     * .catch(console.error)
     */
    delete: createDeleteEntity({
      http: http,
      entityPath: 'api_keys'
    })
  }
}

/**
 * @private
 * @param {Object} http - HTTP client instance
 * @param {Object} data - Raw api key data
 * @return {ApiKey} Wrapped api key data
 */
export function wrapApiKey (http, data) {
  const apiKey = toPlainObject(cloneDeep(data))
  enhanceWithMethods(apiKey, createApiKeyApi(http))
  return freezeSys(apiKey)
}

/**
 * @private
 * @param {Object} http - HTTP client instance
 * @param {Object} data - Raw api key collection data
 * @return {ApiKeyCollection} Wrapped api key collection data
 */
export function wrapApiKeyCollection (http, data) {
  const apiKeys = toPlainObject(cloneDeep(data))
  apiKeys.items = apiKeys.items.map((entity) => wrapApiKey(http, entity))
  return freezeSys(apiKeys)
}
