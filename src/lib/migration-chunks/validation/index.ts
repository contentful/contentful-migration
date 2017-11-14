import ErrorCollection from '../../errors/error-collection'
import IntentList from '../../intent-list'
import contentTypeValidations from './content-type'
import fieldValidations from './field'
import checkForDuplicatePropsErrors from './duplicate-props'
import { ContentType } from '../../entities/content-type'
import { Intent } from '../../interfaces/intent'
import entriesTransformationsValidations from './entry-transformation'
import entriesDerivationValidations from './entry-derivation'

// TODO: rename to validateIntents
function validateChunks (intentList: IntentList, contentTypes: ContentType[]): void {
  const intents: Intent[] = intentList.getIntents()
  const ctErrors = contentTypeValidations(intents, contentTypes)

  if (ctErrors.length > 0) {
    throw new ErrorCollection(ctErrors, {payloadValidationError: true})
  }

  const createCTs = intents.filter((intent) => intent.isContentTypeCreate())
  const createdIds = createCTs.map((createIntent) => createIntent.getContentTypeId())
  const createdCTs = createdIds.map((id) => new ContentType({ sys: { id, version: 0 }, name: undefined, fields: [] }))

  const allCTs = contentTypes.concat(createdCTs)
  let fieldErrors = fieldValidations(intents, allCTs)
  fieldErrors = fieldErrors.concat(checkForDuplicatePropsErrors(intentList))

  if (fieldErrors.length > 0) {
    throw new ErrorCollection(fieldErrors, {payloadValidationError: true})
  }

  const entriesTransformationIntents = intents.filter((intent) => intent.isContentTransform())
  const entriesTransformationErrors = entriesTransformationsValidations(entriesTransformationIntents, allCTs)

  if (entriesTransformationErrors.length > 0) {
    throw new ErrorCollection(entriesTransformationErrors, {payloadValidatioNError: true})
  }

  const entriesDerivationIntents = intents.filter((intent) => intent.isEntryDerive())
  const entriesDerivationErrors = entriesDerivationValidations(entriesDerivationIntents, allCTs)

  if (entriesDerivationErrors.length > 0) {
    throw new ErrorCollection(entriesDerivationErrors, { payloadValidatioNError: true })
  }
}

export {
  validateChunks as default,
  validateChunks
}
