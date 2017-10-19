
import * as Joi from 'joi'
import * as didYouMean from 'didyoumean2'
import * as kindOf from 'kind-of'

import IntentValidator from '../interfaces/intent-validator'
import ValidationError from '../interfaces/errors'
import Intent from '../interfaces/intent'


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
abstract class SchemaValidator implements IntentValidator {
  get validationErrors () {
    return validationErrors;
  }

  abstract appliesTo (intent: Intent): boolean
  protected abstract displayName: string

  get schema () {
    return {};
  }

  validate (intent: Intent): ValidationError[] {
    const step = intent.toRaw();
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

export default SchemaValidator