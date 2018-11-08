/**
 * Usages
 * @namespace Usage
 */
import { freezeSys, toPlainObject } from 'contentful-sdk-core'
import cloneDeep from 'lodash/cloneDeep'
/**
 * @memberof Usage
 * @typedef Usage
 * @prop {Object} sys - System metadata
 * @prop {string} sys.id - User id in form {usagePeriod}_{orgID or spaceID}
 * @prop {string} sys.type - Entity type, ApiUsage
 * @prop {Object} sys.usagePeriod - Link to <UsagePeriod>
 * @prop {Object} organization - optional, depends on type of usage requested. Link to org
 * @prop {Object} space - optional, depends on type of usage requested. Link to space
 * @prop {string} unitOfMeasure
 * @prop {string} interval
 * @prop {string} startDate
 * @prop {string} endDate
 * @prop {Array<number>} usage
 */

/**
 * @memberof Usage
 * @typedef UsageCollection
 * @prop {number} total
 * @prop {number} skip
 * @prop {number} limit
 * @prop {Object} sys
 * @prop {Array<Usage.Usage>} items
 * @prop {function(): Object} toPlainObject() - Returns this Space collection as a plain JS object
 */

/**
* This method normalizes each organization in a collection.
 * @private
 * @param {Object} http - HTTP client instance
 * @param {Object} data - Raw usage period collection data
 * @return {Usage.UsageCollection} Normalized usage period collection data
 */
export function wrapUsageCollection (http, data) {
  const usages = toPlainObject(cloneDeep(data))
  return freezeSys(usages)
}
