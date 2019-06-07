module.exports = function (migration) {
  const blogPost = migration.createContentType('customSidebar', {
    name: 'Custom sidebar',
    description: 'How to add, remove and update widgets'
  });

  blogPost
    .addSidebarWidget('sidebar-builtin', 'not-needed');

  blogPost
    .addSidebarWidget('extension', 'imageTaggingExtensionId', {
      imageField: 'image'
    })
    .addSidebarWidget('sidebar-builtin', 'publication-widget', {}, 'imageTaggingExtensionId')
    .updateSidebarWidget(
      'extension',
      'imageTaggingExtensionId',
      {
        tagField: 'tags',
        imageField: 'image'
      }
    );

  blogPost
    .removeSidebarWidget('sidebar-builtin', 'not-needed');
};
