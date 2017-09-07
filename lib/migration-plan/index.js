const _ = require('lodash');

function insertOmitSteps (chunks) {
  return chunks.reduce((acc, chunk) => {
    const step = chunk[0];
    if (step.type !== 'field/delete') {
      acc.push(chunk);
      return acc;
    }
    const deleteStep = _.cloneDeep(chunk[0]);
    deleteStep.type = 'field/update';
    const omitStep = _.cloneDeep(deleteStep);
    deleteStep.payload.props = { deleted: true };
    omitStep.payload.props = { omitted: true };
    acc.push([omitStep], [deleteStep]);
    return acc;
  }, []);
}

module.exports = function (chunks) {
  const res = insertOmitSteps(chunks);
  return res;
};
