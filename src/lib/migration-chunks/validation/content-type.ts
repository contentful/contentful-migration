import * as _ from 'lodash'
import * as errors from './errors'
import ContentType from '../../content-type/index'
const ctErrors = errors.contentType

const errorFormatter = function (messageFormatter) {
  return function (errors) {
    return errors.map((step) => {
      return {
        type: 'InvalidAction',
        message: messageFormatter(step),
        details: { step }
      }
    })
  }
}

const filterStepsForExistingCTs = function (steps, contentTypes) {
  const existingIds = contentTypes.map((ct) => ct.sys.id)
  const nonExistingCTSteps = steps.filter((step) => !existingIds.includes(step.payload.contentTypeId))

  return nonExistingCTSteps
}

const checks = {
  duplicateCreate: {
    validate: function (steps, contentTypes) {
      // Find all create steps
      const ctCreates = steps.filter((step) => step.type === 'contentType/create')
      // Filter out the ones that already exist on the API side. They are handled by different validation
      const nonExistingCreates = filterStepsForExistingCTs(ctCreates, contentTypes)

      // Group the steps into an object by the content type ID
      const createGroups = _.groupBy(nonExistingCreates, (item: any) => item.payload.contentTypeId)
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
    validate: function (steps, contentTypes) {
      const nonExistentCTs = filterStepsForExistingCTs(steps, contentTypes)
      // Find all create and edit steps
      const ctChanges = nonExistentCTs.filter((step) => ['contentType/create', 'contentType/update'].includes(step.type))
      // Group the steps into an object by the content type ID
      const editGroups = _.groupBy(ctChanges, (item: any) => item.payload.contentTypeId)
      // Filter any group that has no create
      const createGroups = _.omitBy(editGroups, (group) => {
        return !group.find((step) => step.type === 'contentType/create')
      })
      // Any update happening before a create action is wrong, so take all until the first create
      const potentialErrors = _.mapValues(createGroups, (createGroup) => {
        return _.takeWhile(createGroup, (step: any) => step.type !== 'contentType/create')
      })

      // Strip out all groups that are empty since they aren't error cases
      const allErrors = _.omitBy(potentialErrors, _.isEmpty)

      return _.flatten(_.values(allErrors))
    },
    message: ctErrors.update.CONTENT_TYPE_NOT_YET_CREATED
  },

  nonExistingEdits: {
    validate: function (steps, contentTypes) {
      const nonExistentCTs = filterStepsForExistingCTs(steps, contentTypes)
      // Find all create and edit steps
      const ctChanges = nonExistentCTs.filter((step) => ['contentType/create', 'contentType/update'].includes(step.type))
      // Group the steps into an object by the content type ID
      const changeGroups = _.groupBy(ctChanges, (item: any) => item.payload.contentTypeId)
      // Filter any group that has a create. That one will be taken over by the editBeforeCreate validation
      const editGroups = _.omitBy(changeGroups, (group) => {
        return group.find((step) => step.type === 'contentType/create')
      })

      // Strip out all groups that are empty since they aren't error cases
      const allErrors = _.omitBy(editGroups, _.isEmpty)

      return _.flatten(_.values(allErrors))
    },
    message: ctErrors.update.CONTENT_TYPE_DOES_NOT_EXIST
  },

  alreadyExistingCreates: {
    validate: function (steps, contentTypes) {
      const existingIds = contentTypes.map((ct) => ct.sys.id)
      // Find all create steps
      const ctCreates = steps.filter((step) => step.type === 'contentType/create')
      const existingCreates = ctCreates.filter((step) => existingIds.includes(step.payload.contentTypeId))

      return existingCreates
    },
    message: ctErrors.create.CONTENT_TYPE_ALREADY_EXISTS
  },

  nonExistingDeletes: {
    validate: function (steps, contentTypes) {
      const nonExistentCTs = filterStepsForExistingCTs(steps, contentTypes)
      const nonExistentDeletes = nonExistentCTs.filter((step) => step.type === 'contentType/delete')
      return nonExistentDeletes
    },
    message: ctErrors.delete.CONTENT_TYPE_DOES_NOT_EXIST
  },

  duplicateDeletes: {
    validate: function (steps) {
      const ctDeletes = steps.filter((step) => step.type === 'contentType/delete')
      const deletedCts = _.groupBy(ctDeletes, (item: any) => item.payload.contentTypeId)
      const duplicateDeletes = _.pickBy(deletedCts, (steps) => steps.length > 1)
      return _.flatten(_.map(_.values(duplicateDeletes), _.drop))
    },
    message: ctErrors.delete.CONTENT_TYPE_ALREADY_DELETED
  },

  editsAfterDeletes: {
    validate: function (steps) {
      const editsAfterDeletes = steps.reduce((acc, curr, i) => {
        const ctId = curr.payload.contentTypeId
        if (curr.type === 'contentType/delete' && !acc[ctId]) {
          const remainingSteps = steps.slice(i + 1)
          const editSteps = remainingSteps.filter((step) => {
            return step.payload.contentTypeId === ctId && step.type.includes('update')
          })
          if (editSteps.length > 0) {
            acc[ctId] = editSteps
          }
        }
        return acc
      }, {})
      return _.flatten(_.values(editsAfterDeletes))
    },
    message: ctErrors.delete.EDIT_AFTER_DELETE
  },

  deleteCtWithEntries: {
    validate: function (steps, contentTypes) {
      const deleteSteps = steps.filter((step) => step.type === 'contentType/delete')
      const badDeleteSteps = deleteSteps.filter((step) => {
        const ctForThisStep = contentTypes.find((ct) => {
          return ct.sys.id === step.payload.contentTypeId
        })
        return ctForThisStep && ctForThisStep.hasEntries
      })
      return badDeleteSteps
    },
    message: ctErrors.delete.HAS_ENTRIES
  }
}

export default function (chunks, contentTypes: ContentType[]) {
  const steps = _.flatten(chunks)
  const errors = _.values(checks).map((check) => {
    const foundItems = check.validate(steps, contentTypes)
    return errorFormatter((step) => {
      const id = step.payload.contentTypeId
      return check.message(id)
    })(foundItems)
  })

  return _.flatten(errors)
}
