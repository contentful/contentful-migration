module.exports = function (migration) {
  const blogPost = migration.editContentType('blogPost', {
    name: 'Blog post',
    description: 'super angry'
  });

  blogPost
    .addSidebarWidget('publication-widget')
    .addSidebarWidget(
      'imageTaggingExtensionId',
      'extension',
      {
        tagField: 'tags',
        imageField: 'image'
      }
    );
};
