module.exports = function (migration) {
  const contentTypeWithLink = migration.createContentType('contentTypeWithLink');
  contentTypeWithLink
    .name('ContentTypeWithLink')
    .createField('linkToNonExistingContentType')
    .name('linkFieldToNonExistingContentType')
    .type('Link')
    .linkType('Entry')
    .required(true)
    .validations([
      {
        linkContentType: ['doesNotExist']
      }
    ]);
};
