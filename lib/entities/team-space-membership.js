/**
 * Team Space Membership instances
 * @namespace TeamSpaceMembership
 */

import cloneDeep from 'lodash/cloneDeep'
import { freezeSys, toPlainObject } from 'contentful-sdk-core'
import enhanceWithMethods from '../enhance-with-methods'
import {
  createDeleteEntity
} from '../instance-actions'
import errorHandler from '../error-handler'

/**
 * @memberof TeamSpaceMembership
 * @typedef TeamSpaceMembership
 * @prop {Meta.Sys} sys - System metadata
 * @prop {boolean} admin - User is an admin
 * @prop {array} roles - Array of Role Links
 * @prop {function(): Object} toPlainObject() - Returns this Team Space Membership as a plain JS object
 */

function createTeamSpaceMembershipApi (http) {
  return {

    /**
     * Sends an update to the server with any changes made to the object's properties
     * @memberof TeamSpaceMembership
     * @func update
     * @return {Promise<SpaceMembership>} Object returned from the server with updated changes.
     * @example
     * const contentful = require('contentful-management')
     *
     * const client = contentful.createClient({
     *   accessToken: '<content_management_api_key>'
     * })
     *
     * client.getSpace('<space_id>')
     *  .then((space) => space.getTeamSpaceMembership('team_space_membership_id'))
     *  .then((teamSpaceMembership) => {
     *    item.roles = [
     *      {
     *        sys: {
     *          type: 'Link',
     *          linkType: 'Role',
     *          id: 'role_id'
     *        }
     *      }
     *    ]
     *  })
     *  .then((spaceMembership) => console.log(`spaceMembership ${spaceMembership.sys.id} updated.`))
     *  .catch(console.error)
     */
    update: function () {
      const raw = this.toPlainObject()
      const data = cloneDeep(raw)
      delete data.sys

      return http.put('team_space_memberships/' + this.sys.id, data, {
        headers: {
          'X-Contentful-Version': this.sys.version || 0,
          'x-contentful-team': this.sys.team.sys.id
        }
      })
        .then((response) => wrapTeamSpaceMembership(http, response.data), errorHandler)
    },

    /**
     * Deletes this object on the server.
     * @memberof TeamSpaceMembership
     * @func delete
     * @return {Promise} Promise for the deletion. It contains no data, but the Promise error case should be handled.
     * @example
     * const contentful = require('contentful-management')
     *
     * const client = contentful.createClient({
     *   accessToken: '<content_management_api_key>'
     * })
     *
     * client.getSpace('<space_id>')
     * .then((space) => space.getTeamSpaceMembership('<team_space_membership_id>'))
     * .then((teamSpaceMembership) => teamSpaceMembership.delete())
     * .then(() => console.log(`spaceMembership deleted.`))
     * .catch(console.error)
     */
    delete: createDeleteEntity({
      http: http,
      entityPath: 'team_space_memberships'
    })
  }
}

/**
 * @private
 * @param {Object} http - HTTP client instance
 * @param {Object} data - Raw space membership data
 * @return {TeamSpaceMembership} Wrapped team space membership data
 */
export function wrapTeamSpaceMembership (http, data) {
  const teamSpaceMembership = toPlainObject(cloneDeep(data))
  enhanceWithMethods(teamSpaceMembership, createTeamSpaceMembershipApi(http))
  return freezeSys(teamSpaceMembership)
}

/**
 * @private
 * @param {Object} http - HTTP client instance
 * @param {Object} data - Raw space membership collection data
 * @return {TeamSpaceMembershipCollection} Wrapped team space membership collection data
 */
export function wrapTeamSpaceMembershipCollection (http, data) {
  const teamSpaceMemberships = toPlainObject(cloneDeep(data))
  teamSpaceMemberships.items = teamSpaceMemberships.items.map((entity) => wrapTeamSpaceMembership(http, entity))
  return freezeSys(teamSpaceMemberships)
}
