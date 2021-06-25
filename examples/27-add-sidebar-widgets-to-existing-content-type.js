module.exports = function (migration) {
  const richTextTest = migration.editContentType('richTextTest');

  richTextTest
    .addSidebarWidget('not-needed', 'sidebar-builtin');

  richTextTest
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

  richTextTest
    .removeSidebarWidget('not-needed', 'sidebar-builtin');
};
