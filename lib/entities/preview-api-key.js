/**
 * Preview Api Key instances
 * @namespace PreviewApiKey
 */

import cloneDeep from 'lodash/cloneDeep'
import { freezeSys, toPlainObject } from 'contentful-sdk-core'
import enhanceWithMethods from '../enhance-with-methods'

/**
 * @memberof PreviewApiKey
 * @typedef PreviewApiKey
 * @prop {Meta.Sys} sys - System metadata
 * @prop {string} name
 * @prop {string} description
 * @prop {function(): Object} toPlainObject() - Returns this Preview Api Key as a plain JS object
 */

function createPreviewApiKeyApi (http) {
  return {}
}

/**
 * @private
 * @param {Object} http - HTTP client instance
 * @param {Object} data - Raw api key data
 * @return {PreviewApiKey} Wrapped preview api key data
 */
export function wrapPreviewApiKey (http, data) {
  const previewApiKey = toPlainObject(cloneDeep(data))
  enhanceWithMethods(previewApiKey, createPreviewApiKeyApi(http))
  return freezeSys(previewApiKey)
}

/**
 * @private
 * @param {Object} http - HTTP client instance
 * @param {Object} data - Raw api key collection data
 * @return {PreviewApiKeyCollection} Wrapped api key collection data
 */
export function wrapPreviewApiKeyCollection (http, data) {
  const previewApiKeys = toPlainObject(cloneDeep(data))
  previewApiKeys.items = previewApiKeys.items.map((entity) => wrapPreviewApiKey(http, entity))
  return freezeSys(previewApiKeys)
}
