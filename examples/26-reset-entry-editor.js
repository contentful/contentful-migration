module.exports = function (migration) {
  const customEntryEditor = migration.createContentType('resetEntryEditor_v5', {
    name: 'Entry Editor',
    description: 'Set entry editor'
  });

  customEntryEditor.configureEntryEditor('extension', 'resetEntryEditor_v5', {});

  customEntryEditor.resetEntryEditor();
};
