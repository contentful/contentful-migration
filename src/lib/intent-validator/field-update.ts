import SchemaValidator from './schema-validator'
import * as Joi from 'joi'

class FieldUpdateStepValidator extends SchemaValidator {
  protected article = 'a'
  protected displayName = 'field'

  appliesTo (step) {
    return step.isFieldUpdate()
  }

  get schema () {
    return {
      id: Joi.string().required(),
      newId: Joi.string().required(),
      name: Joi.string().required(),
      type: Joi.string().required(),
      localized: Joi.boolean().required().strict(),
      required: Joi.boolean().required().strict(),
      validations: Joi.array().required(),
      initialValue: Joi.object().required().strict(),
      disabled: Joi.boolean().required().strict(),
      omitted: Joi.boolean().required().strict(),
      deleted: Joi.boolean().required().strict(),
      linkType: Joi.string().required(),
      items: Joi.object().required()
    }
  }
}

export default FieldUpdateStepValidator
