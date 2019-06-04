module.exports = function (migration) {
  const blogPost = migration.editContentType('blogPost', {
    name: 'Blog post',
    description: 'super angry'
  });

  blogPost
    .addSidebarWidget('not-needed');

  blogPost
    .addSidebarWidget(
      'imageTaggingExtensionId',
      'extension',
      {
        imageField: 'image'
      }
    )
    .addSidebarWidget('publication-widget')
    .updateSidebarWidget(
      'imageTaggingExtensionId',
      {
        tagField: 'tags',
        imageField: 'image'
      }
    );

  blogPost
    .removeSidebarWidget('not-needed');
};
