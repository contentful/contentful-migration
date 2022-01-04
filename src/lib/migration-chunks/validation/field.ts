import errors from './errors'
import ValidationError from '../../interfaces/errors'
import { Intent } from '../../interfaces/intent'
import { ContentType } from '../../entities/content-type'
import { invalidActionError } from './index';

const fieldErrors = errors.field
const deriveErrors = errors.entry.derivation
const transformErrors = errors.entry.transformation

const RELATIVE_MOVEMENTS = ['afterField', 'beforeField']

function fieldExists(validationContext, fieldId) {
  return validationContext.fieldSet.has(fieldId)
}

function fieldHasBeenRemoved(validationContext, fieldId) {
  return validationContext.fieldRemovals.has(fieldId)
}

function fieldHasBeenMoved(validationContext, movementKey) {
  return validationContext.fieldMovements.has(movementKey)
}

function idHasBeenChangedBefore(validationContext, oldId) {
  return Array.from(validationContext.fieldIdChanges.values()).includes(oldId)
}

const checks = {
  'field/create': (errors, intent: Intent, validationContext) => {
    const id = intent.getFieldId()
    const exists = fieldExists(validationContext, id)

    if (!exists) {
      validationContext.fieldSet.add(id)
      validationContext.fieldRemovals.delete(id)
    }

    if (exists) {
      errors.push(invalidActionError(
        fieldErrors.create.FIELD_ALREADY_CREATED(id),
        intent
      ))
    }

    if (validationContext.fieldIdChanges.has(id)) {
      // a new field is created with the old id, so it's ok to use again
      validationContext.fieldIdChanges.delete(id)
    }
  },

  'field/update': (errors, intent, validationContext) => {
    const id = intent.getFieldId()
    const exists = fieldExists(validationContext, id)
    const removed = fieldHasBeenRemoved(validationContext, id)
    const changedId = validationContext.fieldIdChanges.get(id)

    if (!exists && removed) {
      errors.push(invalidActionError(
        fieldErrors.update.FIELD_ALREADY_DELETED(id),
        intent
      ))
    }

    if (changedId) {
      errors.push(invalidActionError(
        fieldErrors.changeId.REFERENCE_TO_OLD_ID(id, changedId),
        intent
      ))
    } else if (!exists && !removed) {
      errors.push(invalidActionError(
        fieldErrors.update.FIELD_DOES_NOT_EXIST(id),
        intent
      ))
    }
  },

  'field/delete': (errors, intent, validationContext) => {
    const id = intent.getFieldId()
    const exists = fieldExists(validationContext, id)
    const removed = fieldHasBeenRemoved(validationContext, id)

    if (exists) {
      validationContext.fieldSet.delete(id)
      validationContext.fieldRemovals.add(id)
    }

    if (!exists && removed) {
      errors.push(invalidActionError(
        fieldErrors.delete.FIELD_ALREADY_DELETED(id),
        intent
      ))
    }

    if (!exists && !removed) {
      errors.push(invalidActionError(
        fieldErrors.delete.FIELD_DOES_NOT_EXIST(id),
        intent
      ))
    }
  },

  'field/move': (errors, intent, validationContext) => {
    const id = intent.getFieldId()
    const pivot = intent.getPivotId()
    const exists = fieldExists(validationContext, id)
    const removed = fieldHasBeenRemoved(validationContext, id)
    const moved = fieldHasBeenMoved(validationContext, intent.getFieldMovementKey())
    const isRelativeMovement = RELATIVE_MOVEMENTS.includes(intent.getDirection())

    validationContext.fieldMovements.add(intent.getFieldMovementKey())

    if (isRelativeMovement) {
      const pivotExists = fieldExists(validationContext, pivot)
      const pivotRemoved = fieldHasBeenRemoved(validationContext, pivot)
      const direction = intent.getDirection() === 'afterField' ? 'after' : 'before'

      if (!pivotExists && !pivotRemoved) {
        errors.push(invalidActionError(
          fieldErrors.move.PIVOT_FIELD_DOES_NOT_EXIST(intent.getPivotId(), direction),
          intent
        ))
      }

      if (!pivotExists && pivotRemoved) {
        errors.push(invalidActionError(
          fieldErrors.move.PIVOT_FIELD_DELETED(intent.getPivotId(), direction),
          intent
        ))
      }
    }

    if (!exists && removed) {
      errors.push(invalidActionError(
        fieldErrors.move.FIELD_DELETED(id),
        intent
      ))
    }

    if (!exists && !removed) {
      errors.push(invalidActionError(
        fieldErrors.move.FIELD_DOES_NOT_EXIST(id),
        intent
      ))
    }

    if (moved) {
      errors.push(invalidActionError(
        fieldErrors.move.FIELD_ALREADY_MOVED(id),
        intent
      ))
    }
  },

  'field/rename': (errors, intent, validationContext) => {
    checks['field/update'](errors, intent, validationContext)

    const oldId = intent.getFieldId()
    const newId = intent.getNewId()

    if (idHasBeenChangedBefore(validationContext, oldId)) {
      errors.push(invalidActionError(
        fieldErrors.changeId.NO_MULTIPLE_ID_CHANGES(oldId),
        intent
      ))
    }

    if (oldId === newId) {
      errors.push(invalidActionError(
        fieldErrors.changeId.ID_MUST_BE_DIFFERENT(oldId),
        intent
      ))
    } else if (fieldExists(validationContext, newId)) {
      errors.push(invalidActionError(
        fieldErrors.changeId.ID_ALREADY_EXISTS(
          oldId,
          newId,
          intent.getContentTypeId()
        ),
        intent
      ))
    }
    // remember this field's old id, so that we can check if it is erroneously used later on
    validationContext.fieldIdChanges.set(oldId, newId)

    validationContext.fieldSet.delete(oldId)
    validationContext.fieldSet.add(newId)
  },

  'contentType/transformEntries': (errors, intent, validationContext) => {
    const wrapError = (message, intent) => {
      return {
        type: 'InvalidEntriesTransformation',
        message,
        details: { intent }
      }
    }

    const transformation = intent.toRaw().payload.transformation

    const nonExistingSourceFields = transformation.from.filter((f) => !validationContext.fieldSet.has(f))
    const nonExistingDestinationFields = transformation.to.filter((f) => !validationContext.fieldSet.has(f))

    const nonExistingFields = nonExistingSourceFields.concat(nonExistingDestinationFields)

    if (nonExistingFields.length > 0) {
      errors.push(wrapError(transformErrors.NON_EXISTING_FIELDS(intent.getContentTypeId(), nonExistingFields), intent))
    }
  },
}

export default function (intents: Intent[], contentTypes: ContentType[] = []): ValidationError[] {
  const errors = []
  const contentTypeFields: { [key: string]: Set<string> } = contentTypes.reduce((acc, curr) => {
    const fieldIds = curr.fields.map((f) => f.id)
    acc[curr.id] = new Set(fieldIds)
    return acc
  }, {})

  const recentlyRemoved: { [key: string]: Set<string> } = {}
  const recentlyMoved: { [key: string]: Set<string> } = {}
  const changedFieldIds: { [key: string]: Map<string, string> } = {}

  for (const intent of intents) {
    const contentTypeId = intent.getContentTypeId()
    const contentTypeExists = Boolean(contentTypes.find((ct) => ct.id === contentTypeId))
    const fieldSet = contentTypeFields[contentTypeId] || new Set()
    const fieldRemovals = recentlyRemoved[contentTypeId] || new Set()
    const fieldMovements = recentlyMoved[contentTypeId] || new Set()
    const fieldIdChanges = changedFieldIds[contentTypeId] || new Map()
    const validationContext = { fieldSet, fieldRemovals, fieldMovements, fieldIdChanges }

    if (intent.isAboutField()) {
      const fieldId = intent.getFieldId()

      if (!contentTypeExists) {
        const type = intent.getRawType().split('/')[1]
        errors.push(invalidActionError(
          fieldErrors[type].CONTENT_TYPE_DOES_NOT_EXIST(fieldId, contentTypeId),
          intent
        ))
        continue
      }

      checks[intent.getRawType()](errors, intent, validationContext)
    }

    if (intent.isContentTransform()) {
      checks[intent.getRawType()](errors, intent, validationContext)
    }

    // We need to keep track of field creations and removals
    // So this is the only place we can do this without duplication
    if (intent.isEntryDerive()) {
      const wrapError = (message, intent) => {
        return {
          type: 'InvalidEntriesDerivation',
          message,
          details: { intent }
        }
      }

      const derivation = intent.toRaw().payload.derivation
      const sourceCT = contentTypes.find((ct) => ct.id === intent.getContentTypeId())
      const destinationCT = contentTypes.find((ct) => ct.id === derivation.derivedContentType)
      const destinationFields = contentTypeFields[destinationCT.id]

      const nonExistingSourceFields = derivation.from.filter((f) => !fieldSet.has(f))
      const nonExistingToReferenceField = !fieldSet.has(derivation.toReferenceField)
      const nonExistingDestinationFields = destinationFields ? derivation.derivedFields.filter((f) => !destinationFields.has(f)) : derivation.derivedFields

      if (nonExistingSourceFields.length > 0) {
        errors.push(wrapError(deriveErrors.NON_EXISTING_SOURCE_FIELDS(sourceCT.id, nonExistingSourceFields), intent))
      }
      if (nonExistingToReferenceField) {
        errors.push(wrapError(deriveErrors.NON_EXISTING_REFERENCE_FIELD(sourceCT.id, derivation.toReferenceField), intent))
      }
      if (nonExistingDestinationFields.length > 0) {
        errors.push(wrapError(deriveErrors.NON_EXISTING_DESTINATION_FIELDS(destinationCT.id, nonExistingDestinationFields), intent))
      }
    }

    contentTypeFields[contentTypeId] = fieldSet
    recentlyRemoved[contentTypeId] = fieldRemovals
    recentlyMoved[contentTypeId] = fieldMovements
    changedFieldIds[contentTypeId] = fieldIdChanges
  }

  return errors
}
