// TODO: rename file before merging to master

module.exports = function (migration) {
  const myType = migration.editContentType('mytype')
  const editorLayout = myType.editEditorLayout()

  editorLayout.moveField('fieldA').toTheTopOfFieldGroup('firsttab')
  editorLayout.moveField('fieldB').afterFieldGroup('fieldset')
  editorLayout.moveField('fieldC').afterField('fieldB')
  editorLayout.moveField('fieldE').beforeField('fieldC')
  editorLayout.moveField('fieldE').toTheBottomOfFieldGroup()
}
