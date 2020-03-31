/**
 * Contentful Organization API. Contains methods to access any operations at a organization level.
 * @namespace ContentfulOrganizationAPI
 */

import { createRequestConfig } from 'contentful-sdk-core'
import errorHandler from './error-handler'
import entities from './entities'

/**
 * @memberof ContentfulOrganizationAPI
 * @typedef {object} ContentfulOrganizationAPI
 * @prop {function} createAppDefinition
 * @prop {function} getAppDefinition
 * @prop {function} getAppDefinitions
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
export default function createOrganizationApi ({ http }) {
  const {wrapAppDefinition, wrapAppDefinitionCollection} = entities.appDefinition
  const {wrapOrganizationMembership, wrapOrganizationMembershipCollection} = entities.organizationMembership

  /**
   * Organization instances.
   * @namespace Organization
   */

  /**
   * Gets an Organization Membership
   * @memberof ContentfulOrganizationAPI
   * @param {string} id - Organization Membership ID
   * @return {Promise<OrganizationMembership.OrganizationMembership>} Promise for an Organization Membership
   * @example
   * const contentful = require('contentful-management')
   *
   * client.getOrganizations()
   * .then((organization) => organization.getOrganizationMembership('organizationMembership_id'))
   * .then((organizationMembership) => console.log(organizationMembership))
   * .catch(console.error)
   */
  function getOrganizationMembership (id) {
    return http.get('organization_memberships/' + id)
      .then(response => wrapOrganizationMembership(http, response.data), errorHandler)
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
      query
    })
      .then(response => wrapOrganizationMembershipCollection(http, response.data), errorHandler)
  }

  /**
   * Gets all app definitions
   * @memberof ContentfulOrganizationAPI
   * @return {Promise<AppDefinition.AppDefinitionCollection>} Promise for a collection of App Definitions
   * @example
   * const contentful = require('contentful-management')
   *
   * const client = contentful.createClient({
   *   accessToken: '<content_management_api_key>'
   * })
   *
   * client.getOrganization('<org_id>')
   * .then((org) => org.getAppDefinitions())
   * .then((response) => console.log(response.items))
   * .catch(console.error)
   */
  function getAppDefinitions (query = {}) {
    return http.get('app_definitions', createRequestConfig({query: query}))
      .then((response) => wrapAppDefinitionCollection(http, response.data), errorHandler)
  }

  /**
   * Gets an app definition
   * @memberof ContentfulOrganizationAPI
   * @return {Promise<AppDefinition.AppDefinition>} Promise for an App Definition
   * @example
   * const contentful = require('contentful-management')
   *
   * const client = contentful.createClient({
   *   accessToken: '<content_management_api_key>'
   * })
   *
   * client.getOrganization('<org_id>')
   * .then((org) => org.getAppDefinition('<app_definition_id>'))
   * .then((appDefinition) => console.log(appDefinition))
   * .catch(console.error)
   */
  function getAppDefinition (id) {
    return http.get('app_definitions/' + id)
      .then((response) => wrapAppDefinition(http, response.data), errorHandler)
  }

  /**
   * Creates an app definition
   * @memberof ContentfulOrganizationAPI
   * @see {AppDefinition}
   * @param {object=} data - Object representation of the App Definition to be created
   * @return {Promise<AppDefinition.AppDefinition>} Promise for the newly created AppDefinition
   * @example
   * const contentful = require('contentful-management')
   *
   * const client = contentful.createClient({
   *   accessToken: '<content_management_api_key>'
   * })
   *
   * client.getOrganization('<org_id>')
   * .then((org) => org.createAppDefinition({
   *    name: 'Example app',
   *    locations: [{ location: 'app-config' }],
   *    src: "http://my-app-host.com/my-app"
   *  }))
   * .then((appDefinition) => console.log(appDefinition))
   * .catch(console.error)
   */
  function createAppDefinition (data = {}) {
    return http.post('app_definitions', data)
      .then((response) => wrapAppDefinition(http, response.data), errorHandler)
  }

  return {
    getAppDefinition,
    getAppDefinitions,
    createAppDefinition,
    getOrganizationMembership,
    getOrganizationMemberships
  }
}
