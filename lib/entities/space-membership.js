/**
 * Space Membership instances
 * @namespace SpaceMembership
 */

import cloneDeep from 'lodash/cloneDeep'
import { freezeSys, toPlainObject } from 'contentful-sdk-core'
import enhanceWithMethods from '../enhance-with-methods'
import {
  createUpdateEntity,
  createDeleteEntity
} from '../instance-actions'

/**
 * @memberof SpaceMembership
 * @typedef SpaceMembership
 * @prop {Meta.Sys} sys - System metadata
 * @prop {string} name
 * @prop {boolean} admin - User is an admin
 * @prop {array} roles - Array of Role Links
 * @prop {function(): Object} toPlainObject() - Returns this Space Membership as a plain JS object
 */

function createSpaceMembershipApi (http) {
  return {

    /**
     * Sends an update to the server with any changes made to the object's properties
     * @memberof SpaceMembership
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
     * .then((space) => space.getSpaceMembership('<spaceMembership_id>'))
     * .then((spaceMembership) => {
     *  spaceMembership.name = 'new space membership name'
     * })
     * .then((spaceMembership) => console.log(`spaceMembership ${spaceMembership.sys.id} updated.`))
     * .catch(console.error)
     */
    update: createUpdateEntity({
      http: http,
      entityPath: 'space_memberships',
      wrapperMethod: wrapSpaceMembership
    }),

    /**
     * Deletes this object on the server.
     * @memberof SpaceMembership
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
     * .then((space) => space.getSpaceMembership('<spaceMembership_id>'))
     * .then((spaceMembership) => spaceMembership.delete())
     * .then(() => console.log(`spaceMembership deleted.`))
     * .catch(console.error)
     */
    delete: createDeleteEntity({
      http: http,
      entityPath: 'space_memberships'
    })
  }
}

/**
 * @private
 * @param {Object} http - HTTP client instance
 * @param {Object} data - Raw space membership data
 * @return {SpaceMembership} Wrapped space membership data
 */
export function wrapSpaceMembership (http, data) {
  const spaceMembership = toPlainObject(cloneDeep(data))
  enhanceWithMethods(spaceMembership, createSpaceMembershipApi(http))
  return freezeSys(spaceMembership)
}

/**
 * @private
 * @param {Object} http - HTTP client instance
 * @param {Object} data - Raw space membership collection data
 * @return {SpaceMembershipCollection} Wrapped space membership collection data
 */
export function wrapSpaceMembershipCollection (http, data) {
  const spaceMemberships = toPlainObject(cloneDeep(data))
  spaceMemberships.items = spaceMemberships.items.map((entity) => wrapSpaceMembership(http, entity))
  return freezeSys(spaceMemberships)
}
