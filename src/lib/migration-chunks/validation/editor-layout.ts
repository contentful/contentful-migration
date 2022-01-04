import Intent from '../../interfaces/intent'
import { EditorInterfaces } from '../../entities/content-type'
import { InvalidActionError } from '../../interfaces/errors'
import errors from './errors'
import { collectFieldGroupIds, collectFieldIds } from '../../utils/editor-layout'
import EditorLayoutMoveFieldIntent from '../../intent/editor-layout/editor-layout-move-field'
const editorLayoutErrors = errors.editorLayout

const RELATIVE_MOVEMENTS = ['beforeField', 'afterField', 'beforeFieldGroup', 'afterFieldGroup']
const RELATIVE_MOVEMENTS_FIELD_PIVOT = ['beforeField', 'afterField']
const ABSOLUTE_MOVEMENTS = ['toTheTopOfFieldGroup', 'toTheBottomOfFieldGroup']
const VALID_MOVEMENT_DIRECTIONS = [...RELATIVE_MOVEMENTS, ...ABSOLUTE_MOVEMENTS]

interface ValidationContext {
  remoteFields: Set<string>
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
  validate (intent: Intent, context: ValidationContext): string | string[] {
    if (intent.getRawType() !== 'contentType/moveFieldInEditorLayout') {
      return
    }

    const scopedFieldId = getScopedFieldId(intent)
    const moveIntent = (intent as EditorLayoutMoveFieldIntent)
    if (!moveIntent.getFieldId()) {
      return 'Missing field id'
    }
    if (!context.remoteFields.has(scopedFieldId)) {
      return `Field "${moveIntent.getFieldId()}" does not exist in editor layout`
    }

    if (!VALID_MOVEMENT_DIRECTIONS.includes(moveIntent.getDirection())) {
      return `Invalid field movement direction "${moveIntent.getDirection()}"`
    }

    if (RELATIVE_MOVEMENTS.includes(moveIntent.getDirection()) && !moveIntent.getPivotId()) {
      return `A pivot item must be provided`
    }

    const pivotType = RELATIVE_MOVEMENTS_FIELD_PIVOT.includes(moveIntent.getDirection()) ? 'field' : 'field group'

    if (pivotType === 'field' && moveIntent.getFieldId() === moveIntent.getPivotId()) {
      return `Field "${moveIntent.getFieldId()}" cannot be moved using itself as pivot`
    }

    if (moveIntent.getPivotId()) {

      const scopedPivotId = `${moveIntent.getContentTypeId()}.${moveIntent.getPivotId()}`
      const groupWithPivotIdExists = (context.remoteFieldGroups.has(scopedPivotId) || context.createdFieldGroups.has(scopedPivotId))
        && !context.deletedFieldGroups.has(scopedPivotId)
      const fieldWithPivotIdExists = context.remoteFields.has(scopedPivotId)

      const pivotExists = pivotType === 'field group' && groupWithPivotIdExists ||
        pivotType === 'field' && fieldWithPivotIdExists

      if (!pivotExists) {
        const explanation = ABSOLUTE_MOVEMENTS.includes(moveIntent.getDirection()) ?
          `destination group "${moveIntent.getPivotId()}" does not exist` :
          `pivot ${pivotType} "${moveIntent.getPivotId()}" does not exist`

        return `Field "${moveIntent.getFieldId()}" cannot be moved: ${explanation}`
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

const checks: EditorLayoutValidation[] = [
  new DuplicateCreate(),
  new AlreadyExistingCreates(),
  new NonExistingDeletes(),
  new DuplicateDeletes(),
  new InvalidFieldMove()
]

function getScopedFieldGroupId (intent: Intent) {
  return `${intent.getContentTypeId()}.${intent.getFieldGroupId()}`
}

function getScopedFieldId (intent: Intent) {
  return `${intent.getContentTypeId()}.${intent.getFieldId()}`
}

export default function (intents: Intent[], editorInterfaces: Map<string, EditorInterfaces>): InvalidActionError[] {
  let remoteFieldGroups = []
  let remoteFields = []
  editorInterfaces.forEach((editorInterfaces, ctId) => {
    const editorLayout = editorInterfaces.getEditorLayout()
    if (editorLayout) {
      remoteFields = remoteFields.concat(collectFieldIds(editorLayout).map(id => `${ctId}.${id}`))
      remoteFieldGroups = remoteFieldGroups.concat(collectFieldGroupIds(editorLayout).map(id => `${ctId}.${id}`))
    }
  })
  const toBeCreated = intents.filter((intent) => intent.isFieldGroupCreate()).map(getScopedFieldGroupId)

  let context: ValidationContext = {
    remoteFieldGroups: new Set(remote), // all currently (in the current iteration step) existing field groups
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
