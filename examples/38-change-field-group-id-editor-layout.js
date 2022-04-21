module.exports = function (migration) {
  const page = migration.editContentType('page')
  const editorLayout = page.editEditorLayout()
  editorLayout.changeFieldGroupId('metadata', 'info')
}
