import Intent from '../../interfaces/intent'
import { EditorInterfaces } from '../../entities/content-type'
import { InvalidActionError } from '../../interfaces/errors'
import errors from './errors'
import { collectFieldGroupIds } from '../../utils/editor-layout'
const editorLayoutErrors = errors.editorLayout

interface ValidationContext {
  remoteFieldGroups: Set<string>
  createdFieldGroups: Set<string>
  deletedFieldGroups: Set<string>
  toBeCreatedFieldGroups: Set<string>
}

interface EditorLayoutValidation {
  validate (intent: Intent, context: ValidationContext): string | string[]
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
  new DuplicateDeletes()
]

function getScopedFieldGroupId (intent: Intent) {
  return `${intent.getContentTypeId()}.${intent.getFieldGroupId()}`
}

export default function (intents: Intent[], editorInterfaces: Map<string, EditorInterfaces>): InvalidActionError[] {
  let remote = []
  editorInterfaces.forEach((editorInterfaces, ctId) => {
    const editorLayout = editorInterfaces.getEditorLayout()
    if (editorLayout) {
      remote = remote.concat(collectFieldGroupIds(editorLayout).map(id => `${ctId}.${id}`))
    }
  })
  const toBeCreated = intents.filter((intent) => intent.isFieldGroupCreate()).map(getScopedFieldGroupId)

  let context = {
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
