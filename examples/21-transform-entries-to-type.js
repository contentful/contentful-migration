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
    identityKey: function(fields) {
      return fields.woofs['en-US'].toString().toLowerCase().replace(' ', '-')
    },
    transformEntryForLocale: function (fromFields, currentLocale) {
      return {
        woofs: `copy - ${fromFields.woofs[currentLocale]}`
      } 
    }
  })
};
