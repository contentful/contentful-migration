import cloneDeep from 'lodash/cloneDeep'
import { freezeSys, toPlainObject } from 'contentful-sdk-core'

/**
* This method normalizes each organization in a collection.
 * @private
 * @param {Object} http - HTTP client instance
 * @param {Object} data - Raw organization collection data
 * @return {OrganizationCollection} Normalized organization collection data
 */
export function wrapOrganizationCollection (http, data) {
  const organizations = toPlainObject(cloneDeep(data))
  return freezeSys(organizations)
}
