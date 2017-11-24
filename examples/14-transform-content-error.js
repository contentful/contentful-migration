// If an error is thrown while running the transform function,
// it gets logged and no transform request is produced

module.exports = function (migration) {
  migration.transformEntries({
    contentType: 'newsArticle',
    from: ['author', 'authorCity'],
    to: ['byline'],
    transformEntryForLocale: function () {
      throw new Error('boom');
    }
  });
};
