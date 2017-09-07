'use strict';

module.exports = function contentTypeIdsInPlan (plan) {
  const created = new Set();
  const updated = new Set();

  plan.forEach((chunk) => {
    const id = chunk[0].payload.contentTypeId;
    const types = chunk.map((action) => action.type);

    for (const type of types) {
      if (type === 'contentType/create') {
        updated.delete(id);
        created.add(id);
      } else if (type === 'contentType/update' || type === 'field/update' ||
        type === 'field/create' || type === 'field/delete') {
        if (!created.has(id)) {
          updated.add(id);
        }
      }
    }
  });

  return {
    created: Array.from(created),
    updated: Array.from(updated)
  };
};
