/**
 * @namespace Usage
 */
import { freezeSys, toPlainObject } from 'contentful-sdk-core'
import cloneDeep from 'lodash/cloneDeep'

/**
 * @memberof Usage
 * @typedef { "cma" | "cda" | "cpa" | "gql" } UsageMetricEnum
 */

/**
 * The <code>dateRange</code> parameter is optional. When some or all of
 * <code>dateRange</code> properties are missing the usage period is derived
 * from today and the maximum reported data points which are currently set to
 * <code>45 days</code>. The calculated usage period is part of the response
 * object see {@link Usage.Usage}
 *
 * @memberof Usage
 * @typedef UsageQuery
 * @prop {string} [metric[in]] - One or more comma separated usage {@link Usage.UsageMetricEnum metrics}. By default no filtering is applied.
 * @prop {string} [dateRange.startAt] - Start of a usage period in <code>yyyy-mm-dd</code> format
 * @prop {string} [dateRange.endAt] - End of a usage period in <code>yyyy-mm-dd</code> format
 * @prop {number} [skip=0]
 * @prop {number} [limit=25]
 * @prop {string} [order="-usage"]
 */

/**
 * @memberof Usage
 * @typedef Usage
 * @prop {string} sys.id - Usage id in form of <code>usage-{metric}-{entity}-key-{key}-{startAt}-{endAt}</code>
 * @prop {"OrganizationPeriodicUsage" | "SpacePeriodicUsage"} sys.type - Usage internal type
 * @prop {Meta.Link} [sys.organization] - Organization link when <code>sys.type</code> is <code>OrganizationPeriodicUsage</code>
 * @prop {Meta.Link} [sys.space] - Space link when <code>sys.code</code> is <code>SpacePeriodicUsage</code>
 * @prop {"apiRequestsCount"} unitOfMeasure - Unit of measurement
 * @prop {Usage.UsageMetricEnum} metric - Type of the requested metric
 * @prop {string} dateRange.startAt - Start of the requested usage period in <code>yyyy-mm-dd</code> format
 * @prop {string} dateRange.endAt - End of the requested usage period in <code>yyyy-mm-dd</code> format
 * @prop {number} usage - Usage total for the requested <code>metric</code> and usage period
 * @prop {Object} usagePerDay - Usage per day for the requested <code>metric</code> and usage period, <code>{ "yyyy-dd-mm": number, ... }</code>
 */

/**
 * @memberof Usage
 * @typedef UsageCollection
 * @prop {number} total
 * @prop {number} limit
 * @prop {number} skip
 * @prop {string} order
 * @prop {Object<{type: "Array"}>} sys
 * @prop {Array<Usage.Usage>} items
 * @prop {function(): Object} toPlainObject() - Returns the collection as a plain JS object
 */

/**
 * @private
 * @param {Object} http - HTTP client instance
 * @param {Object} data - Raw usage data collection
 * @return {Usage.UsageCollection} Normalized usage collection
 */
export function wrapUsageCollection (http, data) {
  const usage = toPlainObject(cloneDeep(data))
  return freezeSys(usage)
}
