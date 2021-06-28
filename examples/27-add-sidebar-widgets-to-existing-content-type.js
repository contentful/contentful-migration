module.exports = function (migration) {
  const richTextTest = migration.editContentType('richTextTest');

  richTextTest
    .addSidebarWidget('sidebar-builtin', 'not-needed');

  richTextTest
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

  richTextTest
    .removeSidebarWidget('sidebar-builtin', 'not-needed');
};
