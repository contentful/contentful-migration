/**
 * Upload instances
 * @namespace Upload
 */
import cloneDeep from 'lodash/cloneDeep'
import { freezeSys, toPlainObject } from 'contentful-sdk-core'
import enhanceWithMethods from '../enhance-with-methods'
import {
  createDeleteEntity
} from '../instance-actions'

/**
 * @memberof Upload
 * @typedef {Upload} Upload
 * @prop {Object} sys - Standard system metadata with additional asset specific properties
 * @prop {string} sys.id - The id of the upload
 * @prop {function(): Promise} delete - Deletes an upload
 * @prop {function(): Object} toPlainObject - Returns this Asset as a plain JS object
 */

function createUploadApi (http) {
  return {
    /**
     * Deletes this object on the server.
     * @memberof Upload
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
     * .then((space) => space.getUpload('<upload_id>'))
     * .then((upload) => upload.delete())
     * .then((upload) => console.log(`upload ${upload.sys.id} updated.`))
     * .catch(console.error)
     */
    delete: createDeleteEntity({
      http: http,
      entityPath: 'uploads'
    })
  }
}

/**
 * @private
 * @param {Object} http - HTTP client instance
 * @param {Object} data - Raw upload data
 * @return {Upload} Wrapped upload data
 */
export function wrapUpload (http, data) {
  const upload = toPlainObject(cloneDeep(data))
  enhanceWithMethods(upload, createUploadApi(http))
  return freezeSys(upload)
}
