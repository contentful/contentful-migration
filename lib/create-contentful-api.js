/**
 * Contentful Management API Client. Contains methods which allow access to
 * any operations that can be performed with a management token.
 * @namespace ContentfulClientAPI
 * @see Entities
 */

/**
 * The different kinds of top level entities you can find in Contentful
 * @namespace Entities
 */

/**
 * System metadata. See <a href="https://www.contentful.com/developers/docs/references/content-delivery-api/#/introduction/common-resource-attributes">Common Resource Attributes</a> for more details.
 * @memberof Entities
 * @typedef Sys
 * @prop {string} type
 * @prop {string} id
 * @prop {Entities.Link} space
 * @prop {string} createdAt
 * @prop {string} updatedAt
 * @prop {number} revision
 */

/**
 * Link to another entity. See <a href="https://www.contentful.com/developers/docs/concepts/links/">Links</a> for more details.
 * @memberof Entities
 * @typedef Link
 * @prop {string} type - type of this entity. Always link.
 * @prop {string} id
 * @prop {string} linkType - type of this link. If defined, either Entry or Asset
 */

/**
 * @memberof ContentfulClientAPI
 * @typedef {Object} ClientAPI
 * @prop {function} getSpace
 */

import errorHandler from './error-handler'
import entities from './entities'

/**
 * Creates API object with methods to access functionality from Contentful's
 * Management API
 * @private
 * @param {Object} params - API initialization params
 * @prop {Object} http - HTTP client instance
 * @prop {Function} shouldLinksResolve - Link resolver preconfigured with global setting
 * @return {ClientAPI}
 */
export default function createSpaceApi ({
  http
}) {
  const {wrapSpace} = entities.space

  /**
   * Gets the Space which the client is currently configured to use
   * @memberof ContentfulClientAPI
   * @return {Promise<Entities.Space>} Promise for a Space
   * @example
   * client.getSpace()
   * .then(space => console.log(space))
   */
  function getSpace (id) {
    return http.get(id)
    .then((response) => wrapSpace(http, response.data), errorHandler)
  }

  function createSpace () {

  }

  return {
    getSpace: getSpace,
    createSpace: createSpace
  }
}
