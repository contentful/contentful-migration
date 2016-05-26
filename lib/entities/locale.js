import cloneDeep from 'lodash/cloneDeep'
import freezeSys from 'contentful-sdk-core/freeze-sys'
import enhanceWithMethods from '../enhance-with-methods'
import mixinToPlainObject from 'contentful-sdk-core/mixins/to-plain-object'
import {
  createUpdateEntity,
  createDeleteEntity
} from '../instance-actions'

/**
 * @memberof Locale
 * @typedef Locale
 * @prop {Meta.Sys} sys - System metadata
 * @prop {string} name
 * @prop {string} code - Locale code (example: en-us)
 * @prop {boolean} contentDeliveryApi - If the content under this locale should be available on the CDA (for public reading)
 * @prop {boolean} contentManagementApi - If the content under this locale should be available on the CMA (for editing)
 * @prop {boolean} default - If this is the default locale
 * @prop {function(): Object} toPlainObject() - Returns this Locale as a plain JS object
 */

function createLocaleApi (http) {
  return {
    /**
     * Sends an update to the server with any changes made to the object's properties
     * @memberof Locale
     * @func update
     * @return {Promise<Locale>} Object returned from the server with updated changes.
     * @example
     * locale.name = 'English'
     * locale.update()
     * .then(locale => console.log(locale.name))
     */
    update: function () {
      // delete some properties which are returned by the server but shouldn't
      // be sent back.
      const locale = this
      delete locale.default
      delete locale.fallback_code
      return createUpdateEntity({
        http: http,
        entityPath: 'locales',
        wrapperMethod: wrapLocale
      }).call(locale)
    },

    /**
     * Deletes this object on the server.
     * @memberof Locale
     * @func delete
     * @return {Promise} Promise for the deletion. It contains no data, but the Promise error case should be handled.
     * @example
     * locale.delete()
     * .catch(err => console.log(err))
     */
    delete: createDeleteEntity({
      http: http,
      entityPath: 'locales'
    })
  }
}

/**
 * @private
 * @param {Object} http - HTTP client instance
 * @param {Object} data - Raw locale data
 * @return {Locale} Wrapped locale data
 */
export function wrapLocale (http, data) {
  const locale = mixinToPlainObject(cloneDeep(data))
  delete locale.internal_code
  enhanceWithMethods(locale, createLocaleApi(http))
  return freezeSys(locale)
}

/**
 * @memberof Locale
 * @typedef LocaleCollection
 * @prop {number} total
 * @prop {number} skip
 * @prop {number} limit
 * @prop {Array<Locale.Locale>} items
 * @prop {function(): Object} toPlainObject() - Returns this Locale collection as a plain JS object
 */

/**
 * @private
 * @param {Object} http - HTTP client instance
 * @param {Object} data - Raw locale collection data
 * @return {LocaleCollection} Wrapped locale collection data
 */
export function wrapLocaleCollection (http, data) {
  const locales = mixinToPlainObject(cloneDeep(data))
  locales.items = locales.items.map((entity) => wrapLocale(http, entity))
  return freezeSys(locales)
}
