module.exports = function (migration) {
  const contentTypeWithEditorLayout = migration.editContentType('page')

  contentTypeWithEditorLayout.deleteField('anotherAdditionalField')

  const editorLayout = contentTypeWithEditorLayout.editEditorLayout()
  editorLayout.createFieldGroup('uploads').name('Uploads')
}
