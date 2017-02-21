import { createRequestConfig } from 'contentful-sdk-core'
import errorHandler from './error-handler'
import entities from './entities'
import omit from 'lodash/omit'

/**
 * @typedef {Space} Space
 * @property {Object} sys - System metadata
 * @property {string} sys.id - Space id
 * @property {string} sys.type - Entity type
 * @property {string} name - Space name
 * @property {function(): Promise} delete - Deletes the space
 * @property {function(): Promise<Space>} update - Updates the space
 * @property {function(id: string): Promise<ContentType>} getContentType - Get a contentType by id
 * @property {function(): Promise<ContentTypeCollection>} getContentTypes - Gets a collection of contentTypes
 * @property {function(data:{name: string, fields: Array}): Promise<ContentType>} createContentType - creates a ContentType
 * @property {function(id: string, data: {name: string, fields: Array}): Promise<ContentType>} createContentTypeWithId - creates a ContentType with a specified id
 * @property {function(id: string): Promise<Entry>} getEntry - Gets an Entry with a custom id
 * @property {function(query:Object): Promise<EntryCollection>} getEntries - Gets a collection of entries
 * @property {function(contentTypeId: string, data: {fields: Object}): Promise<Entry>} createEntry - Creates an Entry
 * @property {function(contentTypeId: string, id: string, data: {fields: Object}): Promise<Entry>} createEntryWithId - Creates an Entry with a specified id
 * @property {function(id: string, query: Object): Promise<Asset>} getAsset - Gets an asset by id
 * @property {function(query: Object): Promise<AssetCollection>} getAssets - Gets a collection of assets
 * @property {function(data: {fields: Object}): Promise<Asset>} createAsset - Creates an asset
 * @property {function(id: string, data: {fields: Object}):Promise<Asset>} createAssetWithId - Creates an asset with the custom id
 * @property {function(): Promise<Locale>} getLocale - Gets a locale
 * @property {function(): Promise<LocaleCollection>} getLocales - Gets a collection of locales
 * @property {function(data:{name: string, code: string}): Promise<Locale>} createLocale - Creates a Locale
 * @property {function(id:string): Promise<webhook>} getWebhook - Gets a webhook
 * @property {function(): Promise<WebhookCollection>} getWebhooks - Gets a collection of webhooks
 * @property {function(data: Object): Promise<Webhook>} createWebhook - Creates a webhook
 * @property {function(id: string, data: Object)} createWebhookWithId - Creates a webhook with a custom id
 * @property {function(id: string): Promise<Role>} getRole - Gets a Role
 * @property {function(): Promise<RoleCollection>} getRoles - Gets a collection of roles
 * @property {function(data: Object): Promise<Role>} createRole - Creates a role
 * @property {function(id: string, data: Object): Promise<Role>} createRoleWithId - Creates a Role with a custom id
 * @property {function(id: string): Promise<SpaceMembership>} getSpaceMembership - Gets a space membership
 * @property {function(): Promise<SpaceMembershipCollection>} getSpaceMemberships - Gets a space memnerships collection
 * @property {function(data: Object): Promise<SpaceMembership>} createSpaceMembership - Creates a space membership
 * @property {function(id: string, data: Object): Promise<SpaceMembership>} createSpaceMembershipWithId - Creates a space membership with a custom id
 * @property {function(id: string): Promise<ApiKey>} getApiKey - Gets an api key
 * @property {function(): Promise<ApiKeyCollection>} getApiKeys - Gets a collection of api keys
 * @property {function(data: Object): Promise<ApiKey>} createApiKey - Creates an api key
 * @property {function(id: string, data: Object): Promise<ApiKey>} createSpaceApi.createApiKeyWithId - Creates an api key with a custom id
 * @property {function(): Object} toPlainObject - Returns this Space as a plain JS object
 * @example
 * // require contentful-management
 * var contentfulManagement = require('contentful-management')
 * var client = contentfulManagement.createClient({
 * // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
 * accessToken: 'YOUR_ACCESS_TOKEN'
 * })
 *
 * //================================================================================================
 * // To get a space object you have two options:
 * //
 * // 1. by creating a new space
 * //
 * // var space = await client.createSpace({name: "My new space"})
 * //
 * // OR
 * //
 * // 2. Get an existing one by id
 * //
 * // var space = await client.getSpace('SPACE_ID')
 * //================================================================================================
 *
 * // We'll pick option 2.
 * //
 * // A space object will be like so
 * // {
 * //   "sys": {
 * //     "type": "Space",
 * //     "id": "cfexampleapi",
 * //     "version": 3,
 * //     "createdAt": "2015-05-18T11:29:46.809Z",
 * //     "createdBy": {
 * //       "sys": {
 * //         "type": "Link",
 * //         "linkType": "User",
 * //         "id": "4FLrUHftHW3v2BLi9fzfjU"
 * //       }
 * //     },
 * //     "updatedAt": "2015-05-18T11:29:46.809Z",
 * //     "updatedBy": {
 * //       "sys": {
 * //         "type": "Link",
 * //         "linkType": "User",
 * //         "id": "4FLrUHftHW3v2BLi9fzfjU"
 * //       }
 * //     }
 * //   },
 * //   "name": "Contentful Example API"
 * // }
 * var space = await client.getSpace('cfexampleapi')
 *
 * // Example Deleting a space
 * space.delete()
 * .catch(err => console.log(err))
 *
 * // Example updating a space
 * space.name = 'Updated Space Name'
 * space.update()
 * .then(space => console.log(space.name) // `Updated Space Name`)
 *
 * // Example getting a contentType
 * space.getContentType('contentTypeId')
 * .then(contentType => console.log(contentType)) // @see {ContentType}
 *
 * // Example getting an editorInterface for a contentType
 * // an editorInterface is a set of configuration that defines how a field look like
 * // example singleLine, etc...
 * space.getEditorInterfaceForContentType('contentTypeId')
 * .then(editorInterface => console.log(editorInterface))
 *
 * // Example creating a contentType
 * space.createContentType({name: 'Post', fields: []})
 * .then(ct => console.log(ct))
 *
 * // Example Creating a contentType with a custom id
 * space.createContentTypeWithId('post', {name: 'Post', fields: []})
 * .then(ct => console.log(ct))
 *
 * // Example getting all entries form a space where contentType is `contentTypeId`
 * // you can add more query params along with the content_type key, like 'limit':'1000', 'order':'sys.createdAt' and more
 * // for more infos about the query check https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/search-parameters
 * space.getEntries({content_type: 'contentTypeId'})
 * .then(entries => console.log(entries.items))
 *
 * // Example Creating an entry with a localized title field
 * // you can fill in all the fields defined in the contentType with the id 'contentTypeId'
 * // so if you have another field of type text for example called description, you can add 'description' in the fields object
 * // that will be sent to the server
 * space.createEntry('contentTypeId', {
 *   fields: {
 *     title: {
 *       'en-US': 'english content',
 *       'de-DE': 'german content'
 *     }
 *   }
 * })
 * .then(e => console.log(e))
 *
 * // Example getting an entry by id
 * space.getEntry('entryId')
 *  .then(entity => console.log(entry))
 *
 * // Example getting assets
 * space.getAssets()
 *  .then(response => console.log(response.items))
 *
 * // Example getting an asset
 * space.getAsset('assetId')
 * .then(asset => console.log(asset)) // @see {Asset}
 *
 * // Example creating an asset
 * // After creation, call asset.processForLocale or asset.processForAllLocales to start asset processing.
 * // After processing the upload property name will be replace by 'url'
 * // if you want to create an asset with a custom id please use the space.createAssetWithId('id', data)
 * space.createAsset(
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
 * )
 * .then(asset => asset.processForAllLocales())
 */

/**
 * @typedef {SpaceCollection} SpaceCollection
 * @property {number} total - Total amount of records in the server
 * @property {number} skip - A starting point of the collection
 * @property {number} limit - Amount of records in collection
 * @property {Array<Space>} items - An array of spaces
 * @property {function(): Object} toPlainObject - Returns this Space collection as a plain JS object
 * @example
 * // require contentful-management
 * var contentfulManagement = require('contentful-management')
 * var client = contentfulManagement.createClient({
 * // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
 * accessToken: 'YOUR_ACCESS_TOKEN'
 * })
 *
 * client.getSpaces()
 *   .then((spaceCollection) => {
 *     console.log(spaceCollection.items) // list of spaces @see {Space}
 *   })
 */

/**
 * Creates API object with methods to access the Space API
 * @private
 * @param {http: Object} params - API initialization params
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
  const {wrapEditorInterface} = entities.editorInterface

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
   */
  function getContentType (id) {
    return http.get('content_types/' + id)
    .then((response) => wrapContentType(http, response.data), errorHandler)
  }

  /**
   * Gets an EditorInterface for a ContentType
   * @memberof ContentfulSpaceAPI
   * @param  {string} contentTypeId
   * @return {Promise<EditorInterface.EditorInterface>} Promise for an EditorInterface
   * @example
   * space.getEditorInterfaceForContentType('contentTypeId')
   * .then(editorInterface => console.log(editorInterface))
   */
  function getEditorInterfaceForContentType (contentTypeId) {
    return http.get('content_types/' + contentTypeId + '/editor_interface')
    .then((response) => wrapEditorInterface(http, response.data), errorHandler)
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
   * @see {ContentType}
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
   * Creates a Content Type with a custom id
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
   * Warning: if you are using the select operator, when saving, any field that was not selected will be removed
   * from your entry in the backend
   * @memberof ContentfulSpaceAPI
   * @param  {string} id
   * @param  {Object=} query - Object with search parameters. In this method it's only useful for `locale`.
   * @return {Promise<Entry.Entry>} Promise for an Entry
   * @example
   * space.getEntry('entryId')
   * .then(entry => console.log(entry))
   */
  function getEntry (id, query = {}) {
    normalizeSelect(query)
    return http.get('entries/' + id, createRequestConfig({query: query}))
    .then((response) => wrapEntry(http, response.data), errorHandler)
  }

  /**
   * Gets a collection of Entries
   * Warning: if you are using the select operator, when saving, any field that was not selected will be removed
   * from your entry in the backend
   * @memberof ContentfulSpaceAPI
   * @param  {Object=} query - Object with search parameters. Check the <a href="https://www.contentful.com/developers/docs/javascript/tutorials/using-js-cda-sdk/#retrieving-entries-with-search-parameters">JS SDK tutorial</a> and the <a href="https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/search-parameters">REST API reference</a> for more details.
   * @return {Promise<Entry.EntryCollection>} Promise for a collection of Entries
   * @example
   * space.getEntries({content_type: 'contentTypeId'})
   * .then(entries => console.log(entries.items))
   */
  function getEntries (query = {}) {
    normalizeSelect(query)
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
   * Creates a Entry with a custom id
   * @memberof ContentfulSpaceAPI
   * @see {Entry.Entry}
   * @param {string} contentTypeId - The Content Type which this Entry is based on
   * @param {string} id - Entry ID
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
   * Warning: if you are using the select operator, when saving, any field that was not selected will be removed
   * from your entry in the backend
   * @memberof ContentfulSpaceAPI
   * @param  {string} id
   * @param  {Object=} query - Object with search parameters. In this method it's only useful for `locale`.
   * @return {Promise<Asset.Asset>} Promise for an Asset
   * @example
   * space.getAsset('assetId')
   * .then(asset => console.log(asset))
   */
  function getAsset (id, query = {}) {
    normalizeSelect(query)
    return http.get('assets/' + id, createRequestConfig({query: query}))
    .then((response) => wrapAsset(http, response.data), errorHandler)
  }

  /**
   * Gets a collection of Assets
   * Warning: if you are using the select operator, when saving, any field that was not selected will be removed
   * from your entry in the backend
   * @memberof ContentfulSpaceAPI
   * @param  {Object=} query - Object with search parameters. Check the <a href="https://www.contentful.com/developers/docs/javascript/tutorials/using-js-cda-sdk/#retrieving-entries-with-search-parameters">JS SDK tutorial</a> and the <a href="https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/search-parameters">REST API reference</a> for more details.
   * @return {Promise<Asset.AssetCollection>} Promise for a collection of Assets
   * @example
   * space.getAssets()
   * .then(assets => console.log(assets.items))
   */
  function getAssets (query = {}) {
    normalizeSelect(query)
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
   * space.createAsset(
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
   * )
   * .then(e => console.log(e))
   */
  function createAsset (data) {
    return http.post('assets', data)
    .then((response) => wrapAsset(http, response.data), errorHandler)
  }

  /**
   * Creates a Asset with a custom id. After creation, call asset.processForLocale or asset.processForAllLocales to start asset processing.
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
   * Creates a Webhook with a custom id
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
   * Creates a Space Membership with a custom id
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
   * Creates a Role with a custom id
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
   * Creates a Api Key with a custom id
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

  /*
   * sdk relies heavily on sys metadata
   * so we cannot omit the sys property on sdk level
   * */
  function normalizeSelect (query) {
    if (query.select && !/sys/i.test(query.select)) {
      query.select += ',sys'
    }
  }

  return {
    delete: deleteSpace,
    update: updateSpace,
    getContentType: getContentType,
    getContentTypes: getContentTypes,
    createContentType: createContentType,
    createContentTypeWithId: createContentTypeWithId,
    getEditorInterfaceForContentType: getEditorInterfaceForContentType,
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
