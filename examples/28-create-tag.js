// Basic example: create new tag.
module.exports = function (migration) {
  const tag = migration.createTag('sampletag', {
    name: 'marketing'
  });
};
