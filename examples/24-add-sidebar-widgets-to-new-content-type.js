module.exports = function (migration) {
  const customSidebar = migration.createContentType('customSidebar', {
    name: 'Custom sidebar',
    description: 'How to add, remove and update widgets'
  });

  customSidebar
    .addSidebarWidget('sidebar-builtin', 'not-needed');

  customSidebar
    .addSidebarWidget('extension', 'imageTaggingExtensionId', {
      imageField: 'image'
    })
    .addSidebarWidget('sidebar-builtin', 'publication-widget', {}, 'imageTaggingExtensionId') // will be ignored as its duplicate
    .updateSidebarWidget(
      'extension',
      'imageTaggingExtensionId',
      {
        tagField: 'tags',
        imageField: 'image'
      }
    );

  customSidebar
    .removeSidebarWidget('sidebar-builtin', 'not-needed');
};
