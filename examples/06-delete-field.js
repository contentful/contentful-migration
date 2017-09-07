// Example of using the shorthand method `deleteField` to omit and then delete a field.
module.exports = function (migration) {
  const dog = migration.editContentType('dog');

  dog
    .name('Friendly dog')
    .description('Who\'s a good boy? He is!');

  dog.createField('goodboys')
    .type('Number')
    .name('number of times he has been called a good boy')
    .required(false);

  dog.editField('postmenBites').omitted(true).required(false);

  dog.deleteField('goodboys');
};
