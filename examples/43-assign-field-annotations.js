module.exports = function (migration) {
  const annotatedContentType = migration.editContentType('annotated')
  annotatedContentType.editField('sources').setAnnotations(['Contentful:AggregateComponent'])
  annotatedContentType.editField('title').setAnnotations([
    {
      sys: {
        type: 'Link',
        linkType: 'Annotation',
        id: 'Contentful:GraphQLFieldResolver'
      },
      parameters: {
        appFunctionId: '123',
        appDefinitionId: '456'
      }
    }
  ])
}
