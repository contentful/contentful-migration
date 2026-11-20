// Example of using the shorthand method `deleteField` to omit and then delete a field.
module.exports = function (migration) {
  const dog = migration.createContentType('dog')

  dog.name('Angry dog').description("Who's got mad? He is!")

  dog
    .createField('goodboys')
    .type('Number')
    .name('number of times he has been called a good boy')
    .required(false)

  dog.createField('postmenBites').type('Number').name('number of postmen bitten').required(false)

  dog.deleteField('postmenBites')
}
