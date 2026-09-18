// In this example, we fill the "byLine" field with the combined values of 2 other fields.
// We want to skip this transformation for all German entries.

module.exports = function (migration) {
  migration.transformEntries({
    contentType: 'newsArticle',
    from: ['author', 'authorCity'],
    to: ['byline'],
    transformEntryForLocale: function (fromFields, currentLocale) {
      if (currentLocale === 'de-DE') {
        return
      }
      const newByline = `${fromFields.author[currentLocale]} ${fromFields.authorCity[currentLocale]}`
      return { byline: newByline }
    }
  })
}
