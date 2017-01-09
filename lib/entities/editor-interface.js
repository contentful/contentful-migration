import cloneDeep from 'lodash/cloneDeep'
import freezeSys from 'contentful-sdk-core/freeze-sys'
import enhanceWithMethods from '../enhance-with-methods'
import mixinToPlainObject from 'contentful-sdk-core/mixins/to-plain-object'
import omit from 'lodash/omit'
import errorHandler from '../error-handler'
/**
 * @typedef {Control} Control
 * @property {string} widgetId - defines how the field will look like e.g. singleLine
 * @property {string} fieldId - id of the field that this control is affecting
 * @property {Object} settings - settings for the widget
 */
/**
 * @typedef {EditorInterface} EditorInterface
 * @property {Object} sys - System metadata
 * @property {Control[]} controls - List of settings per field
 * @property {function(): Promise<EditorInterface>} update - Sends an update to the server with any changes made to the object's properties
 * @property {function(): Control} getControlForField - Gets a control for a specific field
 * @property {function(): Object} toPlainObject() - Returns this Content Type as a plain JS object
 * @example
 * 
 * // require contentful-management
 * var contentfulManagement = require('contentful-management')
 * var client = contentfulManagement.createClient({
 * // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
 * accessToken: 'YOUR_ACCESS_TOKEN'
 * }) 
 * 
 * // request our space from Contentful
 * var space = await client.getSpace('SPACE_ID')
 * 
 * //=======================================================================================================
 * // web can get an editor interface in two ways
 * // 1. request our ContentType from Contentful
 * //
 * // var contentType = await space.getContentType('CONTENT_TYPE_ID')
 * //
 * //1.1 Get the editorInterface through the ContentType
 * //
 * // var editorInterface = await contentType.getEditorInterface()
 * //
 * // OR
 * //
 * // 2. get an editor interface from the Space object right away
 * //
 * // var editorInterface = await space.getEditorInterfaceForContentType('CONTENT_TYPE_ID')
 * //=======================================================================================================
 * 
 * // we'll use option 2
 * 
 * var editorInterface = await space.getEditorInterfaceForContentType('CONTENT_TYPE_ID')
 * 
 * // Example Updating  and editor interface
 * editorInterface.controls[0] = { "fieldId": "title", "widgetId": "singleLine"}
 * editorInterface.update()
 * .then(editorInterface => console.log(editorInterface.controls))
 */

function createEditorInterfaceApi (http) {
  return {
    /**
     * Sends an update to the server with any changes made to the object's properties
     * @memberof EditorInterface
     * @func update
     * @return {Promise<EditorInterface>} Object returned from the server with updated changes.
     * @example
     * editorInterface.controls[0] = { "fieldId": "title", "widgetId": "singleLine"}
     * editorInterface.update()
     * .then(editorInterface => console.log(editorInterface.controls))
     */
    update: function () {
      const raw = this.toPlainObject()
      const data = omit(raw, ['sys'])
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
     * const control = editorInterface.getControlForField('fieldId')
     * console.log(control)
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
  const editorInterface = mixinToPlainObject(cloneDeep(data))
  enhanceWithMethods(editorInterface, createEditorInterfaceApi(http))
  return freezeSys(editorInterface)
}
