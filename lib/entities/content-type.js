/**
 * Content Type instances
 * @namespace ContentType
 */
import {cloneDeep} from 'lodash/lang'
import freezeSys from 'contentful-sdk-core/freeze-sys'
import enhanceWithMethods from '../enhance-with-methods'
import mixinToPlainObject from 'contentful-sdk-core/mixins/to-plain-object'
import {
  createUpdateEntity,
  createDeleteEntity,
  createPublishEntity,
  createUnpublishEntity
} from '../instance-actions'

/**
 * @memberof ContentType
 * @typedef ContentType
 * @prop {Entities.Sys} sys - System metadata
 * @prop {string} name
 * @prop {string} description
 * @prop {string} displayField - Field used as the main display field for Entries
 * @prop {string} Array<Field> - All the fields contained in this Content Type
 * @prop {function(): Object} toPlainObject() - Returns this Content Type as a plain JS object
 */

function createContentTypeApi (http) {
  return {

    /**
     * Sends an update to the server with any changes made to the object's properties
     * @memberof ContentType
     * @func update
     * @return {Promise<ContentType>} Object returned from the server with updated changes.
     * @example
     * contentType.name = 'New name'
     * contentType.update()
     * .then(contentType => console.log(contentType.name))
     */
    update: createUpdateEntity({
      http: http,
      entityPath: 'content_types',
      wrapperMethod: wrapContentType
    }),

    /**
     * Deletes this object on the server.
     * @memberof ContentType
     * @func delete
     * @return {Promise} Promise for the deletion. It contains no data, but the Promise error case should be handled.
     * @example
     * contentType.delete()
     * .catch(err => console.log(err))
     */
    delete: createDeleteEntity({
      http: http,
      entityPath: 'content_types'
    }),

    /**
     * Publishes the object
     * @memberof ContentType
     * @func publish
     * @return {Promise<ContentType>} Object returned from the server with updated metadata.
     * @example
     * contentType.publish()
     * .then(contentType => console.log(contentType.sys.publishedVersion))
     */
    publish: createPublishEntity({
      http: http,
      entityPath: 'content_types',
      wrapperMethod: wrapContentType
    }),

    /**
     * Unpublishes the object
     * @memberof ContentType
     * @func unpublish
     * @return {Promise<ContentType>} Object returned from the server with updated metadata.
     * @example
     * contentType.unpublish()
     * .then(contentType => console.log(contentType.sys))
     */
    unpublish: createUnpublishEntity({
      http: http,
      entityPath: 'content_types',
      wrapperMethod: wrapContentType
    })
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
