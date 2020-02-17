import Intent from '../intent/base-intent'
import SchemaValidator from './schema-validator'
import * as Joi from 'joi'

class EntryTransformToTypeIntentValidator extends SchemaValidator {
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
      sourceContentType: Joi.string().required(),
      targetContentType: Joi.string().required(),
      from: Joi.array().items(Joi.string()).required(),
      to: Joi.array().items(Joi.string()).required(),
      identityKey: Joi.func().required(),
      shouldPublish: Joi.alternatives().try([Joi.boolean(), Joi.string().valid(['preserve'])]),
      deriveEntryForLocale: Joi.func().required()
    }
  }
}

export default EntryTransformToTypeIntentValidator
