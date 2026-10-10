// Example of setting the `displayField` of a content type.
module.exports = function (migration) {
  const food = migration.editContentType('food')

  food.createField('calories').type('Number').name('How many calories does it have?')

  food.createField('sugar').type('Number').name('Amount of sugar')

  food.createField('vegan').type('Boolean').name('Vegan friendly')

  food.createField('producer').type('Symbol').name('Food producer')

  food.createField('gmo').type('Boolean').name('Genetically modified food')

  food.moveField('calories').toTheTop()
  food.moveField('sugar').toTheBottom()
  food.moveField('producer').beforeField('vegan')
  food.moveField('gmo').afterField('vegan')
}
