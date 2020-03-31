/**
 * Organization membership instances
 * @namespace OrganizationMembership
 */

import cloneDeep from 'lodash/cloneDeep'
import { freezeSys, toPlainObject } from 'contentful-sdk-core'
import enhanceWithMethods from '../enhance-with-methods'
import errorHandler from '../error-handler'

/**
 * @memberof OrganizationMembership
 * @typedef OrganizationMembership
 * @prop {Meta.Sys} sys - System metadata
 * @prop {string} role
 * @prop {boolean} status - User is an admin
 * @prop {function(): Object} toPlainObject() - Returns this Organization Membership as a plain JS object
 */

/**
 * @memberof OrganizationMembership
 * @typedef OrganizationMembershipCollection
 * @prop {number} total
 * @prop {number} limit
 * @prop {number} skip
 * @prop {Object<{type: "Array"}>} sys
 * @prop {Array<OrganizationMembership.OrganizationMembership>} items
 * @prop {function(): Object} toPlainObject() - Returns the collection as a plain JS object
 */

function createOrganizationMembershipApi (http, orgId) {
  const baseURL = http.defaults.baseURL.replace('/spaces/', `/organizations/${orgId}`)

  return {

    /**
     * Sends an update to the server with any changes made to the object's properties
     * @memberof OrganizationMembership
     * @func update
     * @return {Promise<OrganizationMembership>} Object returned from the server with updated changes.
     * @example
     * const contentful = require('contentful-management')
     *
     * const client = contentful.createClient({
     *   accessToken: '<content_management_api_key>'
     * })
     *
     * client.getOrganizations()
     * .then((organizations) => organizations.items[0])
     * .then(org => org.getOrganizationMembership('organizationMembership_id'))
     * .then((organizationMembership) => {
     *  organizationMembership.role = 'member';
     *  organizationMembership.update();
     * })
     * .catch(console.error)
     */

    update: function () {
      const raw = this.toPlainObject()
      const { role } = raw

      return http.put('organization_memberships' + '/' + this.sys.id, {role}, {
        headers: {
          'X-Contentful-Version': this.sys.version || 0
        },
        baseURL
      })
        .then((response) => wrapOrganizationMembership(http, response.data), errorHandler)
    },

    /**
     * Deletes this object on the server.
     * @memberof OrganizationMembership
     * @func delete
     * @return {Promise} Promise for the deletion. It contains no data, but the Promise error case should be handled.
     * @example
     * const contentful = require('contentful-management')
     *
     * const client = contentful.createClient({
     *   accessToken: '<content_management_api_key>'
     * })
     *
     * client.getOrganizations()
     * .then((organizations) => organizations.items[0])
     * .then(org => org.getOrganizationMembership('organizationMembership_id'))
     * .then((organizationMembership) => {
     *  organizationMembership.delete();
     * })
     * .catch(console.error)
     */

    delete: function () {
      return http.delete('organization_memberships' + '/' + this.sys.id, {
        baseURL
      })
        .then((response) => {}, errorHandler)
    }
  }
}

/**
 * @private
 * @param {Object} http - HTTP client instance
 * @param {Object} data - Raw organization membership data
 * @return {OrganizationMembership} Wrapped organization membership data
 */
export function wrapOrganizationMembership (http, data, orgId) {
  const organizationMembership = toPlainObject(cloneDeep(data))
  enhanceWithMethods(organizationMembership, createOrganizationMembershipApi(http, orgId))
  return freezeSys(organizationMembership)
}

/**
 * @private
 * @param {Object} http - HTTP client instance
 * @param {Object} data - Raw organization membership collection data
 * @return {OrganizationMembershipCollection} Wrapped organization membership collection data
 */
export function wrapOrganizationMembershipCollection (http, data) {
  const organizationMemberships = toPlainObject(cloneDeep(data))
  organizationMemberships.items = organizationMemberships.items.map((entity) => wrapOrganizationMembership(http, entity))
  return freezeSys(organizationMemberships)
}
