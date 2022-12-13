module.exports = function (migration) {
  const contentTypeWithEditorLayout1 = migration.editContentType('page')

  contentTypeWithEditorLayout1.deleteField('anotherAdditionalField')

  const editorLayout = contentTypeWithEditorLayout1.editEditorLayout()
  editorLayout.createFieldGroup('uploads').name('Uploads')
}
