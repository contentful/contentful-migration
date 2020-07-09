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

class AlreadyExistingCreates implements TagValidation {
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

const checks: TagValidation[] = [
  new DuplicateCreate(),
  new AlreadyExistingCreates(),
  new AlreadyExistingNameUpdates()
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

  }

  return errors
}
