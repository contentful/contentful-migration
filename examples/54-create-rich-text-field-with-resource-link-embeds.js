module.exports = function (migration) {
  const contentTypeWithResourceLinks = migration
    .createContentType('contentTypeRichTextField')
    .name('contentTypeRichTextField')

  contentTypeWithResourceLinks
    .createField('richText')
    .name('richText')
    .type('RichText')
    .validations([
      {
        enabledNodeTypes: [
          'heading-1',
          'heading-2',
          'heading-3',
          'heading-4',
          'heading-5',
          'heading-6',
          'ordered-list',
          'unordered-list',
          'hr',
          'blockquote',
          'table',
          'hyperlink',
          'embedded-resource-block'
        ]
      },
      {
        nodes: {
          'embedded-resource-block': {
            validations: [],
            allowedResources: [
              {
                type: 'Contentful:Entry',
                source: 'crn:contentful:::content:spaces/another-space',
                contentTypes: ['contentType1', 'contentType2', 'contentType3']
              }
            ]
          }
        }
      }
    ])
}
