module.exports = function (migration) {
  const blogPost = migration.editContentType('blogPost', {
    name: 'Blog post',
    description: 'super angry'
  });

  blogPost.changeFieldControl('slug', 'singleLine');
};
