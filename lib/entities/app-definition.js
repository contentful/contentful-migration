/**
 * App Definition instances
 * @namespace AppDefinition
 */
import cloneDeep from 'lodash/cloneDeep'
import { freezeSys, toPlainObject } from 'contentful-sdk-core'
import enhanceWithMethods from '../enhance-with-methods'
import {
  createUpdateEntity,
  createDeleteEntity
} from '../instance-actions'

const entityPath = 'app_definitions'

/**
 * @memberof AppDefinition
 * @typedef AppDefinition
 * @prop {Meta.Sys} sys - System metadata
 * @prop {object} appDefinition - App Definition config
 * @prop {string} app.name - App name
 * @prop {array} app.locations - Locations where the app can be installed
 * @prop {array} app.src - URL where the root HTML document of the app can be found
 * @prop {function(): Object} toPlainObject() - Returns this App Definition as a plain JS object
 */

function createAppDefinitionApi (http) {
  return {
    /**
     * Sends an update to the server with any changes made to the object's properties
     * @memberof AppDefinition
     * @func update
     * @return {Promise<AppDefinition>} Object returned from the server with updated changes.
     * @example
     * const contentful = require('contentful-management')
     *
     * const client = contentful.createClient({
     *   accessToken: '<content_management_api_key>'
     * })
     *
     * client.getSpace('<space_id>')
     * .then((space) => space.getAppDefinition('<ui_extension_id>'))
     * .then((appDefinition) => {
     *   appDefinition.extension.name = 'New App Definition name'
     *   return appDefinition.update()
     * })
     * .then((appDefinition) => console.log(`App Definition ${appDefinition.sys.id} updated.`))
     * .catch(console.error)
     */
    update: createUpdateEntity({
      http,
      entityPath,
      wrapperMethod: wrapAppDefinition
    }),

    /**
     * Deletes this object on the server.
     * @memberof AppDefinition
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
     * .then((space) => space.getAppDefinition('<ui_extension_id>'))
     * .then((appDefinition) => appDefinition.delete())
     * .then(() => console.log(`App Definition deleted.`))
     * .catch(console.error)
     */
    delete: createDeleteEntity({
      http,
      entityPath
    })
  }
}

/**
 * @private
 * @param {Object} http - HTTP client instance
 * @param {Object} data - Raw App Definition data
 * @return {AppDefinition} Wrapped App Definition data
 */
export function wrapAppDefinition (http, data) {
  const appDefinition = toPlainObject(cloneDeep(data))
  enhanceWithMethods(appDefinition, createAppDefinitionApi(http))
  return freezeSys(appDefinition)
}

/**
 * @private
 * @param {Object} http - HTTP client instance
 * @param {Object} data - Raw App Definition collection data
 * @return {AppDefinitionCollection} Wrapped App Definition collection data
 */
export function wrapAppDefinitionCollection (http, data) {
  const appDefinitions = toPlainObject(cloneDeep(data))
  appDefinitions.items = appDefinitions.items.map((entity) => wrapAppDefinition(http, entity))
  return freezeSys(appDefinitions)
}
