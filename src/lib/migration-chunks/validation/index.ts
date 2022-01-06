import IntentList from '../../intent-list'
import contentTypeValidations from './content-type'
import tagValidations from './tag'
import fieldValidations from './field'
import checkForDuplicatePropsErrors from './duplicate-props'
import { ContentType, EditorInterfaces } from '../../entities/content-type'
import { Tag } from '../../entities/tag'
import { Intent } from '../../interfaces/intent'
import ValidationError, { InvalidActionError } from '../../interfaces/errors'
import { editorInterfaceValidation } from './editor-interface'

export const invalidActionError = (message, intent) => {
  return {
    type: 'InvalidAction',
    message: message,
    details: { intent }
  }
}

function validateIntents(intentList: IntentList, contentTypes: ContentType[], tags: Tag[], editorInterfaces: Map<String, EditorInterfaces>): ValidationError[] | InvalidActionError[] {
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

  const tagErrors = tagValidations(intents, tags)
  if (tagErrors.length > 0) {
    return tagErrors
  }

  const editorInterfaceErrors = editorInterfaceValidation(intents, allCTs, editorInterfaces)
  if (editorInterfaceErrors.length > 0) {
    return editorInterfaceErrors
  }

  return []
}

export {
  validateIntents as default,
  validateIntents
}
