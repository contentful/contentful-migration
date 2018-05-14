module.exports = function (migration) {
  const blogPost = migration.editContentType('blogPost', {
    name: 'Blog post',
    description: 'super angry'
  });

  blogPost.changeEditorInterface('slug', 'singleLine');
};
