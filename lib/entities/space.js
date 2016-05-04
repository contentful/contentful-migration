import {cloneDeep} from 'lodash/lang'
import {assign} from 'lodash/object'
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
  const spaceScopedHttpClient = wrapHttpClient(http.cloneWithNewParams({
    space: space.sys.id
  }), {
    concurrency: rateLimit,
    delay: rateLimitPeriod,
    maxRetries: maxRetries,
    retryOnTooManyRequests: retryOnTooManyRequests
  })
  const spaceApi = createSpaceApi({
    http: spaceScopedHttpClient
  })
  // enhances space data with the space api
  return Object.freeze(assign(space, spaceApi))
}
