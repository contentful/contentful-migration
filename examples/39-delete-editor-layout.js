// TODO: rename file before merging to master

module.exports = function (migration) {
  const page = migration.editContentType('page')
  page.deleteEditorLayout()
}
