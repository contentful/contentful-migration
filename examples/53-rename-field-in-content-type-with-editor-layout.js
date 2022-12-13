module.exports = function (migration) {
  const contentTypeWithEditorLayout = migration.editContentType('page')

  contentTypeWithEditorLayout.changeFieldId('additionalField', 'renamedField')

  // Making sure the new field id was added it to EditorLayouts
  const editorLayout = contentTypeWithEditorLayout.editEditorLayout()
  editorLayout.moveField('renamedField').beforeField('title')
}
