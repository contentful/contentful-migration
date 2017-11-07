import * as _ from 'lodash'
import * as errors from './errors'
import ContentType from '../../entities/content-type'
import Intent from '../../intent'
const ctErrors = errors.contentType

const errorFormatter = function (messageFormatter) {
  return function (errors) {
    return errors.map((intent) => {
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

const checks = {
  duplicateCreate: {
    validate: function (intents: Intent[], contentTypes: ContentType[]) {
      // Find all create intents
      const ctCreates = intents.filter((i) => i.isContentTypeCreate())
      // Filter out the ones that already exist on the API side. They are handled by different validation
      const nonExistingCreates = filterIntentsForExistingCts(ctCreates, contentTypes)

      // Group the intents into an object by the content type ID
      const createGroups = _.groupBy(nonExistingCreates, (intent: Intent) => intent.getContentTypeId())
      // For every group, drop every first item
      // The remaining items are duplicate creates
      const potentialErrors = _.mapValues(createGroups, (createGroup) => _.tail(createGroup))
      // Strip out all groups that are empty since they aren't error cases
      const allErrors = _.omitBy(potentialErrors, _.isEmpty)

      return _.flatten(_.values(allErrors))
    },
    message: ctErrors.create.CONTENT_TYPE_ALREADY_CREATED
  },

  editBeforeCreate: {
    validate: function (intents, contentTypes: ContentType[]) {
      const nonExistentCTs = filterIntentsForExistingCts(intents, contentTypes)
      // Find all create and edit intents
      const ctChanges = nonExistentCTs.filter((intent) => intent.isContentTypeCreate() || intent.isContentTypeUpdate())
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
    },
    message: ctErrors.update.CONTENT_TYPE_NOT_YET_CREATED
  },

  nonExistingEdits: {
    validate: function (intents, contentTypes: ContentType[]) {
      const nonExistentCTs = filterIntentsForExistingCts(intents, contentTypes)
      // Find all create and edit intents
      const ctChanges = nonExistentCTs.filter((intent) => intent.isContentTypeCreate() || intent.isContentTypeUpdate())
      // Group the intents into an object by the content type ID
      const changeGroups = _.groupBy(ctChanges, (intent: Intent) => intent.getContentTypeId())
      // Filter any group that has a create. That one will be taken over by the editBeforeCreate validation
      const editGroups = _.omitBy(changeGroups, (group) => {
        return group.find((intent) => intent.isContentTypeCreate())
      })

      // Strip out all groups that are empty since they aren't error cases
      const allErrors = _.omitBy(editGroups, _.isEmpty)

      return _.flatten(_.values(allErrors))
    },
    message: ctErrors.update.CONTENT_TYPE_DOES_NOT_EXIST
  },

  alreadyExistingCreates: {
    validate: function (intents, contentTypes: ContentType[]) {
      const existingIds = contentTypes.map((ct) => ct.id)
      // Find all create intents
      const ctCreates = intents.filter((intent) => intent.isContentTypeCreate())
      const existingCreates = ctCreates.filter((intent) => existingIds.includes(intent.payload.contentTypeId))

      return existingCreates
    },
    message: ctErrors.create.CONTENT_TYPE_ALREADY_EXISTS
  },

  nonExistingDeletes: {
    validate: function (intents, contentTypes: ContentType[]) {
      const nonExistentCTs = filterIntentsForExistingCts(intents, contentTypes)
      const nonExistentDeletes = nonExistentCTs.filter((intent) => intent.isContentTypeDelete())
      return nonExistentDeletes
    },
    message: ctErrors.delete.CONTENT_TYPE_DOES_NOT_EXIST
  },

  duplicateDeletes: {
    validate: function (intents: Intent[]) {
      const ctDeletes = intents.filter((intent) => intent.isContentTypeDelete())
      const deletedCts = _.groupBy(ctDeletes, (intent: Intent) => intent.getContentTypeId())
      const duplicateDeletes = _.pickBy(deletedCts, (intents) => intents.length > 1)
      return _.flatten(_.map(_.values(duplicateDeletes), _.drop))
    },
    message: ctErrors.delete.CONTENT_TYPE_ALREADY_DELETED
  },

  editsAfterDeletes: {
    validate: function (intents: Intent[]) {
      const editsAfterDeletes = intents.reduce((acc, curr, i) => {
        const ctId = curr.getContentTypeId()
        if (curr.isContentTypeDelete() && !acc[ctId]) {
          const remainingintents = intents.slice(i + 1)
          const editintents = remainingintents.filter((intent) => {
            return intent.getContentTypeId() === ctId && (intent.isContentTypeUpdate() || intent.isFieldUpdate())
          })
          if (editintents.length > 0) {
            acc[ctId] = editintents
          }
        }
        return acc
      }, {})
      return _.flatten(_.values(editsAfterDeletes))
    },
    message: ctErrors.delete.EDIT_AFTER_DELETE
  },

  deleteCtWithEntries: {
    validate: function (intents, contentTypes: ContentType[]) {
      const deleteintents = intents.filter((intent) => intent.type === 'contentType/delete')
      const badDeleteintents = deleteintents.filter((intent) => {
        const ctForThisintent = contentTypes.find((ct) => {
          return ct.id === intent.payload.contentTypeId
        })
        return ctForThisintent && ctForThisintent.hasEntries
      })
      return badDeleteintents
    },
    message: ctErrors.delete.HAS_ENTRIES
  }
}

export default function (intents, contentTypes: ContentType[]) {
  const errors = _.values(checks).map((check) => {
    const foundItems = check.validate(intents, contentTypes)
    return errorFormatter((intent) => {
      const id = intent.getContentTypeId()
      return check.message(id)
    })(foundItems)
  })

  return _.flatten(errors)
}
