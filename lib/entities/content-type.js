import {cloneDeep} from 'lodash/lang'
import freezeSys from 'contentful-sdk-core/freeze-sys'
import enhanceWithMethods from '../enhance-with-methods'
import mixinToPlainObject from 'contentful-sdk-core/mixins/to-plain-object'

// Methods to add:
// - update
// - publish
// - unpublish
// - delete

/**
 * @memberof Entities
 * @typedef ContentType
 * @prop {Entities.Sys} sys - System metadata
 * @prop {string} name
 * @prop {string} description
 * @prop {string} displayField - Field used as the main display field for Entries
 * @prop {string} Array<Field> - All the fields contained in this Content Type
 * @prop {function(): Object} toPlainObject() - Returns this Content Type as a plain JS object
 */

function createContentTypeApi (http) {
  function updateContentType () {
  }

  function publishContentType () {

  }

  function unpublishContentType () {

  }

  function deleteContentType () {

  }

  return {
    update: updateContentType,
    publish: publishContentType,
    unpublish: unpublishContentType,
    delete: deleteContentType
  }
}

/**
 * @private
 * @param {Object} http - HTTP client instance
 * @param {Object} data - Raw content type data
 * @return {ContentType} Wrapped content type data
 */
export function wrapContentType (http, data) {
  const contentType = mixinToPlainObject(cloneDeep(data))
  enhanceWithMethods(contentType, createContentTypeApi(http))
  return freezeSys(contentType)
}

/**
 * @memberof Entities
 * @typedef ContentTypeCollection
 * @prop {number} total
 * @prop {number} skip
 * @prop {number} limit
 * @prop {Array<Entities.ContentType>} items
 * @prop {function(): Object} toPlainObject() - Returns this Content Type collection as a plain JS object
 */

/**
 * @private
 * @param {Object} http - HTTP client instance
 * @param {Object} data - Raw content type collection data
 * @return {ContentTypeCollection} Wrapped content type collection data
 */
export function wrapContentTypeCollection (http, data) {
  const contentTypes = mixinToPlainObject(cloneDeep(data))
  contentTypes.items = contentTypes.items.map((entity) => wrapContentType(http, entity))
  return freezeSys(contentTypes)
}
