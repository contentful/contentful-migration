module.exports = function (migration) {
  const dog = migration.editContentType('dog');

  dog.createField('owner')
    .type('Symbol')
    .name('Owner name')
    .required(false);

  dog.transformContent({
    from: ['name'],
    to: ['name'],
    transform: ([name]) => [name.toUpperCase()]
  });

  dog.transformContent({
    from: ['name'],
    to: ['owner'],
    transform: ([name]) => [`${name}'s owner`]
  });
};
