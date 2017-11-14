import Intent from '../intent/base-intent'
import SchemaValidator from './schema-validator'
import * as Joi from 'joi'

class ContentTransformIntentValidator extends SchemaValidator {
  protected article = 'a'
  protected displayName = 'content transformation'
  
  appliesTo (step: Intent) {
    return step.isContentTransform()
  }

  // NOTE: this could be change to return the object to
  // validate against the schema instead of returning
  // just the prop name
  get propertyNameToValidate () {
    return 'transformation'
  }

  get schema () {
    return {
      from: Joi.array().items(Joi.string()).required(),
      to: Joi.array().items(Joi.string()).required(),
      transformEntryForLocale: Joi.any(),
      shouldPublish: Joi.boolean()
    }
  }
}

export default ContentTransformIntentValidator
