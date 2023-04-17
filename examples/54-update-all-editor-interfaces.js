module.exports = function (migration) {
  const contentType = migration.editContentType('page')

  contentType.updateAllEditorInterfaces({
    sidebar: [
      {
        widgetId: 'content-preview-widget',
        widgetNamespace: 'sidebar-builtin'
      },
      {
        disabled: true,
        widgetId: 'incoming-links-widget',
        widgetNamespace: 'sidebar-builtin'
      }
    ],
    controls: [
      {
        fieldId: 'name',
        widgetId: 'singleLine',
        widgetNamespace: 'builtin'
      },
      {
        fieldId: 'officialLanguages',
        settings: {
          helpText: 'provide a language from the list'
        },
        widgetId: 'listInput',
        widgetNamespace: 'builtin'
      }
    ]
  })
}
