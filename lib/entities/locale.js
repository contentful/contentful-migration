import cloneDeep from 'lodash/cloneDeep'
import { freezeSys, toPlainObject } from 'contentful-sdk-core'
import enhanceWithMethods from '../enhance-with-methods'
import {
  createUpdateEntity,
  createDeleteEntity
} from '../instance-actions'

/**
 * @typedef {Locale} Locale
 * @property {Object} sys - System metadata
 * @property {string} name
 * @property {string} code - Locale code (example: en-us)
 * @property {boolean} contentDeliveryApi - If the content under this locale should be available on the CDA (for public reading)
 * @property {boolean} contentManagementApi - If the content under this locale should be available on the CMA (for editing)
 * @property {boolean} default - If this is the default locale
 * @property {boolean} optional - If the locale needs to be filled in on entries or not
 * @property {function(): Object} toPlainObject - Returns this Locale as a plain JS object
 */

/**
 * @typedef {LocaleCollection} LocaleCollection
 * @property {number} total - Total amount of records in the server
 * @property {number} skip - A starting point of the collection
 * @property {number} limit - Amount of records in collection
 * @property {Array<Locale>} items - array of locales
 * @property {function(): Object} toPlainObject - Returns this Locale collection as a plain JS object
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
      const locale = this
      // this property shouldn't be sent back if it exists
      delete locale.default
      delete locale.fallback_code
      delete locale.fallbackCode
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
  delete data.internal_code
  const locale = toPlainObject(cloneDeep(data))
  enhanceWithMethods(locale, createLocaleApi(http))
  return freezeSys(locale)
}

/**
 * @private
 * @param {Object} http - HTTP client instance
 * @param {Object} data - Raw locale collection data
 * @return {LocaleCollection} Wrapped locale collection data
 */
export function wrapLocaleCollection (http, data) {
  const locales = toPlainObject(cloneDeep(data))
  locales.items = locales.items.map((entity) => wrapLocale(http, entity))
  return freezeSys(locales)
}
