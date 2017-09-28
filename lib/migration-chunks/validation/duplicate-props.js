const errorMessages = require('./errors');

const isSameEntity = (step, otherStep) => {
  return (
    step.payload.contentTypeId === otherStep.payload.contentTypeId &&
    step.payload.fieldId === otherStep.payload.fieldId
  );
};

const getErrorMsgParams = (step) => {
  const type = step.type.split('/')[0];
  const params = {
    field: {
      type: 'field',
      id: step.payload.fieldId
    },
    contentType: {
      type: 'content type',
      id: step.payload.contentTypeId
    }
  };
  return params[type];
};

const getDuplicateProps = (step, chunk, stepIndex) => {
  return Object.keys(step.payload.props).reduce((duplicateProps, prop) => {
    const isDuplicate = chunk.slice(0, stepIndex).some((stepBefore) => {
      return stepBefore.payload.props &&
        isSameEntity(step, stepBefore) &&
        stepBefore.payload.props.hasOwnProperty(prop);
    });
    if (isDuplicate) {
      duplicateProps.push(prop);
    }
    return duplicateProps;
  }, []);
};

const getErrorsForChunk = (chunk) => {
  return chunk.reduce((chunkErrors, step, stepIndex) => {
    if (step.payload.props) {
      const duplicateProps = getDuplicateProps(step, chunk, stepIndex);
      const errors = duplicateProps.map((duplicateProp) => {
        const { type, id } = getErrorMsgParams(step);
        return {
          type: 'InvalidAction',
          message: errorMessages.DUPLICATE_PROP(duplicateProp, type, id),
          details: { step }
        };
      });
      chunkErrors = chunkErrors.concat(errors);
    }
    return chunkErrors;
  }, []);
};


module.exports = (chunks) => {
  return chunks.reduce((errors, chunk) => {
    const chunkErrors = getErrorsForChunk(chunk);
    return errors.concat(chunkErrors);
  }, []);
};
