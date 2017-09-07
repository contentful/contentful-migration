'use strict';

const Joi = require('joi');
const kindOf = require('kind-of');
const didYouMean = require('didyoumean2');

const validationErrors = require('./errors');

const contentTypePropsValidations = {
  name: Joi.string().required(),
  description: Joi.string().required(),
  displayField: Joi.string().required()
};

const fieldPropsValidations = {
  id: Joi.string().required(),
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


const getStepErrors = function ({ displayName, validations }, step) {
  const errors = [];
  const propNames = Object.keys(step.payload.props);

  for (const propName of propNames) {
    const validProps = Object.keys(validations);

    if (!validProps.includes(propName)) {
      let message;

      const suggestion = didYouMean(propName, validProps);

      if (suggestion) {
        message = validationErrors.INVALID_PROPERTY_NAME_WITH_SUGGESTION(propName, displayName, suggestion);
      } else {
        message = validationErrors.INVALID_PROPERTY_NAME(propName, displayName);
      }

      errors.push({
        type: 'InvalidProperty',
        message,
        details: { step }
      });
    } else {
      const schema = validations[propName];
      const { value, error } = Joi.validate(step.payload.props[propName], schema);

      if (error) {
        const expectedType = schema._type;
        const actualType = kindOf(value);

        const message = validationErrors.INVALID_PROPERTY_TYPE(propName, displayName, actualType, expectedType);
        errors.push({
          type: 'InvalidType',
          message,
          details: { step }
        });
      }
    }
  }

  return errors;
};

const getContentTypeErrors = getStepErrors.bind(null, {
  displayName: 'content type',
  validations: contentTypePropsValidations
});

const getFieldErrors = getStepErrors.bind(null, {
  displayName: 'field',
  validations: fieldPropsValidations
});

const getValidationErrors = function (steps) {
  let errors = [];

  for (const step of steps) {
    if (step.type === 'contentType/update') {
      errors = errors.concat(getContentTypeErrors(step));
    }

    if (step.type === 'field/update') {
      errors = errors.concat(getFieldErrors(step));
    }
  }

  return errors;
};

module.exports = getValidationErrors;
