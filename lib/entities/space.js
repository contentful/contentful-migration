import cloneDeep from 'clone'
import {freezeSys, toPlainObject} from 'contentful-sdk-core'
import enhanceWithMethods from '../enhance-with-methods'
import createSpaceApi from '../create-space-api'

/**
 * @memberof Space
 * @typedef Space
 * @prop {Object} sys - System metadata
 * @prop {string} sys.id - Space id
 * @prop {string} sys.type - Entity type
 * @prop {string} name - Space name
 * @prop {function(): Object} toPlainObject() - Returns this Space as a plain JS object
 */

/**
 * @memberof Space
 * @typedef SpaceCollection
 * @prop {number} total
 * @prop {number} skip
 * @prop {number} limit
 * @prop {Array<Space.Space>} items
 * @prop {function(): Object} toPlainObject() - Returns this Space collection as a plain JS object
 */

/**
 * This method creates the API for the given space with all the methods for
 * reading and creating other entities. It also passes down a clone of the
 * http client with a space id, so the base path for requests now has the
 * space id already set.
 * @private
 * @param  {Object} http - HTTP client instance
 * @param  {Object} data - API response for a Space
 * @return {Space}
 */
export function wrapSpace (http, data) {
  const space = toPlainObject(cloneDeep(data))
  const {
    hostUpload,
    defaultHostnameUpload
  } = http.httpClientParams
  const spaceScopedHttpClient = http.cloneWithNewParams({
    space: space.sys.id
  })
  const spaceScopedUploadClient = http.cloneWithNewParams({
    space: space.sys.id,
    host: hostUpload || defaultHostnameUpload
  })
  const spaceApi = createSpaceApi({
    http: spaceScopedHttpClient,
    httpUpload: spaceScopedUploadClient
  })
  const enhancedSpace = enhanceWithMethods(space, spaceApi)
  return freezeSys(enhancedSpace)
}

/**
 * This method wraps each space in a collection with the space API. See wrapSpace
 * above for more details.
 * @private
 * @param  {Object} http - HTTP client instance
 * @param  {Object} data - API response for a Space collection
 * @return {SpaceCollection}
 */
export function wrapSpaceCollection (http, data) {
  const spaces = toPlainObject(cloneDeep(data))
  spaces.items = spaces.items.map((entity) => wrapSpace(http, entity))
  return freezeSys(spaces)
}
