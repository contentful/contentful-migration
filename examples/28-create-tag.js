// Basic example: create new tag.
module.exports = function (migration) {
  migration.createTag('sampletag', {
    name: 'marketing'
  });
};
