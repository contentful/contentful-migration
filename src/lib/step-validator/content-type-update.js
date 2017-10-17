'use strict';

const SchemaValidator = require('./schema-validator');
const Joi = require('joi');

class ContentTypeUpdateStepValidator extends SchemaValidator {
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

  get displayName () {
    return 'content type';
  }
}

module.exports = ContentTypeUpdateStepValidator;
