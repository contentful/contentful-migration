/**
 * Starting with a new content type with 2 fields
 * Content type has no existing field groups
 * Goal is to create a field group and add 2 fields to that group
 */
module.exports = function (migration) {
  // Get the existing content type
  const ct = migration.editContentType('testMigrationFieldGroups')

  // an editor layout can be created empty but not saved without adding at least one tab
  const editorLayout = ct.createEditorLayout()

  // create the field group that will become the top level tab
  editorLayout.createFieldGroup('content', {
    name: 'Content'
  })

  // make the Content field group a top level tab
  editorLayout.changeFieldGroupControl('content', 'builtin', 'topLevelTab', {
    helpText: 'Main content'
  })

  // create a field group inside the content tab
  editorLayout.editFieldGroup('content').createFieldGroup('settings').name('Settings')

  // change the field group control to a fieldset (this is what makes it a section)
  editorLayout.changeFieldGroupControl('settings', 'builtin', 'fieldset', {
    helpText: 'Settings',
    collapsedByDefault: false
  })

  // move two existing fields into the settings field group
  editorLayout.moveField('title').toTheTopOfFieldGroup('settings')
  editorLayout.moveField('name').afterField('title')
};
