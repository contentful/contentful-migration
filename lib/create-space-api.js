/**
 * Contentful Space API. Contains methods to access any operations at a space
 * level, such as creating and reading entities contained in a space.
 * @namespace ContentfulSpaceAPI
 */

import cloneDeep from 'lodash/cloneDeep'
import { createRequestConfig } from 'contentful-sdk-core'
import errorHandler from './error-handler'
import entities from './entities'

/**
 * @memberof ContentfulSpaceAPI
 * @typedef {object} ContentfulSpaceAPI
 * @prop {function} delete
 * @prop {function} update
 * @prop {function} getEnvironment
 * @prop {function} getEnvironments
 * @prop {function} createEnvironment
 * @prop {function} createEnvironmentWithId
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
 * @prop {function} getUiExtension
 * @prop {function} getUiExtensions
 * @prop {function} createUiExtension
 * @prop {function} createUiExtensionWithId
 * @prop {function} getEntrySnapshots
 * @prop {function} getContentTypeSnapshots
 */

function raiseDeprecationWarning (method) {
  console.warn(
    [
      `Deprecated: Space.${method}() will be removed in future major versions.`,
      null,
      `Please migrate your code to use Environment.${method}():`,
      `https://contentful.github.io/contentful-management.js/contentful-management/latest/ContentfulEnvironmentAPI.html#.${method}`,
      null
    ].join('\n')
  )
}

/**
 * Creates API object with methods to access the Space API
 * @private
 * @param {object} params - API initialization params
 * @prop {object} http - HTTP client instance
 * @prop {object} entities - Object with wrapper methods for each kind of entity
 * @return {ContentfulSpaceAPI}
 */
export default function createSpaceApi ({
  http,
  httpUpload
}) {
  const {wrapSpace} = entities.space
  const {wrapEnvironment, wrapEnvironmentCollection} = entities.environment
  const {wrapContentType, wrapContentTypeCollection} = entities.contentType
  const {wrapEntry, wrapEntryCollection} = entities.entry
  const {wrapAsset, wrapAssetCollection} = entities.asset
  const {wrapLocale, wrapLocaleCollection} = entities.locale
  const {wrapWebhook, wrapWebhookCollection} = entities.webhook
  const {wrapRole, wrapRoleCollection} = entities.role
  const {wrapSpaceMembership, wrapSpaceMembershipCollection} = entities.spaceMembership
  const {wrapApiKey, wrapApiKeyCollection} = entities.apiKey
  const {wrapPreviewApiKey, wrapPreviewApiKeyCollection} = entities.previewApiKey
  const {wrapSnapshotCollection} = entities.snapshot
  const {wrapEditorInterface} = entities.editorInterface
  const {wrapUpload} = entities.upload
  const {wrapUiExtension, wrapUiExtensionCollection} = entities.uiExtension

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
   * const contentful = require('contentful-management')
   *
   * const client = contentful.createClient({
   *   accessToken: '<content_management_api_key>'
   * })
   *
   * client.getSpace('<space_id>')
   * .then((space) => space.delete())
   * .then(() => console.log('Space deleted.'))
   * .catch(console.error)
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
   * const contentful = require('contentful-management')
   *
   * const client = contentful.createClient({
   *   accessToken: '<content_management_api_key>'
   * })
   *
   * client.getSpace('<space_id>')
   * .then((space) => {
   *   space.name = 'New name'
   *   return space.update()
   * })
   * .then((space) => console.log(`Space ${space.sys.id} renamed.`)
   * .catch(console.error)
  */
  function updateSpace () {
    const raw = this.toPlainObject()
    const data = cloneDeep(raw)
    delete data.sys
    return http.put('', data, {
      headers: {
        'X-Contentful-Version': raw.sys.version
      }
    })
      .then((response) => wrapSpace(http, response.data), errorHandler)
  }

  /**
   * Gets an environment
   * @memberof ContentfulSpaceAPI
   * @param {string} id - Environment ID
   * @return {Promise<Environment.Environment>} Promise for an Environment
   * @example
   * const contentful = require('contentful-management')
   *
   * const client = contentful.createClient({
   *   accessToken: '<content_management_api_key>'
   * })
   *
   * client.getSpace('<space_id>')
   * .then((space) => space.getEnvironment('<environement_id>'))
   * .then((environment) => console.log(environment))
   * .catch(console.error)
   */
  function getEnvironment (id) {
    return http.get('environments/' + id)
      .then((response) => wrapEnvironment(http, response.data), errorHandler)
  }

  /**
   * Gets a collection of Environments
   * @memberof ContentfulSpaceAPI
   * @return {Promise<Environment.EnvironmentCollection>} Promise for a collection of Environment
   * @example
   * const contentful = require('contentful-management')
   *
   * const client = contentful.createClient({
   *   accessToken: '<content_management_api_key>'
   * })
   *
   * client.getSpace('<space_id>')
   * .then((space) => space.getEnvironments())
   * .then((response) => console.log(response.items))
   * .catch(console.error)
  */
  function getEnvironments () {
    return http.get('environments')
      .then((response) => wrapEnvironmentCollection(http, response.data), errorHandler)
  }

  /**
   * Creates an Environement
   * @memberof ContentfulSpaceAPI
   * @see {Environment}
   * @param {object=} data - Object representation of the Environment to be created
   * @return {Promise<Environment.Environment>} Promise for the newly created Environment
   * @example
   * const contentful = require('contentful-management')
   *
   * const client = contentful.createClient({
   *   accessToken: '<content_management_api_key>'
   * })
   *
   * client.getSpace('<space_id>')
   * .then((space) => space.createEnvironment({ name: 'Staging' }))
   * .then((environment) => console.log(environment))
   * .catch(console.error)
   */
  function createEnvironment (data = {}) {
    return http.post('environments', data)
      .then((response) => wrapEnvironment(http, response.data), errorHandler)
  }

  /**
   * Creates an Environment with a custom ID
   * @memberof ContentfulSpaceAPI
   * @see {Environment}
   * @param {string} id - Environment ID
   * @param {object=} data - Object representation of the Environment to be created
   * @param {string=} sourceEnvironmentId - ID of the source environment that will be copied to create the new environment. Default is "master"
   * @return {Promise<Environment.Environment>} Promise for the newly created Environment
   * @example
   * const contentful = require('contentful-management')
   *
   * const client = contentful.createClient({
   *   accessToken: '<content_management_api_key>'
   * })
   *
   * client.getSpace('<space_id>')
   * .then((space) => space.createEnvironmentWithId('<environment-id>', { name: 'Staging'}, 'master'))
   * .then((environment) => console.log(environment))
   * .catch(console.error)
   */
  function createEnvironmentWithId (id, data = {}, sourceEnvironmentId) {
    return http.put('environments/' + id, data, {
      headers: sourceEnvironmentId ? { 'X-Contentful-Source-Environment': sourceEnvironmentId } : {}
    })
      .then((response) => wrapEnvironment(http, response.data), errorHandler)
  }

  /**
   * Gets a Content Type
   * @deprecated since version 5.0
   * @memberof ContentfulSpaceAPI
   * @param {string} id - Content Type ID
   * @return {Promise<ContentType.ContentType>} Promise for a Content Type
   * @example
   * const contentful = require('contentful-management')
   *
   * const client = contentful.createClient({
   *   accessToken: '<content_management_api_key>'
   * })
   *
   * client.getSpace('<space_id>')
   * .then((space) => space.getContentType('<content_type_id>'))
   * .then((contentType) => console.log(contentType))
   * .catch(console.error)
   */
  function getContentType (id) {
    raiseDeprecationWarning('getContentType')
    return http.get('content_types/' + id)
      .then((response) => wrapContentType(http, response.data), errorHandler)
  }

  /**
   * Gets an EditorInterface for a ContentType
   * @deprecated since version 5.0
   * @memberof ContentfulSpaceAPI
   * @param {string} contentTypeId - Content Type ID
   * @return {Promise<EditorInterface.EditorInterface>} Promise for an EditorInterface
   * @example
   * const contentful = require('contentful-management')
   *
   * const client = contentful.createClient({
   *   accessToken: '<content_management_api_key>'
   * })
   *
   * client.getSpace('<space_id>')
   * .then((space) => space.getEditorInterfaceForContentType('<content_type_id>'))
   * .then((EditorInterface) => console.log(EditorInterface))
   * .catch(console.error)
   */
  function getEditorInterfaceForContentType (contentTypeId) {
    raiseDeprecationWarning('getEditorInterfaceForContentType')
    return http.get('content_types/' + contentTypeId + '/editor_interface')
      .then((response) => wrapEditorInterface(http, response.data), errorHandler)
  }

  /**
   * Gets a collection of Content Types
   * @deprecated since version 5.0
   * @memberof ContentfulSpaceAPI
   * @param {object=} query - Object with search parameters. Check the <a href="https://www.contentful.com/developers/docs/javascript/tutorials/using-js-cda-sdk/#retrieving-entries-with-search-parameters">JS SDK tutorial</a> and the <a href="https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/search-parameters">REST API reference</a> for more details.
   * @return {Promise<ContentType.ContentTypeCollection>} Promise for a collection of Content Types
   * @example
   * const contentful = require('contentful-management')
   *
   * const client = contentful.createClient({
   *   accessToken: '<content_management_api_key>'
   * })
   *
   * client.getSpace('<space_id>')
   * .then((space) => space.getContentTypes())
   * .then((response) => console.log(response.items))
   * .catch(console.error)
  */
  function getContentTypes (query = {}) {
    raiseDeprecationWarning('getContentTypes')
    return http.get('content_types', createRequestConfig({query: query}))
      .then((response) => wrapContentTypeCollection(http, response.data), errorHandler)
  }

  /**
   * Creates a Content Type
   * @deprecated since version 5.0
   * @memberof ContentfulSpaceAPI
   * @see {ContentType}
   * @param {object} data - Object representation of the Content Type to be created
   * @return {Promise<ContentType.ContentType>} Promise for the newly created Content Type
   * @example
   * const contentful = require('contentful-management')
   *
   * const client = contentful.createClient({
   *   accessToken: '<content_management_api_key>'
   * })
   *
   * client.getSpace('<space_id>')
   * .then((space) => space.createContentType({
   *   name: 'Blog Post',
   *   fields: [
   *     {
   *       id: 'title',
   *       name: 'Title',
   *       required: true,
   *       localized: false,
   *       type: 'Text'
   *     }
   *   ]
   * }))
   * .then((contentType) => console.log(contentType))
   * .catch(console.error)
   */
  function createContentType (data) {
    raiseDeprecationWarning('createContentType')
    return http.post('content_types', data)
      .then((response) => wrapContentType(http, response.data), errorHandler)
  }

  /**
   * Creates a Content Type with a custom ID
   * @deprecated since version 5.0
   * @memberof ContentfulSpaceAPI
   * @see {ContentType.ContentType}
   * @param {string} id - Content Type ID
   * @param {object} data - Object representation of the Content Type to be created
   * @return {Promise<ContentType.ContentType>} Promise for the newly created Content Type
   * @example
   * const contentful = require('contentful-management')
   *
   * const client = contentful.createClient({
   *   accessToken: '<content_management_api_key>'
   * })
   *
   * client.getSpace('<space_id>')
   * .then((space) => space.createContentTypeWithId('<content-type-id>', {
   *   name: 'Blog Post',
   *   fields: [
   *     {
   *       id: 'title',
   *       name: 'Title',
   *       required: true,
   *       localized: false,
   *       type: 'Text'
   *     }
   *   ]
   * }))
   * .then((contentType) => console.log(contentType))
   * .catch(console.error)
   */
  function createContentTypeWithId (id, data) {
    raiseDeprecationWarning('createContentTypeWithId')
    return http.put('content_types/' + id, data)
      .then((response) => wrapContentType(http, response.data), errorHandler)
  }

  /**
   * Gets an Entry
   * Warning: if you are using the select operator, when saving, any field that was not selected will be removed
   * from your entry in the backend
   * @deprecated since version 5.0
   * @memberof ContentfulSpaceAPI
   * @param {string} id - Entry ID
   * @param {object=} query - Object with search parameters. In this method it's only useful for `locale`.
   * @return {Promise<Entry.Entry>} Promise for an Entry
   * @example
   * const contentful = require('contentful-management')
   *
   * const client = contentful.createClient({
   *   accessToken: '<content_management_api_key>'
   * })
   *
   * client.getSpace('<space_id>')
   * .then((space) => space.getEntry('<entry-id>'))
   * .then((entry) => console.log(entry))
   * .catch(console.error)
   */
  function getEntry (id, query = {}) {
    raiseDeprecationWarning('getEntry')
    normalizeSelect(query)
    return http.get('entries/' + id, createRequestConfig({query: query}))
      .then((response) => wrapEntry(http, response.data), errorHandler)
  }

  /**
   * Gets a collection of Entries
   * Warning: if you are using the select operator, when saving, any field that was not selected will be removed
   * from your entry in the backend
   * @deprecated since version 5.0
   * @memberof ContentfulSpaceAPI
   * {object=} query - Object with search parameters. Check the <a href="https://www.contentful.com/developers/docs/javascript/tutorials/using-js-cda-sdk/#retrieving-entries-with-search-parameters">JS SDK tutorial</a> and the <a href="https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/search-parameters">REST API reference</a> for more details.
   * @return {Promise<Entry.EntryCollection>} Promise for a collection of Entries
   * @example
   * const contentful = require('contentful-management')
   *
   * const client = contentful.createClient({
   *   accessToken: '<content_management_api_key>'
   * })
   *
   * client.getSpace('<space_id>')
   * .then((space) => space.getEntries({'content_type': 'foo'})) // you can add more queries as 'key': 'value'
   * .then((response) => console.log(response.items))
   * .catch(console.error)
   */
  function getEntries (query = {}) {
    raiseDeprecationWarning('getEntries')
    normalizeSelect(query)
    return http.get('entries', createRequestConfig({query: query}))
      .then((response) => wrapEntryCollection(http, response.data), errorHandler)
  }

  /**
   * Creates a Entry
   * @deprecated since version 5.0
   * @memberof ContentfulSpaceAPI
   * @see {Entry.Entry}
   * @param {string} contentTypeId - The Content Type which this Entry is based on
   * @param {object} data - Object representation of the Entry to be created
   * @return {Promise<Entry.Entry>} Promise for the newly created Entry
   * @example
   * const contentful = require('contentful-management')
   *
   * const client = contentful.createClient({
   *   accessToken: '<content_management_api_key>'
   * })
   *
   * client.getSpace('<space_id>')
   * .then((space) => space.createEntry('<content_type_id>', {
   *   fields: {
   *     title: {
   *       'en-US': 'Entry title'
   *     }
   *   }
   * }))
   * .then((entry) => console.log(entry))
   * .catch(console.error)
   */
  function createEntry (contentTypeId, data) {
    raiseDeprecationWarning('createEntry')
    return http.post('entries', data, {
      headers: {
        'X-Contentful-Content-Type': contentTypeId
      }
    })
      .then((response) => wrapEntry(http, response.data), errorHandler)
  }

  /**
   * Creates a Entry with a custom ID
   * @deprecated since version 5.0
   * @memberof ContentfulSpaceAPI
   * @see {Entry.Entry}
   * @param {string} contentTypeId - The Content Type which this Entry is based on
   * @param {string} id - Entry ID
   * @param {object} data - Object representation of the Entry to be created
   * @return {Promise<Entry.Entry>} Promise for the newly created Entry
   * @example
   * const contentful = require('contentful-management')
   *
   * const client = contentful.createClient({
   *   accessToken: '<content_management_api_key>'
   * })
   *
   * // Create entry
   * client.getSpace('<space_id>')
   * .then((space) => space.createEntryWithId('<content_type_id>', '<entry_id>', {
   *   fields: {
   *     title: {
   *       'en-US': 'Entry title'
   *     }
   *   }
   * }))
   * .then((entry) => console.log(entry))
   * .catch(console.error)
   */
  function createEntryWithId (contentTypeId, id, data) {
    raiseDeprecationWarning('createEntryWithId')
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
   * @deprecated since version 5.0
   * @memberof ContentfulSpaceAPI
   * @param {string} id - Asset ID
   * @param {object=} query - Object with search parameters. In this method it's only useful for `locale`.
   * @return {Promise<Asset.Asset>} Promise for an Asset
   * @example
   * const contentful = require('contentful-management')
   *
   * const client = contentful.createClient({
   *   accessToken: '<content_management_api_key>'
   * })
   *
   * client.getSpace('<space_id>')
   * .then((space) => space.getAsset('<asset_id>'))
   * .then((asset) => console.log(asset))
   * .catch(console.error)
  */
  function getAsset (id, query = {}) {
    raiseDeprecationWarning('getAsset')
    normalizeSelect(query)
    return http.get('assets/' + id, createRequestConfig({query: query}))
      .then((response) => wrapAsset(http, response.data), errorHandler)
  }

  /**
   * Gets a collection of Assets
   * Warning: if you are using the select operator, when saving, any field that was not selected will be removed
   * from your entry in the backend
   * @deprecated since version 5.0
   * @memberof ContentfulSpaceAPI
   * @param {object=} query - Object with search parameters. Check the <a href="https://www.contentful.com/developers/docs/javascript/tutorials/using-js-cda-sdk/#retrieving-entries-with-search-parameters">JS SDK tutorial</a> and the <a href="https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/search-parameters">REST API reference</a> for more details.
   * @return {Promise<Asset.AssetCollection>} Promise for a collection of Assets
   * @example
   * const contentful = require('contentful-management')
   *
   * const client = contentful.createClient({
   *   accessToken: '<content_management_api_key>'
   * })
   *
   * client.getSpace('<space_id>')
   * .then((space) => space.getAssets())
   * .then((response) => console.log(response.items))
   * .catch(console.error)
  */
  function getAssets (query = {}) {
    raiseDeprecationWarning('getAssets')
    normalizeSelect(query)
    return http.get('assets', createRequestConfig({query: query}))
      .then((response) => wrapAssetCollection(http, response.data), errorHandler)
  }

  /**
   * Creates a Asset. After creation, call asset.processForLocale or asset.processForAllLocales to start asset processing.
   * @deprecated since version 5.0
   * @memberof ContentfulSpaceAPI
   * @see {Asset.Asset}
   * @param {object} data - Object representation of the Asset to be created. Note that the field object should have an upload property on asset creation, which will be removed and replaced with an url property when processing is finished.
   * @return {Promise<Asset.Asset>} Promise for the newly created Asset
   * @example
   * const client = contentful.createClient({
   *   accessToken: '<content_management_api_key>'
   * })
   *
   * // Create asset
   * client.getSpace('<space_id>')
   * .then((space) => space.createAsset({
   *   fields: {
   *     title: {
   *       'en-US': 'Playsam Streamliner'
   *    },
   *    file: {
   *       'en-US': {
   *         contentType: 'image/jpeg',
   *        fileName: 'example.jpeg',
   *        upload: 'https://example.com/example.jpg'
   *      }
   *    }
   *   }
   * }))
   * .then((asset) => asset.process())
   * .then((asset) => console.log(asset))
   * .catch(console.error)
   */
  function createAsset (data) {
    return http.post('assets', data)
      .then((response) => wrapAsset(http, response.data), errorHandler)
  }

  /**
   * Creates a Asset with a custom ID. After creation, call asset.processForLocale or asset.processForAllLocales to start asset processing.
   * @deprecated since version 5.0
   * @memberof ContentfulSpaceAPI
   * @see {Asset.Asset}
   * @param {string} id - Asset ID
   * @param {object} data - Object representation of the Asset to be created. Note that the field object should have an upload property on asset creation, which will be removed and replaced with an url property when processing is finished.
   * @return {Promise<Asset.Asset>} Promise for the newly created Asset
   * @example
   * const client = contentful.createClient({
   *   accessToken: '<content_management_api_key>'
   * })
   *
   * // Create asset
   * client.getSpace('<space_id>')
   * .then((space) => space.createAssetWithId('<asset_id>', {
   *   title: {
   *     'en-US': 'Playsam Streamliner'
   *   },
   *   file: {
   *     'en-US': {
   *       contentType: 'image/jpeg',
   *       fileName: 'example.jpeg',
   *       upload: 'https://example.com/example.jpg'
   *     }
   *   }
   * }))
   * .then((asset) => asset.process())
   * .then((asset) => console.log(asset))
   * .catch(console.error)
   */
  function createAssetWithId (id, data) {
    raiseDeprecationWarning('createAssetWithId')
    return http.put('assets/' + id, data)
      .then((response) => wrapAsset(http, response.data), errorHandler)
  }

  /**
   * Creates a Asset based on files. After creation, call asset.processForLocale or asset.processForAllLocales to start asset processing.
   * @deprecated since version 5.0
   * @memberof ContentfulSpaceAPI
   * @see {Asset.Asset}
   * @param {object} data - Object representation of the Asset to be created. Note that the field object should have an uploadFrom property on asset creation, which will be removed and replaced with an url property when processing is finished.
   * @param {object} data.fields.file.[LOCALE].file - Can be a string, an ArrayBuffer or a Stream.
   * @return {Promise<Asset.Asset>} Promise for the newly created Asset
   * @example
   * const client = contentful.createClient({
   *   accessToken: '<content_management_api_key>'
   * })
   * client.getSpace('<space_id>')
   * .then((space) => space.createAssetFromFiles({
   *   fields: {
   *     file: {
   *       'en-US': {
   *          contentType: 'image/jpeg',
   *          fileName: 'filename_english.jpg',
   *          file: createReadStream('path/to/filename_english.jpg')
   *       },
   *       'de-DE': {
   *          contentType: 'image/svg+xml',
   *          fileName: 'filename_german.svg',
   *          file: '<svg><path fill="red" d="M50 50h150v50H50z"/></svg>'
   *       }
   *     }
   *   }
   * }))
   * .then((asset) => console.log(asset))
   * .catch(console.error)
   */
  function createAssetFromFiles (data) {
    raiseDeprecationWarning('createAssetFromFiles')
    const { file } = data.fields
    return Promise.all(
      Object.keys(file).map((locale) => {
        const { contentType, fileName } = file[locale]
        return createUpload(file[locale])
          .then((upload) => {
            return {
              [locale]: {
                contentType,
                fileName,
                uploadFrom: {
                  sys: {
                    type: 'Link',
                    linkType: 'Upload',
                    id: upload.sys.id
                  }
                }
              }
            }
          })
      })
    )
      .then((uploads) => {
        data.fields.file = uploads.reduce((fieldsData, upload) => {
          return {
            ...fieldsData,
            ...upload
          }
        }, {})
        return createAsset(data)
      })
      .catch(errorHandler)
  }

  /**
   * Creates a Upload.
   * @deprecated since version 5.0
   * @memberof ContentfulSpaceAPI
   * @param {object} data - Object with file information.
   * @param {object} data.file - Actual file content. Can be a string, an ArrayBuffer or a Stream.
   * @return {Promise<Upload>} Upload object containing information about the uploaded file.
   * @example
   * const client = contentful.createClient({
   *   accessToken: '<content_management_api_key>'
   * })
   * const uploadStream = createReadStream('path/to/filename_english.jpg')
   * client.getSpace('<space_id>')
   * .then((space) => space.createUpload({file: uploadStream, 'image/png'})
   * .then((upload) => console.log(upload))
   * .catch(console.error)
   */
  function createUpload (data) {
    raiseDeprecationWarning('createUpload')
    const { file } = data
    if (!file) {
      return Promise.reject(new Error('Unable to locate a file to upload.'))
    }
    return httpUpload.post('uploads', file, {
      headers: {
        'Content-Type': 'application/octet-stream'
      }
    })
      .then(uploadResponse => {
        return wrapUpload(httpUpload, uploadResponse.data)
      })
      .catch(errorHandler)
  }

  /**
   * Gets an Upload
   * @deprecated since version 5.0
   * @memberof ContentfulSpaceAPI
   * @param {string} id - Upload ID
   * @return {Promise<Upload>} Promise for an Upload
   * @example
   * const client = contentful.createClient({
   *   accessToken: '<content_management_api_key>'
   * })
   * const uploadStream = createReadStream('path/to/filename_english.jpg')
   * client.getSpace('<space_id>')
   * .then((space) => space.getUpload('<upload-id>')
   * .then((upload) => console.log(upload))
   * .catch(console.error)
   */
  function getUpload (id) {
    raiseDeprecationWarning('getUpload')
    return httpUpload.get('uploads/' + id)
      .then((response) => wrapUpload(http, response.data))
      .catch(errorHandler)
  }

  /**
   * Gets a Locale
   * @deprecated since version 5.0
   * @memberof ContentfulSpaceAPI
   * @param {string} id - Locale ID
   * @return {Promise<Locale.Locale>} Promise for an Locale
   * @example
   * const contentful = require('contentful-management')
   *
   * const client = contentful.createClient({
   *   accessToken: '<content_management_api_key>'
   * })
   *
   * client.getSpace('<space_id>')
   * .then((space) => space.getLocale('<locale_id>'))
   * .then((locale) => console.log(locale))
   * .catch(console.error)
  */
  function getLocale (id) {
    raiseDeprecationWarning('getLocale')
    return http.get('locales/' + id)
      .then((response) => wrapLocale(http, response.data), errorHandler)
  }

  /**
   * Gets a collection of Locales
   * @deprecated since version 5.0
   * @memberof ContentfulSpaceAPI
   * @return {Promise<Locale.LocaleCollection>} Promise for a collection of Locales
   * @example
   * const contentful = require('contentful-management')
   *
   * const client = contentful.createClient({
   *   accessToken: '<content_management_api_key>'
   * })
   *
   * client.getSpace('<space_id>')
   * .then((space) => space.getLocales())
   * .then((response) => console.log(response.items))
   * .catch(console.error)
  */
  function getLocales () {
    raiseDeprecationWarning('getLocales')
    return http.get('locales')
      .then((response) => wrapLocaleCollection(http, response.data), errorHandler)
  }

  /**
   * Creates a Locale
   * @deprecated since version 5.0
   * @memberof ContentfulSpaceAPI
   * @see {Locale.Locale}
   * @param {object} data - Object representation of the Locale to be created
   * @return {Promise<Locale.Locale>} Promise for the newly created Locale
   * @example
   * const contentful = require('contentful-management')
   *
   * const client = contentful.createClient({
   *   accessToken: '<content_management_api_key>'
   * })
   *
   * // Create locale
   * client.getSpace('<space_id>')
   * .then((space) => space.createLocale({
   *   name: 'German (Austria)',
   *   code: 'de-AT',
   *   fallbackCode: 'de-DE',
   *   optional: true
   * }))
   * .then((locale) => console.log(locale))
   * .catch(console.error)
   */
  function createLocale (data) {
    raiseDeprecationWarning('createLocale')
    return http.post('locales', data)
      .then((response) => wrapLocale(http, response.data), errorHandler)
  }

  /**
   * Gets a Webhook
   * @memberof ContentfulSpaceAPI
   * @param {string} id - Webhook ID
   * @return {Promise<Webhook.Webhook>} Promise for a Webhook
   * @example
   * const contentful = require('contentful-management')
   *
   * const client = contentful.createClient({
   *   accessToken: '<content_management_api_key>'
   * })
   *
   * client.getSpace('<space_id>')
   * .then((space) => space.getWebhook('<webhook_id>'))
   * .then((webhook) => console.log(webhook))
   * .catch(console.error)
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
   * const contentful = require('contentful-management')
   *
   * const client = contentful.createClient({
   *   accessToken: '<content_management_api_key>'
   * })
   *
   * client.getSpace('<space_id>')
   * .then((space) => space.getWebhooks())
   * .then((response) => console.log(response.items))
   * .catch(console.error)
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
   * const contentful = require('contentful-management')
   *
   * client.getSpace('<space_id>')
   * .then((space) => space.createWebhook({
   *   'name': 'My webhook',
   *   'url': 'https://www.example.com/test',
   *   'topics': [
   *     'Entry.create',
   *     'ContentType.create',
   *     '*.publish',
   *     'Asset.*'
   *   ]
   * }))
   * .then((webhook) => console.log(webhook))
   * .catch(console.error)
   */
  function createWebhook (data) {
    return http.post('webhook_definitions', data)
      .then((response) => wrapWebhook(http, response.data), errorHandler)
  }

  /**
   * Creates a Webhook with a custom ID
   * @memberof ContentfulSpaceAPI
   * @see {Webhook.Webhook}
   * @param {string} id - Webhook ID
   * @param {object} data - Object representation of the Webhook to be created
   * @return {Promise<Webhook.Webhook>} Promise for the newly created Webhook
   * @example
   * const contentful = require('contentful-management')
   *
   * client.getSpace('<space_id>')
   * .then((space) => space.createWebhookWithId('<webhook_id>', {
   *   'name': 'My webhook',
   *   'url': 'https://www.example.com/test',
   *   'topics': [
   *     'Entry.create',
   *     'ContentType.create',
   *     '*.publish',
   *     'Asset.*'
   *   ]
   * }))
   * .then((webhook) => console.log(webhook))
   * .catch(console.error)
   */
  function createWebhookWithId (id, data) {
    return http.put('webhook_definitions/' + id, data)
      .then((response) => wrapWebhook(http, response.data), errorHandler)
  }

  /**
   * Gets a Space Membership
   * @memberof ContentfulSpaceAPI
   * @param {string} id - Space Membership ID
   * @return {Promise<SpaceMembership.SpaceMembership>} Promise for a Space Membership
   * @example
   * const contentful = require('contentful-management')
   *
   * client.getSpace('<space_id>')
   * .then((space) => space.getSpaceMembership('id'))
   * .then((spaceMembership) => console.log(spaceMembership))
   * .catch(console.error)
   */
  function getSpaceMembership (id) {
    return http.get('space_memberships/' + id)
      .then((response) => wrapSpaceMembership(http, response.data), errorHandler)
  }

  /**
   * Gets a collection of Space Memberships
   * @memberof ContentfulSpaceAPI
   * @param {object=} query - Object with search parameters. Check the <a href="https://www.contentful.com/developers/docs/javascript/tutorials/using-js-cda-sdk/#retrieving-entries-with-search-parameters">JS SDK tutorial</a> and the <a href="https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/search-parameters">REST API reference</a> for more details.
   * @return {Promise<SpaceMembership.SpaceMembershipCollection>} Promise for a collection of Space Memberships
   * @example
   * const contentful = require('contentful-management')
   *
   * client.getSpace('<space_id>')
   * .then((space) => space.getSpaceMemberships({'limit': 100})) // you can add more queries as 'key': 'value'
   * .then((response) => console.log(response.items))
   * .catch(console.error)
   */
  function getSpaceMemberships (query = {}) {
    return http.get('space_memberships', createRequestConfig({query: query}))
      .then((response) => wrapSpaceMembershipCollection(http, response.data), errorHandler)
  }

  /**
   * Creates a Space Membership
   * @memberof ContentfulSpaceAPI
   * @see {SpaceMembership.SpaceMembership}
   * @param {object} data - Object representation of the Space Membership to be created
   * @return {Promise<SpaceMembership.SpaceMembership>} Promise for the newly created Space Membership
   * @example
   * const contentful = require('contentful-management')
   *
   * const client = contentful.createClient({
   *   accessToken: '<content_management_api_key>'
   * })
   *
   * client.getSpace('<space_id>')
   * .then((space) => space.createSpaceMembership({
   *   admin: false,
   *   roles: [
   *     {
   *       type: 'Link',
   *       linkType: 'Role',
   *       id: '<role_id>'
   *     }
   *   ],
   *   email: 'foo@example.com'
   * }))
   * .then((spaceMembership) => console.log(spaceMembership))
   * .catch(console.error)
   */
  function createSpaceMembership (data) {
    return http.post('space_memberships', data)
      .then((response) => wrapSpaceMembership(http, response.data), errorHandler)
  }

  /**
   * Creates a Space Membership with a custom ID
   * @memberof ContentfulSpaceAPI
   * @see {SpaceMembership.SpaceMembership}
   * @param {string} id - Space Membership ID
   * @param {object} data - Object representation of the Space Membership to be created
   * @return {Promise<SpaceMembership.SpaceMembership>} Promise for the newly created Space Membership
   * @example
   * const contentful = require('contentful-management')
   *
   * const client = contentful.createClient({
   *   accessToken: '<content_management_api_key>'
   * })
   *
   * client.getSpace('<space_id>')
   * .then((space) => space.createSpaceMembershipWithId('<space-membership-id>', {
   *   admin: false,
   *   roles: [
   *     {
   *       type: 'Link',
   *       linkType: 'Role',
   *       id: '<role_id>'
   *     }
   *   ],
   *   email: 'foo@example.com'
   * }))
   * .then((spaceMembership) => console.log(spaceMembership))
   * .catch(console.error)
   */
  function createSpaceMembershipWithId (id, data) {
    return http.put('space_memberships/' + id, data)
      .then((response) => wrapSpaceMembership(http, response.data), errorHandler)
  }

  /**
   * Gets a Role
   * @memberof ContentfulSpaceAPI
   * @param {string} id - Role ID
   * @return {Promise<Role.Role>} Promise for a Role
   * @example
   * const contentful = require('contentful-management')
   *
   * const client = contentful.createClient({
   *   accessToken: '<content_management_api_key>'
   * })
   *
   * client.getSpace('<space_id>')
   * .then((space) => space.createRole({
   *   fields: {
   *     title: {
   *       'en-US': 'Role title'
   *     }
   *   }
   * }))
   * .then((role) => console.log(role))
   * .catch(console.error)
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
   * const contentful = require('contentful-management')
   *
   * const client = contentful.createClient({
   *   accessToken: '<content_management_api_key>'
   * })
   *
   * client.getSpace('<space_id>')
   * .then((space) => space.getRoles())
   * .then((response) => console.log(response.items))
   * .catch(console.error)
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
   * const contentful = require('contentful-management')
   *
   * const client = contentful.createClient({
   *   accessToken: '<content_management_api_key>'
   * })
   * client.getSpace('<space_id>')
   * .then((space) => space.createRole({
   *   name: 'My Role',
   *   description: 'foobar role',
   *   permissions: {
   *     ContentDelivery: 'all',
   *     ContentModel: ['read'],
   *     Settings: []
   *   },
   *   policies: [
   *     {
   *       effect: 'allow',
   *       actions: 'all',
   *       constraint: {
   *         and: [
   *           {
   *             equals: [
   *               { doc: 'sys.type' },
   *               'Entry'
   *             ]
   *           },
   *           {
   *             equals: [
   *               { doc: 'sys.type' },
   *               'Asset'
   *             ]
   *           }
   *         ]
   *       }
   *     }
   *   ]
   * }))
   * .then((role) => console.log(role))
   * .catch(console.error)
   */
  function createRole (data) {
    return http.post('roles', data)
      .then((response) => wrapRole(http, response.data), errorHandler)
  }

  /**
   * Creates a Role with a custom ID
   * @memberof ContentfulSpaceAPI
   * @see {Role.Role}
   * @param {string} id - Role ID
   * @param {object} data - Object representation of the Role to be created
   * @return {Promise<Role.Role>} Promise for the newly created Role
   * @example
   * const contentful = require('contentful-management')
   *
   * const client = contentful.createClient({
   *   accessToken: '<content_management_api_key>'
   * })
   * client.getSpace('<space_id>')
   * .then((space) => space.createRoleWithId('<role-id>', {
   *   name: 'My Role',
   *   description: 'foobar role',
   *   permissions: {
   *     ContentDelivery: 'all',
   *     ContentModel: ['read'],
   *     Settings: []
   *   },
   *   policies: [
   *     {
   *       effect: 'allow',
   *       actions: 'all',
   *       constraint: {
   *         and: [
   *           {
   *             equals: [
   *               { doc: 'sys.type' },
   *               'Entry'
   *             ]
   *           },
   *           {
   *             equals: [
   *               { doc: 'sys.type' },
   *               'Asset'
   *             ]
   *           }
   *         ]
   *       }
   *     }
   *   ]
   * }))
   * .then((role) => console.log(role))
   * .catch(console.error)
   */
  function createRoleWithId (id, data) {
    return http.put('roles/' + id, data)
      .then((response) => wrapRole(http, response.data), errorHandler)
  }

  /**
   * Gets a Api Key
   * @memberof ContentfulSpaceAPI
   * @param {string} id - API Key ID
   * @return {Promise<ApiKey.ApiKey>} Promise for a Api Key
   * @example
   * const contentful = require('contentful-management')
   *
   * const client = contentful.createClient({
   *   accessToken: '<content_management_api_key>'
   * })
   *
   * client.getSpace('<space_id>')
   * .then((space) => space.getApiKey('<apikey-id>'))
   * .then((apikey) => console.log(apikey))
   * .catch(console.error)
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
   * const contentful = require('contentful-management')
   *
   * const client = contentful.createClient({
   *   accessToken: '<content_management_api_key>'
   * })
   *
   * client.getSpace('<space_id>')
   * .then((space) => space.getApiKeys())
   * .then((response) => console.log(response.items))
   * .catch(console.error)
   */
  function getApiKeys () {
    return http.get('api_keys')
      .then((response) => wrapApiKeyCollection(http, response.data), errorHandler)
  }

  /**
   * Gets a preview Api Key
   * @memberof ContentfulSpaceAPI
   * @param {string} id - Preview API Key ID
   * @return {Promise<PreviewApiKey.PreviewApiKey>} Promise for a Preview Api Key
   * @example
   * const contentful = require('contentful-management')
   *
   * const client = contentful.createClient({
   *   accessToken: '<content_management_api_key>'
   * })
   *
   * client.getSpace('<space_id>')
   * .then((space) => space.getPreviewApiKey('<preview-apikey-id>'))
   * .then((previewApikey) => console.log(previewApikey))
   * .catch(console.error)
   */
  function getPreviewApiKey (id) {
    return http.get('preview_api_keys/' + id)
      .then((response) => wrapPreviewApiKey(http, response.data), errorHandler)
  }

  /**
   * Gets a collection of preview Api Keys
   * @memberof ContentfulSpaceAPI
   * @return {Promise<PreviewApiKey.PreviewApiKeyCollection>} Promise for a collection of Preview Api Keys
   * @example
   * const contentful = require('contentful-management')
   *
   * const client = contentful.createClient({
   *   accessToken: '<content_management_api_key>'
   * })
   *
   * client.getSpace('<space_id>')
   * .then((space) => space.getPreviewApiKeys())
   * .then((response) => console.log(response.items))
   * .catch(console.error)
   */
  function getPreviewApiKeys () {
    return http.get('preview_api_keys')
      .then((response) => wrapPreviewApiKeyCollection(http, response.data), errorHandler)
  }
  /**
   * Creates a Api Key
   * @memberof ContentfulSpaceAPI
   * @see {ApiKey.ApiKey}
   * @param {object} data - Object representation of the Api Key to be created
   * @return {Promise<ApiKey.ApiKey>} Promise for the newly created Api Key
   * @example
   * const contentful = require('contentful-management')
   *
   * const client = contentful.createClient({
   *   accessToken: '<content_management_api_key>'
   * })
   *
   * client.getSpace('<space_id>')
   * .then((space) => space.createApiKey({
   *   name: 'API Key name',
   *   environments:[
   *    {
   *     sys: {
   *      type: 'Link'
   *      linkType: 'Environment',
   *      id:'<environment_id>'
   *     }
   *    }
   *   ]
   *   }
   * }))
   * .then((apiKey) => console.log(apiKey))
   * .catch(console.error)
  */
  function createApiKey (data) {
    return http.post('api_keys', data)
      .then((response) => wrapApiKey(http, response.data), errorHandler)
  }

  /**
   * Creates a Api Key with a custom ID
   * @memberof ContentfulSpaceAPI
   * @see {ApiKey.ApiKey}
   * @param {string} id - Api Key ID
   * @param {object} data - Object representation of the Api Key to be created
   * @return {Promise<ApiKey.ApiKey>} Promise for the newly created Api Key
   * @example
   * const contentful = require('contentful-management')
   *
   * const client = contentful.createClient({
   *   accessToken: '<content_management_api_key>'
   * })
   *
   * client.getSpace('<space_id>')
   * .then((space) => space.createApiKeyWithId('<api-key-id>', {
   *   name: 'API Key name'
   *   environments:[
   *    {
   *     sys: {
   *      type: 'Link'
   *      linkType: 'Environment',
   *      id:'<environment_id>'
   *     }
   *    }
   *   ]
   *   }
   * }))
   * .then((apiKey) => console.log(apiKey))
   * .catch(console.error)
   */
  function createApiKeyWithId (id, data) {
    return http.put('api_keys/' + id, data)
      .then((response) => wrapApiKey(http, response.data), errorHandler)
  }

  /**
   * Gets an UI Extension
   * @deprecated since version 5.0
   * @memberof ContentfulSpaceAPI
   * @param {string} id - UI Extension ID
   * @return {Promise<UiExtension.UiExtension>} Promise for an UI Extension
   * @example
   * const contentful = require('contentful-management')
   *
   * const client = contentful.createClient({
   *   accessToken: '<content_management_api_key>'
   * })
   *
   * client.getSpace('<space_id>')
   * .then((space) => space.getUiExtension('<extension-id>'))
   * .then((uiExtension) => console.log(uiExtension))
   * .catch(console.error)
   */
  function getUiExtension (id) {
    raiseDeprecationWarning('getUiExtension')
    return http.get('extensions/' + id)
      .then((response) => wrapUiExtension(http, response.data), errorHandler)
  }

  /**
   * Gets a collection of UI Extension
   * @deprecated since version 5.0
   * @memberof ContentfulSpaceAPI
   * @return {Promise<UiExtension.UiExtensionCollection>} Promise for a collection of UI Extensions
   * @example
   * const contentful = require('contentful-management')
   *
   * const client = contentful.createClient({
   *   accessToken: '<content_management_api_key>'
   * })
   *
   * client.getSpace('<space_id>')
   * .then((space) => space.getUiExtensions()
   * .then((response) => console.log(response.items))
   * .catch(console.error)
   */
  function getUiExtensions () {
    raiseDeprecationWarning('getUiExtensions')
    return http.get('extensions')
      .then((response) => wrapUiExtensionCollection(http, response.data), errorHandler)
  }

  /**
   * Creates a UI Extension
   * @deprecated since version 5.0
   * @memberof ContentfulSpaceAPI
   * @see {UiExtension.UiExtension}
   * @param {object} data - Object representation of the UI Extension to be created
   * @return {Promise<UiExtension.UiExtension>} Promise for the newly created UI Extension
   * @example
   * const contentful = require('contentful-management')
   *
   * const client = contentful.createClient({
   *   accessToken: '<content_management_api_key>'
   * })
   *
   * client.getSpace('<space_id>')
   * .then((space) => space.createUiExtension({
   *   extension: {
   *     name: 'My awesome extension',
   *     src: 'https://example.com/my',
   *     fieldTypes: [
   *       {
   *         type: 'Symbol'
   *       },
   *       {
   *         type: 'Text'
   *       }
   *     ],
   *     sidebar: false
   *   }
   * }))
   * .then((uiExtension) => console.log(uiExtension))
   * .catch(console.error)
   */
  function createUiExtension (data) {
    raiseDeprecationWarning('createUiExtension')
    return http.post('extensions', data)
      .then((response) => wrapUiExtension(http, response.data), errorHandler)
  }

  /**
   * Creates a UI Extension with a custom ID
   * @deprecated since version 5.0
   * @memberof ContentfulSpaceAPI
   * @see {UiExtension.UiExtension}
   * @param {string} id - UI Extension ID
   * @param {object} data - Object representation of the UI Extension to be created
   * @return {Promise<UiExtension.UiExtension>} Promise for the newly created UI Extension
   * @example
   * const contentful = require('contentful-management')
   *
   * const client = contentful.createClient({
   *   accessToken: '<content_management_api_key>'
   * })
   *
   * client.getSpace('<space_id>')
   * .then((space) => space.createUiExtensionWithId('<extension_id>', {
   *   extension: {
   *     name: 'My awesome extension',
   *     src: 'https://example.com/my',
   *     fieldTypes: [
   *       {
   *         type: 'Symbol'
   *       },
   *       {
   *         type: 'Text'
   *       }
   *     ],
   *     sidebar: false
   *   }
   * }))
   * .then((uiExtension) => console.log(uiExtension))
   * .catch(console.error)
   */
  function createUiExtensionWithId (id, data) {
    raiseDeprecationWarning('createUiExtensionWithId')
    return http.put('extensions/' + id, data)
      .then((response) => wrapUiExtension(http, response.data), errorHandler)
  }

  /**
   * Gets all snapshots of an entry
   * @deprecated since version 5.0
   * @memberof ContentfulSpaceAPI
   * @func getEntrySnapshots
   * @param {string} entryId - Entry ID
   * @param {object=} query - additional query paramaters
   * @return {Promise<Snapshot.SnapshotCollection>} Promise for a collection of Entry Snapshots
   * @example
   * const contentful = require('contentful-management')
   *
   * const client = contentful.createClient({
   *   accessToken: '<content_management_api_key>'
   * })
   *
   * client.getSpace('<space_id>')
   * .then((space) => space.getEntrySnapshots('<entry_id>'))
   * .then((snapshots) => console.log(snapshots.items))
   * .catch(console.error)
   */
  function getEntrySnapshots (entryId, query = {}) {
    raiseDeprecationWarning('getEntrySnapshots')
    return http.get(`entries/${entryId}/snapshots`, createRequestConfig({query: query}))
      .then((response) => wrapSnapshotCollection(http, response.data), errorHandler)
  }

  /**
   * Gets all snapshots of a contentType
   * @deprecated since version 5.0
   * @memberof ContentfulSpaceAPI
   * @func getContentTypeSnapshots
   * @param {string} contentTypeId - Content Type ID
   * @param {object=} query - additional query paramaters
   * @return {Promise<Snapshot.SnapshotCollection>} Promise for a collection of Content Type Snapshots
   * @example
   * const contentful = require('contentful-management')
   *
   * const client = contentful.createClient({
   *   accessToken: '<content_management_api_key>'
   * })
   *
   * client.getSpace('<space_id>')
   * .then((space) => space.getContentTypeSnapshots('<contentTypeId>'))
   * .then((snapshots) => console.log(snapshots.items))
   * .catch(console.error)
   */
  function getContentTypeSnapshots (contentTypeId, query = {}) {
    raiseDeprecationWarning('getContentTypeSnapshots')
    return http.get(`content_types/${contentTypeId}/snapshots`, createRequestConfig({query: query}))
      .then((response) => wrapSnapshotCollection(http, response.data), errorHandler)
  }

  /*
   * @private
   * sdk relies heavily on sys metadata
   * so we cannot omit the sys property on sdk level
   *
   */
  function normalizeSelect (query) {
    if (query.select && !/sys/i.test(query.select)) {
      query.select += ',sys'
    }
  }

  return {
    delete: deleteSpace,
    update: updateSpace,
    getEnvironment: getEnvironment,
    getEnvironments: getEnvironments,
    createEnvironment: createEnvironment,
    createEnvironmentWithId: createEnvironmentWithId,
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
    createAssetFromFiles: createAssetFromFiles,
    getUpload: getUpload,
    createUpload: createUpload,
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
    getPreviewApiKeys: getPreviewApiKeys,
    getPreviewApiKey: getPreviewApiKey,
    createApiKey: createApiKey,
    createApiKeyWithId: createApiKeyWithId,
    getUiExtension: getUiExtension,
    getUiExtensions: getUiExtensions,
    createUiExtension: createUiExtension,
    createUiExtensionWithId: createUiExtensionWithId,
    getEntrySnapshots: getEntrySnapshots,
    getContentTypeSnapshots: getContentTypeSnapshots
  }
}
