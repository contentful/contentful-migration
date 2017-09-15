// Example of setting the `displayField` of a content type.
module.exports = function (migration) {
  const food = migration.createContentType('food');

  food
    .name('foooood');

  food.createField('taste')
    .type('Symbol')
    .name('what it tastes like');

  food.displayField('taste');
};
