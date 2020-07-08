import SchemaValidator from './schema-validator'
import * as Joi from 'joi'

class TagUpdateStepValidator extends SchemaValidator {
  // TODO: Find a way to remove these protected properties as they are not used here.
  protected article = 'a'
  protected displayName = 'tag'

  appliesTo (step) {
    return step.isTagUpdate()
  }

  get schema () {
    return {
      name: Joi.string().required()
    }
  }
}

export default TagUpdateStepValidator
