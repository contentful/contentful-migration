/**
 * Demonstrates how to create an editor layout with field groups and tabs.
 */
module.exports = function (migration) {
  const page = migration.createContentType('page').name('Page')
  page.createField('name').name('Internal name').type('Symbol')
  page.createField('title').name('Page title').type('Symbol')

  // an editor layout can be created empty but not saved without adding at least one tab
  const editorLayout = page.createEditorLayout()

  // create the field group that will become the top level tab
  editorLayout.createFieldGroup('content', {
    name: 'Content'
  })

  // make the Content field group a top level tab
  editorLayout.changeFieldGroupControl('content', 'builtin', 'topLevelTab', {
    helpText: 'Main content'
  })

  // create field groups inside the content tab
  editorLayout.createFieldGroup('settings').name('Settings')
  editorLayout.editFieldGroup('settings').createFieldGroup('seo').name('SEO')

  // change the field group control to a fieldset (this is what makes it a section)
  editorLayout.changeFieldGroupControl('seo', 'builtin', 'fieldset', {
    helpText: 'Search related fields',
    collapsedByDefault: false
  })

  // move two existing fields into the settings field group
  editorLayout.moveField('title').toTheTopOfFieldGroup('settings')
  editorLayout.moveField('name').afterField('title')
}
