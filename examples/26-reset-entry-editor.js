module.exports = function(migration) {
  const customEntryEditor = migration.createContentType("resetEntryEditor", {
    name: "Entry Editor",
    description: "Set entry editor"
  })

  customEntryEditor.configureEntryEditor("extension", "resetEntryEditor", {})

  customEntryEditor.resetEntryEditor()
}
