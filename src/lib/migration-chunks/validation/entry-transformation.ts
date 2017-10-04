import * as _ from 'lodash'
import errors from './errors'
import ContentType from '../../entities/content-type'
import Intent from '../../interfaces/intent'
import ValidationError from '../../interfaces/errors'

const transformErrors = errors.entry.transformation

interface EntryTransformationValidation {
  message (id: string, context: any[]): string
  validate (intent: Intent, contentTypes: ContentType[]): any[]
}

class FieldsExistCheck implements EntryTransformationValidation {
  message (id, context) {
    return transformErrors.NON_EXISTING_FIELDS(id, context)
  }

  validate (intent: Intent, contentTypes: ContentType[]) {
    const { from, to } = intent.toRaw().payload.transformation
    const contentType = contentTypes.find((ct) => ct.id === intent.getContentTypeId())
    const nonExistingFromFields = from.filter((f) => !contentType.fields.getField(f))
    const nonExistingToFields = to.filter((f) => !contentType.fields.getField(f))

    return nonExistingFromFields.concat(nonExistingToFields)
  }
}

const checks: EntryTransformationValidation[] = [new FieldsExistCheck()]

export default function (transformIntents: Intent[], contentTypes: ContentType[]): ValidationError[] {
  return _.flatten(checks.map((check: EntryTransformationValidation) => {
    return transformIntents.reduce((errors: ValidationError[], transformIntent) => {
      const intentErrors = check.validate(transformIntent, contentTypes)
      if (intentErrors.length === 0) {
        return errors
      }

      const message = check.message(transformIntent.getContentTypeId(), intentErrors)
      const error = {
        type: 'InvalidEntriesTransformation',
        message,
        details: { intent: transformIntent }
      }

      errors.push(error)

      return errors
    }, [])
  }))

}
