import errors from './errors'
import ContentType from '../../entities/content-type'
import Intent from '../../interfaces/intent'
import { InvalidActionError } from '../../interfaces/errors'
const ctErrors = errors.contentType

interface ValidationContext {
  remote: Set<string>
  created: Set<string>
  deleted: Set<string>
  toBeCreated: Set<string>
  remoteContentTypes: ContentType[]
}

interface ContentTypeValidation {
  validate (intent: Intent, context: ValidationContext): string | string[]
}

class DuplicateCreate implements ContentTypeValidation {
  validate (intent: Intent, context: ValidationContext) {
    if (!intent.isContentTypeCreate()) {
      return
    }

    const contentTypeId = intent.getContentTypeId()

    if (!context.created.has(contentTypeId)) {
      return
    }

    return ctErrors.create.CONTENT_TYPE_ALREADY_CREATED(contentTypeId)
  }
}

class EditBeforeCreate implements ContentTypeValidation {
  validate (intent: Intent, context: ValidationContext) {
    const isRelevant = intent.isContentTypeUpdate() || intent.isContentTransform() || intent.isEntryDerive()

    if (!isRelevant) {
      return
    }

    const checkContentTypeId = (contentTypeId) => {
      const exists = context.remote.has(contentTypeId) || context.created.has(contentTypeId)
      const willBeCreated = context.toBeCreated.has(contentTypeId)

      return { contentTypeId, exists, willBeCreated }
    }

    if (intent.isEntryDerive()) {
      return intent.getRelatedContentTypeIds()
        .map(checkContentTypeId)
        .filter(({ exists, willBeCreated }) => {
          return !exists && willBeCreated
        })
        .map(({ contentTypeId }) => ctErrors.deriveEntries.DERIVE_BEFORE_CONTENT_TYPE_CREATE(contentTypeId))
    }

    const contentTypeId = intent.getContentTypeId()
    const { exists, willBeCreated } = checkContentTypeId(contentTypeId)

    if (exists || !willBeCreated) {
      return
    }

    if (intent.isContentTypeUpdate()) {
      return ctErrors.update.CONTENT_TYPE_NOT_YET_CREATED(contentTypeId)
    }

    if (intent.isContentTransform()) {
      return ctErrors.transformEntries.TRANSFORM_BEFORE_CONTENT_TYPE_CREATE(contentTypeId)
    }
  }
}

class NonExistingEdits implements ContentTypeValidation {
  validate (intent: Intent, context: ValidationContext) {
    const isRelevant = intent.isContentTypeUpdate() || intent.isContentTransform() || intent.isEntryDerive()

    if (!isRelevant) {
      return
    }

    const checkContentTypeId = (contentTypeId) => {
      const exists = context.remote.has(contentTypeId) || context.created.has(contentTypeId)
      const willBeCreated = context.toBeCreated.has(contentTypeId)

      return { contentTypeId, exists, willBeCreated }
    }

    if (intent.isEntryDerive()) {
      return intent.getRelatedContentTypeIds()
        .map(checkContentTypeId)
        .filter(({ exists, willBeCreated }) => {
          return !exists && !willBeCreated
        })
        .map(({ contentTypeId }) => ctErrors.deriveEntries.CONTENT_TYPE_DOES_NOT_EXIST(contentTypeId))
    }

    const contentTypeId = intent.getContentTypeId()
    const { exists, willBeCreated } = checkContentTypeId(contentTypeId)

    if (exists || willBeCreated) {
      return
    }

    if (intent.isContentTypeUpdate()) {
      return ctErrors.update.CONTENT_TYPE_DOES_NOT_EXIST(contentTypeId)
    }

    if (intent.isContentTransform()) {
      return ctErrors.transformEntries.CONTENT_TYPE_DOES_NOT_EXIST(contentTypeId)
    }
  }
}

class AlreadyExistingCreates implements ContentTypeValidation {
  message = ctErrors.create.CONTENT_TYPE_ALREADY_EXISTS
  validate (intent: Intent, context: ValidationContext) {
    if (!intent.isContentTypeCreate()) {
      return
    }

    const contentTypeId = intent.getContentTypeId()

    if (!context.remote.has(contentTypeId)) {
      return
    }

    return ctErrors.create.CONTENT_TYPE_ALREADY_EXISTS(contentTypeId)
  }
}

class NonExistingDeletes implements ContentTypeValidation {
  validate (intent: Intent, context: ValidationContext) {
    if (!intent.isContentTypeDelete()) {
      return
    }

    const contentTypeId = intent.getContentTypeId()

    if (context.remote.has(contentTypeId) || context.deleted.has(contentTypeId)) {
      return
    }

    return ctErrors.delete.CONTENT_TYPE_DOES_NOT_EXIST(contentTypeId)
  }
}

class DuplicateDeletes implements ContentTypeValidation {
  validate (intent: Intent, context: ValidationContext) {
    if (!intent.isContentTypeDelete()) {
      return
    }

    const contentTypeId = intent.getContentTypeId()

    if (!context.deleted.has(contentTypeId)) {
      return
    }

    return ctErrors.delete.CONTENT_TYPE_ALREADY_DELETED(contentTypeId)
  }
}

class EditsAfterDeletes implements ContentTypeValidation {
  validate (intent: Intent, context: ValidationContext) {
    const isRelevant = intent.isFieldUpdate() || intent.isContentTypeUpdate() || intent.isContentTransform() || intent.isEntryDerive()

    if (!isRelevant) {
      return
    }

    const checkContentTypeId = (contentTypeId) => {
      const deleted = context.deleted.has(contentTypeId)
      return { contentTypeId, deleted }
    }

    if (intent.isEntryDerive()) {
      return intent.getRelatedContentTypeIds()
        .map(checkContentTypeId)
        .filter(({ deleted }) => {
          return deleted
        })
        .map(({ contentTypeId }) => ctErrors.deriveEntries.DERIVE_AFTER_CONTENT_TYPE_DELETE(contentTypeId))
    }

    const contentTypeId = intent.getContentTypeId()
    const { deleted } = checkContentTypeId(contentTypeId)

    if (!deleted) {
      return
    }

    if (intent.isContentTypeUpdate() || intent.isFieldUpdate()) {
      return ctErrors.delete.EDIT_AFTER_DELETE(contentTypeId)
    }

    if (intent.isContentTransform()) {
      return ctErrors.transformEntries.TRANSFORM_AFTER_CONTENT_TYPE_DELETE(contentTypeId)
    }
  }
}

class DeleteCtWithEntries implements ContentTypeValidation {
  validate (intent: Intent, context: ValidationContext) {
    if (!intent.isContentTypeDelete()) {
      return
    }

    const contentTypeId = intent.getContentTypeId()
    const contentType = context.remoteContentTypes.find((ct) => {
      return ct.id === contentTypeId
    })

    if (!contentType || !contentType.hasEntries) {
      return
    }

    return ctErrors.delete.HAS_ENTRIES(contentTypeId)
  }
}

const checks: ContentTypeValidation[] = [
  new DuplicateCreate(),
  new EditBeforeCreate(),
  new EditsAfterDeletes(),
  new NonExistingEdits(),
  new NonExistingDeletes(),
  new AlreadyExistingCreates(),
  new DuplicateDeletes(),
  new DeleteCtWithEntries()
]

export default function (intents: Intent[], contentTypes: ContentType[]): InvalidActionError[] {
  const remote = contentTypes.map((ct) => ct.id)
  const toBeCreated = intents.filter((intent) => intent.isContentTypeCreate()).map((intent) => intent.getContentTypeId())

  let context = {
    remote: new Set(remote), // all currently (in the current iteration step) existing content types
    created: new Set(), // all by now (in previous iteration steps) created content types
    deleted: new Set(), // all by now (in previous iteration steps) deleted content types
    toBeCreated: new Set(toBeCreated), // all future (in remaining iteration steps) created content types
    remoteContentTypes: contentTypes
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

    const contentTypeId = intent.getContentTypeId()

    if (intent.isContentTypeCreate()) {
      context.created.add(contentTypeId)
      context.toBeCreated.delete(contentTypeId)
      context.deleted.delete(contentTypeId)
    }

    if (intent.isContentTypeDelete()) {
      context.deleted.add(contentTypeId)
      context.remote.delete(contentTypeId)
      context.created.delete(contentTypeId)
    }
  }

  return errors
}
