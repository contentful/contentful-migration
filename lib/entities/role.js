/**
 * Role instances
 * @namespace Role
 */
import cloneDeep from 'lodash/cloneDeep'
import freezeSys from 'contentful-sdk-core/freeze-sys'
import enhanceWithMethods from '../enhance-with-methods'
import mixinToPlainObject from 'contentful-sdk-core/mixins/to-plain-object'
import {
  createUpdateEntity,
  createDeleteEntity
} from '../instance-actions'

/**
 * @see https://www.contentful.com/developers/docs/references/content-management-api/#/reference/roles/create-a-role
 * @typedef {Role} Role
 * @property {Object} sys - System metadata
 * @property {string} name
 * @property {Object} permissions - Permissions for application sections
 * @property {Object} policies
 * @property {function(): Prmise<Role>} update - Sends an update to the server with any changes made to the object's properties
 * @property {function(): Prmise} delete - Deletes this object on the server.
 * @property {function(): Object} toPlainObject - Returns this Role as a plain JS object
 */

/**
 * @typedef {RoleCollection} RoleCollection
 * @property {number} total - Total amount of records in the server
 * @property {number} skip - A starting point of the collection
 * @property {number} limit - Amount of records in collection
 * @property {Role[]} items - an array of roles
 * @property {function(): Object} toPlainObject - Returns this Role collection as a plain JS object
 */

function createRoleApi (http) {
  return {

    /**
     * Sends an update to the server with any changes made to the object's properties
     * @memberof Role
     * @func update
     * @return {Promise<Role>} Object returned from the server with updated changes.
     * @example
     * role.name = 'New name'
     * role.update()
     * .then(role => console.log(role.name))
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
     * role.delete()
     * .catch(err => console.log(err))
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
  const role = mixinToPlainObject(cloneDeep(data))
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
  const roles = mixinToPlainObject(cloneDeep(data))
  roles.items = roles.items.map((entity) => wrapRole(http, entity))
  return freezeSys(roles)
}
