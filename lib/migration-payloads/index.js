'use strict';

const _ = require('lodash');

// Takes
// - a Content Type payload (if exists)
// - an execution Plan
//
// Returns:
// - The payload to be send to the API

function buildFields (result, actions) {
  result.payload.fields = result.payload.fields || [];
  actions.forEach((action) => {
    const id = action.payload.fieldId;
    const props = action.payload.props;

    if (action.type === 'field/create') {
      result.payload.fields.push(Object.assign(
        {}, { id }, props
      ));
    }

    if (action.type === 'field/update') {
      const source = _.find(result.payload.fields, { id });

      Object.assign(source, props);
    }
  });
}

function builder (chunk, contentType) {
  let result = {
    meta: {},
    payload: {}
  };

  if (contentType) {
    result = _.cloneDeep(contentType);
  } else {
    result.meta.contentTypeId = chunk[0].payload.contentTypeId;
  }

  const contentTypeUpdateActions = chunk.filter((step) => step.type.startsWith('contentType'));
  contentTypeUpdateActions.forEach((step) => {
    Object.assign(result.payload, step.payload.props);
  });

  const fieldActions = chunk.filter((step) => step.type.startsWith('field'));
  buildFields(result, fieldActions);

  return result;
};

module.exports = function payloadBuilder (plan, contentTypes = []) {
  const ctPayloads = contentTypes.map((ct) => {
    return {
      payload: _.cloneDeep(_.omit(ct, 'sys')),
      meta: { version: ct.sys.version, parentVersion: ct.sys.version - 1, contentTypeId: ct.sys.id }
    };
  });
  const initialContentTypeMap = _.keyBy(ctPayloads, (ct) => ct.meta.contentTypeId);
  const contentTypeMap = {};

  const res = [];
  // debugger
  for (const chunk of plan) {
    const id = chunk[0].payload.contentTypeId;

    let payloadVersion;
    let payloadParentVersion;
    let contentType;

    if (!contentTypeMap[id]) {
      if (initialContentTypeMap[id]) {
        const initialCt = initialContentTypeMap[id];

        payloadVersion = initialCt.meta.version + 1;
        payloadParentVersion = initialCt.meta.version;
        contentType = initialCt;
      } else {
        payloadVersion = 1;
        payloadParentVersion = 0;
      }
    } else {
      contentType = contentTypeMap[id];
      // reflect implicit publish which bumps the version by 1
      payloadVersion = contentType.meta.version + 2;
      payloadParentVersion = contentType.meta.version + 1;
    }

    const updatedCt = builder(chunk, _.cloneDeep(contentType));
    // Link the previous payload for validation purposes
    if (contentType) {
      updatedCt.meta.parent = contentType;
    }

    updatedCt.meta.version = payloadVersion;
    updatedCt.meta.parentVersion = payloadParentVersion;

    res.push(updatedCt);

    const basisForNextPayload = _.cloneDeep(updatedCt);
    contentTypeMap[id] = basisForNextPayload;
  }
  return res;
};
