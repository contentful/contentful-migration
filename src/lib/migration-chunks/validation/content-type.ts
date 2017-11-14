import createValidator from '../../../../test/unit/lib/intent-validator/validate-steps'
import * as _ from 'lodash'
import errors from './errors'
import ContentType from '../../entities/content-type'
import Intent from '../../interfaces/intent'
import { InvalidActionError } from '../../interfaces/errors'
const ctErrors = errors.contentType

const errorFormatter = function (messageFormatter) {
  return function (errors) {
    return errors.map((intent: Intent) => {
      return {
        type: 'InvalidAction',
        message: messageFormatter(intent),
        details: { intent }
      }
    })
  }
}

const filterIntentsForExistingCts = function (intents: Intent[], contentTypes: ContentType[]) {
  const existingIds = contentTypes.map((ct) => ct.id)
  const nonExistingCTintents = intents.filter((i) => !existingIds.includes(i.getContentTypeId()))

  return nonExistingCTintents
}

interface ValidationContext {
  remote: Set<string>
  created: Set<string>
  deleted: Set<string>
  toBeCreated: Set<string>
}

interface ContentTypeValidation {
  validate (intent: Intent, context: ValidationContext): string
}

class DuplicateCreate implements ContentTypeValidation {
  validate (intent: Intent, context: ValidationContext) {
    if (!intent.isContentTypeCreate()) {
      return
    }



    return ctErrors.create.CONTENT_TYPE_ALREADY_CREATED
  }
}

class EditBeforeCreate implements ContentTypeValidation {
  message = (id: string, intent: Intent) => {
    if (intent.isContentTransform()) {
      return ctErrors.transformEntries.TRANSFORM_BEFORE_CONTENT_TYPE_CREATE(id)
    }

    return ctErrors.update.CONTENT_TYPE_NOT_YET_CREATED(id)
  }
  validate (intents, contentTypes: ContentType[]) {
    const nonExistentCTs = filterIntentsForExistingCts(intents, contentTypes)
    // Find all create and edit intents
    const ctChanges = nonExistentCTs.filter((intent) => {
      return intent.isContentTypeCreate() || intent.isContentTypeUpdate() || intent.isContentTransform()
    })
    // Group the intents into an object by the content type ID
    const editGroups = _.groupBy(ctChanges, (intent: Intent) => intent.getContentTypeId())
    // Filter any group that has no create
    const createGroups = _.omitBy(editGroups, (group) => {
      return !group.find((intent) => intent.isContentTypeCreate())
    })
    // Any update happening before a create action is wrong, so take all until the first create
    const potentialErrors = _.mapValues(createGroups, (createGroup) => {
      return _.takeWhile(createGroup, (intent: any) => !intent.isContentTypeCreate())
    })

    // Strip out all groups that are empty since they aren't error cases
    const allErrors = _.omitBy(potentialErrors, _.isEmpty)

    return _.flatten(_.values(allErrors))
  }
}

class NonExistingEdits implements ContentTypeValidation {
  message = (id: string, intent: Intent) => {
    if (intent.isContentTransform()) {
      return ctErrors.transformEntries.CONTENT_TYPE_DOES_NOT_EXIST(id)
    }
    return ctErrors.update.CONTENT_TYPE_DOES_NOT_EXIST(id)
  }
  validate (intents, contentTypes: ContentType[]) {
    const nonExistentCTs = filterIntentsForExistingCts(intents, contentTypes)
    // Find all create and edit intents
    const ctChanges = nonExistentCTs.filter((intent) => {
      return intent.isContentTypeCreate() || intent.isContentTypeUpdate() || intent.isContentTransform()
    })
    // Group the intents into an object by the content type ID
    const changeGroups = _.groupBy(ctChanges, (intent: Intent) => intent.getContentTypeId())
    // Filter any group that has a create. That one will be taken over by the editBeforeCreate validation
    const editGroups = _.omitBy(changeGroups, (group) => {
      return group.find((intent) => intent.isContentTypeCreate())
    })

    // Strip out all groups that are empty since they aren't error cases
    const allErrors = _.omitBy(editGroups, _.isEmpty)

    return _.flatten(_.values(allErrors))
  }
}

class AlreadyExistingCreates implements ContentTypeValidation {
  message = ctErrors.create.CONTENT_TYPE_ALREADY_EXISTS
  validate (intents, contentTypes: ContentType[]) {
    const existingIds = contentTypes.map((ct) => ct.id)
    // Find all create intents
    const ctCreates = intents.filter((intent) => intent.isContentTypeCreate())
    const existingCreates = ctCreates.filter((intent) => existingIds.includes(intent.payload.contentTypeId))

    return existingCreates
  }
}

class NonExistingDeletes implements ContentTypeValidation {
  message = ctErrors.delete.CONTENT_TYPE_DOES_NOT_EXIST
  validate (intents, contentTypes: ContentType[]) {
    const nonExistentCTs = filterIntentsForExistingCts(intents, contentTypes)
    const nonExistentDeletes = nonExistentCTs.filter((intent) => intent.isContentTypeDelete())
    return nonExistentDeletes
  }
}

class DuplicateDeletes implements ContentTypeValidation {
  message = ctErrors.delete.CONTENT_TYPE_ALREADY_DELETED
  validate (intents: Intent[]) {
    const ctDeletes = intents.filter((intent) => intent.isContentTypeDelete())
    const deletedCts = _.groupBy(ctDeletes, (intent: Intent) => intent.getContentTypeId())
    const duplicateDeletes = _.pickBy(deletedCts, (intents) => intents.length > 1)
    return _.flatten(_.map(_.values(duplicateDeletes), _.drop))
  }
}

class EditsAfterDeletes implements ContentTypeValidation {
  message = (id: string, intent: Intent) => {
    if (intent.isContentTransform()) {
      return ctErrors.transformEntries.TRANSFORM_AFTER_CONTENT_TYPE_DELETE(id)
    }

    return ctErrors.delete.EDIT_AFTER_DELETE(id)
  }
  validate (intents: Intent[]) {
    const editsAfterDeletes = intents.reduce((acc, curr, i) => {
      const ctId = curr.getContentTypeId()
      if (curr.isContentTypeDelete() && !acc[ctId]) {
        const remainingintents = intents.slice(i + 1)
        const editintents = remainingintents.filter((intent) => {
          const isContentTypeMatch = intent.getContentTypeId() === ctId
          const isIntentMatch = (intent.isContentTypeUpdate() || intent.isFieldUpdate() || intent.isContentTransform())

          return isContentTypeMatch && isIntentMatch
        })
        if (editintents.length > 0) {
          acc[ctId] = editintents
        }
      }
      return acc
    }, {})
    return _.flatten(_.values(editsAfterDeletes))
  }
}

class DeleteCtWithEntries implements ContentTypeValidation {
  message = ctErrors.delete.HAS_ENTRIES
  validate (intents, contentTypes: ContentType[]) {
    const deleteintents = intents.filter((intent) => intent.isContentTypeDelete())
    const badDeleteintents = deleteintents.filter((intent) => {
      const ctForThisintent = contentTypes.find((ct) => {
        return ct.id === intent.payload.contentTypeId
      })
      return ctForThisintent && ctForThisintent.hasEntries
    })
    return badDeleteintents
  }
}

class DeriveEntryFromNonExistingCT implements ContentTypeValidation {
  message (id: string) {
    return `You cannot derive entries from content type "${id}" because it does not exist.`
  }
  validate (intents: Intent[], contentTypes: ContentType[]) {
    const deriveIntents = intents.filter((intent) => intent.isEntryDerive())

    const badDeriveIntents = deriveIntents.filter((intent) => {
      const ctForThisintent = contentTypes.find((ct) => {
        return ct.id === intent.getContentTypeId()
      })
      return !ctForThisintent
    })
    return badDeriveIntents
  }
}

class DeriveEntryToNonExistingCT implements ContentTypeValidation {
  message (_id: string, intent: Intent) {
    return `You cannot derive entries to content type "${intent.toRaw().payload.derivation.derivedContentType}" because it does not exist.`
  }
  validate (intents: Intent[], contentTypes: ContentType[]) {
    const deriveIntents = intents.filter((intent) => intent.isEntryDerive())

    const badDeriveIntents = deriveIntents.filter((intent) => {
      const ctForThisintent = contentTypes.find((ct) => {
        return ct.id === intent.toRaw().payload.derivation.derivedContentType
      })
      return !ctForThisintent
    })
    return badDeriveIntents
  }
}

const checks: ContentTypeValidation[] = [
  new DuplicateCreate(),
  new EditBeforeCreate(),
  new NonExistingEdits(),
  new NonExistingDeletes(),
  new AlreadyExistingCreates(),
  new DuplicateDeletes(),
  new EditsAfterDeletes(),
  new DeleteCtWithEntries(),
  new DeriveEntryFromNonExistingCT(),
  new DeriveEntryToNonExistingCT()

]

// export default function (intents, contentTypes: ContentType[]) {
//   const errors = checks.map((check: ContentTypeValidation) => {
//     const foundItems = check.validate(intents, contentTypes)
//     return errorFormatter((intent: Intent) => {
//       const id = intent.getContentTypeId()
//       return check.message(id, intent)
//     })(foundItems)
//   })

//   return _.flatten(errors)
// }

export default function (intents: Intent[], contentTypes: ContentType[]): InvalidActionError[] {
  const remote = contentTypes.map((ct) => ct.id)
  const toBeCreated = intents.filter((intent) => intent.isContentTypeCreate()).map((intent) => intent.getContentTypeId())

  let context = {
    remote: new Set(remote), // all currently (in the current iteration step) existing content types
    created: new Set(), // all by now (in previous iteration steps) created content types
    deleted: new Set(), // all by now (in previous iteration steps) deleted content types
    toBeCreated: new Set(toBeCreated) // all future (in remeining iteration steps) created content types
  }

  let errors = []

  for (const intent of intents) {
    let error

    for (const check of checks) {
      error = check.validate(intent, context)

      if (error) {
        // proceed with next intent
        break
      }
    }

    if (error) {
      errors.push({
        type: 'InvalidAction',
        message: error,
        details: { intent }
      })

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
