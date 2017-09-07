// Example of consistency errors validation:
// Notice how we're editing a non existing content type or try to create the same content type twice.
module.exports = function (migration) {
  migration.createContentType('person', {
    description: 'A content type for a person',
    name: 'foo'
  });

  migration.editContentType('somethingElse', {
    description: 'bar'
  });

  migration.createContentType('person', {
    name: 'the new name'
  });

  migration.createContentType('person', {
    name: 'once again'
  });
};
