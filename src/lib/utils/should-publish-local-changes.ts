import Entry from '../entities/entry'

/**
 * Calculate if an entry should be published.
 * @constructor
 * @param {boolean | 'preserve'} shouldPublish - expected result.
 * @param {Entry} entry - entry to be published.
 * @param {boolean} useLocaleBasedPublishing - if true, locale based publishing status is used..
 * @description we expect a diff of > 2 between version and publishedVersion because version has been already bumped in this specific use case.
 */

export default function shouldPublishLocalChanges(
  shouldPublish: boolean | 'preserve' = false,
  entry: Entry,
  useLocaleBasedPublishing: boolean = false
) {
  if (shouldPublish === true) {
    return true
  } else if (shouldPublish === false) {
    return false
  } else if (shouldPublish === 'preserve') {
    if (!entry.isPublished) {
      return false
    }
    if (useLocaleBasedPublishing && entry.fieldStatus) {
      return Object.values(entry.fieldStatus['*']).some((status) => status === 'published')
    }
    if (!entry.version || isNaN(entry.version)) {
      return false
    }
    const hasUnpublishedChanges = entry.version > entry.publishedVersion + 2
    return !hasUnpublishedChanges
  } else {
    return false
  }
}
