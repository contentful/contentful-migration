import { Field } from '../../interfaces/content-type'
import { ApiHook } from '../'
import { ContentTypePayloadValidator, ContentTypePayloadValidatorOptions } from './content-type'
import { InvalidActionError } from '../../interfaces/errors'
import errorMessages from './errors'
import { keyBy } from 'lodash'

export default class TypeChangeValidator implements ContentTypePayloadValidator {
  public hooks = [ApiHook.SaveContentType]

  public validate ({
    contentType,
    publishedContentType
  }: ContentTypePayloadValidatorOptions): InvalidActionError[] {
    const errors: InvalidActionError[] = []

    if (!publishedContentType) {
      return errors
    }

    const fieldsById = keyBy(contentType.fields.toRaw(), 'id')
    const parentFieldsById = keyBy(publishedContentType.fields.toRaw(), 'id')

    for (const fieldId of Object.keys(fieldsById)) {
      const parentField: Field = parentFieldsById[fieldId]

      // we don't care about a type change if the previous change was a deletion
      if (parentField && !parentField.deleted) {
        const fieldType = fieldsById[fieldId].type
        const parentFieldType = parentField.type

        if (fieldType !== parentFieldType) {
          errors.push({
            type: 'InvalidAction',
            message: errorMessages.field.NO_TYPE_CHANGE(
              fieldId,
              contentType.id,
              parentFieldType,
              fieldType
            )
          })
        }
      }
    }
    return errors
  }
}
