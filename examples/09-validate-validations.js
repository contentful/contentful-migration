// Example of setting `validations` for fields of a content type.
module.exports = function (migration) {
  const food = migration.createContentType('dieatary-food')
    .name('Dieatary Food')
    .description('Food with up to 500 calories');

  food.createField('name')
    .type('Symbol')
    .name('name of the food')
    .validations([{ unique: true }]);

  food.createField('calories')
    .type('Link')
    .linkType('Asset')
    .name('amount of calories the food contains')
    .validations([{ assetImageDimensions: {width: {min: 1199, max: null}, height: { min: null, max: null }}}]);
};
