/**
 * Contentful Organization API. Contains methods to access any operations at a organization level.
 * @namespace ContentfulOrganizationAPI
 */
import { get } from 'lodash'
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
 * @prop {function} createTeam
 * @prop {function} getTeam
 * @prop {function} getTeams
 * @prop {function} createTeamMembership
 * @prop {function} getTeamMembership
 * @prop {function} getTeamMemberships
 * @prop {function} getOrganizationInvitation
 * @prop {function} createOrganizationInvitation
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
  const {wrapTeamMembership, wrapTeamMembershipCollection} = entities.teamMembership
  const {wrapTeam, wrapTeamCollection} = entities.team
  const {wrapSpaceMembership, wrapSpaceMembershipCollection} = entities.spaceMembership
  const {wrapOrganizationInvitation} = entities.organizationInvitation

  const headers = {'x-contentful-enable-alpha-feature': 'organization-user-management-api'}

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
   * client.getOrganization('organization_id')
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
   * client.getOrganization('organization_id')
   * .then((organization) => organization.getOrganizationMemberships({'limit': 100})) // you can add more queries as 'key': 'value'
   * .then((response) => console.log(response.items))
   * .catch(console.error)
   */
  function getOrganizationMemberships (query = {}) {
    return http.get('organization_memberships', createRequestConfig({query}))
      .then(response => wrapOrganizationMembershipCollection(http, response.data), errorHandler)
  }

  /**
   * Gets an Space Membership in Organization
   * @memberof ContentfulOrganizationAPI
   * @param {string} id - Organiztion Space Membership ID
   * @return {Promise<SpaceMembership>} Promise for a Space Membership in an organization
   * @example
   * const contentful = require('contentful-management')
   *
   * client.getOrganization('organization_id')
   * .then((organization) => organization.getOrganizationSpaceMembership('organizationSpaceMembership_id'))
   * .then((organizationMembership) => console.log(organizationMembership))
   * .catch(console.error)
   */
  function getOrganizationSpaceMembership (id) {
    return http.get('space_memberships/' + id)
      .then(response => wrapSpaceMembership(http, response.data), errorHandler)
  }

  /**
   * Gets a collection Space Memberships in organization
   * @memberof ContentfulOrganizationAPI
   * @param {object=} query - Object with search parameters. Check the <a href="https://www.contentful.com/developers/docs/javascript/tutorials/using-js-cda-sdk/#retrieving-entries-with-search-parameters">JS SDK tutorial</a> and the <a href="https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/search-parameters">REST API reference</a> for more details.
   * @return {Promise<SpaceMembership[]>} Promise for a Space Membership collection across all spaces in the organization
   * @example
   * const contentful = require('contentful-management')
   *
   * client.getOrganization('organization_id')
   * .then((organization) => organization.getOrganizationSpaceMemberships()) // you can add queries like 'limit': 100
   * .then((response) => console.log(response.items))
   * .catch(console.error)
   */
  function getOrganizationSpaceMemberships (query = {}) {
    return http.get('space_memberships', createRequestConfig({query}))
      .then((response) => wrapSpaceMembershipCollection(http, response.data), errorHandler)
  }

  /**
   * Creates a Team membership
   * @memberof ContentfulOrganizationAPI
   * @see {TeamMembership}
   * @param {object=} data - Object representation of the Team Membership to be created
   * @return {Promise<TeamMembership.TeamMembership>} Promise for the newly created TeamMembership
   * @example
   * const contentful = require('contentful-management')
   *
   * const client = contentful.createClient({
   *   accessToken: '<content_management_api_key>'
   * })
   *
   * client.getOrganization('organizationId')
   * .then((org) => org.createTeamMembership('teamId', {
   *    admin: true,
   *    organizationMembershipId: "3ugleZJgHKk89I1P5MSDuY"
   *  }))
   * .then((teamMembership) => console.log(teamMembership))
   * .catch(console.error)
   */
  function createTeamMembership (teamId, data = {}) {
    return http.post('teams/' + teamId + '/team_memberships', data)
      .then((response) => wrapTeamMembership(http, response.data), errorHandler)
  }

  /**
   * Gets an Team Membership from the team with given teamId
   * @memberof ContentfulOrganizationAPI
   * @param {string} teamId - Team ID
   * @param {string} id - Team Membership ID
   * @return {Promise<TeamMembership>} Promise for an Team Membership
   * @example
   * const contentful = require('contentful-management')
   *
   * client.getOrganization('organizationId')
   * .then((organization) => organization.getTeamMembership('teamId', 'teamMembership_id'))
   * .then((teamMembership) => console.log(teamMembership))
   * .catch(console.error)
   */
  function getTeamMembership (teamId, teamMembershipId) {
    return http.get('teams/' + teamId + '/team_memberships/' + teamMembershipId)
      .then(response => wrapTeamMembership(http, response.data), errorHandler)
  }

  /**
   * Get all Team Memberships. If teamID is provided in the optional config object, it will return all Team Memberships in that team. By default, returns all team memberships for the organization.
   * @memberof ContentfulOrganizationAPI
   * @param {object=} opts
   * @param {string} opts.teamId
   * @param {object=} opts.query - Object with search parameters. Check the <a href="https://www.contentful.com/developers/docs/javascript/tutorials/using-js-cda-sdk/#retrieving-entries-with-search-parameters">JS SDK tutorial</a> and the <a href="https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/search-parameters">REST API reference</a> for more details.
   * @return {Promise<TeamMembership[]>} Promise for a Team Membership Collection
   * @example
   * const contentful = require('contentful-management')
   *
   * client.getOrganization('organizationId')
   * .then((organization) => organization.getTeamMemberships('teamId'))
   * .then((teamMemberships) => console.log(teamMemberships))
   * .catch(console.error)
   */
  function getTeamMemberships (opts = {}) {
    const query = get(opts, 'query', {})
    if (opts.teamId) {
      return http.get('teams/' + opts.teamId + '/team_memberships', createRequestConfig({query}))
        .then(response => wrapTeamMembershipCollection(http, response.data), errorHandler)
    }
    return http.get('team_memberships', createRequestConfig({query}))
      .then(response => wrapTeamMembershipCollection(http, response.data), errorHandler)
  }

  /**
   * Creates a Team
   * @memberof ContentfulOrganizationAPI
   * @see {Team}
   * @param {object=} data - Object representation of the Team to be created
   * @return {Promise<TeamMembership.TeamMembership>} Promise for the newly created Team
   * @example
   * const contentful = require('contentful-management')
   *
   * const client = contentful.createClient({
   *   accessToken: '<content_management_api_key>'
   * })
   *
   * client.getOrganization('<org_id>')
   * .then((org) => org.createTeam({
   *    name: 'new team',
   *    description: 'new team description'
   *  }))
   * .then((team) => console.log(team))
   * .catch(console.error)
   */
  function createTeam (data = {}) {
    return http.post('teams', data)
      .then((response) => wrapTeam(http, response.data), errorHandler)
  }

  /**
   * Gets an Team
   * @memberof ContentfulOrganizationAPI
   * @param {string} id - Team ID
   * @return {Promise<Team>} Promise for an Team
   * @example
   * const contentful = require('contentful-management')
   *
   * client.getOrganizations()
   * .then((organization) => organization.getTeam('teamId'))
   * .then((team) => console.log(team))
   * .catch(console.error)
   */
  function getTeam (teamId) {
    return http.get('teams/' + teamId)
      .then(response => wrapTeam(http, response.data, teamId), errorHandler)
  }

  /**
   * Gets all Teams in an organization
   * @memberof ContentfulOrganizationAPI
   * @param {string} id - Team ID
   * @return {Promise<Team[]>} Promise for a Team Collection
   * @example
   * const contentful = require('contentful-management')
   *
   * client.getOrganizations()
   * .then((organization) => organization.getTeams())
   * .then((teams) => console.log(teams))
   * .catch(console.error)
   */
  function getTeams (query = {}) {
    return http.get('teams', createRequestConfig({query}))
      .then(response => wrapTeamCollection(http, response.data), errorHandler)
  }

  /**
   * Gets an Invitation in Organization
   * @memberof ContentfulOrganizationAPI
   * @param {string} id - Invitation ID
   * @return {Promise<OrganizationInvitation>} Promise for a OrganizationInvitation in an organization
   * @example
   * const contentful = require('contentful-management')
   *
   * client.getOrganization('<org_id>')
   * .then((organization) => organization.getOrganizationInvitation('invitation_id'))
   * .then((invitation) => console.log(invitation))
   * .catch(console.error)
   */
  function getOrganizationInvitation (id) {
    return http.get('invitations/' + id, {
      headers
    })
      .then(response => wrapOrganizationInvitation(http, response.data), errorHandler)
  }

  /**
   * Create an Invitation in Organization
   * @memberof ContentfulOrganizationAPI
   * @param {string} id - Invitation ID
   * @return {Promise<OrganizationInvitation>} Promise for a OrganizationInvitation in an organization
   * @example
   * const contentful = require('contentful-management')
   *
   * const client = contentful.createClient({
   *   accessToken: '<content_management_api_key>'
   * })
   *
   * client.getOrganization('<org_id>')
   *  .then((organization) => organization.createOrganizationInvitation({
   *    email: 'user.email@example.com'
   *    firstName: 'User First Name'
   *    lastName: 'User Last Name'
   *    role: 'developer'
   *  })
   * .catch(console.error)
   */
  function createOrganizationInvitation (data) {
    const invitationAlphaHeaders = {
      'x-contentful-enable-alpha-feature': 'pending-org-membership'
    }

    return http.post('invitations', data, { headers: invitationAlphaHeaders })
      .then(response => wrapOrganizationInvitation(http, response.data), errorHandler)
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
    return http.get('app_definitions', createRequestConfig({query}))
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
    getOrganizationMemberships,
    createTeam,
    getTeam,
    getTeams,
    createTeamMembership,
    getTeamMembership,
    getTeamMemberships,
    getOrganizationSpaceMembership,
    getOrganizationSpaceMemberships,
    getOrganizationInvitation,
    createOrganizationInvitation
  }
}
