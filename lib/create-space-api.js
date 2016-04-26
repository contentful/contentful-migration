/**
 * Contentful Space API. Contains methods to access any operations at a space
 * level, such as creating and reading entities contained in a space.
 * @namespace ContentfulSpaceAPI
 */

import createRequestConfig from 'contentful-sdk-core/create-request-config'

/**
 * Creates API object with methods to access the Space API
 * @private
 * @param {Object} params - API initialization params
 * @prop {Object} http - HTTP client instance
 * @prop {Object} entities - Object with wrapper methods for each kind of entity
 * @prop {Function} shouldLinksResolve - Link resolver preconfigured with global setting
 * @return {ClientAPI}
 */
export default function createSpaceApi ({
  http,
  entities,
  shouldLinksResolve
}) {
  const {wrapContentType, wrapContentTypeCollection} = entities.contentType
  const {wrapEntry, wrapEntryCollection} = entities.entry
  const {wrapAsset, wrapAssetCollection} = entities.asset

  /**
   * @memberof ContentfulSpaceAPI
   * @typedef {Object} ClientAPI
   * @prop {function} getContentType
   * @prop {function} getContentTypes
   * @prop {function} getEntry
   * @prop {function} getEntries
   * @prop {function} getAsset
   * @prop {function} getAssets
   */
  function errorHandler (error) {
    if (error.data) {
      throw error.data
    }
    throw error
  }

  function deleteSpace () {

  }

  /**
   * Gets a Content Type
   * @memberof ContentfulSpaceAPI
   * @param  {string} id
   * @return {Promise<Entities.ContentType>} Promise for a Content Type
   * @example
   * client.getContentType('contentTypeId')
   * .then(contentType => console.log(contentType))
   */
  function getContentType (id) {
    return http.get('content_types/' + id)
    .then((response) => wrapContentType(response.data), errorHandler)
  }

  /**
   * Gets a collection of Content Types
   * @memberof ContentfulSpaceAPI
   * @param  {Object=} query - Object with search parameters. Check the <a href="https://www.contentful.com/developers/docs/javascript/tutorials/using-js-cda-sdk/#retrieving-entries-with-search-parameters">JS SDK tutorial</a> and the <a href="https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/search-parameters">REST API reference</a> for more details.
   * @return {Promise<Entities.ContentTypeCollection>} Promise for a collection of Content Types
   * @example
   * client.getContentTypes()
   * .then(contentTypes => console.log(contentTypes.items))
   */
  function getContentTypes (query = {}) {
    return http.get('content_types', createRequestConfig({query: query}))
    .then((response) => wrapContentTypeCollection(response.data), errorHandler)
  }

  function createContentType () {

  }

  /**
   * Gets an Entry
   * @memberof ContentfulSpaceAPI
   * @param  {string} id
   * @param  {Object=} query - Object with search parameters. In this method it's only useful for `locale`.
   * @return {Promise<Entities.Entry>} Promise for an Entry
   * @example
   * client.getEntry('entryId')
   * .then(entry => console.log(entry))
   */
  function getEntry (id, query = {}) {
    return http.get('entries/' + id, createRequestConfig({query: query}))
    .then((response) => wrapEntry(response.data), errorHandler)
  }

  /**
   * Gets a collection of Entries
   * @memberof ContentfulSpaceAPI
   * @param  {Object=} query - Object with search parameters. Check the <a href="https://www.contentful.com/developers/docs/javascript/tutorials/using-js-cda-sdk/#retrieving-entries-with-search-parameters">JS SDK tutorial</a> and the <a href="https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/search-parameters">REST API reference</a> for more details.
   * @param  {boolean=} query.resolveLinks - When true, links to other Entries or Assets are resolved. Default: true.
   * @return {Promise<Entities.EntryCollection>} Promise for a collection of Entries
   * @example
   * client.getEntries({content_type: 'contentTypeId'})
   * .then(entries => console.log(entries.items))
   */
  function getEntries (query = {}) {
    const resolveLinks = shouldLinksResolve(query)
    return http.get('entries', createRequestConfig({query: query}))
    .then((response) => wrapEntryCollection(response.data, resolveLinks), errorHandler)
  }

  function createEntry () {

  }

  /**
   * Gets an Asset
   * @memberof ContentfulSpaceAPI
   * @param  {string} id
   * @param  {Object=} query - Object with search parameters. In this method it's only useful for `locale`.
   * @return {Promise<Entities.Asset>} Promise for an Asset
   * @example
   * client.getAsset('assetId')
   * .then(asset => console.log(asset))
   */
  function getAsset (id, query = {}) {
    return http.get('assets/' + id, createRequestConfig({query: query}))
    .then((response) => wrapAsset(response.data), errorHandler)
  }

  /**
   * Gets a collection of Assets
   * @memberof ContentfulSpaceAPI
   * @param  {Object=} query - Object with search parameters. Check the <a href="https://www.contentful.com/developers/docs/javascript/tutorials/using-js-cda-sdk/#retrieving-entries-with-search-parameters">JS SDK tutorial</a> and the <a href="https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/search-parameters">REST API reference</a> for more details.
   * @return {Promise<Entities.AssetCollection>} Promise for a collection of Assets
   * @example
   * client.getAssets()
   * .then(assets => console.log(assets.items))
   */
  function getAssets (query = {}) {
    return http.get('assets', createRequestConfig({query: query}))
    .then((response) => wrapAssetCollection(response.data), errorHandler)
  }

  function createAsset () {

  }

  function getLocale () {

  }

  function createLocale () {

  }

  return {
    delete: deleteSpace,
    getContentType: getContentType,
    getContentTypes: getContentTypes,
    createContentType: createContentType,
    getEntry: getEntry,
    getEntries: getEntries,
    createEntry: createEntry,
    getAsset: getAsset,
    getAssets: getAssets,
    createAsset: createAsset,
    getLocale: getLocale,
    createLocale: createLocale
  }
}
