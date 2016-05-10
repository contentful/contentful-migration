import {cloneDeep} from 'lodash/lang'
import {reduce} from 'lodash/collection'
import freezeSys from 'contentful-sdk-core/freeze-sys'
import mixinToPlainObject from 'contentful-sdk-core/mixins/to-plain-object'
import wrapHttpClient from '../wrap-http-client'
import createSpaceApi from '../create-space-api'

/**
 * @memberof Entities
 * @typedef Space
 * @prop {Object} sys - System metadata
 * @prop {string} sys.id - Space id
 * @prop {string} sys.type - Entity type
 * @prop {string} name - Space name
 * @prop {Array<string>} locales - Array with locale codes
 * @prop {function(): Object} toPlainObject() - Returns this Space as a plain JS object
 */

/**
 * @memberof Entities
 * @typedef SpaceCollection
 * @prop {number} total
 * @prop {number} skip
 * @prop {number} limit
 * @prop {Array<Entities.Space>} items
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
  const space = mixinToPlainObject(cloneDeep(data))
  const {rateLimit, rateLimitPeriod, maxRetries, retryOnTooManyRequests} = http.httpClientParams
  const httpClientParams = {
    concurrency: rateLimit,
    delay: rateLimitPeriod,
    maxRetries: maxRetries,
    retryOnTooManyRequests: retryOnTooManyRequests
  }
  const spaceScopedHttpClient = wrapHttpClient(http.cloneWithNewParams({
    space: space.sys.id
  }), httpClientParams)
  const spaceApi = createSpaceApi({
    http: spaceScopedHttpClient
  })
  const enhancedSpace = enhanceSpaceWithApi(space, spaceApi)
  return freezeSys(enhancedSpace)
}

function enhanceSpaceWithApi (space, spaceApi) {
  return reduce(spaceApi, (space, method, methodName) => {
    Object.defineProperty(space, methodName, {
      enumerable: false,
      configurable: false,
      writable: false,
      value: method
    })
    return space
  }, space)
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
  const spaces = mixinToPlainObject(cloneDeep(data))
  spaces.items = spaces.items.map((entity) => wrapSpace(http, entity))
  return freezeSys(spaces)
}
