/**
 * Contentful Space API. Contains methods to access any operations at a space
 * level, such as creating and reading entities contained in a space.
 * @namespace ContentfulSpaceAPI
 */

import createRequestConfig from 'contentful-sdk-core/create-request-config'
import errorHandler from './error-handler'
import entities from './entities'
import {omit} from 'lodash/object'

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

/**
 * Creates API object with methods to access the Space API
 * @private
 * @param {Object} params - API initialization params
 * @prop {Object} http - HTTP client instance
 * @prop {Object} entities - Object with wrapper methods for each kind of entity
 * @return {ClientAPI}
 */
export default function createSpaceApi ({
  http
}) {
  const {wrapSpace} = entities.space
  const {wrapContentType, wrapContentTypeCollection} = entities.contentType
  const {wrapEntry, wrapEntryCollection} = entities.entry
  const {wrapAsset, wrapAssetCollection} = entities.asset
  const {wrapLocale, wrapLocaleCollection} = entities.locale

  /**
   * Space instances.
   * @namespace Space
   */

  /**
   * Deletes the space
   * @memberof Space
   * @func delete
   * @return {Promise} Promise for the deletion. It contains no data, but the Promise error case should be handled.
   * @example
   * space.delete()
   * .catch(err => console.log(err))
   */
  function deleteSpace () {
    return http.delete('')
    .then((response) => {}, errorHandler)
  }

  /**
   * Updates the space
   * @memberof Space
   * @func update
   * @return {Promise} Promise for the updated space.
   * @example
   * space.name = 'Updated Space Name'
   * space.update()
   * .then(space => console.log(space))
   */
  function updateSpace () {
    const raw = this.toPlainObject()
    const data = omit(raw, ['sys'])
    return http.put('', data, {
      headers: {
        'X-Contentful-Version': raw.sys.version
      }
    })
    .then((response) => wrapSpace(http, response.data), errorHandler)
  }

  /**
   * Gets a Content Type
   * @memberof ContentfulSpaceAPI
   * @param  {string} id
   * @return {Promise<Entities.ContentType>} Promise for a Content Type
   * @example
   * space.getContentType('contentTypeId')
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
   * space.getContentTypes()
   * .then(contentTypes => console.log(contentTypes.items))
   */
  function getContentTypes (query = {}) {
    return http.get('content_types', createRequestConfig({query: query}))
    .then((response) => wrapContentTypeCollection(response.data), errorHandler)
  }

  /**
   * Creates a Content Type
   * @memberof ContentfulSpaceAPI
   * @see {Entities.ContentType}
   * @param {object} data - Object representation of the Content Type to be created
   * @return {Promise<Entities.ContentType>} Promise for the newly created Content Type
   * @example
   * space.createContentType({name: 'Post', fields: []})
   * .then(ct => console.log(ct))
   */
  function createContentType (data) {
    return http.post('content_types', data)
    .then((response) => wrapContentType(http, response.data), errorHandler)
  }

  /**
   * Creates a Content Type with a specific id
   * @memberof ContentfulSpaceAPI
   * @see {Entities.ContentType}
   * @param {string} id - Content Type ID
   * @param {object} data - Object representation of the Content Type to be created
   * @return {Promise<Entities.ContentType>} Promise for the newly created Content Type
   * @example
   * space.createContentType('post', {name: 'Post', fields: []})
   * .then(ct => console.log(ct))
   */
  function createContentTypeWithId (id, data) {
    return http.put('content_types/' + id, data)
    .then((response) => wrapContentType(http, response.data), errorHandler)
  }

  /**
   * Gets an Entry
   * @memberof ContentfulSpaceAPI
   * @param  {string} id
   * @param  {Object=} query - Object with search parameters. In this method it's only useful for `locale`.
   * @return {Promise<Entities.Entry>} Promise for an Entry
   * @example
   * space.getEntry('entryId')
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
   * @return {Promise<Entities.EntryCollection>} Promise for a collection of Entries
   * @example
   * space.getEntries({content_type: 'contentTypeId'})
   * .then(entries => console.log(entries.items))
   */
  function getEntries (query = {}) {
    return http.get('entries', createRequestConfig({query: query}))
    .then((response) => wrapEntryCollection(response.data), errorHandler)
  }

  /**
   * Creates a Entry
   * @memberof ContentfulSpaceAPI
   * @see {Entities.Entry}
   * @param {string} contentTypeId - The Content Type which this Entry is based on
   * @param {object} data - Object representation of the Entry to be created
   * @return {Promise<Entities.Entry>} Promise for the newly created Entry
   * @example
   * space.createEntry({fields: {}})
   * .then(e => console.log(e))
   */
  function createEntry (contentTypeId, data) {
    return http.post('entries', data, {
      headers: {
        'X-Contentful-Content-Type': contentTypeId
      }
    })
    .then((response) => wrapEntry(http, response.data), errorHandler)
  }

  /**
   * Creates a Entry with a specific id
   * @memberof ContentfulSpaceAPI
   * @see {Entities.Entry}
   * @param {string} id - Entry ID
   * @param {string} contentTypeId - The Content Type which this Entry is based on
   * @param {object} data - Object representation of the Entry to be created
   * @return {Promise<Entities.Entry>} Promise for the newly created Entry
   * @example
   * space.createEntryWithId('post', {fields: {}})
   * .then(e => console.log(e))
   */
  function createEntryWithId (id, contentTypeId, data) {
    return http.put('entries/' + id, data, {
      headers: {
        'X-Contentful-Content-Type': contentTypeId
      }
    })
    .then((response) => wrapEntry(http, response.data), errorHandler)
  }

  /**
   * Gets an Asset
   * @memberof ContentfulSpaceAPI
   * @param  {string} id
   * @param  {Object=} query - Object with search parameters. In this method it's only useful for `locale`.
   * @return {Promise<Entities.Asset>} Promise for an Asset
   * @example
   * space.getAsset('assetId')
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
   * space.getAssets()
   * .then(assets => console.log(assets.items))
   */
  function getAssets (query = {}) {
    return http.get('assets', createRequestConfig({query: query}))
    .then((response) => wrapAssetCollection(response.data), errorHandler)
  }

  /**
   * Creates a Asset
   * @memberof ContentfulSpaceAPI
   * @see {Entities.Asset}
   * @param {object} data - Object representation of the Asset to be created
   * @return {Promise<Entities.Asset>} Promise for the newly created Asset
   * @example
   * space.createAsset({fields: {}})
   * .then(e => console.log(e))
   */
  function createAsset (data) {
    return http.post('assets', data)
    .then((response) => wrapAsset(http, response.data), errorHandler)
  }

  /**
   * Creates a Asset with a specific id
   * @memberof ContentfulSpaceAPI
   * @see {Entities.Asset}
   * @param {string} id - Asset ID
   * @param {object} data - Object representation of the Asset to be created
   * @return {Promise<Entities.Asset>} Promise for the newly created Asset
   * @example
   * space.createAssetWithId('image', {fields: {}})
   * .then(e => console.log(e))
   */
  function createAssetWithId (id, data) {
    return http.put('assets/' + id, data)
    .then((response) => wrapAsset(http, response.data), errorHandler)
  }

  /**
   * Gets a Locale
   * @memberof ContentfulSpaceAPI
   * @param  {string} id
   * @return {Promise<Entities.Locale>} Promise for an Locale
   * @example
   * space.getLocale('localeId')
   * .then(locale => console.log(locale))
   */
  function getLocale (id) {
    return http.get('locales/' + id)
    .then((response) => wrapLocale(response.data), errorHandler)
  }

  /**
   * Gets a collection of Locales
   * @memberof ContentfulSpaceAPI
   * @return {Promise<Entities.LocaleCollection>} Promise for a collection of Locales
   * @example
   * space.getLocales()
   * .then(locales => console.log(locales.items))
   */
  function getLocales () {
    return http.get('locales')
    .then((response) => wrapLocaleCollection(response.data), errorHandler)
  }

  /**
   * Creates a Locale
   * @memberof ContentfulSpaceAPI
   * @see {Entities.Locale}
   * @param {object} data - Object representation of the Locale to be created
   * @return {Promise<Entities.Locale>} Promise for the newly created Locale
   * @example
   * space.createLocale({fields: {}})
   * .then(e => console.log(e))
   */
  function createLocale (data) {
    return http.post('locales', data)
    .then((response) => wrapLocale(http, response.data), errorHandler)
  }

  return {
    delete: deleteSpace,
    update: updateSpace,
    getContentType: getContentType,
    getContentTypes: getContentTypes,
    createContentType: createContentType,
    createContentTypeWithId: createContentTypeWithId,
    getEntry: getEntry,
    getEntries: getEntries,
    createEntry: createEntry,
    createEntryWithId: createEntryWithId,
    getAsset: getAsset,
    getAssets: getAssets,
    createAsset: createAsset,
    createAssetWithId: createAssetWithId,
    getLocale: getLocale,
    getLocales: getLocales,
    createLocale: createLocale
  }
}
