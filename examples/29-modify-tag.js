// Basic example: modify existing tag.
module.exports = function (migration) {
  const sampleTag = migration.editTag('sampletag');
  sampleTag.name('better marketing');
};
