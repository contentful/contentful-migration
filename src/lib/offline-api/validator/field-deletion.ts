import { ApiHook } from '../'
import { ContentTypePayloadValidator, ContentTypePayloadValidatorOptions } from './content-type'
import { PayloadValidationError, InvalidActionError } from '../../interfaces/errors'
import errorMessages from './errors'
import { difference } from 'lodash'

const deletedFieldError = function (contentTypeId: string, fieldId: string): InvalidActionError {
  return {
    type: 'InvalidAction',
    message: errorMessages.field.NO_DELETE_WITHOUT_OMIT(fieldId, contentTypeId)
  }
}

export default class FieldDeletionValidator implements ContentTypePayloadValidator {
  public hooks = [ApiHook.SaveContentType]

  public validate ({
    contentType,
    publishedContentType
  }: ContentTypePayloadValidatorOptions): (PayloadValidationError | InvalidActionError)[] {
    const deletedFields = contentType.fields.filter((field) => field.deleted)
    const omittedFieldsInParent = publishedContentType
      ? publishedContentType.fields.filter((field) => field.omitted)
      : []

    const deletedIds = deletedFields.map((field) => field.id)
    const omittedIds = omittedFieldsInParent.map((field) => field.id)

    const deletedButNotOmitted = difference(deletedIds, omittedIds)

    const errors = deletedButNotOmitted.map((fieldId: string) =>
      deletedFieldError(contentType.id, fieldId)
    )

    return errors
  }
}
