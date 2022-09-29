module.exports = function (migration) {
  const contentTypeWithResourceLinks = migration
    .createContentType('contentTypeWithResourceLinks')
    .name('contentTypeWithResourceLinks')

  contentTypeWithResourceLinks
    .createField('resourceLink')
    .name('resourceLink')
    .type('ResourceLink')
    .allowedResources([
      {
        type: 'Contentful:Entry',
        source: 'crn:contentful:::content:spaces/another-space',
        contentTypes: ['contentType1', 'contentType2', 'contentType3']
      }
    ])

  contentTypeWithResourceLinks.createField('resourceLinkArray', {
    name: 'resourceLinkArray',
    type: 'Array',
    items: { type: 'ResourceLink' },
    allowedResources: [
      {
        type: 'Contentful:Entry',
        source: 'crn:contentful:::content:spaces/another-space',
        contentTypes: ['contentType1', 'contentType2', 'contentType3']
      }
    ]
  })
}
