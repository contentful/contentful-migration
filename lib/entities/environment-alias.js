/**
 * Environment alias instances
 * @namespace EnvironmentAlias
 * @description Environment aliases allow environments to be accessed through another identifier. You must have a V2 org and manually opt-in to this feature from the
 *  environments settings page in the Contentful web app. If you do not have access to this feature, these methods will return 403 errors.
 */
import cloneDeep from 'lodash/cloneDeep'
import { freezeSys, toPlainObject } from 'contentful-sdk-core'
import enhanceWithMethods from '../enhance-with-methods'
import {
  createUpdateEntity
} from '../instance-actions'

/**
 * @memberof EnvironmentAlias
 * @typedef EnvironmentAlias
 * @prop {Object} sys - System metadata
 * @prop {string} sys.id - EnvironmentAlias id
 * @prop {string} sys.type - Entity type
 * @prop {Environment} environment - the environment this alias points to
 * @prop {function(): Object} toPlainObject() - Returns this EnvironmentAlias as a plain JS object
 */

/**
 * @memberof EnvironmentAlias
 * @typedef EnvironmentAliasCollection
 * @prop {number} total
 * @prop {number} skip
 * @prop {number} limit
 * @prop {Array<EnvironmentAlias.EnvironmentAlias>} items
 * @prop {function(): Object} toPlainObject() - Returns this EnvironmentAlias collection as a plain JS object
 */
function createEnvironmentAliasApi (http) {
  return {
    /**
     * Sends an update to the server with any changes made to the object's properties. Currently, you can only change the id of the alias's underlying environment. See the example below.
     * @memberof EnvironmentAlias
     * @func update
     * @return {Promise<EnvironmentAlias>} Object returned from the server with updated changes.
     * @example
     * const contentful = require('contentful-management')
     *
     * const client = contentful.createClient({
     *   accessToken: '<content_management_api_key>'
     * })
     *
     * client.getSpace('<space_id>')
     * .then((space) => space.getEnvironmentAlias('<environment_alias_id>'))
     * .then((alias) => {
     *   alias.environment.sys.id = '<environment_id>'
     *   return alias.update()
     * })
     * .then((alias) => console.log(`alias ${alias.sys.id} updated.`))
     * .catch(console.error)
     */
    update: createUpdateEntity({
      http: http,
      entityPath: 'environment_aliases',
      wrapperMethod: wrapEnvironmentAlias
    })
  }
}

/**
 * @private
 * @param {Object} http - HTTP client instance
 * @param {Object} data - Raw environment alias data
 * @return {EnvironmentAlias} Wrapped environment alias data
 */
export function wrapEnvironmentAlias (http, data) {
  const alias = toPlainObject(cloneDeep(data))
  enhanceWithMethods(alias, createEnvironmentAliasApi(http))
  return freezeSys(alias)
}

/**
 * @private
 * @param {Object} http - HTTP client instance
 * @param {Object} data - Raw environment alias collection data
 * @return {EnvironmentAliasCollection} Wrapped environment alias collection data
 */
export function wrapEnvironmentAliasCollection (http, data) {
  const aliases = toPlainObject(cloneDeep(data))
  aliases.items = aliases.items.map((entity) => wrapEnvironmentAlias(http, entity))
  return freezeSys(aliases)
}
