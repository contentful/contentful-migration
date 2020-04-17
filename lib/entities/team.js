/**
 * Team instances
 * @namespace Team
 */

import cloneDeep from 'lodash/cloneDeep'
import { freezeSys, toPlainObject } from 'contentful-sdk-core'
import enhanceWithMethods from '../enhance-with-methods'
import errorHandler from '../error-handler'

/**
 * @memberof Team
 * @typedef Team
 * @prop {Meta.Sys} sys - System metadata
 * @prop {string} name
 * @prop {string} description
 * @prop {function(): Object} toPlainObject() - Returns this Team as a plain JS object
 */

/**
 * @memberof Team
 * @typedef TeamCollection
 * @prop {number} total
 * @prop {number} limit
 * @prop {number} skip
 * @prop {Object<{type: "Array"}>} sys
 * @prop {Array<Team.Team>} items
 * @prop {function(): Object} toPlainObject() - Returns the collection as a plain JS object
 */

function createTeamApi (http) {
  return {
    /**
     * Sends an update to the server with any changes made to the object's properties
     * @memberof Team
     * @func update
     * @return {Promise<Team>} Object returned from the server with updated changes.
     * @example
     * const contentful = require('contentful-management')
     *
     * const client = contentful.createClient({
     *   accessToken: '<content_management_api_key>'
     * })
     *
     * client.getOrganization('organization_id')
     * .then(org => org.getTeam('team_id'))
     * .then((team) => {
     *  team.description = 'new description';
     *  team.update();
     * })
     * .catch(console.error)
     */

    update: function () {
      const raw = this.toPlainObject()
      const {name, description} = raw

      return http.put('teams/' + this.sys.id, {name, description}, {
        headers: {
          'X-Contentful-Version': this.sys.version || 0
        }
      })
        .then((response) => wrapTeam(http, response.data), errorHandler)
    },

    /**
     * Deletes this object on the server.
     * @memberof Team
     * @func delete
     * @return {Promise} Promise for the deletion. It contains no data, but the Promise error case should be handled.
     * @example
     * const contentful = require('contentful-management')
     *
     * const client = contentful.createClient({
     *   accessToken: '<content_management_api_key>'
     * })
     *
     * client.getOrganization('organization_id')
     * .then(org => org.getOrganizationMembership('organizationMembership_id'))
     * .then((team) => {
     *  team.delete();
     * })
     * .catch(console.error)
     */

    delete: function () {
      return http.delete('teams/' + this.sys.id)
        .then((response) => {}, errorHandler)
    }
  }
}

/**
 * @private
 * @param {Object} http - HTTP client instance
 * @param {Object} data - Raw team data
 * @return {Team} Wrapped team data
 */
export function wrapTeam (http, data) {
  const team = toPlainObject(cloneDeep(data))
  enhanceWithMethods(team, createTeamApi(http))
  return freezeSys(team)
}

/**
 * @private
 * @param {Object} http - HTTP client instance
 * @param {Object} data - Raw team collection data
 * @return {TeamCollection} Wrapped team collection data
 */
export function wrapTeamCollection (http, data) {
  const teams = toPlainObject(cloneDeep(data))
  teams.items = teams.items.map((entity) => wrapTeam(http, entity))
  return freezeSys(teams)
}
