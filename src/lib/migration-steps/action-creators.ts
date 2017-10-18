import RawStep from '../interfaces/raw-step';

const actionCreators = {
  contentType: {
    create: (id, instanceId, callsite): RawStep => ({
      type: 'contentType/create',
      meta: {
        contentTypeInstanceId: `contentType/${id}/${instanceId}`,
        callsite: {
          file: callsite.getFileName(),
          line: callsite.getLineNumber()
        }
      },
      payload: { contentTypeId: id }
    }),
    update: (id, instanceId, callsite, property, value): RawStep => ({
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
    }),
    delete: (id, instanceId, callsite): RawStep => ({
      type: 'contentType/delete',
      meta: {
        contentTypeInstanceId: `contentType/${id}/${instanceId}`,
        callsite: {
          file: callsite.getFileName(),
          line: callsite.getLineNumber()
        }
      },
      payload: { contentTypeId: id }
    }),
    transformContent: (id, instanceId, transformation, callsite): RawStep => ({
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
    create: (contentTypeId, contentTypeInstanceId, fieldId, fieldInstanceId, callsite): RawStep => ({
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
    update: (contentTypeId, contentTypeInstanceId, fieldId, fieldInstanceId, callsite, property, value): RawStep => ({
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
    move: (contentTypeId, contentTypeInstanceId, fieldId, fieldInstanceId, callsite, movement): RawStep => ({
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
    rename: (contentTypeId, contentTypeInstanceId, fieldId, fieldInstanceId, callsite, value): RawStep => ({
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
    delete: (contentTypeId, contentTypeInstanceId, fieldId, fieldInstanceId, callsite): RawStep => ({
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