// Initial value example: create a new content with some initial values
module.exports = function (migration) {
  const Event = migration.createContentType('event').name('Event');
  Event.createField('title')
    .name('Title')
    .localized(true)
    .type('Symbol')
    .initialValue({
      'en-US': 'Initial title',
      'fr-FR': 'Titre initial'
    });

  Event.createField('advertised')
    .name('Advertised')
    .type('Boolean')
    .localized(false)
    .initialValue({
      'en-US': true
    });

  Event.createField('startDate')
    .name('Start Date')
    .type('Date')
    .localized(false)
    .initialValue({
      'en-US': '2021-06-15T13:46:06Z'
    });

  Event.createField('categories')
    .name('Categories')
    .type('Array')
    .items({
      type: 'Symbol'
    })
    .localized(false)
    .initialValue({
      'en-US': ['Culture', 'Local History']
    });
};
