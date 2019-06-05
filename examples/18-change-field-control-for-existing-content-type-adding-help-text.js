module.exports = function (migration) {
  const blogPost = migration.editContentType('blogPost', {
    name: 'Blog post',
    description: 'super angry'
  });

  blogPost.changeFieldControl(
    'slug',
    'slugEditor',
    { helpText: 'This is the slug for the entry, it will be used for the URL' }
  );
};
