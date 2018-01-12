
module.exports = function (migration) {
  const blogPost = migration.createContentType('blogPost', {
    name: 'Blog post',
    description: 'super angry'
  });

  blogPost.createField('title', {
    name: 'Title',
    type: 'Symbol',
    required: true
  });
  blogPost.createField('slug', {
    name: 'URL Slug',
    type: 'Symbol',
    required: true
  });
  blogPost.changeEditorInterface('slug', 'slugEditor');
};
