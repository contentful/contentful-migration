/**
 * Space Member instances
 * @namespace SpaceMember
 */

import cloneDeep from 'lodash/cloneDeep'
import { freezeSys, toPlainObject } from 'contentful-sdk-core'

/**
 * @memberof SpaceMember
 * @typedef SpaceMember
 * @prop {Meta.Sys} sys - System metadata
 * @prop {string} sys.id - Space member id is of form <spaceId>-<userId>
 * @prop {array} sys.relatedMemberships - Array of SpaceMemberships or TeamSpaceMemberships Links
 * @prop {boolean} admin - User is an admin
 * @prop {array} roles - Array of Role Links
 * @prop {function(): Object} toPlainObject() - Returns this Space Member as a plain JS object
 */

/**
 * @private
 * @param {Object} http - HTTP client instance
 * @param {Object} data - Raw space member data
 * @return {SpaceMember} Wrapped space member data
 */
export function wrapSpaceMember (http, data) {
  const spaceMember = toPlainObject(cloneDeep(data))
  return freezeSys(spaceMember)
}

/**
 * @private
 * @param {Object} http - HTTP client instance
 * @param {Object} data - Raw space members collection data
 * @return {SpaceMemberCollection} Wrapped space members collection data
 */
export function wrapSpaceMemberCollection (http, data) {
  const spaceMembers = toPlainObject(cloneDeep(data))
  spaceMembers.items = spaceMembers.items.map((entity) => wrapSpaceMember(http, entity))
  return freezeSys(spaceMembers)
}
