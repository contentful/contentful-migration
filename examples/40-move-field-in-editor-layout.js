// TODO: rename file before merging to master

module.exports = function (migration) {
  const myType = migration.createContentType('mytype').name('My type')
  myType.createField('fieldA').name('Field A').type('Symbol')
  myType.createField('fieldB').name('Field B').type('Symbol')
  myType.createField('fieldC').name('Field C').type('Symbol')
  myType.createField('fieldD').name('Field D').type('Symbol')
  myType.createField('fieldE').name('Field D').type('Symbol')

  // an editor layout can be created empty but not saved without adding at least one tab
  const editorLayout = myType.createEditorLayout()

  editorLayout.createFieldGroup('firsttab', {
    name: 'First Tab'
  })
  editorLayout.createFieldGroup('secondtab', {
    name: 'Second Tab'
  })

  editorLayout.editFieldGroup('secondtab').createFieldGroup('fieldset').name('Field Set')

  editorLayout.moveField('fieldA').toTheTopOfFieldGroup('fieldset')
  editorLayout.moveField('fieldB').beforeFieldGroup('fieldset')
  editorLayout.moveField('fieldC').afterField('fieldA')
  editorLayout.moveField('fieldE').beforeField('fieldC')
  editorLayout.moveField('fieldE').toTheBottomOfFieldGroup()
}
