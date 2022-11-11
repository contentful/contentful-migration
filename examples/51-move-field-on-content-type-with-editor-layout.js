module.exports = function (migration) {
  const contentTypeWithEditorLayout = migration.editContentType('page')

  contentTypeWithEditorLayout
    .createField('anotherAdditionalField')
    .type('Text')
    .name('anotherAdditionalFieldName')
    .localized(true)
    .validations([{ size: { max: 3 } }])

  contentTypeWithEditorLayout.moveField('anotherAdditionalField').beforeField('additionalField')
}
