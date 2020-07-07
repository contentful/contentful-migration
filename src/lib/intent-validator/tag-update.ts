import SchemaValidator from './schema-validator'
import * as Joi from 'joi'

class TagUpdateStepValidator extends SchemaValidator {
  // TODO: What are these protected properties and how can I delete
  // them?
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
