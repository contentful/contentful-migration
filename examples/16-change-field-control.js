
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
  blogPost.changeFieldControl('slug', 'slugEditor');
};
