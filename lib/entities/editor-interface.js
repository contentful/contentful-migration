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
    update: function () {
      const raw = this.toPlainObject()
      const data = omit(raw, ['sys'])
      return http.put('content_types' + '/' +
       this.sys.contentType.id +
       '/editor_interface',
       data,
        {
          headers: {
            'X-Contentful-Version': this.sys.version
          }
        }
      )
      .then((response) => wrapEditorInterface(http, response.data), errorHandler)
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
