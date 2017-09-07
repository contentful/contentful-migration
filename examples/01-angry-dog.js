// Basic example: create new content type.
module.exports = function (migration) {
  const dog = migration.createContentType('dog', {
    name: 'angry dog',
    description: 'super angry'
  });

  dog.createField('woofs', {
    name: 'woof woof',
    type: 'Number',
    required: true
  });
};
