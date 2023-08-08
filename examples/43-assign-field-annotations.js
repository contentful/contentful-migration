module.exports = function (migration) {
  const annotatedContentType = migration.editContentType('annotated')
  annotatedContentType.editField('sources').setAnnotations(['Contentful:AggregateComponent'])
}
