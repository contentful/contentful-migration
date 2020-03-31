/**
 * UI Extension instances
 * @namespace AppInstallation
 */

import { toPlainObject, freezeSys } from 'contentful-sdk-core'
import cloneDeep from 'lodash/cloneDeep'
import errorHandler from '../error-handler'
import enhanceWithMethods from '../enhance-with-methods'
import {
  createDeleteEntity
} from '../instance-actions'

/**
 * @memberof AppInstallation
 * @typedef AppInstallation
 * @prop {Meta.Sys} sys - System metadata
 * @prop {object} parameters - App Installation specific configuration variables
 * @prop {function(): Object} toPlainObject() - Returns this App Installation as a plain JS object
 *
 */

function createAppInstallationApi (http) {
  return {
    /**
     * Sends an update to the server with any changes made to the object's properties
     * @memberof AppInstallation
     * @func update
     * @return {Promise<AppInstallation>} Object returned from the server with updated changes.
     * @example
     * const contentful = require('contentful-management')
     *
     * const client = contentful.createClient({
     *   accessToken: '<content_management_api_key>'
     * })
     *
     * client.getSpace('<space_id>')
     * .then((space) => space.getEnvironment('<environment_id>'))
     * .then((environment) => environment.getAppInstallation('<app_definition_id>'))
     * .then((appInstallation) => {
     *    appInstallation.parameters.someParameter = 'New Value'
     *    return appInstallation.update()
     * })
     * .then((appInstallation) => console.log(`App installation ${appInstallation.sys.id} was updated`))
     * .catch(console.error)
     */
    update: function () {
      const raw = this.toPlainObject()
      const data = cloneDeep(raw)
      delete data.sys
      return http.put(`app_installations/${this.sys.appDefinition.sys.id}`, data)
        .then((response) => wrapAppInstallation(http, response.data), errorHandler)
    },

    /**
     * Deletes this object on the server.
     * @memberof AppInstallation
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
     * .then((space) => space.getEnvironment('<environment_id>'))
     * .then((environment) => environment.delete())
     * .then(() => console.log(`App installation deleted.`))
     * .catch(console.error)
     */
    delete: createDeleteEntity({
      http: http,
      entityPath: 'app_installations'
    })
  }
}

/**
 * @private
 * @param {Object} http - HTTP client instance
 * @param {Object} data - Raw App Installation data
 * @return {AppInstallation} Wrapped App installation data
 */
export function wrapAppInstallation (http, data) {
  const appInstallation = toPlainObject(cloneDeep(data))
  enhanceWithMethods(appInstallation, createAppInstallationApi(http))
  return freezeSys(appInstallation)
}

/**
 * @private
 * @param {Object} http - HTTP client instance
 * @param {Object} data - Raw App installation collection data
 * @return {AppInstallationCollection} Wrapped App installation collection data
 */
export function wrapAppInstallationCollection (http, data) {
  const appInstallations = toPlainObject(cloneDeep(data))
  appInstallations.items = appInstallations.items.map(appInstallationEntity => wrapAppInstallation(http, appInstallationEntity))
  return freezeSys(appInstallations)
}
