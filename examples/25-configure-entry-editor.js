module.exports = function (migration) {
  const customEntryEditor = migration.createContentType('customEntryEditor_v5', {
    name: 'Entry Editor',
    description: 'Set entry editor'
  })

  customEntryEditor.configureEntryEditor('extension', 'customEntryEditor_v5', {})
}
