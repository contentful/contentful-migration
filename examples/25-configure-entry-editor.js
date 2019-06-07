module.exports = function(migration) {
  const customEntryEditor = migration.createContentType("customEntryEditor-1", {
    name: "Entry Editor",
    description: "Set entry editor"
  })

  customEntryEditor.configureEntryEditor("extension", "customEntryEditor", {})
}
