import IntentList from '../../intent-list'
import contentTypeValidations from './content-type'
import tagValidations from './tag'
import fieldValidations from './field'
import editorLayoutValidations from './editor-layout'
import checkForDuplicatePropsErrors from './duplicate-props'
import { ContentType, EditorInterfaces } from '../../entities/content-type'
import { Tag } from '../../entities/tag'
import { Intent } from '../../interfaces/intent'
import ValidationError, { InvalidActionError } from '../../interfaces/errors'

export type FieldsContext = {
  contentTypeFields: Record<string, Set<string>>
  recentlyRemoved: Record<string, Set<string>>
  recentlyMoved: Record<string, Set<string>>
  changedFieldIds: Record<string, Map<string, string>>
}

export const invalidActionError = (message, intent) => {
  return {
    type: 'InvalidAction',
    message: message,
    details: { intent }
  }
}

function validateIntents(
  intentList: IntentList,
  contentTypes: ContentType[],
  editorInterfaces: Map<string, EditorInterfaces>,
  tags: Tag[]
): ValidationError[] | InvalidActionError[] {
  const intents: Intent[] = intentList.getIntents()
  const ctErrors = contentTypeValidations(intents, contentTypes)
  if (ctErrors.length > 0) {
    return ctErrors
  }

  const createCTs = intents.filter((intent) => intent.isContentTypeCreate())
  const createdIds = createCTs.map((createIntent) => createIntent.getContentTypeId())
  const createdCTs = createdIds.map(
    (id) => new ContentType({ sys: { id, version: 0 }, name: undefined, fields: [] })
  )

  const allCTs = contentTypes.concat(createdCTs)
  let { errors: fieldErrors, fieldsContext } = fieldValidations(intents, allCTs)
  fieldErrors = fieldErrors.concat(checkForDuplicatePropsErrors(intentList))

  if (fieldErrors.length > 0) {
    return fieldErrors
  }

  let editorLayoutErrors = editorLayoutValidations(intents, editorInterfaces, fieldsContext, allCTs)
  if (editorLayoutErrors.length > 0) {
    return editorLayoutErrors
  }

  const tagErrors = tagValidations(intents, tags)
  if (tagErrors.length > 0) {
    return tagErrors
  }

  return []
}

export { validateIntents as default, validateIntents }
