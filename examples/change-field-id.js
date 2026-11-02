module.exports = function (migration) {
  const dog = migration.editContentType('dog')

  dog.changeFieldId('goodboys', 'aDifferentId')
  dog.editField('aDifferentId').name('ID switching is fun!')
}
