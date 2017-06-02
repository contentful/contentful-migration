/**
 * Role instances
 * @namespace Role
 */
import cloneDeep from 'lodash/cloneDeep'
import { freezeSys, toPlainObject } from 'contentful-sdk-core'
import enhanceWithMethods from '../enhance-with-methods'
import {
  createUpdateEntity,
  createDeleteEntity
} from '../instance-actions'

/**
 * See https://www.contentful.com/developers/docs/references/content-management-api/#/reference/roles/create-a-role
 * @memberof Role
 * @typedef Role
 * @prop {Meta.Sys} sys - System metadata
 * @prop {string} name
 * @prop {object} permissions - Permissions for application sections
 * @prop {object} policies
 * @prop {function(): Object} toPlainObject() - Returns this Role as a plain JS object
 */

function createRoleApi (http) {
  return {

    /**
     * Sends an update to the server with any changes made to the object's properties
     * @memberof Role
     * @func update
     * @return {Promise<Role>} Object returned from the server with updated changes.
     * @example
     * const contentful = require('contentful-management')
     *
     * const client = contentful.createClient({
     *   accessToken: '<content_management_api_key>'
     * })
     *
     * client.getSpace('<space_id>')
     * .then((space) => space.getRole('<roles_id>'))
     * .then((roles) => {
     *   roles.name = 'New role name'
     *   return roles.update()
     * })
     * .then((roles) => console.log(`roles ${roles.sys.id} updated.`))
     * .catch(console.error)
     */
    update: createUpdateEntity({
      http: http,
      entityPath: 'roles',
      wrapperMethod: wrapRole
    }),

    /**
     * Deletes this object on the server.
     * @memberof Role
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
     * .then((space) => space.getRole('<role_id>'))
     * .then((role) => role.delete())
     * .then((role) => console.log(`role deleted.`))
     * .catch(console.error)
     */
    delete: createDeleteEntity({
      http: http,
      entityPath: 'roles'
    })
  }
}

/**
 * @private
 * @param {Object} http - HTTP client instance
 * @param {Object} data - Raw role data
 * @return {Role} Wrapped role data
 */
export function wrapRole (http, data) {
  const role = toPlainObject(cloneDeep(data))
  enhanceWithMethods(role, createRoleApi(http))
  return freezeSys(role)
}

/**
 * @private
 * @param {Object} http - HTTP client instance
 * @param {Object} data - Raw role collection data
 * @return {RoleCollection} Wrapped role collection data
 */
export function wrapRoleCollection (http, data) {
  const roles = toPlainObject(cloneDeep(data))
  roles.items = roles.items.map((entity) => wrapRole(http, entity))
  return freezeSys(roles)
}
