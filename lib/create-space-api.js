/**
 * Contentful Space API. Contains methods to access any operations at a space
 * level, such as creating and reading entities contained in a space.
 * @namespace ContentfulSpaceAPI
 */

import createRequestConfig from 'contentful-sdk-core/create-request-config'
import errorHandler from './error-handler'
import entities from './entities'
import omit from 'lodash/omit'

/**
 * @memberof ContentfulSpaceAPI
 * @typedef {Object} ContentfulSpaceAPI
 * @prop {function} delete
 * @prop {function} update
 * @prop {function} getContentType
 * @prop {function} getContentTypes
 * @prop {function} createContentType
 * @prop {function} createContentTypeWithId
 * @prop {function} getEntry
 * @prop {function} getEntries
 * @prop {function} createEntry
 * @prop {function} createEntryWithId
 * @prop {function} getAsset
 * @prop {function} getAssets
 * @prop {function} createAsset
 * @prop {function} createAssetWithId
 * @prop {function} getLocale
 * @prop {function} getLocales
 * @prop {function} createLocale
 * @prop {function} getWebhook
 * @prop {function} getWebhooks
 * @prop {function} createWebhook
 * @prop {function} createWebhookWithId
 * @prop {function} getRole
 * @prop {function} getRoles
 * @prop {function} createRole
 * @prop {function} createRoleWithId
 * @prop {function} getSpaceMembership
 * @prop {function} getSpaceMemberships
 * @prop {function} createSpaceMembership
 * @prop {function} createSpaceMembershipWithId
 * @prop {function} getApiKey
 * @prop {function} getApiKeys
 * @prop {function} createApiKey
 * @prop {function} createApiKeyWithId
 */

/**
 * Creates API object with methods to access the Space API
 * @private
 * @param {Object} params - API initialization params
 * @prop {Object} http - HTTP client instance
 * @prop {Object} entities - Object with wrapper methods for each kind of entity
 * @return {ContentfulSpaceAPI}
 */
export default function createSpaceApi ({
  http
}) {
  const {wrapSpace} = entities.space
  const {wrapContentType, wrapContentTypeCollection} = entities.contentType
  const {wrapEntry, wrapEntryCollection} = entities.entry
  const {wrapAsset, wrapAssetCollection} = entities.asset
  const {wrapLocale, wrapLocaleCollection} = entities.locale
  const {wrapWebhook, wrapWebhookCollection} = entities.webhook
  const {wrapRole, wrapRoleCollection} = entities.role
  const {wrapSpaceMembership, wrapSpaceMembershipCollection} = entities.spaceMembership
  const {wrapApiKey, wrapApiKeyCollection} = entities.apiKey

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
   * @return {Promise<Space.Space>} Promise for the updated space.
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
   * @return {Promise<ContentType.ContentType>} Promise for a Content Type
   * @example
   * space.getContentType('contentTypeId')
   * .then(contentType => console.log(contentType))
   */
  function getContentType (id) {
    return http.get('content_types/' + id)
    .then((response) => wrapContentType(http, response.data), errorHandler)
  }

  /**
   * Gets a collection of Content Types
   * @memberof ContentfulSpaceAPI
   * @param  {Object=} query - Object with search parameters. Check the <a href="https://www.contentful.com/developers/docs/javascript/tutorials/using-js-cda-sdk/#retrieving-entries-with-search-parameters">JS SDK tutorial</a> and the <a href="https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/search-parameters">REST API reference</a> for more details.
   * @return {Promise<ContentType.ContentTypeCollection>} Promise for a collection of Content Types
   * @example
   * space.getContentTypes()
   * .then(contentTypes => console.log(contentTypes.items))
   */
  function getContentTypes (query = {}) {
    return http.get('content_types', createRequestConfig({query: query}))
    .then((response) => wrapContentTypeCollection(http, response.data), errorHandler)
  }

  /**
   * Creates a Content Type
   * @memberof ContentfulSpaceAPI
   * @see {ContentType.ContentType}
   * @param {object} data - Object representation of the Content Type to be created
   * @return {Promise<ContentType.ContentType>} Promise for the newly created Content Type
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
   * @see {ContentType.ContentType}
   * @param {string} id - Content Type ID
   * @param {object} data - Object representation of the Content Type to be created
   * @return {Promise<ContentType.ContentType>} Promise for the newly created Content Type
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
   * @return {Promise<Entry.Entry>} Promise for an Entry
   * @example
   * space.getEntry('entryId')
   * .then(entry => console.log(entry))
   */
  function getEntry (id, query = {}) {
    return http.get('entries/' + id, createRequestConfig({query: query}))
    .then((response) => wrapEntry(http, response.data), errorHandler)
  }

  /**
   * Gets a collection of Entries
   * @memberof ContentfulSpaceAPI
   * @param  {Object=} query - Object with search parameters. Check the <a href="https://www.contentful.com/developers/docs/javascript/tutorials/using-js-cda-sdk/#retrieving-entries-with-search-parameters">JS SDK tutorial</a> and the <a href="https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/search-parameters">REST API reference</a> for more details.
   * @return {Promise<Entry.EntryCollection>} Promise for a collection of Entries
   * @example
   * space.getEntries({content_type: 'contentTypeId'})
   * .then(entries => console.log(entries.items))
   */
  function getEntries (query = {}) {
    return http.get('entries', createRequestConfig({query: query}))
    .then((response) => wrapEntryCollection(http, response.data), errorHandler)
  }

  /**
   * Creates a Entry
   * @memberof ContentfulSpaceAPI
   * @see {Entry.Entry}
   * @param {string} contentTypeId - The Content Type which this Entry is based on
   * @param {object} data - Object representation of the Entry to be created
   * @return {Promise<Entry.Entry>} Promise for the newly created Entry
   * @example
   * space.createEntry('contentTypeId', {
   *   fields: {
   *     title: {
   *       'en-US': 'english content',
   *       'de-DE': 'german content'
   *     }
   *   }
   * })
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
   * @see {Entry.Entry}
   * @param {string} id - Entry ID
   * @param {string} contentTypeId - The Content Type which this Entry is based on
   * @param {object} data - Object representation of the Entry to be created
   * @return {Promise<Entry.Entry>} Promise for the newly created Entry
   * @example
   * space.createEntryWithId('contentTypeId', 'entryId', {
   *   fields: {
   *     title: {
   *       'en-US': 'english content',
   *       'de-DE': 'german content'
   *     }
   *   }
   * })
   * .then(e => console.log(e))
   */
  function createEntryWithId (contentTypeId, id, data) {
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
   * @return {Promise<Asset.Asset>} Promise for an Asset
   * @example
   * space.getAsset('assetId')
   * .then(asset => console.log(asset))
   */
  function getAsset (id, query = {}) {
    return http.get('assets/' + id, createRequestConfig({query: query}))
    .then((response) => wrapAsset(http, response.data), errorHandler)
  }

  /**
   * Gets a collection of Assets
   * @memberof ContentfulSpaceAPI
   * @param  {Object=} query - Object with search parameters. Check the <a href="https://www.contentful.com/developers/docs/javascript/tutorials/using-js-cda-sdk/#retrieving-entries-with-search-parameters">JS SDK tutorial</a> and the <a href="https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/search-parameters">REST API reference</a> for more details.
   * @return {Promise<Asset.AssetCollection>} Promise for a collection of Assets
   * @example
   * space.getAssets()
   * .then(assets => console.log(assets.items))
   */
  function getAssets (query = {}) {
    return http.get('assets', createRequestConfig({query: query}))
    .then((response) => wrapAssetCollection(http, response.data), errorHandler)
  }

  /**
   * Creates a Asset. After creation, call asset.processForLocale or asset.processForAllLocales to start asset processing.
   * @memberof ContentfulSpaceAPI
   * @see {Asset.Asset}
   * @param {object} data - Object representation of the Asset to be created. Note that the field object should have an upload property on asset creation, which will be removed and replaced with an url property when processing is finished.
   * @return {Promise<Asset.Asset>} Promise for the newly created Asset
   * @example
   * space.createAsset({fields: {
   *   fields: {
   *     file: {
   *       'en-US': {
   *          contentType: 'image/jpeg',
   *          fileName: 'filename_english.jpg',
   *          upload: 'http://example.com/filename_original_en.jpg'
   *       },
   *       'de-DE': {
   *          contentType: 'image/jpeg',
   *          fileName: 'filename_german.jpg',
   *          upload: 'http://example.com/filename_original_de.jpg'
   *       }
   *     }
   *   }
   * })
   * .then(e => console.log(e))
   */
  function createAsset (data) {
    return http.post('assets', data)
    .then((response) => wrapAsset(http, response.data), errorHandler)
  }

  /**
   * Creates a Asset with a specific id. After creation, call asset.processForLocale or asset.processForAllLocales to start asset processing.
   * @memberof ContentfulSpaceAPI
   * @see {Asset.Asset}
   * @param {string} id - Asset ID
   * @param {object} data - Object representation of the Asset to be created. Note that the field object should have an upload property on asset creation, which will be removed and replaced with an url property when processing is finished.
   * @return {Promise<Asset.Asset>} Promise for the newly created Asset
   * @example
   * space.createAssetWithId('image', {
   *   fields: {
   *     file: {
   *       'en-US': {
   *          contentType: 'image/jpeg',
   *          fileName: 'filename_english.jpg',
   *          upload: 'http://example.com/filename_original_en.jpg'
   *       },
   *       'de-DE': {
   *          contentType: 'image/jpeg',
   *          fileName: 'filename_german.jpg',
   *          upload: 'http://example.com/filename_original_de.jpg'
   *       }
   *     }
   *   }
   * })
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
   * @return {Promise<Locale.Locale>} Promise for an Locale
   * @example
   * space.getLocale('localeId')
   * .then(locale => console.log(locale))
   */
  function getLocale (id) {
    return http.get('locales/' + id)
    .then((response) => wrapLocale(http, response.data), errorHandler)
  }

  /**
   * Gets a collection of Locales
   * @memberof ContentfulSpaceAPI
   * @return {Promise<Locale.LocaleCollection>} Promise for a collection of Locales
   * @example
   * space.getLocales()
   * .then(locales => console.log(locales.items))
   */
  function getLocales () {
    return http.get('locales')
    .then((response) => wrapLocaleCollection(http, response.data), errorHandler)
  }

  /**
   * Creates a Locale
   * @memberof ContentfulSpaceAPI
   * @see {Locale.Locale}
   * @param {object} data - Object representation of the Locale to be created
   * @return {Promise<Locale.Locale>} Promise for the newly created Locale
   * @example
   * space.createLocale({name: 'German (Germany)', code: 'de-DE'})
   * .then(e => console.log(e))
   */
  function createLocale (data) {
    return http.post('locales', data)
    .then((response) => wrapLocale(http, response.data), errorHandler)
  }

  /**
   * Gets a Webhook
   * @memberof ContentfulSpaceAPI
   * @param  {string} id
   * @return {Promise<Webhook.Webhook>} Promise for a Webhook
   * @example
   * space.getWebhook('id')
   * .then(webhook => console.log(webhook))
   */
  function getWebhook (id) {
    return http.get('webhook_definitions/' + id)
    .then((response) => wrapWebhook(http, response.data), errorHandler)
  }

  /**
   * Gets a collection of Webhooks
   * @memberof ContentfulSpaceAPI
   * @return {Promise<Webhook.WebhookCollection>} Promise for a collection of Webhooks
   * @example
   * space.getWebhooks()
   * .then(webhooks => console.log(webhooks.items))
   */
  function getWebhooks () {
    return http.get('webhook_definitions')
    .then((response) => wrapWebhookCollection(http, response.data), errorHandler)
  }

  /**
   * Creates a Webhook
   * @memberof ContentfulSpaceAPI
   * @see {Webhook.Webhook}
   * @param {object} data - Object representation of the Webhook to be created
   * @return {Promise<Webhook.Webhook>} Promise for the newly created Webhook
   * @example
   * space.createWebhook({})
   * .then(webhook => console.log(webhook))
   */
  function createWebhook (data) {
    return http.post('webhook_definitions', data)
    .then((response) => wrapWebhook(http, response.data), errorHandler)
  }

  /**
   * Creates a Webhook with a specific id
   * @memberof ContentfulSpaceAPI
   * @see {Webhook.Webhook}
   * @param {string} id - Webhook ID
   * @param {object} data - Object representation of the Webhook to be created
   * @return {Promise<Webhook.Webhook>} Promise for the newly created Webhook
   * @example
   * space.createWebhook('id', {})
   * .then(webhook => console.log(webhook))
   */
  function createWebhookWithId (id, data) {
    return http.put('webhook_definitions/' + id, data)
    .then((response) => wrapWebhook(http, response.data), errorHandler)
  }

  /**
   * Gets a Space Membership
   * @memberof ContentfulSpaceAPI
   * @param  {string} id
   * @return {Promise<SpaceMembership.SpaceMembership>} Promise for a Space Membership
   * @example
   * space.getSpaceMembership('id')
   * .then(spaceMembership => console.log(spaceMembership))
   */
  function getSpaceMembership (id) {
    return http.get('space_memberships/' + id)
    .then((response) => wrapSpaceMembership(http, response.data), errorHandler)
  }

  /**
   * Gets a collection of Space Memberships
   * @memberof ContentfulSpaceAPI
   * @return {Promise<SpaceMembership.SpaceMembershipCollection>} Promise for a collection of Space Memberships
   * @example
   * space.getSpaceMemberships()
   * .then(spaceMemberships => console.log(spaceMemberships.items))
   */
  function getSpaceMemberships () {
    return http.get('space_memberships')
    .then((response) => wrapSpaceMembershipCollection(http, response.data), errorHandler)
  }

  /**
   * Creates a Space Membership
   * @memberof ContentfulSpaceAPI
   * @see {SpaceMembership.SpaceMembership}
   * @param {object} data - Object representation of the Space Membership to be created
   * @return {Promise<SpaceMembership.SpaceMembership>} Promise for the newly created Space Membership
   * @example
   * space.createSpaceMembership({})
   * .then(spaceMembership => console.log(spaceMembership))
   */
  function createSpaceMembership (data) {
    return http.post('space_memberships', data)
    .then((response) => wrapSpaceMembership(http, response.data), errorHandler)
  }

  /**
   * Creates a Space Membership with a specific id
   * @memberof ContentfulSpaceAPI
   * @see {SpaceMembership.SpaceMembership}
   * @param {string} id - Space Membership ID
   * @param {object} data - Object representation of the Space Membership to be created
   * @return {Promise<SpaceMembership.SpaceMembership>} Promise for the newly created Space Membership
   * @example
   * space.createSpaceMembership('id', {})
   * .then(spaceMembership => console.log(spaceMembership))
   */
  function createSpaceMembershipWithId (id, data) {
    return http.put('space_memberships/' + id, data)
    .then((response) => wrapSpaceMembership(http, response.data), errorHandler)
  }

  /**
   * Gets a Role
   * @memberof ContentfulSpaceAPI
   * @param  {string} id
   * @return {Promise<Role.Role>} Promise for a Role
   * @example
   * space.getRole('id')
   * .then(role => console.log(role))
   */
  function getRole (id) {
    return http.get('roles/' + id)
    .then((response) => wrapRole(http, response.data), errorHandler)
  }

  /**
   * Gets a collection of Roles
   * @memberof ContentfulSpaceAPI
   * @return {Promise<Role.RoleCollection>} Promise for a collection of Roles
   * @example
   * space.getRoles()
   * .then(roles => console.log(roles.items))
   */
  function getRoles () {
    return http.get('roles')
    .then((response) => wrapRoleCollection(http, response.data), errorHandler)
  }

  /**
   * Creates a Role
   * @memberof ContentfulSpaceAPI
   * @see {Role.Role}
   * @param {object} data - Object representation of the Role to be created
   * @return {Promise<Role.Role>} Promise for the newly created Role
   * @example
   * space.createRole({})
   * .then(role => console.log(role))
   */
  function createRole (data) {
    return http.post('roles', data)
    .then((response) => wrapRole(http, response.data), errorHandler)
  }

  /**
   * Creates a Role with a specific id
   * @memberof ContentfulSpaceAPI
   * @see {Role.Role}
   * @param {string} id - Role ID
   * @param {object} data - Object representation of the Role to be created
   * @return {Promise<Role.Role>} Promise for the newly created Role
   * @example
   * space.createRole('id', {})
   * .then(role => console.log(role))
   */
  function createRoleWithId (id, data) {
    return http.put('roles/' + id, data)
    .then((response) => wrapRole(http, response.data), errorHandler)
  }

  /**
   * Gets a Api Key
   * @memberof ContentfulSpaceAPI
   * @param  {string} id
   * @return {Promise<ApiKey.ApiKey>} Promise for a Api Key
   * @example
   * space.getApiKey('id')
   * .then(apiKey => console.log(apiKey))
   */
  function getApiKey (id) {
    return http.get('api_keys/' + id)
    .then((response) => wrapApiKey(http, response.data), errorHandler)
  }

  /**
   * Gets a collection of Api Keys
   * @memberof ContentfulSpaceAPI
   * @return {Promise<ApiKey.ApiKeyCollection>} Promise for a collection of Api Keys
   * @example
   * space.getApiKeys()
   * .then(apiKeys => console.log(apiKeys.items))
   */
  function getApiKeys () {
    return http.get('api_keys')
    .then((response) => wrapApiKeyCollection(http, response.data), errorHandler)
  }

  /**
   * Creates a Api Key
   * @memberof ContentfulSpaceAPI
   * @see {ApiKey.ApiKey}
   * @param {object} data - Object representation of the Api Key to be created
   * @return {Promise<ApiKey.ApiKey>} Promise for the newly created Api Key
   * @example
   * space.createApiKey({})
   * .then(apiKey => console.log(apiKey))
   */
  function createApiKey (data) {
    return http.post('api_keys', data)
    .then((response) => wrapApiKey(http, response.data), errorHandler)
  }

  /**
   * Creates a Api Key with a specific id
   * @memberof ContentfulSpaceAPI
   * @see {ApiKey.ApiKey}
   * @param {string} id - Api Key ID
   * @param {object} data - Object representation of the Api Key to be created
   * @return {Promise<ApiKey.ApiKey>} Promise for the newly created Api Key
   * @example
   * space.createApiKey('id', {})
   * .then(apiKey => console.log(apiKey))
   */
  function createApiKeyWithId (id, data) {
    return http.put('api_keys/' + id, data)
    .then((response) => wrapApiKey(http, response.data), errorHandler)
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
    createLocale: createLocale,
    getWebhook: getWebhook,
    getWebhooks: getWebhooks,
    createWebhook: createWebhook,
    createWebhookWithId: createWebhookWithId,
    getRole: getRole,
    getRoles: getRoles,
    createRole: createRole,
    createRoleWithId: createRoleWithId,
    getSpaceMembership: getSpaceMembership,
    getSpaceMemberships: getSpaceMemberships,
    createSpaceMembership: createSpaceMembership,
    createSpaceMembershipWithId: createSpaceMembershipWithId,
    getApiKey: getApiKey,
    getApiKeys: getApiKeys,
    createApiKey: createApiKey,
    createApiKeyWithId: createApiKeyWithId
  }
}
