// TODO: rename file before merging to master

module.exports = function (migration) {
  const annotatedContentType = migration.editContentType('annotated')
  annotatedContentType.clearAnnotations()
}
