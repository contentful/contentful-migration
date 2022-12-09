module.exports = function (migration) {
  const contentTypeWithEditorLayout = migration.editContentType('page')

  contentTypeWithEditorLayout
    .createField('fieldToDelete')
    .type('Text')
    .name('fieldToDelete')
    .localized(true)
    .validations([{ size: { max: 3 } }])

  contentTypeWithEditorLayout.deleteField('fieldToDelete')

  const editorLayout = contentTypeWithEditorLayout.editEditorLayout()
  editorLayout.changeFieldGroupControl('seo', 'builtin', 'fieldset', {
    helpText: 'Search all related fields'
  })
}
