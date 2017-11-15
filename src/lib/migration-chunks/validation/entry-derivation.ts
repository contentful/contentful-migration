import * as _ from 'lodash'
import errors from './errors'
import ContentType from '../../entities/content-type'
import Intent from '../../interfaces/intent'
import ValidationError from '../../interfaces/errors'

const transformErrors = errors.entry.transformation

interface EntryDerivationValidation {
  message (id: string, context: any[]): string
  validate (intent: Intent, contentTypes: ContentType[]): any[]
}

class FieldsExistCheck implements EntryDerivationValidation {
  message (id, context) {
    return transformErrors.NON_EXISTING_FIELDS(id, context)
  }

  validate (intent: Intent, contentTypes: ContentType[]) {
    const { from, toReferenceField, derivedFields } = intent.toRaw().payload.derivation
    const contentType = contentTypes.find((ct) => ct.id === intent.getContentTypeId())
    const nonExistingFromFields = from.filter((f) => !contentType.fields.getField(f))
    const nonExistingToReferenceFields = [toReferenceField].filter((f) => !contentType.fields.getField(f))
    const nonExistingDerivedFields = derivedFields.filter((f) => !contentType.fields.getField(f))

    return nonExistingFromFields.concat(nonExistingToReferenceFields).concat(nonExistingDerivedFields)
  }
}

const checks: EntryDerivationValidation[] = [new FieldsExistCheck()]

export default function (deriveIntents: Intent[], contentTypes: ContentType[]): ValidationError[] {
  return _.flatten(checks.map((check: EntryDerivationValidation) => {
    return deriveIntents.reduce((errors: ValidationError[], deriveIntent) => {
      const intentErrors = check.validate(deriveIntent, contentTypes)
      if (intentErrors.length === 0) {
        return errors
      }

      const message = check.message(deriveIntent.getContentTypeId(), intentErrors)
      const error = {
        type: 'InvalidEntriesDerivation',
        message,
        details: { intent: deriveIntent }
      }

      errors.push(error)

      return errors
    }, [])
  }))

}
