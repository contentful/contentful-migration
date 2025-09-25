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
  // console.log(`1. [ CM ] shouldPublishLocalChanges() shouldPublish => `, shouldPublish)
  // console.log(`2. [ CM ] shouldPublishLocalChanges() entry => `, entry)
  // console.log(`2. [ CM ] shouldPublishLocalChanges() entry.fieldStatus => `, entry.fieldStatus['*'])
  // console.log(
  //   `3. [ CM ] shouldPublishLocalChanges() useLocaleBasedPublishing => `,
  //   useLocaleBasedPublishing
  // )

  if (shouldPublish === true) {
    return true
  } else if (shouldPublish === false) {
    return false
  } else if (shouldPublish === 'preserve') {
    if (!entry.isPublished) {
      return false
    }
    if (useLocaleBasedPublishing && entry.fieldStatus) {
      const response = Object.values(entry.fieldStatus['*']).some(
        (status) => status === 'published'
      )

      // console.log(`4. [ CM ] shouldPublishLocalChanges() THIS BLOCK!!! returned => `, response)

      return response
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
