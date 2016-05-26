/**
 * Api Key instances
 * @namespace ApiKey
 */
import cloneDeep from 'lodash/cloneDeep'
import freezeSys from 'contentful-sdk-core/freeze-sys'
import enhanceWithMethods from '../enhance-with-methods'
import mixinToPlainObject from 'contentful-sdk-core/mixins/to-plain-object'
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
     * apiKey.name = 'New name'
     * apiKey.update()
     * .then(apiKey => console.log(apiKey.name))
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
     * apiKey.delete()
     * .catch(err => console.log(err))
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
  const apiKey = mixinToPlainObject(cloneDeep(data))
  enhanceWithMethods(apiKey, createApiKeyApi(http))
  return freezeSys(apiKey)
}

/**
 * @memberof ApiKey
 * @typedef ApiKeyCollection
 * @prop {number} total
 * @prop {number} skip
 * @prop {number} limit
 * @prop {Array<ApiKey.ApiKey>} items
 * @prop {function(): Object} toPlainObject() - Returns this Api Key collection as a plain JS object
 */

/**
 * @private
 * @param {Object} http - HTTP client instance
 * @param {Object} data - Raw api key collection data
 * @return {ApiKeyCollection} Wrapped api key collection data
 */
export function wrapApiKeyCollection (http, data) {
  const apiKeys = mixinToPlainObject(cloneDeep(data))
  apiKeys.items = apiKeys.items.map((entity) => wrapApiKey(http, entity))
  return freezeSys(apiKeys)
}
