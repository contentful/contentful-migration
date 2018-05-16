import cloneDeep from 'lodash/cloneDeep'
import {freezeSys, toPlainObject} from 'contentful-sdk-core'
import enhanceWithMethods from '../enhance-with-methods'
import createEnvironmentApi from '../create-environment-api'

/**
 * @memberof Environment
 * @typedef Environment
 * @prop {Object} sys - System metadata
 * @prop {string} sys.id - Environment id
 * @prop {string} sys.type - Entity type
 * @prop {string} name - Environment name
 * @prop {function(): Object} toPlainObject() - Returns this Environment as a plain JS object
 */

/**
 * @memberof Environment
 * @typedef SpaceCollection
 * @prop {number} total
 * @prop {number} skip
 * @prop {number} limit
 * @prop {Array<Environment.Environment>} items
 * @prop {function(): Object} toPlainObject() - Returns this Environment collection as a plain JS object
 */

/**
 * This method creates the API for the given environment with all the methods for
 * reading and creating other entities. It also passes down a clone of the
 * http client with a environment id, so the base path for requests now has the
 * environment id already set.
 * @private
 * @param  {Object} http - HTTP client instance
 * @param  {Object} data - API response for a Environment
 * @return {Environment}
 */
export function wrapEnvironment (http, data) {
  const environment = toPlainObject(cloneDeep(data))
  const {
    hostUpload,
    defaultHostnameUpload
  } = http.httpClientParams
  const environmentScopedHttpClient = http.cloneWithNewParams({
    baseURL: http.defaults.baseURL + 'environments/' + environment.sys.id
  })
  const environmentScopedUploadClient = http.cloneWithNewParams({
    baseURL: http.defaults.baseURL,
    host: hostUpload || defaultHostnameUpload
  })
  const environmentApi = createEnvironmentApi({
    http: environmentScopedHttpClient,
    httpUpload: environmentScopedUploadClient
  })
  const enhancedEnvironment = enhanceWithMethods(environment, environmentApi)
  return freezeSys(enhancedEnvironment)
}

/**
 * This method wraps each environment in a collection with the environment API. See wrapEnvironment
 * above for more details.
 * @private
 * @param  {Object} http - HTTP client instance
 * @param  {Object} data - API response for a Environment collection
 * @return {SpaceCollection}
 */
export function wrapEnvironmentCollection (http, data) {
  const environments = toPlainObject(cloneDeep(data))
  environments.items = environments.items.map((entity) => wrapEnvironment(http, entity))
  return freezeSys(environments)
}
