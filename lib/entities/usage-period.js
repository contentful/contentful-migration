/**
 * UsagePeriod
 * @namespace UsagePeriod
 */
import { freezeSys, toPlainObject } from 'contentful-sdk-core'
import cloneDeep from 'lodash/cloneDeep'
/**
 * @memberof UsagePeriod
 * @typedef UsagePeriod
 * @prop {Object} sys - System metadata
 * @prop {string} sys.id - User id
 * @prop {string} sys.type - Entity type, UsagePeriod
 * @prop {string} startDate - Start date of usage period
 * @prop {string} endDate - End date of usage period. Will be null for current period
 */

/**
 * @memberof UsagePeriod
 * @typedef UsagePeriodCollection
 * @prop {number} total
 * @prop {number} skip
 * @prop {number} limit
 * @prop {Object} sys
 * @prop {Array<UsagePeriod.UsagePeriod>} items
 * @prop {function(): Object} toPlainObject() - Returns this Space collection as a plain JS object
 */

/**
* This method normalizes each organization in a collection.
 * @private
 * @param {Object} http - HTTP client instance
 * @param {Object} data - Raw usage period collection data
 * @return {UsagePeriod.UsagePeriodCollection} Normalized usage period collection data
 */
export function wrapUsagePeriodCollection (http, data) {
  const usagePeriods = toPlainObject(cloneDeep(data))
  return freezeSys(usagePeriods)
}
