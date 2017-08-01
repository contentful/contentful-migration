/**
 * Editor Interface instances
 * @namespace EditorInterface
 */

import cloneDeep from 'lodash/cloneDeep'
import { freezeSys, toPlainObject } from 'contentful-sdk-core'
import enhanceWithMethods from '../enhance-with-methods'
import errorHandler from '../error-handler'

/**
 * @memberof EditorInterface
 * @typedef Control
 * @prop {srting} fieldId - the id of the customized field
 * @prop {string} widgetId - customization associated to the field
 */

/**
 * @memberof EditorInterface
 * @typedef EditorInterface
 * @prop {Meta.Sys} sys - System metadata
 * @prop {EditorInterface.Control[]} controls - array of fields and it's associated widgetId
 */

function createEditorInterfaceApi (http) {
  return {
    /**
     * Sends an update to the server with any changes made to the object's properties
     * @memberof EditorInterface
     * @func update
     * @return {Promise<EditorInterface>} Object returned from the server with updated changes.
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
     * .then((editorInterface) => {
     *  editorInterface.controls[0] = { "fieldId": "title", "widgetId": "singleLine"}
     *  return editorInterface.update()
     * })
     * .catch(console.error)
     */
    update: function () {
      const raw = this.toPlainObject()
      const data = cloneDeep(raw)
      delete data.sys
      return http.put(`content_types/${this.sys.contentType.sys.id}/editor_interface`,
        data,
        {
          headers: {'X-Contentful-Version': this.sys.version}
        }
      )
        .then((response) => wrapEditorInterface(http, response.data), errorHandler)
    },
    /**
     * gets a control for a specific field
     * @memberof EditorInterface
     * @func getControlForField
     * @return {?Object} control object for specific field.
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
     * .then((editorInterface) => {
     *  control = editorInterface.getControlForField('<field-id>')
     *  console.log(control)
     * })
     * .catch(console.error)
     */
    getControlForField: function (fieldId) {
      const result = this.controls.filter((control) => {
        return control.fieldId === fieldId
      })
      return (result && result.length > 0) ? result[0] : null
    }
  }
}

/**
* @private
* @param {Object} http - HTTP client instance
* @param {Object} data - Raw editor-interface data
* @return {EditorInterface} Wrapped editor-interface data
*/
export function wrapEditorInterface (http, data) {
  const editorInterface = toPlainObject(cloneDeep(data))
  enhanceWithMethods(editorInterface, createEditorInterfaceApi(http))
  return freezeSys(editorInterface)
}
