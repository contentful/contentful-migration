/**
 * UI Extension instances
 * @namespace UiExtension
 */
import cloneDeep from 'lodash/cloneDeep'
import { freezeSys, toPlainObject } from 'contentful-sdk-core'
import enhanceWithMethods from '../enhance-with-methods'
import {
  createUpdateEntity,
  createDeleteEntity
} from '../instance-actions'

/**
 * @memberof UiExtension
 * @typedef UiExtension
 * @prop {Meta.Sys} sys - System metadata
 * @prop {object} extension - UI Extension config
 * @prop {string} extension.name - Extension name
 * @prop {array} extension.fieldTypes - Field types where an extension can be used
 * @prop {array} extension.src - URL where the root HTML document of the extension can be found
 * @prop {array} extension.srcdoc - String representation of the extension (e.g. inline HTML code)
 * @prop {boolean} extension.sidebar - Controls the location of the extension. If true it will be rendered on the sidebar instead of replacing the field's editing control
 * @prop {function(): Object} toPlainObject() - Returns this UI Extension as a plain JS object
 */

function createUiExtensionApi (http) {
  return {
    /**
     * Sends an update to the server with any changes made to the object's properties
     * @memberof UiExtension
     * @func update
     * @return {Promise<UiExtension>} Object returned from the server with updated changes.
     * @example
     * const contentful = require('contentful-management')
     *
     * const client = contentful.createClient({
     *   accessToken: '<content_management_api_key>'
     * })
     *
     * client.getSpace('<space_id>')
     * .then((space) => space.getUiExtension('<ui_extension_id>'))
     * .then((uiExtension) => {
     *   uiExtension.extension.name = 'New UI Extension name'
     *   return uiExtension.update()
     * })
     * .then((uiExtension) => console.log(`UI Extension ${uiExtension.sys.id} updated.`))
     * .catch(console.error)
     */
    update: createUpdateEntity({
      http: http,
      entityPath: 'extensions',
      wrapperMethod: wrapUiExtension
    }),

    /**
     * Deletes this object on the server.
     * @memberof UiExtension
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
     * .then((space) => space.getUiExtension('<ui_extension_id>'))
     * .then((uiExtension) => uiExtension.delete())
     * .then(() => console.log(`UI Extension deleted.`))
     * .catch(console.error)
     */
    delete: createDeleteEntity({
      http: http,
      entityPath: 'extensions'
    })
  }
}

/**
 * @private
 * @param {Object} http - HTTP client instance
 * @param {Object} data - Raw UI Extension data
 * @return {UiExtension} Wrapped UI Extension data
 */
export function wrapUiExtension (http, data) {
  const uiExtension = toPlainObject(cloneDeep(data))
  enhanceWithMethods(uiExtension, createUiExtensionApi(http))
  return freezeSys(uiExtension)
}

/**
 * @private
 * @param {Object} http - HTTP client instance
 * @param {Object} data - Raw UI Extension collection data
 * @return {UiExtensionCollection} Wrapped UI Extension collection data
 */
export function wrapUiExtensionCollection (http, data) {
  const uiExtensions = toPlainObject(cloneDeep(data))
  uiExtensions.items = uiExtensions.items.map((entity) => wrapUiExtension(http, entity))
  return freezeSys(uiExtensions)
}
