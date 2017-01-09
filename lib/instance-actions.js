import omit from 'lodash/omit'
import errorHandler from './error-handler'
/**
 * @private
 */
export function createUpdateEntity ({http, entityPath, wrapperMethod}) {
  return function () {
    const raw = this.toPlainObject()
    const data = omit(raw, ['sys'])
    return http.put(entityPath + '/' + this.sys.id, data, {
      headers: {
        'X-Contentful-Version': this.sys.version
      }
    })
    .then((response) => wrapperMethod(http, response.data), errorHandler)
  }
}

/**
 * @private
 */
export function createDeleteEntity ({http, entityPath}) {
  return function () {
    return http.delete(entityPath + '/' + this.sys.id)
    .then((response) => {}, errorHandler)
  }
}

/**
 * @private
 */
export function createPublishEntity ({http, entityPath, wrapperMethod}) {
  return function () {
    return http.put(entityPath + '/' + this.sys.id + '/published', null, {
      headers: {
        'X-Contentful-Version': this.sys.version
      }
    })
    .then((response) => wrapperMethod(http, response.data), errorHandler)
  }
}

/**
 * @private
 */
export function createUnpublishEntity ({http, entityPath, wrapperMethod}) {
  return function () {
    return http.delete(entityPath + '/' + this.sys.id + '/published')
    .then((response) => wrapperMethod(http, response.data), errorHandler)
  }
}

/**
 * @private
 */
export function createArchiveEntity ({http, entityPath, wrapperMethod}) {
  return function () {
    return http.put(entityPath + '/' + this.sys.id + '/archived')
    .then((response) => wrapperMethod(http, response.data), errorHandler)
  }
}

/**
 * @private
 */
export function createUnarchiveEntity ({http, entityPath, wrapperMethod}) {
  return function () {
    return http.delete(entityPath + '/' + this.sys.id + '/archived')
    .then((response) => wrapperMethod(http, response.data), errorHandler)
  }
}

/**
 * @private
 */
export function createPublishedChecker () {
  return function () {
    return !!this.sys.publishedVersion
  }
}

/**
 * @private
 */
export function createUpdatedChecker () {
  return function () {
    // The act of publishing an entity increases its version by 1, so any entry which has
    // 2 versions higher or more than the publishedVersion has unpublished changes.
    return this.sys.publishedVersion && this.sys.version > this.sys.publishedVersion + 1
  }
}

/**
 * @private
 */
export function createDraftChecker () {
  return function () {
    return !this.sys.publishedVersion
  }
}

/**
 * @private
 */
export function createArchivedChecker () {
  return function () {
    return !!this.sys.archivedVersion
  }
}
