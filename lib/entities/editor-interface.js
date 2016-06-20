/**
 * Editor Interface instances
 * @namespace EditorInterface
 */

import cloneDeep from 'lodash/cloneDeep'
import freezeSys from 'contentful-sdk-core/freeze-sys'
import enhanceWithMethods from '../enhance-with-methods'
import mixinToPlainObject from 'contentful-sdk-core/mixins/to-plain-object'
import omit from 'lodash/omit'
import errorHandler from '../error-handler'

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
      return http.put(`content_types/${this.sys.contentType.id}/editor_interface`,
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
