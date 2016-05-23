import generateRandomId from './generate-random-id'

export function contentTypeReadOnlyTests (t, space) {
  t.test('Gets content type', (t) => {
    t.plan(3)
    // TODO fix this test and all other integration tests dependent on the cfexampleapi space
    return space.getContentType('1t9IbcfdCk6m04uISSsaIK')
    .then((response) => {
      t.ok(response.sys, 'sys')
      t.ok(response.name, 'name')
      t.ok(response.fields, 'fields')
    })
  })

  t.test('Gets content types', (t) => {
    t.plan(1)
    return space.getContentTypes()
    .then((response) => {
      t.ok(response.items, 'items')
    })
  })
}

export function contentTypeWriteTests (t, space) {
  t.test('Create, update, publish, unpublish and delete content type', (t) => {
    t.plan(5)
    return space.createContentType({name: 'testentity'})
    .then((contentType) => {
      t.equals(contentType.sys.type, 'ContentType', 'type')
      t.equals(contentType.name, 'testentity', 'name')
      contentType.fields = [
        {id: 'field', name: 'field', type: 'Text'}
      ]
      return contentType.update()
      .then((updatedContentType) => {
        t.equals(updatedContentType.fields[0].id, 'field', 'field id')
        return updatedContentType.publish()
        .then((publishedContentType) => {
          t.ok(publishedContentType.sys.publishedVersion, 'has published version')
          return publishedContentType.unpublish()
          .then((unpublishedContentType) => {
            t.notOk(unpublishedContentType.sys.publishedVersion, 'published version is gone')
            return unpublishedContentType.delete()
          })
        })
      })
    })
  })

  t.test('Create with id and delete content type', (t) => {
    t.plan(3)
    const id = generateRandomId('testCT')
    return space.createContentTypeWithId(id, {name: 'testentitywithid'})
    .then((contentType) => {
      t.equals(contentType.sys.id, id, 'specified id')
      t.equals(contentType.sys.type, 'ContentType', 'type')
      t.equals(contentType.name, 'testentitywithid', 'name')
      return contentType.delete()
    })
  })
}
