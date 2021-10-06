// Default value example: create a new content with some default values
module.exports = function (migration) {
  const Event = migration.createContentType('event').name('Event');
  Event.createField('title')
    .name('Title')
    .localized(true)
    .type('Symbol')
    .defaultValue({
      'en-US': 'Default title'
    });

  Event.createField('advertised')
    .name('Advertised')
    .type('Boolean')
    .localized(false)
    .defaultValue({
      'en-US': true
    });

  Event.createField('startDate')
    .name('Start Date')
    .type('Date')
    .localized(false)
    .defaultValue({
      'en-US': '2021-06-15T13:46:06Z'
    });

  Event.createField('categories')
    .name('Categories')
    .type('Array')
    .items({
      type: 'Symbol'
    })
    .localized(false)
    .defaultValue({
      'en-US': ['Culture', 'Local History']
    });

  const RefWithDefault = migration.createContentType('refWithDefault').name('RefWithDefault');

  RefWithDefault
    .createField('ref')
    .name('Ref')
    .type('Link')
    .linkType('Entry')
    .validations([{ linkContentType: ['event'] }]);
};
