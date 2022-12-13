module.exports = function (migration) {
  const contentTypeWithEditorLayout2 = migration.editContentType('page')

  contentTypeWithEditorLayout2.changeFieldId('additionalField', 'renamedField')

  const editorLayout = contentTypeWithEditorLayout2.editEditorLayout()
  editorLayout.createFieldGroup('downloads').name('Downloads')
}
