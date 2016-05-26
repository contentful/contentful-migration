/**
 * Space Membership instances
 * @namespace SpaceMembership
 */
import {cloneDeep} from 'lodash/lang'
import freezeSys from 'contentful-sdk-core/freeze-sys'
import enhanceWithMethods from '../enhance-with-methods'
import mixinToPlainObject from 'contentful-sdk-core/mixins/to-plain-object'
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
     * spaceMembership.name = 'New name'
     * spaceMembership.update()
     * .then(spaceMembership => console.log(spaceMembership.name))
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
     * spaceMembership.delete()
     * .catch(err => console.log(err))
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
  const spaceMembership = mixinToPlainObject(cloneDeep(data))
  enhanceWithMethods(spaceMembership, createSpaceMembershipApi(http))
  return freezeSys(spaceMembership)
}

/**
 * @memberof SpaceMembership
 * @typedef SpaceMembershipCollection
 * @prop {number} total
 * @prop {number} skip
 * @prop {number} limit
 * @prop {Array<SpaceMembership.SpaceMembership>} items
 * @prop {function(): Object} toPlainObject() - Returns this Space Membership collection as a plain JS object
 */

/**
 * @private
 * @param {Object} http - HTTP client instance
 * @param {Object} data - Raw space membership collection data
 * @return {SpaceMembershipCollection} Wrapped space membership collection data
 */
export function wrapSpaceMembershipCollection (http, data) {
  const spaceMemberships = mixinToPlainObject(cloneDeep(data))
  spaceMemberships.items = spaceMemberships.items.map((entity) => wrapSpaceMembership(http, entity))
  return freezeSys(spaceMemberships)
}
