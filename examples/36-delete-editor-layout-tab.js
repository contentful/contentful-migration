// TODO: rename file before merging to master
module.exports = function (migration) {
  const page = migration.editContentType('page')
  const editorLayout = page.editEditorLayout()
  editorLayout.deleteFieldGroup('settings')

  const metadata = editorLayout.editFieldGroup('metadata')
  metadata.createFieldGroup('toBeDeleted', {
    name: 'To be deleted'
  })
  editorLayout.deleteFieldGroup('toBeDeleted')
}
