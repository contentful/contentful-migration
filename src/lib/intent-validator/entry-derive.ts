import Intent from '../intent/base-intent'
import SchemaValidator from './schema-validator'
import * as Joi from 'joi'
import ValidationError from '../interfaces/errors'

class EntryDeriveIntentValidator extends SchemaValidator {
  protected article = 'an'
  protected displayName = 'entry derivation'

  appliesTo(step: Intent) {
    return step.isEntryDerive()
  }

  // NOTE: this could be change to return the object to
  // validate against the schema instead of returning
  // just the prop name
  get propertyNameToValidate() {
    return 'derivation'
  }

  get schema() {
    return {
      contentType: Joi.string().required(),
      derivedContentType: Joi.string().required(),
      from: Joi.array().items(Joi.string()).required(),
      toReferenceField: Joi.string().required(),
      derivedFields: Joi.array().items(Joi.string()).required(),
      identityKey: Joi.func().required(),
      shouldPublish: Joi.alternatives().try(Joi.boolean(), Joi.string().valid('preserve')),
      // exactly one of deriveEntryForLocale or deriveEntriesForLocale must be provided
      deriveEntryForLocale: Joi.func(),
      deriveEntriesForLocale: Joi.func(),
      derivedEntryId: Joi.func(),
      publishDerived: Joi.string().valid('always', 'never', 'preserve'),
      useLocaleBasedPublishing: Joi.boolean().optional()
    }
  }

  validate(intent: Intent): ValidationError[] {
    const baseErrors = super.validate(intent)
    if (baseErrors.length) return baseErrors

    const derivation = intent.toRaw().payload[this.propertyNameToValidate]
    const message =
      'Either "deriveEntryForLocale" or "deriveEntriesForLocale" must be provided for entry derivation.'
    const presenceSchema = Joi.alternatives()
      .try(
        Joi.object({ deriveEntryForLocale: Joi.func().required() }).unknown(true),
        Joi.object({ deriveEntriesForLocale: Joi.func().required() }).unknown(true)
      )
      .messages({
        'alternatives.match': message
      })

    const { error } = presenceSchema.validate(derivation)
    if (error) {
      return baseErrors.concat([
        {
          type: 'InvalidType',
          message,
          details: { intent }
        }
      ])
    }

    return baseErrors
  }
}

export default EntryDeriveIntentValidator
