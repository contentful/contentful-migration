import SchemaValidator from './schema-validator'
import * as Joi from 'joi'

// TODO: We check this here and as part of the offline-api
// validation. Which is the right place?
const MAX_NAME_LENGTH = 256

class TagUpdateStepValidator extends SchemaValidator {
  protected article = 'a'
  protected displayName = 'tag'

  appliesTo(step) {
    return step.isTagUpdate()
  }

  get schema() {
    return {
      name: Joi.string().max(MAX_NAME_LENGTH).required()
    }
  }
}

export default TagUpdateStepValidator
