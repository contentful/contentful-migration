
import didYouMean from 'didyoumean2'
import kindOf from 'kind-of'

import IntentValidator from '../interfaces/intent-validator'
import ValidationError from '../interfaces/errors'
import Intent from '../interfaces/intent'
import Joi from 'joi'

const validationErrors = {
  INVALID_PROPERTY_NAME: (propName, article, typeName) => {
    return `"${propName}" is not a valid property name for ${article} ${typeName}.`
  },
  INVALID_PROPERTY_NAME_WITH_SUGGESTION: (propName, article, typeName, suggestion) => {
    return `${validationErrors.INVALID_PROPERTY_NAME(propName, article, typeName)} Did you mean "${suggestion}"?`
  },
  INVALID_PROPERTY_TYPE: (propName, typeName, actualType, expectedType) => {
    return `"${actualType}" is not a valid type for the ${typeName} property "${propName}". Expected "${expectedType}".`
  },
  INVALID_VALUE_IN_ALTERNATIVES: (propName, typeName, value, expectedTypes) => {
    return `"${value}" is not a valid value for the ${typeName} property "${propName}". Expected ${expectedTypes.join(' or ')}.`
  }
}

/*
  Abstract Base Class for schema validation of steps
  Needs getters for `schema` and `displayName` implemented in subclasses
*/
abstract class SchemaValidator implements IntentValidator {
  protected abstract displayName: string
  protected abstract article: string

  get validationErrors () {
    return validationErrors
  }

  abstract appliesTo (intent: Intent): boolean

  get propertyNameToValidate () {
    return 'props'
  }

  get schema (): Record<string, Joi.Schema> {
    return {}
  }

  validate (intent: Intent): ValidationError[] {
    const step = intent.toRaw()
    const validations = this.schema
    const validationErrors = this.validationErrors
    const displayName = this.displayName
    const article = this.article

    const errors = []
    const propertyToValidate = step.payload[this.propertyNameToValidate]
    const propNames = Object.keys(propertyToValidate)
    const validProps = Object.keys(validations)

    for (const propName of propNames) {
      if (!validProps.includes(propName)) {
        let message

        const suggestion = didYouMean(propName, validProps)

        if (suggestion) {
          message = validationErrors.INVALID_PROPERTY_NAME_WITH_SUGGESTION(propName, article, displayName, suggestion)
        } else {
          message = validationErrors.INVALID_PROPERTY_NAME(propName, article, displayName)
        }

        errors.push({
          type: 'InvalidProperty',
          message,
          details: { intent }
        })
      } else {
        const schema = validations[propName]
        const valueToValidate = propertyToValidate[propName]
        const result = schema.validate(valueToValidate)
        const { error } = result

        if (error) {
          let expectedType = schema.type
          // Joi's schema type for a function is `object` with a `func` flag
          if (schema._flags.func) {
            expectedType = 'function'
          }
          const actualType = kindOf(valueToValidate)
          const message =
              expectedType === 'alternatives' ?
                validationErrors.INVALID_VALUE_IN_ALTERNATIVES(propName, displayName, valueToValidate, error.details[0].context.types)
                : validationErrors.INVALID_PROPERTY_TYPE(propName, displayName, actualType, expectedType)
          errors.push({
            type: 'InvalidType',
            message,
            details: { intent }
          })
        }
      }
    }

    return errors
  }
}

export default SchemaValidator
