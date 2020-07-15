import errors from './errors'
import Tag from '../../entities/tag'
import Intent from '../../interfaces/intent'
import { InvalidActionError } from '../../interfaces/errors'
const tagErrors = errors.tag

interface ValidationContext {
  remote: Set<string>
  created: Set<string>
  deleted: Set<string>
  toBeCreated: Set<string>
  remoteTags: Tag[]
}

interface TagValidation {
  validate (intent: Intent, context: ValidationContext): string | string[]
}

class DuplicateCreate implements TagValidation {
  validate (intent: Intent, context: ValidationContext) {
    if (!intent.isTagCreate()) {
      return
    }

    const tagId = intent.getTagId()

    if (!context.created.has(tagId)) {
      return
    }

    return tagErrors.create.TAG_ALREADY_CREATED(tagId)
  }
}

class EditBeforeCreates implements TagValidation {
  validate (intent: Intent, context: ValidationContext) {
    const isRelevant = intent.isTagUpdate()

    if (!isRelevant) {
      return
    }

    const checkTagId = (tagId) => {
      const exists = context.remote.has(tagId) || context.created.has(tagId)
      const willBeCreated = context.toBeCreated.has(tagId)
      return { tagId, exists, willBeCreated }
    }

    const tagId = intent.getTagId()
    const { exists, willBeCreated } = checkTagId(tagId)

    if (exists || !willBeCreated) {
      return
    }

    if (intent.isTagUpdate()) {
      return tagErrors.update.TAG_NOT_YET_CREATED(tagId)
    }
  }
}

class EditBeforeCreate implements TagValidation {
  validate (intent: Intent, context: ValidationContext) {
    const isRelevant = intent.isTagUpdate()

    if (!isRelevant) {
      return
    }

    const checkTagId = (tagId) => {
      const exists = context.remote.has(tagId) || context.created.has(tagId)
      // TODO Check to be created
      const willBeCreated = context.toBeCreated.has(tagId)

      return { tagId, exists, willBeCreated }
    }

    const tagId = intent.getTagId()
    const { exists, willBeCreated } = checkTagId(tagId)

    if (exists || !willBeCreated) {
      return
    }

    if (intent.isTagUpdate()) {
      return tagErrors.update.TAG_NOT_YET_CREATED(tagId)
    }

    if (intent.isContentTransform()) {
      return tagErrors.transformEntries.TRANSFORM_BEFORE_TAG_CREATE(tagId)
    }
  }
}

class NonExistingEdits implements TagValidation {
  validate (intent: Intent, context: ValidationContext) {
    const isRelevant = intent.isTagUpdate()

    if (!isRelevant) {
      return
    }

    const checkTagId = (tagId) => {
      const exists = context.remote.has(tagId) || context.created.has(tagId)
      const willBeCreated = context.toBeCreated.has(tagId)

      return { tagId, exists, willBeCreated }
    }

    const tagId = intent.getTagId()
    const { exists, willBeCreated } = checkTagId(tagId)

    if (exists || willBeCreated) {
      return
    }

    if (intent.isTagUpdate()) {
      return tagErrors.update.TAG_DOES_NOT_EXIST(tagId)
    }

    if (intent.isContentTransform()) {
      return tagErrors.transformEntries.TAG_DOES_NOT_EXIST(tagId)
    }
  }
}

class AlreadyExistingIdCreates implements TagValidation {
  message = tagErrors.create.TAG_ALREADY_EXISTS
  validate (intent: Intent, context: ValidationContext) {
    if (!intent.isTagCreate()) {
      return
    }

    const tagId = intent.getTagId()

    if (!context.remote.has(tagId)) {
      return
    }

    return tagErrors.create.TAG_ALREADY_EXISTS(tagId)
  }
}

class AlreadyExistingNameUpdates implements TagValidation {
  message = tagErrors.update.TAG_NAME_ALREADY_EXISTS
  validate (intent: Intent, context: ValidationContext) {
    if (!intent.isTagUpdate()) {
      return
    }

    const tagName = intent.toRaw().payload.props.name

    if (!context.remoteTags.find(tag => tag.name === tagName)) {
      return
    }

    return tagErrors.update.TAG_NAME_ALREADY_EXISTS(tagName)
  }
}

// TODO: Is all the deleted logic tested?

// TODO
class NonExistingDeletes implements TagValidation {
  validate (intent: Intent, context: ValidationContext) {
    if (!intent.isTagDelete()) {
      return
    }

    const tagId = intent.getTagId()

    if (context.remote.has(tagId) || context.deleted.has(tagId)) {
      return
    }

    return tagErrors.delete.TAG_DOES_NOT_EXIST(tagId)
  }
}

// // TODO Adjust and test:

// class DuplicateDeletes implements TagValidation {
//   validate (intent: Intent, context: ValidationContext) {
//     if (!intent.isTagDelete()) {
//       return
//     }

//     const tagId = intent.getTagId()

//     if (!context.deleted.has(tagId)) {
//       return
//     }

//     return tagErrors.delete.TAG_ALREADY_DELETED(tagId)
//   }
// }

// class EditsAfterDeletes implements TagValidation {
//   validate (intent: Intent, context: ValidationContext) {
//     const isRelevant = intent.isFieldUpdate() || intent.isTagUpdate() || intent.isContentTransform() || intent.isEntryDerive()

//     if (!isRelevant) {
//       return
//     }

//     const checkTagId = (tagId) => {
//       const deleted = context.deleted.has(tagId)
//       return { tagId, deleted }
//     }

//     if (intent.isEntryDerive()) {
//       return intent.getRelatedTagIds()
//         .map(checkTagId)
//         .filter(({ deleted }) => {
//           return deleted
//         })
//         .map(({ tagId }) => tagErrors.deriveEntries.DERIVE_AFTER_TAG_DELETE(tagId))
//     }

//     const tagId = intent.getTagId()
//     const { deleted } = checkTagId(tagId)

//     if (!deleted) {
//       return
//     }

//     if (intent.isTagUpdate() || intent.isFieldUpdate()) {
//       return tagErrors.delete.EDIT_AFTER_DELETE(tagId)
//     }

//     if (intent.isContentTransform()) {
//       return Errors.transformEntries.TRANSFORM_AFTER_TAG_DELETE(tagId)
//     }
//   }
// }

const checks: TagValidation[] = [
  new DuplicateCreate(),
  new AlreadyExistingIdCreates(),
  new AlreadyExistingNameUpdates(),
  new EditBeforeCreates(),
  new NonExistingEdits(),
  new EditBeforeCreate(),
  new NonExistingDeletes()
]

export default function (intents: Intent[], tags: Tag[]): InvalidActionError[] {
  const remote = tags.map((tag) => tag.id)
  const toBeCreated = intents.filter((intent) => intent.isTagCreate()).map((intent) => intent.getTagId())

  let context = {
    remote: new Set(remote), // all currently (in the current iteration step) existing tags
    created: new Set<string>(), // all by now (in previous iteration steps) created tags
    deleted: new Set<string>(), // all by now (in previous iteration steps) deleted tags
    toBeCreated: new Set(toBeCreated), // all future (in remaining iteration steps) created tags
    remoteTags: tags
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

    const tagId = intent.getTagId()

    if (intent.isTagCreate()) {
      context.created.add(tagId)
      context.toBeCreated.delete(tagId)
      context.deleted.delete(tagId)
    }

    if (intent.isTagDelete()) {
      context.deleted.add(tagId)
      context.remote.delete(tagId)
      context.created.delete(tagId)
    }
  }

  return errors
}
