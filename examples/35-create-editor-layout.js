module.exports = function (migration) {
  const page = migration.createContentType('page').name('Page')
  page.createField('name').name('Internal name').type('Symbol')
  page.createField('title').name('Page title').type('Symbol')

  // an editor layout can be created empty but not saved without adding at least one tab
  const editorLayout = page.createEditorLayout()

  editorLayout.createFieldGroup('content', {
    name: 'Content'
  })

  editorLayout.changeFieldGroupControl('content', 'builtin', 'topLevelTab', {
    helpText: 'Main content'
  })

  editorLayout.createFieldGroup('settings').name('Settings')

  editorLayout.editFieldGroup('settings').createFieldGroup('seo').name('SEO')

  editorLayout.changeFieldGroupControl('seo', 'builtin', 'fieldset', {
    helpText: 'Search related fields',
    collapsedByDefault: false
  })

  editorLayout.createFieldGroup('metadata').name('Metadata')
}
