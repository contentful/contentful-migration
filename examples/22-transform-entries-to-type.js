const MurmurHash3 = require('imurmurhash');

// Basic example: create new content type.
module.exports = function (migration) {
  // please run 01-angry-dog first, add some entries
  // create new content type
  const copycat = migration.createContentType('copycat').name('copy of dog').description('super friendly copy dog');

  // add field
  copycat.createField('woofs', {
    name: 'woof woof woof',
    type: 'Symbol',
    required: true
  });

  // add entry title
  copycat.displayField('woofs');

  migration.transformEntriesToType({
    sourceContentType: 'dog',
    targetContentType: 'copycat',
    from: ['woofs'],
    to: ['woofs'],
    shouldPublish: false,
    updateReferences: true,
    removeOldEntries: true,
    identityKey: function (fields) {
      const value = fields.woofs['en-US'].toString();
      return MurmurHash3(value).result().toString();
    },
    transformEntryForLocale: function (fromFields, currentLocale) {
      return {
        woofs: `copy - ${fromFields.woofs[currentLocale]}`
      };
    }
  });
};
