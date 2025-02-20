// In this example, we fill the "byLine" field with the combined values of 2 other fields.
// It will skip the "de-DE" locale and then automatically publish the entry w ith locale based publishing.
import { MigrationFunction } from '../index'

const migration: MigrationFunction = function (migration) {
  migration.transformEntries({
    contentType: 'newsArticle',
    from: ['author', 'authorCity'],
    to: ['byline'],
    shouldPublish: true,
    transformEntryForLocale: function (fromFields, currentLocale) {
      if (currentLocale === 'de-DE') {
        return
      }
      const newByline = `${fromFields.author[currentLocale]} ${fromFields.authorCity[currentLocale]}`
      return { byline: newByline }
    }
  })
}

export default migration
