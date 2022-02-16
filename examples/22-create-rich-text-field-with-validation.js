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
          ]
        }
      },
      {
        enabledNodeTypes: [
          'heading-1',
          'heading-2',
          'heading-3',
          'heading-4',
          'heading-5',
          'ordered-list',
          'unordered-list',
          'hr',
          'blockquote',
          'embedded-entry-block',
          'embedded-asset-block',
          'hyperlink',
          'entry-hyperlink',
          'asset-hyperlink',
          'embedded-entry-inline'
        ],
        message:
          'Only heading 1, heading 2, heading 3, heading 4, heading 5, ordered list, unordered list, horizontal rule, quote, block entry, asset, link to Url, link to entry, link to asset, and inline entry nodes are allowed'
      }
    ])
}
