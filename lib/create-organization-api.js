/**
 * Contentful Organization API. Contains methods to access any operations at a organization level.
 * @namespace ContentfulOrganizationAPI
 */

import errorHandler from './error-handler'
import entities from './entities'

/**
 * @memberof ContentfulOrganizationAPI
 * @typedef {object} ContentfulOrganizationAPI
 * @prop {function} getOrganizationMembership
 * @prop {function} getOrganizationMemberships
 */

/**
 * Creates API object with methods to access the Organization API
 * @private
 * @param {object} params - API initialization params
 * @prop {object} http - HTTP client instance
 * @prop {object} entities - Object with wrapper methods for each kind of entity
 * @return {ContentfulOrganizationAPI}
 */
export default function createOrganizationApi ({
  http,
  orgId
}) {
  const {wrapOrganizationMembership, wrapOrganizationMembershipCollection} = entities.organizationMembership
  const baseURL = http.defaults.baseURL.replace('/spaces/', `/organizations/${orgId}`)

  /**
   * Organization instances.
   * @namespace Organization
   */

  /**
   * Gets a Organization Membership
   * @memberof ContentfulOrganizationAPI
   * @param {string} id - Organiztion Membership ID
   * @return {Promise<OrganizationMembership.OrganizationMembership>} Promise for a Organization Membership
   * @example
   * const contentful = require('contentful-management')
   *
   * client.getOrganizations()
   * .then((organization) => organization.getOrganizationMembership('organizationMembership_id'))
   * .then((organizationMembership) => console.log(organizationMembership))
   * .catch(console.error)
   */
  function getOrganizationMembership (id) {
    return http.get('organization_memberships/' + id, {
      baseURL
    })
      .then(response => wrapOrganizationMembership(http, response.data, orgId), errorHandler)
  }

  /**
   * Gets a collection of Organization Memberships
   * @memberof ContentfulOrganizationAPI
   * @param {object=} query - Object with search parameters. Check the <a href="https://www.contentful.com/developers/docs/javascript/tutorials/using-js-cda-sdk/#retrieving-entries-with-search-parameters">JS SDK tutorial</a> and the <a href="https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/search-parameters">REST API reference</a> for more details.
   * @return {Promise<OrganizationMembership.OrganizationMembershipCollection>} Promise for a collection of Organization Memberships
   * @example
   * const contentful = require('contentful-management')
   *
   * client.getOrganizations()
   * .then((organization) => organization.getOrganizationMemberships({'limit': 100})) // you can add more queries as 'key': 'value'
   * .then((response) => console.log(response.items))
   * .catch(console.error)
   */
  function getOrganizationMemberships (query = {}) {
    return http.get('organization_memberships', {
      baseURL,
      query
    })
      .then(response => wrapOrganizationMembershipCollection(http, response.data), errorHandler)
  }

  return {
    getOrganizationMembership,
    getOrganizationMemberships
  }
}
