'use strict';

const actionCreators = {
  contentType: {
    create: (id, instanceId, callsite) => ({
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
    update: (id, instanceId, callsite, property, value) => ({
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
  field: {
    create: (contentTypeId, contentTypeInstanceId, fieldId, fieldInstanceId, callsite) => ({
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
    update: (contentTypeId, contentTypeInstanceId, fieldId, fieldInstanceId, callsite, property, value) => ({
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
    move: (contentTypeId, contentTypeInstanceId, fieldId, fieldInstanceId, callsite, movement) => ({
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
    rename: (contentTypeId, contentTypeInstanceId, fieldId, fieldInstanceId, callsite, value) => ({
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
    delete: (contentTypeId, contentTypeInstanceId, fieldId, fieldInstanceId, callsite) => ({
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

module.exports = actionCreators;
