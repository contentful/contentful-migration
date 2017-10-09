'use strict';

const Joi = require('joi');
const didYouMean = require('didyoumean2');
const kindOf = require('kind-of');

const StepValidator = require('./step-validator');


const validationErrors = {
  INVALID_PROPERTY_NAME: (propName, typeName) => {
    return `"${propName}" is not a valid property name for a ${typeName}.`;
  },
  INVALID_PROPERTY_NAME_WITH_SUGGESTION: (propName, typeName, suggestion) => {
    return `${validationErrors.INVALID_PROPERTY_NAME(propName, typeName)} Did you mean "${suggestion}"?`;
  },
  INVALID_PROPERTY_TYPE: (propName, typeName, actualType, expectedType) => {
    return `"${actualType}" is not a valid type for the ${typeName} property "${propName}". Expected "${expectedType}".`;
  }
};

/*
  Abstract Base Class for schema validation of steps
  Needs getters for `schema` and `displayName` implemented in subclasses
*/
class SchemaValidator extends StepValidator {
  get validationErrors () {
    return validationErrors;
  }

  get schema () {
    return {};
  }

  get displayName () {
    return '';
  }

  validate (step) {
    step = step.toRaw();
    const validations = this.schema;
    const validationErrors = this.validationErrors;
    const displayName = this.displayName;

    const errors = [];
    const propNames = Object.keys(step.payload.props);
    const validProps = Object.keys(validations);

    for (const propName of propNames) {
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
  }
}

module.exports = SchemaValidator;
