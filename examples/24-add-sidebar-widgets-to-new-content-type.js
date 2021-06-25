module.exports = function (migration) {
  const customSidebar = migration.createContentType('customSidebar', {
    name: 'Custom sidebar',
    description: 'How to add, remove and update widgets'
  });

  customSidebar
    .addSidebarWidget('not-needed', 'sidebar-builtin');

  customSidebar
    .addSidebarWidget('imageTaggingExtensionId', 'extension', {
      imageField: 'image'
    })
    .addSidebarWidget('publication-widget', 'sidebar-builtin', {}, 'imageTaggingExtensionId')
    .updateSidebarWidget(
      'imageTaggingExtensionId',
      'extension',
      {
        tagField: 'tags',
        imageField: 'image'
      }
    );

  customSidebar
    .removeSidebarWidget('not-needed', 'sidebar-builtin');
};
