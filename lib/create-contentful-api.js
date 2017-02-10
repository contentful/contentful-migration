import errorHandler from './error-handler'
import entities from './entities'

/**
 * @typedef {ClientAPI} ClientAPI
 * @property {function(id: string): Promise<Space>} getSpace - Gets a space with the spcified id
 * @property {function(): Promise<SpaceCollection>} getSpaces - Gets a collection of spaces
 * @property {function(data: {name: string}): Promise<Space>} createSpace - Creates a space
 */

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
   * @memberof ClientAPI   * @return {Promise<Space.SpaceCollection>} Promise for a collection of Spaces
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
   * @memberof ClientAPI
   * @param {string} id - Space ID
   * @return {Promise<Space.Space>} Promise for a Space
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
   * @memberof ClientAPI
   * @see {Space.Space}
   * @param {object} data - Object representation of the Space to be created
   * @param {string=} organizationId - Organization ID, if the associated token can manage more than one organization.
   * @return {Promise<Space.Space>} Promise for the newly created Space
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
