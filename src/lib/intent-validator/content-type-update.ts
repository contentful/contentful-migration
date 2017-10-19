import SchemaValidator from './schema-validator'
import * as Joi from 'joi'

class ContentTypeUpdateStepValidator extends SchemaValidator {
  protected displayName = 'content type'

  appliesTo (step) {
    return step.isContentTypeUpdate();
  }

  get schema () {
    return {
      name: Joi.string().required(),
      description: Joi.string().required(),
      displayField: Joi.string().required()
    };
  }
}

export default ContentTypeUpdateStepValidator;
