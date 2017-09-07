// Basic example: update existing content type
module.exports = function (migration) {
  const dog = migration.editContentType('dog');

  dog
    .name('Friendly dog')
    .description('Who\'s a good boy? He is!');

  dog.createField('goodboys')
    .type('Number')
    .name('number of times he has been called a good boy')
    .required(false);
};
