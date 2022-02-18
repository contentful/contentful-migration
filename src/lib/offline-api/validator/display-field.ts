import { ApiHook } from '../'
import { ContentTypePayloadValidator } from './content-type'
import { InvalidActionError } from '../../interfaces/errors'
import errorMessages from './errors'

const isDisplayFieldAndHasBeenDeleted = function (field, displayField) {
  return field.id === displayField && field.deleted
}

const fieldIsDisplayField = function (field, displayField) {
  return field.id === displayField
}

export default class DisplayFieldValidator implements ContentTypePayloadValidator {
  public hooks = [ApiHook.SaveContentType]

  public validate({ contentType }): InvalidActionError[] {
    const errors: InvalidActionError[] = []

    const displayField = contentType.displayField

    if (!displayField) {
      return errors
    }

    const fields = contentType.fields.toRaw()

    if (!fields.some((field) => fieldIsDisplayField(field, displayField))) {
      errors.push({
        type: 'InvalidAction',
        message: errorMessages.contentType.NON_EXISTENT_DISPLAY_FIELD(displayField, contentType.id)
      })
    }

    if (fields.some((field) => isDisplayFieldAndHasBeenDeleted(field, displayField))) {
      errors.push({
        type: 'InvalidAction',
        message: errorMessages.contentType.DELETE_DISPLAY_FIELD(displayField, contentType.id)
      })
    }

    return errors
  }
}
