// Example of payload validation:
module.exports = function (migration) {
  migration.createContentType('berlin', {
    description: 'Where content is born'
  });

  migration.createContentType('london', {
    name: 'The capital of England'
  });

  const area = migration.editContentType('london');

  area.createField('population');

  const barcelona = migration.createContentType('barcelona', {
    name: 'Sagrada Família'
  });

  barcelona.createField('paella')
    .type('Boolean')
    .name('is it rice?');

  const paella = barcelona.editField('paella');

  paella.newId('1uno');

  barcelona.displayField('area');

  const paris = migration.createContentType('paris', {
    name: 'croissant'
  });

  paris.createField('baguette')
    .type('Symbol')
    .name('what it tastes like');

  paris.createField('frog')
    .type('Nmber')
    .name('what?');

  paris.displayField('baguette');

  const baguette = paris.editField('baguette');

  baguette.deleted(true);

  paris.deleteField('baguette');

  const warsaw = migration.createContentType('warsaw', {
    name: 'croissant'
  });

  warsaw.createField('pierogi')
    .type('Object')
    .name('najlepszy')
    .validations([{ in: ['smaczny'] }, { in: ['smaczny'] }]);

  const krakow = migration.createContentType('krakow', {
    name: 'zamek'
  });

  krakow.createField('Żubrówka')
    .type('Number')
    .name('mocna')
    .validations([{ elegancki: { haha: 5 } }]);

  const munich = migration.createContentType('munich', {
    name: 'ein prosit ein prosit'
  });

  munich.createField('Helles')
    .type('Location')
    .name('hendl')
    .validations([{ regexp: { pattern: 1 } }]);
};
