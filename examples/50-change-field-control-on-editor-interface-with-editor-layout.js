module.exports = function (migration) {
  const contentTypeWithEditorLayout = migration.editContentType('page')

  contentTypeWithEditorLayout
    .createField('additionalField')
    .type('Text')
    .name('additionalFieldName')
    .localized(true)
    .validations([{ size: { max: 3 } }])

  contentTypeWithEditorLayout.changeFieldControl('additionalField', 'builtin', 'singleLine')
}
