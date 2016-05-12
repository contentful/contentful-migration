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
export default function createSpaceApi ({ http }) {
  const {wrapSpace, wrapSpaceCollection} = entities.space

  /**
   * Gets all spaces
   * @memberof ContentfulClientAPI
   * @return {Promise<Entities.SpaceCollection>} Promise for a collection of Spaces
   * @example
   * client.getSpaces()
   * .then(spaces => console.log(spaces.items))
   */
  function getSpaces () {
    return http.get('')
    .then((response) => wrapSpaceCollection(http, response.data), errorHandler)
  }

  /**
   * Gets a space
   * @memberof ContentfulClientAPI
   * @param {string} id - Space ID
   * @return {Promise<Entities.Space>} Promise for a Space
   * @example
   * client.getSpace('spaceid')
   * .then(space => console.log(space))
   */
  function getSpace (id) {
    return http.get(id)
    .then((response) => wrapSpace(http, response.data), errorHandler)
  }

  /**
   * Creates a space
   * @memberof ContentfulClientAPI
   * @see {Entities.Space}
   * @param {object} data - Object representation of the Space to be created
   * @param {string=} organizationId - Organization ID, if the associated token can manage more than one organization.
   * @return {Promise<Entities.Space>} Promise for the newly created Space
   * @example
   * client.createSpace({name: 'Space Name'})
   * .then(space => console.log(space))
   */
  function createSpace (data, organizationId) {
    return http.post('', data, {
      headers: organizationId ? {'X-Contentful-Organization': organizationId} : {}
    })
    .then((response) => wrapSpace(http, response.data), errorHandler)
  }

  return {
    getSpaces: getSpaces,
    getSpace: getSpace,
    createSpace: createSpace
  }
}
