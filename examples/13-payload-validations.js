// Example of payload validation:
module.exports = function (migration) {
  // can't create content-type without name property
  migration.createContentType('berlin', {
    description: 'Where content is born'
  })

  migration.createContentType('london', {
    name: 'The capital of England'
  })

  const area = migration.editContentType('london')

  // can't create field without name and type property
  area.createField('population')

  const barcelona = migration.createContentType('barcelona', {
    name: 'Sagrada Família'
  })

  barcelona.createField('paella').type('Boolean').name('is it rice?')

  const paella = barcelona.editField('paella')

  // can't set new ID for the field with requirements mismatch
  paella.newId('1uno')

  // can't set a non existing field as a the displayField
  barcelona.displayField('area')

  const paris = migration.createContentType('paris', {
    name: 'croissant'
  })

  paris.createField('baguette').type('Symbol').name('what it tastes like')

  // can't create field with wrong(misspelled) type value
  paris.createField('frog').type('Nmber').name('what?')

  paris.displayField('baguette')

  const baguette = paris.editField('baguette')

  // can't set field to deleted state without ommitting beforehand
  baguette.deleted(true)

  paris.deleteField('baguette')

  const warsaw = migration.createContentType('warsaw', {
    name: 'Fasolka po bretonsku'
  })

  // can't create field with duplicates in validations array
  warsaw
    .createField('pierogi')
    .type('Object')
    .name('najlepszy')
    .validations([{ in: ['smaczny'] }, { in: ['smaczny'] }])

  const krakow = migration.createContentType('krakow', {
    name: 'zamek'
  })

  // can't create field with invalid validations property
  krakow
    .createField('Żubrówka')
    .type('Number')
    .name('mocna')
    .validations([{ elegancki: { haha: 5 } }])

  const munich = migration.createContentType('munich', {
    name: 'ein prosit ein prosit'
  })

  // can't create field with invalid property type in validations
  munich
    .createField('Helles')
    .type('Location')
    .name('hendl')
    .validations([{ regexp: { pattern: 1 } }])
}
