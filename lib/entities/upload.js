import cloneDeep from 'lodash/cloneDeep'
import { freezeSys, toPlainObject } from 'contentful-sdk-core'
import enhanceWithMethods from '../enhance-with-methods'
import {
  createDeleteEntity
} from '../instance-actions'

/**
 * @typedef {Upload} Upload
 * @property {Object} sys - Standard system metadata with additional asset specific properties
 * @property {string} sys.id - The id of the upload
 * @property {function(): Promise} delete - Deletes an upload
 * @property {function(): Object} toPlainObject - Returns this Asset as a plain JS object
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
 * const uploadStream = createReadStream('path/to/filename_english.jpg')
 * space.createUpload(uploadStream)
 * .then((upload) => {
 *   // Delete upload again
 *   return upload.delete()
 * })
 * .catch(err => console.log(err))
 */

function createUploadApi (http) {
  return {
    /**
     * Deletes this object on the server.
     * @memberof Upload
     * @func delete
     * @return {Promise} Promise for the deletion. It contains no data, but the Promise error case should be handled.
     * @example
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
 * @return {Asset} Wrapped upload data
 */
export function wrapUpload (http, data) {
  const upload = toPlainObject(cloneDeep(data))
  enhanceWithMethods(upload, createUploadApi(http))
  return freezeSys(upload)
}
