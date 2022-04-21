module.exports = function (migration) {
  const annotatedContentType = migration.createContentType('annotated').name('Blog Post')
  annotatedContentType.createField('name').name('Internal name').type('Symbol')
  annotatedContentType.createField('title').name('Title').type('Symbol')
  annotatedContentType.createField('body').name('Body').type('RichText')
  annotatedContentType.createField('sources').name('Sources').type('Link').linkType('Entry')

  annotatedContentType.setAnnotations(['Contentful:AggregateRoot'])
}
