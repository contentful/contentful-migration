module.exports = function (migration) {
  const annotatedContentType = migration.editContentType('annotated')
  annotatedContentType.clearAnnotations()
}
