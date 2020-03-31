import cloneDeep from 'lodash/cloneDeep'
import { freezeSys, toPlainObject } from 'contentful-sdk-core'
import enhanceWithMethods from '../enhance-with-methods'
import createOrganizationApi from '../create-organization-api'

/**
 * @memberof Organization
 * @typedef Organization
 * @prop {Object} sys - System metadata
 * @prop {string} sys.id - Organization id
 * @prop {string} sys.type - Entity type
 * @prop {string} name - Organization name
 * @prop {function(): Object} toPlainObject() - Returns this Organization as a plain JS object
 */

/**
 * @memberof Organization
 * @typedef OrganizationCollection
 * @prop {number} total
 * @prop {number} skip
 * @prop {number} limit
 * @prop {Array<Organization.Organization>} items
 * @prop {function(): Object} toPlainObject() - Returns this Organization collection as a plain JS object
 */

/**
 * This method creates the API for the given organization with all the methods for
 * reading and creating other entities. It also passes down a clone of the
 * http client with an organization id, so the base path for requests now has the
 * organization id already set.
 * @private
 * @param  {Object} http - HTTP client instance
 * @param  {Object} data - API response for a Organization
 * @return {Organization}
 */
export function wrapOrganization (http, data) {
  const org = toPlainObject(cloneDeep(data))
  const baseURL = http.defaults.baseURL.replace('/spaces/', '/organizations/') + org.sys.id + '/'
  const orgScopedHttpClient = http.cloneWithNewParams({ baseURL })
  const orgApi = createOrganizationApi({
    http: orgScopedHttpClient
  })
  const enhancedOrganization = enhanceWithMethods(org, orgApi)
  return freezeSys(enhancedOrganization)
}

/**
* This method normalizes each organization in a collection.
 * @private
 * @param {Object} http - HTTP client instance
 * @param {Object} data - Raw organization collection data
 * @return {OrganizationCollection} Normalized organization collection data
 */
export function wrapOrganizationCollection (http, data) {
  const organizations = toPlainObject(cloneDeep(data))
  organizations.items = organizations.items.map((entity) => wrapOrganization(http, entity))
  return freezeSys(organizations)
}
