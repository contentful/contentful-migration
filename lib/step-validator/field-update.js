'use strict';

const SchemaValidator = require('./schema-validator');
const Joi = require('joi');

class FieldUpdateStepValidator extends SchemaValidator {
  appliesTo (step) {
    return step.isFieldUpdate();
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
      disabled: Joi.boolean().required().strict(),
      omitted: Joi.boolean().required().strict(),
      deleted: Joi.boolean().required().strict(),
      linkType: Joi.string().required(),
      items: Joi.object().required()
    };
  }

  get displayName () {
    return 'field';
  }
}

module.exports = FieldUpdateStepValidator;
