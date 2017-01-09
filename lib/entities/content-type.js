import cloneDeep from 'lodash/cloneDeep'
import freezeSys from 'contentful-sdk-core/freeze-sys'
import enhanceWithMethods from '../enhance-with-methods'
import mixinToPlainObject from 'contentful-sdk-core/mixins/to-plain-object'
import {
  createUpdateEntity,
  createDeleteEntity,
  createPublishEntity,
  createUnpublishEntity,
  createPublishedChecker,
  createUpdatedChecker,
  createDraftChecker
} from '../instance-actions'
import {wrapEditorInterface} from './editor-interface'
import errorHandler from '../error-handler'

/**
 * @typedef {ContentType} ContentType
 * @property {Object} sys - System metadata
 * @property {string} name - name of the contentType
 * @property {string} description - description of the contentType
 * @property {string} displayField - Field used as the main display field for Entries
 * @property {Array<Field>} fields - All the fields contained in this Content Type
 * @property {function(): Object} toPlainObject() - Returns this Content Type as a plain JS object
 * @example
 * // require contentful-management
 * var contentfulManagement = require('contentful-management')
 * var client = contentfulManagement.createClient({
 * // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
 * accessToken: 'YOUR_ACCESS_TOKEN'
 * }) 
 * 
 * //=======================================================================================================
 * // You can get an Entry object by
 * //
 * // 1. Creating one
 * //
 * // var contentType = await space.createContentType({name: 'Post', fields: []})
 * //
 * // OR
 * //
 * // 2. Get an existing one
 * //
 * // var contentType = await space.getContentType('contentTypeId')
 * //=======================================================================================================
 * 
 * // Example updating a ContentType
 * contentType.name = 'New name'
 * contentType.update()
 * .then(contentType => console.log(contentType.name))
 * 
 * //Example deleting a content type
 * contentType.delete()
 * .catch(err => console.log(err))
 */

/**
 * @typedef {ContentTypeCollection} ContentTypeCollection
 * @property {number} total - Total amount of records in the server
 * @property {number} skip - A starting point of the collection
 * @property {number} limit - Amount of records in collection
 * @property {ContentType[]} items - An array of contentTypes
 * @property {function(): Object} toPlainObject - Returns this Content Type collection as a plain JS object
 * @example
 * 
 * // require contentful-management
 * var contentfulManagement = require('contentful-management')
 * var client = contentfulManagement.createClient({
 * // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
 * accessToken: 'YOUR_ACCESS_TOKEN'
 * }) 
 * 
 * var space = await client.getSpace('SPACE_ID')
 * //Example getting contentTypes
 * space.getContentTypes()
 *  .then(contentTypes => console.log(contentTypes.items))
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
    }),

    /**
     * Gets the editor interface for the object <br />
     * <strong>Important note</strong>: The editor interface only represent a published contentType.<br />
     * To get the most recent representation of the contentType make sure to publish it first
     * @memberof ContentType
     * @func getEditorInterface
     * @return {Promise<EditorInterface.EditorInterface>} Object returned from the server with the current editor interface.
     * @example
     * contentType.getEditorInterface()
     * .then(editorInterface => console.log(editorInterface.controls))
     */
    getEditorInterface: function () {
      return http.get('content_types/' + this.sys.id + '/editor_interface')
      .then((response) => wrapEditorInterface(http, response.data), errorHandler)
    },
    /**
     * Checks if the contentType is published. A published contentType might have unpublished changes (@see {ContentType.isUpdated})
     * @memberof ContentType
     * @func isPublished
     * @return {boolean}
     */
    isPublished: createPublishedChecker(),

    /**
     * Checks if the contentType is updated. This means the contentType was previously published but has unpublished changes.
     * @memberof ContentType
     * @func isUpdated
     * @return {boolean}
     */
    isUpdated: createUpdatedChecker(),

    /**
     * Checks if the contentType is in draft mode. This means it is not published.
     * @memberof ContentType
     * @func isDraft
     * @return {boolean}
     */
    isDraft: createDraftChecker()
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
