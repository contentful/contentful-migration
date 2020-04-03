import IntentList from '../../intent-list'
import contentTypeValidations from './content-type'
import fieldValidations from './field'
import checkForDuplicatePropsErrors from './duplicate-props'
import { ContentType } from '../../entities/content-type'
import { Intent } from '../../interfaces/intent'
import ValidationError, { InvalidActionError } from '../../interfaces/errors'

function validateIntents (intentList: IntentList, contentTypes: ContentType[]): ValidationError[] | InvalidActionError[] {
  const intents: Intent[] = intentList.getIntents()
  const ctErrors = contentTypeValidations(intents, contentTypes)

  if (ctErrors.length > 0) {
    return ctErrors
  }

  const createCTs = intents.filter((intent) => intent.isContentTypeCreate())
  const createdIds = createCTs.map((createIntent) => createIntent.getContentTypeId())
  const createdCTs = createdIds.map((id) => new ContentType({ sys: { id, version: 0 }, name: undefined, fields: [] }))

  const allCTs = contentTypes.concat(createdCTs)
  let fieldErrors = fieldValidations(intents, allCTs)
  fieldErrors = fieldErrors.concat(checkForDuplicatePropsErrors(intentList))

  if (fieldErrors.length > 0) {
    return fieldErrors
  }

  return []
}

export {
  validateIntents as default,
  validateIntents
}
