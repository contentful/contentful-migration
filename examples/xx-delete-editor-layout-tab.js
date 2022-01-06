// TODO: rename file before merging to master

module.exports = function (migration) {
  const Page = migration.editContentType('page');
  const editorLayout = Page.editEditorLayout();
  editorLayout.deleteFieldGroup('settings');
};
