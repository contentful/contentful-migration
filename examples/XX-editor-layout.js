module.exports = function (migration) {
  const ComposePage = migration.editContentType('composePage');

  // an editor layout can be created empty but not saved without adding at least one tab
  const editorLayout = ComposePage.createEditorLayout();

  editorLayout
    .createGroup('editor', {
      name: 'Editor',
      settings: { helpText: 'Main editor' }
    })
    .createGroup('settings', {
      name: 'Settings',
      settings: { helpText: 'Additional settings' }
    });

  editorLayout.moveField('keywords').toTheBottomOfGroup('settings');

  editorLayout
    .editGroup('editor')
    .createGroup('seo')
    .name('SEO')
    .settings({
      helpText: 'Search related fields',
      collapsible: true,
      collapsedByDefault: false
    });

  editorLayout.moveField('seoTitle').toTheTopOfGroup('seo');
  editorLayout.moveField('seoDescription').afterField('seoTitle');
  editorLayout.moveField('noFollow').toTheBottomOfGroup('seo');
};
