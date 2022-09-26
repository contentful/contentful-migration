module.exports = function (migration) {
  const annotatedContentType = migration
    .createContentType('annotatedWithDisplayField')
    .name('Blog Post')
    .displayField('name')
    .setAnnotations(['Contentful:AggregateRoot'])

  annotatedContentType
    .createField('name')
    .name('name')
    .type('Symbol')
    .localized(false)
    .required(true)
    .validations([{ unique: true }])
    .disabled(false)
    .omitted(false)
}
