import * as Intents from '../intent/index';

const actionCreators = {
  contentType: {
    create: (id, instanceId, callsite): Intents.CreateContentType => {
      return new Intents.CreateContentType({
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
    update: (id, instanceId, callsite, property, value): Intents.UpdateContentType => {
      return new Intents.UpdateContentType({
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
    delete: (id, instanceId, callsite): Intents.DeleteContentType => {
      return new Intents.DeleteContentType({
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
    transformContent: (id, instanceId, transformation, callsite): Intents.TransformContent => new Intents.TransformContent({
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
    create: (contentTypeId, contentTypeInstanceId, fieldId, fieldInstanceId, callsite): Intents.CreateField => new Intents.CreateField({
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
    update: (contentTypeId, contentTypeInstanceId, fieldId, fieldInstanceId, callsite, property, value): Intents.UpdateField => new Intents.UpdateField({
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
    move: (contentTypeId, contentTypeInstanceId, fieldId, fieldInstanceId, callsite, movement): Intents.MoveField => new Intents.MoveField({
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
    rename: (contentTypeId, contentTypeInstanceId, fieldId, fieldInstanceId, callsite, value): Intents.RenameField => new Intents.RenameField({
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
    delete: (contentTypeId, contentTypeInstanceId, fieldId, fieldInstanceId, callsite): Intents.DeleteField => new Intents.DeleteField({
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
};

export default actionCreators