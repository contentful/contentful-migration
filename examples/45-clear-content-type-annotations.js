// TODO: rename file before merging to master

module.exports = function (migration) {
  const blogPost = migration.editContentType('blogPost')
  blogPost.clearAnnotations()
}
