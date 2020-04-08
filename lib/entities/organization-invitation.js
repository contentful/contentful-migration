/**
 * Organization invitation instances
 * @namespace OrganizationInvitation
 */

import cloneDeep from 'lodash/cloneDeep'
import { freezeSys, toPlainObject } from 'contentful-sdk-core'

/**
 * @memberof OrganizationInvitation
 * @typedef OrganizationInvitation
 * @prop {Meta.Sys} sys - System metadata
 * @prop {function(): Object} toPlainObject() - Returns this Organization Invitation as a plain JS object
 */

/**
 * @private
 * @param {Object} http - HTTP client instance
 * @param {Object} data - Raw invitation data
 * @return {OrganizationInvitation} Wrapped Inviation data
 */
export function wrapOrganizationInvitation (http, data) {
  const invitation = toPlainObject(cloneDeep(data))
  return freezeSys(invitation)
}
