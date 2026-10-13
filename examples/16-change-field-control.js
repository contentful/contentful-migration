// This migration might fail dur to some race condition
// if that happens please consider split this migration into 2 steps
// 1 create a content type
/*
// first file create content type first
module.exports = function (migration) {
const blogPost = migration.createContentType('blogPost', {
    name: 'Blog post',
    description: 'super angry'
  });
  blogPost.createField('slug', {
    name: 'URL Slug',
    type: 'Symbol',
    required: true
  });
 }
*/

/*
// second file
module.exports = function (migration) {
  const blogPost = migration.editContentType('blogPost');
  blogPost.changeEditorInterface('slug', 'slugEditor');
}
*/
module.exports = function (migration) {
  const blogPost = migration.createContentType('blogPost', {
    name: 'Blog post',
    description: 'super angry'
  })
  blogPost.createField('slug', {
    name: 'URL Slug',
    type: 'Symbol',
    required: true
  })
  blogPost.changeFieldControl('slug', 'builtin', 'slugEditor', { setting: 'value' })
}
