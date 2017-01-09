import cloneDeep from 'lodash/cloneDeep'
import freezeSys from 'contentful-sdk-core/freeze-sys'
import enhanceWithMethods from '../enhance-with-methods'
import mixinToPlainObject from 'contentful-sdk-core/mixins/to-plain-object'
import {
  createUpdateEntity,
  createDeleteEntity
} from '../instance-actions'

/**
 * @typedef {SpaceMembership} SpaceMembership
 * @property {Object} sys - System metadata
 * @property {string} name
 * @property {boolean} admin - User is an admin
 * @property {Array} roles - Array of Role Links
 * @property {function(): Object} toPlainObject - Returns this Space Membership as a plain JS object
 */

/**
 * @typedef {SpaceMembershipCollection} SpaceMembershipCollection
 * @property {number} total - Total amount of records in the server
 * @property {number} skip - A starting point of the collection
 * @property {number} limit - Amount of records in collection
 * @property {Array<SpaceMembership.SpaceMembership>} items
 * @property {function(): Object} toPlainObject() - Returns this Space Membership collection as a plain JS object
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
