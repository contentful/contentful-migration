// TODO: rename file before merging to master

module.exports = function (migration) {
  const Page = migration.createContentType('page').name('Page');
  Page.createField('name').name('Internal name').type('Symbol');
  Page.createField('title').name('Page title').type('Symbol');

  // an editor layout can be created empty but not saved without adding at least one tab
  const editorLayout = Page.createEditorLayout();

  editorLayout
    .createFieldGroup('content', {
      name: 'Content'
    });

  editorLayout
    .changeFieldGroupControl('content', 'builtin', 'topLevelTab', {
      helpText: 'Main content'
    });

  editorLayout
    .createFieldGroup('settings')
    .name('Settings');

  editorLayout.editFieldGroup('settings')
    .createFieldGroup('seo')
    .name('SEO');

  editorLayout
    .changeFieldGroupControl('seo', 'builtin', 'fieldset', {
      helpText: 'Search related fields',
      collapsedByDefault: false
    });
};
