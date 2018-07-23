import generateRandomId from './generate-random-id'

export function contentTypeReadOnlyTests (t, space) {
  t.test('Gets content type', (t) => {
    t.plan(3)
    return space.getContentType('1t9IbcfdCk6m04uISSsaIK')
      .then((response) => {
        t.ok(response.sys, 'sys')
        t.ok(response.name, 'name')
        t.ok(response.fields, 'fields')
      })
  })

  t.test('Gets ContentType snapshots', (t) => {
    t.plan(2)
    return space.getContentType('1t9IbcfdCk6m04uISSsaIK')
      .then((contentType) => {
        return contentType.getSnapshots()
          .then((response) => {
            t.ok(response, 'contentType snapshots')
            t.ok(response.items, 'contentType snapshots items')
          })
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
  t.test('Create, update, publish, getEditorInterface, unpublish and delete content type', (t) => {
    t.plan(12)
    return space.createContentType({name: 'testentity'})
      .then((contentType) => { // create contentType
        t.ok(contentType.isDraft(), 'contentType is in draft')
        t.equals(contentType.sys.type, 'ContentType', 'type')
        t.equals(contentType.name, 'testentity', 'name')
        return contentType.publish() // publish
          .then((publishedContentType) => {
            t.ok(publishedContentType.isPublished(), 'contentType is published')
            publishedContentType.fields = [
              {id: 'field', name: 'field', type: 'Text'},
              {id: 'field2delete', name: 'field2delete', type: 'Text'}
            ]
            return publishedContentType.update() // update with fields
              .then((updatedContentType) => {
                t.ok(updatedContentType.isUpdated(), 'contentType is updated')
                t.equals(updatedContentType.fields[0].id, 'field', 'field id')
                t.equals(updatedContentType.fields[1].id, 'field2delete', 'field2delete id')
                return updatedContentType.omitAndDeleteField('field2delete') // omit and delete field
                  .then((deletedFieldContentType) => {
                    t.equal(deletedFieldContentType.fields.filter(field => field.id === 'field2delete').length, 0, 'field should be deleted')
                    t.ok(deletedFieldContentType.getEditorInterface, 'updatedContentType.getEditorInterface')
                    return deletedFieldContentType.publish() // publish changes
                      .then((publishedContentType) => {
                        return publishedContentType.getEditorInterface() // get editorInterface
                          .then((editorInterface) => {
                            t.ok(editorInterface.controls, 'editor interface controls')
                            t.ok(editorInterface.sys, 'editor interface sys')
                            return editorInterface.update() // update editor interface
                              .then((editorInterface) => {
                                return updatedContentType.unpublish() // unpublish contentType
                                  .then((unpublishedContentType) => {
                                    t.ok(unpublishedContentType.isDraft(), 'contentType is back in draft')
                                    return unpublishedContentType.delete() // delete contentType
                                  })
                              })
                          })
                      })
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
