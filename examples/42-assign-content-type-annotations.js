// TODO: rename file before merging to master

module.exports = function (migration) {
  const blogPost = migration.createContentType('blogPost').name('Blog Post')
  blogPost.createField('name').name('Internal name').type('Symbol')
  blogPost.createField('title').name('Title').type('Symbol')
  blogPost.createField('body').name('Body').type('RichText')
  blogPost.createField('sources').name('Sources').type('Link').linkType('Entry')

  blogPost.setAnnotations(['Contentful:AggregateRoot'])
}
