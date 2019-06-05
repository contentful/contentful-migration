module.exports = function (migration) {
  const blogPost = migration.createContentType('customSidebar', {
    name: 'Custom sidebar',
    description: 'How to add, remove and update widgets'
  });

  blogPost
    .addSidebarWidget('not-needed');

  blogPost
    .addSidebarWidget('imageTaggingExtensionId', 'extension', null, {
      imageField: 'image'
    })
    .addSidebarWidget('publication-widget', 'sidebar-builtin', 'imageTaggingExtensionId')
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
