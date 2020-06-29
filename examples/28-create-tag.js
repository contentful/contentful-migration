// Basic example: create new tag.
module.exports = function (migration) {
  const tag = migration.createTag('dog', {
    id: 'sampletag',
    name: 'marketing'
  });
};
