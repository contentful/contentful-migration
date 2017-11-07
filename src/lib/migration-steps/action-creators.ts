import ContentTransform from '../interfaces/content-transform'
import * as Intents from '../intent/index'

const actionCreators = {
  contentType: {
    create: (id, instanceId, callsite): Intents.ContentTypeCreate => {
      return new Intents.ContentTypeCreate({
        type: 'contentType/create',
        meta: {
          contentTypeInstanceId: `contentType/${id}/${instanceId}`,
          callsite: {
            file: callsite.getFileName(),
            line: callsite.getLineNumber()
          }
        },
        payload: { contentTypeId: id }
      })
    },
    update: (id, instanceId, callsite, property, value): Intents.ContentTypeUpdate => {
      return new Intents.ContentTypeUpdate({
        type: 'contentType/update',
        meta: {
          contentTypeInstanceId: `contentType/${id}/${instanceId}`,
          callsite: {
            file: callsite.getFileName(),
            line: callsite.getLineNumber()
          }
        },
        payload: {
          contentTypeId: id,
          props: {
            [property]: value
          }
        }
      })
    },
    delete: (id, instanceId, callsite): Intents.ContentTypeDelete => {
      return new Intents.ContentTypeDelete({
        type: 'contentType/delete',
        meta: {
          contentTypeInstanceId: `contentType/${id}/${instanceId}`,
          callsite: {
            file: callsite.getFileName(),
            line: callsite.getLineNumber()
          }
        },
        payload: { contentTypeId: id }
      })
    },
    transformContent: (id, instanceId, transformation: ContentTransform, callsite): Intents.TransformContent => new Intents.TransformContent({
      type: 'contentType/transformContent',
      meta: {
        contentTypeInstanceId: `contentType/${id}/${instanceId}`,
        callsite: {
          file: callsite.getFileName(),
          line: callsite.getLineNumber()
        }
      },
      payload: {
        transformation,
        contentTypeId: id
      }
    })
  },
  field: {
    create: (contentTypeId, contentTypeInstanceId, fieldId, fieldInstanceId, callsite): Intents.FieldCreate => new Intents.FieldCreate({
      type: 'field/create',
      meta: {
        contentTypeInstanceId: `contentType/${contentTypeId}/${contentTypeInstanceId}`,
        fieldInstanceId: `fields/${fieldId}/${fieldInstanceId}`,
        callsite: {
          file: callsite.getFileName(),
          line: callsite.getLineNumber()
        }
      },
      payload: {
        contentTypeId,
        fieldId
      }
    }),
    update: (contentTypeId, contentTypeInstanceId, fieldId, fieldInstanceId, callsite, property, value): Intents.FieldUpdate => new Intents.FieldUpdate({
      type: 'field/update',
      meta: {
        contentTypeInstanceId: `contentType/${contentTypeId}/${contentTypeInstanceId}`,
        fieldInstanceId: `fields/${fieldId}/${fieldInstanceId}`,
        callsite: {
          file: callsite.getFileName(),
          line: callsite.getLineNumber()
        }
      },
      payload: {
        contentTypeId,
        fieldId,
        props: {
          [property]: value
        }
      }
    }),
    move: (contentTypeId, contentTypeInstanceId, fieldId, fieldInstanceId, callsite, movement): Intents.FieldMove => new Intents.FieldMove({
      type: 'field/move',
      meta: {
        contentTypeInstanceId: `contentType/${contentTypeId}/${contentTypeInstanceId}`,
        fieldInstanceId: `fields/${fieldId}/${fieldInstanceId}`,
        callsite: {
          file: callsite.getFileName(),
          line: callsite.getLineNumber()
        }
      },
      payload: {
        contentTypeId,
        fieldId,
        movement
      }
    }),
    rename: (contentTypeId, contentTypeInstanceId, fieldId, fieldInstanceId, callsite, value): Intents.FieldRename => new Intents.FieldRename({
      type: 'field/rename',
      meta: {
        contentTypeInstanceId: `contentType/${contentTypeId}/${contentTypeInstanceId}`,
        fieldInstanceId: `fields/${fieldId}/${fieldInstanceId}`,
        callsite: {
          file: callsite.getFileName(),
          line: callsite.getLineNumber()
        }
      },
      payload: {
        contentTypeId,
        fieldId,
        props: {
          'newId': value
        }
      }
    }),
    delete: (contentTypeId, contentTypeInstanceId, fieldId, fieldInstanceId, callsite): Intents.FieldDelete => new Intents.FieldDelete({
      type: 'field/delete',
      meta: {
        contentTypeInstanceId: `contentType/${contentTypeId}/${contentTypeInstanceId}`,
        fieldInstanceId: `fields/${fieldId}/${fieldInstanceId}`,
        callsite: {
          file: callsite.getFileName(),
          line: callsite.getLineNumber()
        }
      },
      payload: {
        contentTypeId,
        fieldId
      }
    })
  }
}

export default actionCreators
