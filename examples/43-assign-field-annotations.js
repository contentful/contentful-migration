module.exports = function (migration) {
  const annotatedContentType = migration.editContentType('annotated')
  annotatedContentType.editField('sources').setAnnotations(['Contentful:AggregateComponent'])
  annotatedContentType.editField('title').setAnnotations(['Contentful:GraphQLFieldResolver'], {
    parameters: {
      appFunctionId: '123',
      appDefinitionId: '456'
    }
  })
}
