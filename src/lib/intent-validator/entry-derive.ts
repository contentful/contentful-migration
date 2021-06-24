import Intent from '../intent/base-intent'
import SchemaValidator from './schema-validator'
import * as Joi from 'joi'

class EntryDeriveIntentValidator extends SchemaValidator {
  protected article = 'an'
  protected displayName = 'entry derivation'

  appliesTo (step: Intent) {
    return step.isEntryDerive()
  }

  // NOTE: this could be change to return the object to
  // validate against the schema instead of returning
  // just the prop name
  get propertyNameToValidate () {
    return 'derivation'
  }

  get schema () {
    return {
      contentType: Joi.string().required(),
      derivedContentType: Joi.string().required(),
      from: Joi.array().items(Joi.string()).required(),
      toReferenceField: Joi.string().required(),
      derivedFields: Joi.array().items(Joi.string()).required(),
      identityKey: Joi.func().required(),
      shouldPublish: Joi.alternatives().try(Joi.boolean(), Joi.string().valid('preserve')),
      deriveEntryForLocale: Joi.func().required()
    }
  }
}

export default EntryDeriveIntentValidator
