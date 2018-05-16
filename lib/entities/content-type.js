/**
 * Content Type instances
 * @namespace ContentType
 */

import cloneDeep from 'lodash/cloneDeep'
import { freezeSys, toPlainObject } from 'contentful-sdk-core'
import enhanceWithMethods from '../enhance-with-methods'
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
import {wrapSnapshot, wrapSnapshotCollection} from './snapshot'
/**
 * @memberof ContentType
 * @typedef ContentType
 * @prop {Meta.Sys} sys - System metadata
 * @prop {string} name
 * @prop {string} description
 * @prop {string} displayField - Field used as the main display field for Entries
 * @prop {Array<Field>} fields - All the fields contained in this Content Type
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
     * const contentful = require('contentful-management')
     *
     * const client = contentful.createClient({
     *   accessToken: '<content_management_api_key>'
     * })
     *
     * client.getSpace('<space_id>')
     * .then((space) => space.getContentType('<contentType_id>'))
     * .then((contentType) => {
     *  contentType.name = 'New name'
     *  return contentType.update()
     * })
     * .then(contentType => console.log(contentType))
     * .catch(console.error)
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
     * const contentful = require('contentful-management')
     *
     * const client = contentful.createClient({
     *   accessToken: '<content_management_api_key>'
     * })
     *
     * client.getSpace('<space_id>')
     * .then((space) => space.getContentType('<contentType_id>'))
     * .then((contentType) => contentType.delete())
     * .then(() => console.log('contentType deleted'))
     * .catch(console.error)
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
     * const contentful = require('contentful-management')
     *
     * const client = contentful.createClient({
     *   accessToken: '<content_management_api_key>'
     * })
     *
     * client.getSpace('<space_id>')
     * .then((space) => space.getContentType('<contentType_id>'))
     * .then((contentType) => contentType.publish())
     * .then((contentType) => console.log(`${contentType.sys.id} is published`))
     * .catch(console.error)
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
     * const contentful = require('contentful-management')
     *
     * const client = contentful.createClient({
     *   accessToken: '<content_management_api_key>'
     * })
     *
     * client.getSpace('<space_id>')
     * .then((space) => space.getContentType('<contentType_id>'))
     * .then((contentType) => contentType.unpublish())
     * .then((contentType) => console.log(`${contentType.sys.id} is unpublished`))
     * .catch(console.error)
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
     * const contentful = require('contentful-management')
     *
     * const client = contentful.createClient({
     *   accessToken: '<content_management_api_key>'
     * })
     *
     * client.getSpace('<space_id>')
     * .then((space) => space.getContentType('<contentType_id>'))
     * .then((contentType) => contentType.getEditorInterface())
     * .then((editorInterface) => console.log(editorInterface.contorls))
     * .catch(console.error)
     */
    getEditorInterface: function () {
      return http.get('content_types/' + this.sys.id + '/editor_interface')
        .then((response) => wrapEditorInterface(http, response.data), errorHandler)
    },

    /**
     * Gets all snapshots of a contentType
     * @memberof ContentType
     * @func getSnapshots
     * @return Promise<Snapshot>
     * @example
     * const contentful = require('contentful-management')
     *
     * const client = contentful.createClient({
     *   accessToken: '<content_management_api_key>'
     * })
     *
     * client.getSpace('<space_id>')
     * .then((space) => space.getContentType('<contentType_id>'))
     * .then((entry) => entry.getSnapshots())
     * .then((snapshots) => console.log(snapshots.items))
     * .catch(console.error)
     */
    getSnapshots: function () {
      return http.get(`content_types/${this.sys.id}/snapshots`)
        .then((response) => wrapSnapshotCollection(http, response.data), errorHandler)
    },

    /**
     * Gets a snapshot of a contentType
     * @memberof ContentType
     * @func getSnapshot
     * @param {string} snapshotId - Id of the snapshot
     * @return Promise<Snapshot>
     * @example
     * const contentful = require('contentful-management')
     *
     * const client = contentful.createClient({
     *   accessToken: '<content_management_api_key>'
     * })
     *
     * client.getSpace('<space_id>')
     * .then((space) => space.getContentType('<content_type-id>'))
     * .then((entry) => entry.getSnapshot('<snapshot-id>'))
     * .then((snapshot) => console.log(snapshot))
     * .catch(console.error)
     */
    getSnapshot: function (snapshotId) {
      return http.get(`content_types/${this.sys.id}/snapshots/${snapshotId}`)
        .then((response) => wrapSnapshot(http, response.data), errorHandler)
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
  const contentType = toPlainObject(cloneDeep(data))
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
  const contentTypes = toPlainObject(cloneDeep(data))
  contentTypes.items = contentTypes.items.map((entity) => wrapContentType(http, entity))
  return freezeSys(contentTypes)
}
