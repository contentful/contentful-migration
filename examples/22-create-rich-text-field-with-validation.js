// Example of setting `validations` for rich text fields of a content type.
module.exports = function (migration) {
  const myRichTextCT = migration
    .createContentType('myContentTypeWithRichText')
    .name('MyContentTypeWithRichText')
  myRichTextCT
    .createField('richText')
    .name('Text')
    .type('RichText')
    .validations([
      {
        nodes: {
          'embedded-entry-block': [
            {
              size: {
                min: 1,
                max: 4
              }
            },
            {
              linkContentType: ['markdownContentType']
            }
          ],
          'embedded-entry-inline': [
            {
              size: {
                min: 10,
                max: 20
              },
              message: 'this is a custom error for number of embedded inline entries'
            },
            {
              linkContentType: ['parent'],
              message: 'we only accept parent'
            }
          ],
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
      },
      {
        enabledMarks: [
          'bold',
          'italic',
          'underline',
          'code',
          'superscript',
          'subscript',
          'strikethrough'
        ],
        message:
          'Only bold, italic, underline, code, superscript, subscript, and strikethrough marks are allowed'
      },
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
          'embedded-entry-block',
          'embedded-asset-block',
          'table',
          'hyperlink',
          'entry-hyperlink',
          'asset-hyperlink',
          'embedded-entry-inline',
          'embedded-resource-block'
        ],
        message:
          'Only heading 1, heading 2, heading 3, heading 4, heading 5, heading 6, ordered list, unordered list, horizontal rule, quote, block entry, asset, table, block embedded resource, asset, link to Url, link to entry, link to asset, and inline entry nodes are allowed'
      }
    ])
}
