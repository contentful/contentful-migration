import {cloneDeep} from 'lodash/lang'
import freezeSys from 'contentful-sdk-core/freeze-sys'
import enhanceWithMethods from '../enhance-with-methods'
import mixinToPlainObject from 'contentful-sdk-core/mixins/to-plain-object'

// Methods to add:
// - update
// - delete

/**
 * @memberof Entities
 * @typedef Locale
 * @prop {Entities.Sys} sys - System metadata
 * @prop {string} name
 * @prop {string} code - Locale code (example: en-us)
 * @prop {boolean} contentDeliveryApi - If the content under this locale should be available on the CDA (for public reading)
 * @prop {boolean} contentManagementApi - If the content under this locale should be available on the CMA (for editing)
 * @prop {boolean} default - If this is the default locale
 * @prop {function(): Object} toPlainObject() - Returns this Locale as a plain JS object
 */

const localeApi = {}

/**
 * @private
 * @param {Object} data - Raw locale data
 * @return {Locale} Wrapped locale data
 */
export function wrapLocale (data) {
  const locale = mixinToPlainObject(cloneDeep(data))
  enhanceWithMethods(locale, localeApi)
  return freezeSys(locale)
}

/**
 * @memberof Entities
 * @typedef LocaleCollection
 * @prop {number} total
 * @prop {number} skip
 * @prop {number} limit
 * @prop {Array<Entities.Locale>} items
 * @prop {function(): Object} toPlainObject() - Returns this Locale collection as a plain JS object
 */

/**
 * @private
 * @param {Object} data - Raw locale collection data
 * @return {LocaleCollection} Wrapped locale collection data
 */
export function wrapLocaleCollection (data) {
  const locales = mixinToPlainObject(cloneDeep(data))
  locales.items = locales.items.map((entity) => wrapLocale(entity))
  return freezeSys(locales)
}
