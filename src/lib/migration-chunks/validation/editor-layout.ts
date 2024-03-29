import Intent from '../../interfaces/intent'
import { ContentType, EditorInterfaces } from '../../entities/content-type'
import { InvalidActionError } from '../../interfaces/errors'
import errors from './errors'
import { collectFieldGroupIds } from '../../utils/editor-layout'
import EditorLayoutMoveFieldIntent from '../../intent/editor-layout/editor-layout-move-field'
import { FieldsContext, invalidActionError } from './index'
const editorLayoutErrors = errors.editorLayout

const RELATIVE_MOVEMENTS = ['beforeField', 'afterField', 'beforeFieldGroup', 'afterFieldGroup']
const RELATIVE_MOVEMENTS_FIELD_PIVOT = ['beforeField', 'afterField']
const ABSOLUTE_MOVEMENTS = ['toTheTopOfFieldGroup', 'toTheBottomOfFieldGroup']
const VALID_MOVEMENT_DIRECTIONS = [...RELATIVE_MOVEMENTS, ...ABSOLUTE_MOVEMENTS]

interface ValidationContext {
  fields: FieldsContext,
  remoteEditorLayouts: Set<string>
  createdEditorLayouts: Set<string>
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
    if (!intent.isEditorLayoutCreate()) {
      return
    }

    if (!context.createdEditorLayouts.has(intent.getContentTypeId())) {
      return
    }

    return editorLayoutErrors.createEditorLayout.EDITOR_LAYOUT_ALREADY_CREATED(intent.getContentTypeId())
  }
}

class AlreadyExistingCreates implements EditorLayoutValidation {
  validate (intent: Intent, context: ValidationContext) {
    if (!intent.isEditorLayoutCreate()) {
      return
    }

    if (!context.remoteEditorLayouts.has(intent.getContentTypeId())) {
      return
    }

    return editorLayoutErrors.createEditorLayout.EDITOR_LAYOUT_ALREADY_EXISTS(intent.getContentTypeId())
  }
}

class InvalidEditorLayoutMethod implements EditorLayoutValidation {
  validate (intent: Intent): string | string[] {
    if (intent.isEditorLayoutInvalidMethod()) {
      return editorLayoutErrors.updateEditorLayout.INVALID_METHOD(intent.getInvalidMethod())
    }
  }
}

class DuplicateFieldGroupCreate implements EditorLayoutValidation {
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

class AlreadyExistingFieldGroupCreates implements EditorLayoutValidation {
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

class InvalidFieldGroupId implements EditorLayoutValidation {
  validate (intent: Intent) {
    if (!intent.isFieldGroupCreate() && !intent.isFieldGroupIdChange()) {
      return
    }

    const fieldGroupId = intent.isFieldGroupIdChange() ? intent.getNewFieldGroupId() : intent.getFieldGroupId()

    if (!fieldGroupId.match(/^[a-zA-Z0-9_]+$/) || fieldGroupId.length === 0) {
      return editorLayoutErrors.createFieldGroup.INVALID_CHARACTER_IN_ID(
        fieldGroupId,
        intent.getContentTypeId()
      )
    }

    if (fieldGroupId.match(/^\d/)) {
      return editorLayoutErrors.createFieldGroup.INVALID_FIRST_CHARACTER_IN_ID(
        fieldGroupId,
        intent.getContentTypeId()
      )
    }

    if (fieldGroupId.length > 50) {
      return editorLayoutErrors.createFieldGroup.ID_TOO_LONG(
        fieldGroupId,
        intent.getContentTypeId()
      )
    }
  }
}

class InvalidFieldGroupName implements EditorLayoutValidation {
  validate (intent: Intent) {
    if (!intent.isFieldGroupUpdate()) {
      return
    }

    const name = intent.getFieldGroupProps().name
    if (name && name.length > 50) {
      return editorLayoutErrors.createFieldGroup.NAME_TOO_LONG(
        intent.getFieldGroupId(),
        intent.getContentTypeId()
      )
    }
  }
}

class NonExistingDeletes implements EditorLayoutValidation {
  validate (intent: Intent, context: ValidationContext) {
    if (!intent.isFieldGroupDelete()) {
      return
    }

    const fieldGroupId = getScopedFieldGroupId(intent)
    const fieldGroupExists =
      context.remoteFieldGroups.has(fieldGroupId) ||
      context.createdFieldGroups.has(fieldGroupId) ||
      context.deletedFieldGroups.has(fieldGroupId)

    if (fieldGroupExists) {
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
    if (!intent.isFieldGroupIdChange()) {
      return
    }

    const changeErrors = editorLayoutErrors.changeFieldGroupId

    const contentTypeId = intent.getContentTypeId()
    const fieldGroupId = intent.getFieldGroupId()
    const newFieldGroupId = intent.getNewFieldGroupId()

    if (!fieldGroupId) {
      return changeErrors.MISSING_FIELD_GROUP_ID()
    }
    if (newFieldGroupId === undefined) {
      return changeErrors.MISSING_NEW_FIELD_GROUP(fieldGroupId)
    }
    const scopedFieldGroupId = getScopedFieldGroupId(intent)
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

class InvalidFieldGroupControlChange implements EditorLayoutValidation {
  validate (intent: Intent, { remoteFieldGroups, createdFieldGroups }: ValidationContext): string | string[] {
    if (!intent.isFieldGroupControlChange()) {
      return
    }

    const scopedFieldGroupId = getScopedFieldGroupId(intent)
    if (!remoteFieldGroups.has(scopedFieldGroupId) && !createdFieldGroups.has(scopedFieldGroupId)) {
      return editorLayoutErrors.changeFieldGroupControl.FIELD_GROUP_DOES_NOT_EXIST(intent.getFieldGroupId())
    }
  }
}

const checks: EditorLayoutValidation[] = [
  new DuplicateCreate(),
  new AlreadyExistingCreates(),
  new DuplicateFieldGroupCreate(),
  new AlreadyExistingFieldGroupCreates(),
  new NonExistingDeletes(),
  new DuplicateDeletes(),
  new InvalidFieldMove(),
  new InvalidFielGroupIdChange(),
  new InvalidFieldGroupId(),
  new InvalidFieldGroupName(),
  new InvalidFieldGroupControlChange(),
  new InvalidEditorLayoutMethod()
]

function getScopedFieldGroupId (intent: Intent) {
  return generateScopedId(intent.getContentTypeId(), intent.getFieldGroupId())
}

function generateScopedId (ctId: string, id: string) {
  return `${ctId}.${id}`
}

export default function (
  intents: Intent[],
  editorInterfaces: Map<string, EditorInterfaces>,
  fieldsContext: FieldsContext,
  contentTypes: ContentType[]
): InvalidActionError[] {
  let remoteFieldGroups = []
  const remoteEditorLayouts = new Set<string>()
  editorInterfaces.forEach((editorInterfaces, ctId) => {
    const editorLayout = editorInterfaces.getEditorLayout()
    if (editorLayout) {
      remoteEditorLayouts.add(ctId)
      remoteFieldGroups = remoteFieldGroups.concat(collectFieldGroupIds(editorLayout).map(id => `${ctId}.${id}`))
    }
  })
  const toBeCreated = intents.filter((intent) => intent.isFieldGroupCreate()).map(getScopedFieldGroupId)

  let context: ValidationContext = {
    fields: fieldsContext, // all currently existing fields as collected by field validation
    remoteEditorLayouts, // all currently (in the current iteration step) existing editor layouts
    createdEditorLayouts: new Set<string>(), // all by now (in previous iteration steps) created editor layouts
    remoteFieldGroups: new Set(remoteFieldGroups), // all currently (in the current iteration step) existing field groups
    createdFieldGroups: new Set<string>(), // all by now (in previous iteration steps) created field groups
    deletedFieldGroups: new Set<string>(), // all by now (in previous iteration steps) deleted field groups
    toBeCreatedFieldGroups: new Set(toBeCreated) // all future (in remaining iteration steps) created field groups
  }

  let errors = []

  for (const intent of intents) {
    if (!intent.isAboutEditorLayout()) {
      continue
    }

    if (intent.isEditorLayoutCreate()) {
      const contentTypeId = intent.getContentTypeId()
      const contentTypeExists = Boolean(contentTypes.find((ct) => ct.id === contentTypeId))
      if (!contentTypeExists) {
        errors.push(invalidActionError(editorLayoutErrors.updateEditorLayout.CONTENT_TYPE_DOES_NOT_EXIST(contentTypeId), intent))
      }
    }

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

    if (intent.isEditorLayoutCreate()) {
      context.createdEditorLayouts.add(intent.getContentTypeId())
    }

    if (intent.isEditorLayoutDelete()) {
      context.remoteEditorLayouts.delete(intent.getContentTypeId())
      context.createdEditorLayouts.delete(intent.getContentTypeId())
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

    if (intent.isFieldGroupIdChange()) {
      const newFieldGroupId = generateScopedId(
        intent.getContentTypeId(),
        intent.getNewFieldGroupId()
      )
      context.remoteFieldGroups.delete(fieldGroupId)
      context.createdFieldGroups.delete(fieldGroupId)
      context.createdFieldGroups.add(newFieldGroupId)
    }
  }

  return errors
}
