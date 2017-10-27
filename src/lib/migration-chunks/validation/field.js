'use strict';

const { field: fieldErrors } = require('./errors');

const invalidActionError = (message, step) => {
  return {
    type: 'InvalidAction',
    message: message,
    details: { step }
  };
};

const RELATIVE_MOVEMENTS = ['afterField', 'beforeField'];

function fieldId (step) {
  return step.payload.fieldId;
}

function pivotId (step) {
  return step.payload.movement.pivot;
}

function contentTypeId (step) {
  return step.payload.contentTypeId;
}

function fieldMovementKey (step) {
  return [contentTypeId(step), fieldId(step)].join('/');
}

function fieldExists (validationContext, fieldId) {
  return validationContext.fieldSet.has(fieldId);
}

function fieldHasBeenRemoved (validationContext, fieldId) {
  return validationContext.fieldRemovals.has(fieldId);
}

function fieldHasBeenMoved (validationContext, movementKey) {
  return validationContext.fieldMovements.has(movementKey);
}

function idHasBeenChangedBefore (validationContext, oldId) {
  return Array.from(validationContext.fieldIdChanges.values()).includes(oldId);
}

const checks = {
  'field/create': (errors, step, validationContext) => {
    const id = fieldId(step);
    const exists = fieldExists(validationContext, id);

    if (!exists) {
      validationContext.fieldSet.add(id);
      validationContext.fieldRemovals.delete(id);
    }

    if (exists) {
      errors.push(invalidActionError(
        fieldErrors.create.FIELD_ALREADY_CREATED(id),
        step
      ));
    }

    if (validationContext.fieldIdChanges.has(id)) {
      // a new field is created with the old id, so it's ok to use again
      validationContext.fieldIdChanges.delete(id);
    }
  },

  'field/update': (errors, step, validationContext) => {
    const id = fieldId(step);
    const exists = fieldExists(validationContext, id);
    const removed = fieldHasBeenRemoved(validationContext, id);
    const changedId = validationContext.fieldIdChanges.get(id);

    if (!exists && removed) {
      errors.push(invalidActionError(
        fieldErrors.update.FIELD_ALREADY_DELETED(id),
        step
      ));
    }

    if (changedId) {
      errors.push(invalidActionError(
        fieldErrors.changeId.REFERENCE_TO_OLD_ID(id, changedId),
        step
      ));
    } else if (!exists && !removed) {
      errors.push(invalidActionError(
        fieldErrors.update.FIELD_DOES_NOT_EXIST(id),
        step
      ));
    }
  },

  'field/delete': (errors, step, validationContext) => {
    const id = fieldId(step);
    const exists = fieldExists(validationContext, id);
    const removed = fieldHasBeenRemoved(validationContext, id);

    if (exists) {
      validationContext.fieldSet.delete(id);
      validationContext.fieldRemovals.add(id);
    }

    if (!exists && removed) {
      errors.push(invalidActionError(
        fieldErrors.delete.FIELD_ALREADY_DELETED(id),
        step
      ));
    }

    if (!exists && !removed) {
      errors.push(invalidActionError(
        fieldErrors.delete.FIELD_DOES_NOT_EXIST(id),
        step
      ));
    }
  },

  'field/move': (errors, step, validationContext) => {
    const id = fieldId(step);
    const pivot = pivotId(step);
    const exists = fieldExists(validationContext, id);
    const removed = fieldHasBeenRemoved(validationContext, id);
    const moved = fieldHasBeenMoved(validationContext, fieldMovementKey(step));
    const isRelativeMovement = RELATIVE_MOVEMENTS.includes(step.payload.movement.direction);

    validationContext.fieldMovements.add(fieldMovementKey(step));

    if (isRelativeMovement) {
      const pivotExists = fieldExists(validationContext, pivot);
      const pivotRemoved = fieldHasBeenRemoved(validationContext, pivot);
      const direction = step.payload.movement.direction === 'afterField' ? 'after' : 'before';

      if (!pivotExists && !pivotRemoved) {
        errors.push(invalidActionError(
          fieldErrors.move.PIVOT_FIELD_DOES_NOT_EXIST(step.payload.movement.pivot, direction),
          step
        ));
      }

      if (!pivotExists && pivotRemoved) {
        errors.push(invalidActionError(
          fieldErrors.move.PIVOT_FIELD_DELETED(step.payload.movement.pivot, direction),
          step
        ));
      }
    }

    if (!exists && removed) {
      errors.push(invalidActionError(
        fieldErrors.move.FIELD_DELETED(id),
        step
      ));
    }

    if (!exists && !removed) {
      errors.push(invalidActionError(
        fieldErrors.move.FIELD_DOES_NOT_EXIST(id),
        step
      ));
    }

    if (moved) {
      errors.push(invalidActionError(
        fieldErrors.move.FIELD_ALREADY_MOVED(id),
        step
      ));
    }
  },

  'field/rename': (errors, step, validationContext) => {
    checks['field/update'](errors, step, validationContext);

    const oldId = step.payload.fieldId;
    const newId = step.payload.props.newId;

    if (idHasBeenChangedBefore(validationContext, oldId)) {
      errors.push(invalidActionError(
        fieldErrors.changeId.NO_MULTIPLE_ID_CHANGES(oldId),
        step
      ));
    }

    if (oldId === newId) {
      errors.push(invalidActionError(
        fieldErrors.changeId.ID_MUST_BE_DIFFERENT(oldId),
        step
      ));
    } else if (fieldExists(validationContext, newId)) {
      errors.push(invalidActionError(
        fieldErrors.changeId.ID_ALREADY_EXISTS(
          oldId,
          newId,
          step.payload.contentTypeId
        ),
        step
      ));
    }
    // remember this field's old id, so that we can check if it is erroneously used later on
    validationContext.fieldIdChanges.set(oldId, newId);

    validationContext.fieldSet.delete(oldId);
    validationContext.fieldSet.add(newId);
  }
};

module.exports = function (chunks, contentTypes = []) {
  const errors = [];
  const contentTypeFields = contentTypes.reduce((acc, curr) => {
    const fieldIds = curr.fields.map((f) => f.id);
    acc[curr.id] = new Set(fieldIds);
    return acc;
  }, {});

  const recentlyRemoved = {};
  const recentlyMoved = {};
  const changedFieldIds = {};

  for (const chunk of chunks) {
    const contentTypeId = chunk[0].payload.contentTypeId;
    const contentTypeExists = Boolean(contentTypes.find((ct) => ct.id === contentTypeId));
    const fieldSet = contentTypeFields[contentTypeId] || new Set();
    const fieldRemovals = recentlyRemoved[contentTypeId] || new Set();
    const fieldMovements = recentlyMoved[contentTypeId] || new Set();
    const fieldIdChanges = changedFieldIds[contentTypeId] || new Map();
    const validationContext = { fieldSet, fieldRemovals, fieldMovements, fieldIdChanges };

    const fieldSteps = chunk.filter((step) => step.type.startsWith('field'));

    for (const step of fieldSteps) {
      const fieldId = step.payload.fieldId;

      if (!contentTypeExists) {
        const type = step.type.split('/')[1];
        errors.push(invalidActionError(
          fieldErrors[type].CONTENT_TYPE_DOES_NOT_EXIST(fieldId, contentTypeId),
          step
        ));
        continue;
      }

      checks[step.type](errors, step, validationContext);
    }

    contentTypeFields[contentTypeId] = fieldSet;
    recentlyRemoved[contentTypeId] = fieldRemovals;
    recentlyMoved[contentTypeId] = fieldMovements;
    changedFieldIds[contentTypeId] = fieldIdChanges;
  }

  return errors;
};
