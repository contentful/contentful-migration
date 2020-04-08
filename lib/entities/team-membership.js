/**
 * TeamMembership instances
 * @namespace TeamMembership
 */

import cloneDeep from 'lodash/cloneDeep'
import { freezeSys, toPlainObject } from 'contentful-sdk-core'
import enhanceWithMethods from '../enhance-with-methods'
import errorHandler from '../error-handler'

/**
 * @memberof TeamMembership
 * @typedef TeamMembership
 * @prop {Meta.Sys} sys - System metadata
 * @prop {boolean} admin - User is an admin
 * @prop {function(): Object} toPlainObject() - Returns this Team Membership as a plain JS object
 */

/**
 * @memberof TeamMembership
 * @typedef TeamMembershipCollection
 * @prop {number} total
 * @prop {number} limit
 * @prop {number} skip
 * @prop {Object<{type: "Array"}>} sys
 * @prop {Array<TeamMembership.TeamMembership>} items
 * @prop {function(): Object} toPlainObject() - Returns the collection as a plain JS object
 */

function createTeamMembershipApi (http, teamId) {
  return {
    /**
     * Sends an update to the server with any changes made to the object's properties
     * @memberof TeamMembership
     * @func update
     * @return {Promise<TeamMembership>} Object returned from the server with updated changes.
     * @example
     * const contentful = require('contentful-management')
     *
     * const client = contentful.createClient({
     *   accessToken: '<content_management_api_key>'
     * })
     *
     * client.getOrganizations()
     * .then((organizations) => organizations.items[0])
     * .then(org => org.getTeamMembership('teamId', 'teamMembership_id'))
     * .then((teamMembership) => {
     *  teamMembership.admin = true;
     *  teamMembership.update();
     * })
     * .catch(console.error)
     */

    update: function () {
      const raw = this.toPlainObject()

      return http.put('teams/' + teamId + '/team_memberships/' + this.sys.id, raw, {
        headers: {
          'X-Contentful-Version': this.sys.version || 0
        }
      })
        .then((response) => wrapTeamMembership(http, response.data), errorHandler)
    },

    /**
     * Deletes this object on the server.
     * @memberof TeamMembership
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
     * .then(org => org.getTeamMembership('teamId', 'teamMembership_id'))
     * .then((teamMembership) => {
     *  teamMembership.delete();
     * })
     * .catch(console.error)
     */

    delete: function () {
      return http.delete('teams/' + teamId + '/team_memberships/' + this.sys.id,
        {headers: {'x-contentful-enable-alpha-feature': 'teams-api'}}
      )
        .then((response) => {}, errorHandler)
    }
  }
}
/**
 * @private
 * @param {Object} http - HTTP client instance
 * @param {Object} data - Raw team membership data
 * @return {TeamMembership} Wrapped team membership data
 */
export function wrapTeamMembership (http, data, teamId) {
  const teamMembership = toPlainObject(cloneDeep(data))
  enhanceWithMethods(teamMembership, createTeamMembershipApi(http, teamId))
  return freezeSys(teamMembership)
}

/**
 * @private
 * @param {Object} http - HTTP client instance
 * @param {Object} data - Raw team membership collection data
 * @return {TeamMembershipCollection} Wrapped team membership collection data
 */
export function wrapTeamMembershipCollection (http, data, teamId) {
  const teamMemberships = toPlainObject(cloneDeep(data))
  teamMemberships.items = teamMemberships.items.map((entity) => wrapTeamMembership(http, entity, teamId))
  return freezeSys(teamMemberships)
}
