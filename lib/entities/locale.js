/**
 * Locale instances
 * @namespace Locale
 */
import cloneDeep from 'lodash/cloneDeep'
import { freezeSys, toPlainObject } from 'contentful-sdk-core'
import enhanceWithMethods from '../enhance-with-methods'
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
 * @prop {string} fallbackCode - the locale code to fallback to when there is not content for the current locale
 * @prop {boolean} contentDeliveryApi - If the content under this locale should be available on the CDA (for public reading)
 * @prop {boolean} contentManagementApi - If the content under this locale should be available on the CMA (for editing)
 * @prop {boolean} default - If this is the default locale
 * @prop {boolean} optional - If the locale needs to be filled in on entries or not
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
     * const contentful = require('contentful-management')
     *
     * const client = contentful.createClient({
     *   accessToken: '<content_management_api_key>'
     * })
     *
     * client.getSpace('<space_id>')
     * .then((space) => space.getLocale('<locale_id>'))
     * .then((locale) => {
     *   locale.name = 'New locale name'
     *   return locale.update()
     * })
     * .then((locale) => console.log(`locale ${locale.sys.id} updated.`))
     * .catch(console.error)
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
     * const contentful = require('contentful-management')
     *
     * const client = contentful.createClient({
     *   accessToken: '<content_management_api_key>'
     * })
     *
     * client.getSpace('<space_id>')
     * .then((space) => space.getLocale('<locale_id>'))
     * .then((locale) => locale.delete())
     * .then(() => console.log(`locale deleted.`))
     * .catch(console.error)
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
