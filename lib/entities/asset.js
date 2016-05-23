/**
 * Asset instances
 * @namespace Asset
 */
import {cloneDeep} from 'lodash/lang'
import freezeSys from 'contentful-sdk-core/freeze-sys'
import enhanceWithMethods from '../enhance-with-methods'
import mixinToPlainObject from 'contentful-sdk-core/mixins/to-plain-object'
import errorHandler from '../error-handler'
import {
  createUpdateEntity,
  createDeleteEntity,
  createPublishEntity,
  createUnpublishEntity,
  createArchiveEntity,
  createUnarchiveEntity,
  createPublishedChecker,
  createUpdatedChecker,
  createDraftChecker,
  createArchivedChecker
} from '../instance-actions'

const ASSET_PROCESSING_CHECK_WAIT = 500
const ASSET_PROCESSING_CHECK_RETRIES = 5

/**
 * @memberof Entities
 * @typedef Asset
 * @prop {Entities.Sys} sys - Standard system metadata with additional asset specific properties
 * @prop {string=} sys.locale - If present, indicates the locale which this asset uses
 * @prop {Object} fields - Object with content for each field
 * @prop {string} fields.title - Title for this asset
 * @prop {string} fields.description - Description for this asset
 * @prop {Object} fields.file - File object for this asset
 * @prop {Object} fields.file.fileName - Name for the file
 * @prop {string} fields.file.contentType - Mime type for the file
 * @prop {string=} fields.file.upload - Url where the file is available to be downloaded from, into the Contentful asset system. After the asset is processed this field is gone.
 * @prop {string=} fields.file.url - Url where the file is available at the Contentful media asset system. This field won't be available until the asset is processed.
 * @prop {Object} fields.file.details - Details for the file, depending on file type (example: image size in bytes, etc)
 * @prop {function(): Object} toPlainObject() - Returns this Asset as a plain JS object
 */

function createAssetApi (http) {
  function checkIfAssetHasUrl ({
    resolve,
    reject,
    id,
    locale,
    processingCheckWait = ASSET_PROCESSING_CHECK_WAIT,
    processingCheckRetries = ASSET_PROCESSING_CHECK_RETRIES,
    checkCount = 0
  }) {
    http.get('assets/' + id)
    .then((response) => wrapAsset(http, response.data), errorHandler)
    .then((asset) => {
      if (asset.fields.file[locale].url) {
        resolve(asset)
      } else if (checkCount === processingCheckRetries) {
        const error = new Error()
        error.name = 'AssetProcessingTimeout'
        error.message = 'Asset is taking longer then expected to process.'
        reject(error)
      } else {
        checkCount++
        setTimeout(
          () => checkIfAssetHasUrl({
            resolve: resolve,
            reject: reject,
            id: id,
            locale: locale,
            checkCount: checkCount
          }),
          processingCheckWait
        )
      }
    })
  }

  function processForLocale (locale, {processingCheckWait, processingCheckRetries} = {}) {
    const assetId = this.sys.id
    return http.put('assets/' + this.sys.id + '/files/' + locale + '/process', null, {
      headers: {
        'X-Contentful-Version': this.sys.version
      }
    })
    .then(() => {
      return new Promise(
        (resolve, reject) => checkIfAssetHasUrl({
          resolve: resolve,
          reject: reject,
          id: assetId,
          locale: locale,
          processingCheckWait: processingCheckWait,
          processingCheckRetries: processingCheckRetries
        })
      )
    }, errorHandler)
  }

  function processForAllLocales (options = {}) {
    const self = this
    const locales = Object.keys(this.fields.file)
    return Promise.all(locales.map((locale) => processForLocale.call(self, locale, options)))
    .then((assets) => assets[0])
  }

  return {
    /**
     * Sends an update to the server with any changes made to the object's properties
     * @memberof Asset
     * @func update
     * @return {Promise<Asset>} Object returned from the server with updated changes.
     * @example
     * contentType.fields.name['en-US'] = 'Blog Post'
     * asset.update()
     * .then(asset => console.log(asset.fields.name['en-US']))
     */
    update: createUpdateEntity({
      http: http,
      entityPath: 'assets',
      wrapperMethod: wrapAsset
    }),

    /**
     * Deletes this object on the server.
     * @memberof Asset
     * @func delete
     * @return {Promise} Promise for the deletion. It contains no data, but the Promise error case should be handled.
     * @example
     * asset.delete()
     * .catch(err => console.log(err))
     */
    delete: createDeleteEntity({
      http: http,
      entityPath: 'assets'
    }),

    /**
     * Publishes the object
     * @memberof Asset
     * @func publish
     * @return {Promise<Asset>} Object returned from the server with updated metadata.
     * @example
     * asset.publish()
     * .then(asset => console.log(asset.sys.publishedVersion))
     */
    publish: createPublishEntity({
      http: http,
      entityPath: 'assets',
      wrapperMethod: wrapAsset
    }),

    /**
     * Unpublishes the object
     * @memberof Asset
     * @func unpublish
     * @return {Promise<Asset>} Object returned from the server with updated metadata.
     * @example
     * asset.unpublish()
     * .then(asset => console.log(asset.sys))
     */
    unpublish: createUnpublishEntity({
      http: http,
      entityPath: 'assets',
      wrapperMethod: wrapAsset
    }),

    /**
     * Archives the object
     * @memberof Asset
     * @func archive
     * @return {Promise<Asset>} Object returned from the server with updated metadata.
     * @example
     * asset.archive()
     * .then(asset => console.log(asset.sys.archivedVersion))
     */
    archive: createArchiveEntity({
      http: http,
      entityPath: 'assets',
      wrapperMethod: wrapAsset
    }),

    /**
     * Unarchives the object
     * @memberof Asset
     * @func unarchive
     * @return {Promise<Asset>} Object returned from the server with updated metadata.
     * @example
     * asset.unarchive()
     * .then(asset => console.log(asset.sys))
     */
    unarchive: createUnarchiveEntity({
      http: http,
      entityPath: 'assets',
      wrapperMethod: wrapAsset
    }),

    /**
     * Triggers asset processing after an upload, for the file uploaded to a specific locale.
     * @memberof Asset
     * @func processForLocale
     * @param {string} locale - Locale which processing should be triggered for
     * @param {object} options - Additional options for processing
     * @prop {number} options.processingCheckWait - Time in milliseconds to wait before checking again if the asset has been processed (default: 500ms)
     * @prop {number} options.processingCheckRetries - Maximum amount of times to check if the asset has been processed (default: 5)
     * @return {Promise<Asset>} Object returned from the server with updated metadata.
     * @throws {AssetProcessingTimeout} If the asset takes too long to process. If this happens, retrieve the asset again, and if the url property is available, then processing has succeeded. If not, your file might be damaged.
     * @example
     * asset.processForLocale('en-US')
     * .then(asset => console.log(asset.fields.file['en-US'].url))
     */
    processForLocale: processForLocale,

    /**
     * Triggers asset processing after an upload, for the files uploaded to all locales of an asset.
     * @memberof Asset
     * @func processForAllLocales
     * @param {object} options - Additional options for processing
     * @prop {number} options.processingCheckWait - Time in milliseconds to wait before checking again if the asset has been processed (default: 500ms)
     * @prop {number} options.processingCheckRetries - Maximum amount of times to check if the asset has been processed (default: 5)
     * @return {Promise<Asset>} Object returned from the server with updated metadata.
     * @throws {AssetProcessingTimeout} If the asset takes too long to process. If this happens, retrieve the asset again, and if the url property is available, then processing has succeeded. If not, your file might be damaged.
     * @example
     * asset.processForAllLocales()
     * .then(asset => console.log(asset.fields.file['en-US'].url, asset.fields.file['de-DE'].url))
     */
    processForAllLocales: processForAllLocales,

    /**
     * Checks if the asset is published. A published asset might have unpublished changes (@see {Asset.isUpdated})
     * @memberof Asset
     * @func isPublished
     * @return {boolean}
     */
    isPublished: createPublishedChecker(),

    /**
     * Checks if the asset is updated. This means the asset was previously published but has unpublished changes.
     * @memberof Asset
     * @func isUpdated
     * @return {boolean}
     */
    isUpdated: createUpdatedChecker(),

    /**
     * Checks if the asset is in draft mode. This means it is not published.
     * @memberof Asset
     * @func isDraft
     * @return {boolean}
     */
    isDraft: createDraftChecker(),

    /**
     * Checks if asset is archived. This means it's not exposed to the Delivery/Preview APIs.
     * @memberof Asset
     * @func isArchived
     * @return {boolean}
     */
    isArchived: createArchivedChecker()
  }
}

/**
 * @private
 * @param {Object} http - HTTP client instance
 * @param {Object} data - Raw asset data
 * @return {Asset} Wrapped asset data
 */
export function wrapAsset (http, data) {
  const asset = mixinToPlainObject(cloneDeep(data))
  enhanceWithMethods(asset, createAssetApi(http))
  return freezeSys(asset)
}

/**
 * @memberof Entities
 * @typedef AssetCollection
 * @prop {number} total
 * @prop {number} skip
 * @prop {number} limit
 * @prop {Array<Entities.Asset>} items
 * @prop {function(): Object} toPlainObject() - Returns this Asset collection as a plain JS object
 */

/**
 * @private
 * @param {Object} http - HTTP client instance
 * @param {Object} data - Raw asset collection data
 * @return {AssetCollection} Wrapped asset collection data
 */
export function wrapAssetCollection (http, data) {
  const assets = mixinToPlainObject(cloneDeep(data))
  assets.items = assets.items.map((entity) => wrapAsset(http, entity))
  return freezeSys(assets)
}
