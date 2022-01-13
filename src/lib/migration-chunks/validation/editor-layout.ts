import Intent from '../../interfaces/intent'
import { EditorInterfaces } from '../../entities/content-type'
import { InvalidActionError } from '../../interfaces/errors'
import errors from './errors'
import { collectFieldGroupIds } from '../../utils/editor-layout'
import EditorLayoutMoveFieldIntent from '../../intent/editor-layout/editor-layout-move-field'
import { FieldsContext } from './index'
import { EditorLayoutChangeFieldGroupId } from '../../intent'
const editorLayoutErrors = errors.editorLayout

const RELATIVE_MOVEMENTS = ['beforeField', 'afterField', 'beforeFieldGroup', 'afterFieldGroup']
const RELATIVE_MOVEMENTS_FIELD_PIVOT = ['beforeField', 'afterField']
const ABSOLUTE_MOVEMENTS = ['toTheTopOfFieldGroup', 'toTheBottomOfFieldGroup']
const VALID_MOVEMENT_DIRECTIONS = [...RELATIVE_MOVEMENTS, ...ABSOLUTE_MOVEMENTS]

interface ValidationContext {
  fields: FieldsContext,
  remoteFieldGroups: Set<string>
  createdFieldGroups: Set<string>
  deletedFieldGroups: Set<string>
  toBeCreatedFieldGroups: Set<string>
}

interface EditorLayoutValidation {
  validate (intent: Intent, context: ValidationContext): string | string[] | undefined
}

class DuplicateCreate implements EditorLayoutValidation {
  validate (intent: Intent, context: ValidationContext) {
    if (!intent.isFieldGroupCreate()) {
      return
    }

    if (!context.createdFieldGroups.has(getScopedFieldGroupId(intent))) {
      return
    }

    return editorLayoutErrors.createFieldGroup.FIELD_GROUP_ALREADY_CREATED(
      intent.getFieldGroupId(),
      intent.getContentTypeId()
    )
  }
}

class AlreadyExistingCreates implements EditorLayoutValidation {
  validate (intent: Intent, context: ValidationContext) {
    if (!intent.isFieldGroupCreate()) {
      return
    }

    if (!context.remoteFieldGroups.has(getScopedFieldGroupId(intent))) {
      return
    }

    return editorLayoutErrors.createFieldGroup.FIELD_GROUP_ALREADY_EXISTS(
      intent.getFieldGroupId(),
      intent.getContentTypeId()
    )
  }
}

class NonExistingDeletes implements EditorLayoutValidation {
  validate (intent: Intent, context: ValidationContext) {
    if (!intent.isFieldGroupDelete()) {
      return
    }

    const fieldGroupId = getScopedFieldGroupId(intent)

    if (context.remoteFieldGroups.has(fieldGroupId) || context.deletedFieldGroups.has(fieldGroupId)) {
      return
    }

    return editorLayoutErrors.deleteFieldGroup.FIELD_GROUP_DOES_NOT_EXIST(
      intent.getFieldGroupId(),
      intent.getContentTypeId()
    )
  }
}

class InvalidFieldMove implements EditorLayoutValidation {
  validate (intent: Intent, { fields, remoteFieldGroups, createdFieldGroups, deletedFieldGroups }: ValidationContext): string | string[] {
    if (intent.getRawType() !== 'contentType/moveFieldInEditorLayout') {
      return
    }

    const moveIntent = (intent as EditorLayoutMoveFieldIntent)
    const { moveField: moveFieldError } = editorLayoutErrors

    const fieldId = moveIntent.getFieldId()
    const direction = moveIntent.getDirection()
    const contentTypeId = moveIntent.getContentTypeId()
    if (!fieldId) {
      return moveFieldError.MISSING_FIELD_ID()
    }

    const fieldExists = fields.contentTypeFields[contentTypeId]?.has(fieldId) &&
      !fields.recentlyRemoved[contentTypeId]?.has(fieldId)

    if (!fieldExists) {
      return moveFieldError.FIELD_DOES_NOT_EXIST(fieldId)
    }

    if (!VALID_MOVEMENT_DIRECTIONS.includes(direction)) {
      return moveFieldError.INVALID_DIRECTION(fieldId, direction)
    }

    const pivotType = RELATIVE_MOVEMENTS_FIELD_PIVOT.includes(direction) ? 'field' : 'field group'

    const pivotId = moveIntent.getPivotId()
    if (RELATIVE_MOVEMENTS.includes(direction) && !pivotId) {
      return moveFieldError.MISSING_PIVOT(fieldId, pivotType)
    }

    if (pivotType === 'field' && fieldId === pivotId) {
      return moveFieldError.SELF_PIVOT(fieldId)
    }

    if (pivotId) {

      const scopedPivotId = `${contentTypeId}.${pivotId}`
      const groupWithPivotIdExists = (remoteFieldGroups.has(scopedPivotId) || createdFieldGroups.has(scopedPivotId))
        && !deletedFieldGroups.has(scopedPivotId)
      const fieldWithPivotIdExists = fields.contentTypeFields[contentTypeId].has(pivotId) &&
        !fields.recentlyRemoved[contentTypeId].has(pivotId)

      const pivotExists = pivotType === 'field group' && groupWithPivotIdExists ||
        pivotType === 'field' && fieldWithPivotIdExists

      if (!pivotExists) {
        const explanation = ABSOLUTE_MOVEMENTS.includes(direction) ?
          `destination group "${pivotId}" does not exist` :
          `pivot ${pivotType} "${pivotId}" does not exist`
        return moveFieldError.INVALID_PIVOT(fieldId, explanation)
      }
    }
  }
}

class DuplicateDeletes implements EditorLayoutValidation {
  validate (intent: Intent, context: ValidationContext) {
    if (!intent.isFieldGroupDelete()) {
      return
    }

    const fieldGroupId = getScopedFieldGroupId(intent)

    if (!context.deletedFieldGroups.has(fieldGroupId)) {
      return
    }

    return editorLayoutErrors.deleteFieldGroup.FIELD_GROUP_ALREADY_DELETED(
      intent.getFieldGroupId(),
      intent.getContentTypeId()
    )
  }
}

class InvalidFielGroupIdChange implements EditorLayoutValidation {
  validate (intent: Intent, { remoteFieldGroups, createdFieldGroups }: ValidationContext): string | string[] {
    if (intent.getRawType() !== 'contentType/changeEditorLayoutFieldGroupId') {
      return
    }

    const changeErrors = editorLayoutErrors.changeFieldGroupId
    const changeIntent = intent as EditorLayoutChangeFieldGroupId
    const contentTypeId = changeIntent.getContentTypeId()
    const fieldGroupId = changeIntent.getFieldGroupId()
    const newFieldGroupId = changeIntent.getNewFieldGroupId()

    if (!fieldGroupId) {
      return changeErrors.MISSING_FIELD_GROUP_ID()
    }
    if (!newFieldGroupId) {
      return changeErrors.MISSING_NEW_FIELD_GROUP(fieldGroupId)
    }
    const scopedFieldGroupId = getScopedFieldGroupId(changeIntent)
    if (!remoteFieldGroups.has(scopedFieldGroupId) && !createdFieldGroups.has(scopedFieldGroupId)) {
      return changeErrors.FIELD_GROUP_DOES_NOT_EXIST(fieldGroupId, contentTypeId)
    }
    if (fieldGroupId === newFieldGroupId) {
      return changeErrors.SELF_FIELD_GROUP(fieldGroupId)
    }
    const scopedNewFieldGroupId = generateScopedId(contentTypeId, newFieldGroupId)
    if (remoteFieldGroups.has(scopedNewFieldGroupId) || createdFieldGroups.has(scopedNewFieldGroupId)) {
      return changeErrors.FIELD_GROUP_CONFLICT(newFieldGroupId, contentTypeId)
    }
  }
}

const checks: EditorLayoutValidation[] = [
  new DuplicateCreate(),
  new AlreadyExistingCreates(),
  new NonExistingDeletes(),
  new DuplicateDeletes(),
  new InvalidFieldMove(),
  new InvalidFielGroupIdChange()
]

function getScopedFieldGroupId (intent: Intent) {
  return generateScopedId(intent.getContentTypeId(), intent.getFieldGroupId())
}

function generateScopedId (ctId: string, id: string) {
  return `${ctId}.${id}`
}

export default function (intents: Intent[], editorInterfaces: Map<string, EditorInterfaces>, fieldsContext: FieldsContext): InvalidActionError[] {
  let remoteFieldGroups = []
  editorInterfaces.forEach((editorInterfaces, ctId) => {
    const editorLayout = editorInterfaces.getEditorLayout()
    if (editorLayout) {
      remoteFieldGroups = remoteFieldGroups.concat(collectFieldGroupIds(editorLayout).map(id => `${ctId}.${id}`))
    }
  })
  const toBeCreated = intents.filter((intent) => intent.isFieldGroupCreate()).map(getScopedFieldGroupId)

  let context: ValidationContext = {
    fields: fieldsContext, // all currently existing fields as collected by field validation
    remoteFieldGroups: new Set(remoteFieldGroups), // all currently (in the current iteration step) existing field groups
    createdFieldGroups: new Set<string>(), // all by now (in previous iteration steps) created field groups
    deletedFieldGroups: new Set<string>(), // all by now (in previous iteration steps) deleted field groups
    toBeCreatedFieldGroups: new Set(toBeCreated) // all future (in remaining iteration steps) created field groups
  }

  let errors = []

  for (const intent of intents) {
    let error

    for (const check of checks) {
      error = check.validate(intent, context)

      if (error && error.length) {
        // proceed with next intent
        break
      }
    }

    if (error) {
      const errorList = Array.isArray(error) ? error : [error]
      const invalidActions = errorList.map((error) => ({
        type: 'InvalidAction',
        message: error,
        details: { intent }
      }))

      errors = errors.concat(invalidActions)

      // do not update context
      continue
    }

    const fieldGroupId = getScopedFieldGroupId(intent)

    if (intent.isFieldGroupCreate()) {
      context.createdFieldGroups.add(fieldGroupId)
      context.toBeCreatedFieldGroups.delete(fieldGroupId)
      context.deletedFieldGroups.delete(fieldGroupId)
    }

    if (intent.isFieldGroupDelete()) {
      context.deletedFieldGroups.add(fieldGroupId)
      context.remoteFieldGroups.delete(fieldGroupId)
      context.createdFieldGroups.delete(fieldGroupId)
    }
  }

  return errors
}
