import cloneDeep from 'lodash/cloneDeep'
import freezeSys from 'contentful-sdk-core/freeze-sys'
import mixinToPlainObject from 'contentful-sdk-core/mixins/to-plain-object'
import wrapHttpClient from 'contentful-sdk-core/wrap-http-client'
import enhanceWithMethods from '../enhance-with-methods'
import createSpaceApi from '../create-space-api'



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
  const spaces = mixinToPlainObject(cloneDeep(data))
  spaces.items = spaces.items.map((entity) => wrapSpace(http, entity))
  return freezeSys(spaces)
}
