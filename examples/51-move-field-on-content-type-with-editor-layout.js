module.exports = function (migration) {
  const contentTypeWithEditorLayout = migration.editContentType('page')

  contentTypeWithEditorLayout
    .createField('anotherAdditionalField')
    .type('Text')
    .name('anotherAdditionalFieldName')
    .localized(true)
    .validations([{ size: { max: 3 } }])

  // Making sure the creation of a field added it to EditorLayouts
  const editorLayout = contentTypeWithEditorLayout.editEditorLayout()
  editorLayout.moveField('anotherAdditionalField').beforeField('additionalField')
}
