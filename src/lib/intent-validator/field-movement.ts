'use strict'

import * as Joi from 'joi'
import * as didYouMean from 'didyoumean2'
import * as kindOf from 'kind-of'

import IntentValidator from '../interfaces/intent-validator'
import ValidationError from '../interfaces/errors'
import Intent from '../interfaces/intent'

const validationErrors = {
  INVALID_MOVEMENT_TYPE: (typeName) => {
    return `"${typeName}" is not a valid type for field movement. Expected "string".`
  },
  INVALID_MOVEMENT_WITH_SELF: (fieldId) => {
    return `You cannot move the field "${fieldId}" relative to itself.`
  },
  INVALID_MOVEMENT_NAME: (movement) => {
    return `"${movement}" is not a valid field movement.`
  },
  INVALID_MOVEMENT_NAME_WITH_SUGGESTION: (movement, suggestion) => {
    return `${validationErrors.INVALID_MOVEMENT_NAME(movement)} Did you mean "${suggestion}"?`
  }
}

/*
  While this class very closely follows the SchemaValidator,
  it does have slightly different logic that I did not want to abstract
  into the SchemaValidator too. So for now there is a bit of duplication
*/
class FieldMovementStepValidator implements IntentValidator {
  appliesTo (step) {
    return step.isFieldMove()
  }

  get validationErrors () {
    return validationErrors
  }

  get schema () {
    return {
      toTheTop: Joi.any(),
      toTheBottom: Joi.any(),
      afterField: Joi.string().required(),
      beforeField: Joi.string().required()
    }
  }

  validate (intent: Intent): ValidationError[] {
    const step = intent.toRaw()
    const validationErrors = this.validationErrors
    const fieldMovementValidations = this.schema
    const validMoves = Object.keys(fieldMovementValidations)
    const movement = step.payload.movement.direction

    if (validMoves.includes(movement)) {
      const pivot = step.payload.movement.pivot
      const schema = fieldMovementValidations[movement]
      const { error } = Joi.validate(pivot, schema)
      const pivotType = kindOf(pivot)
      const sourceFieldId = step.payload.fieldId

      if (error) {
        return [
          {
            type: 'InvalidType',
            message: validationErrors.INVALID_MOVEMENT_TYPE(pivotType),
            details: { step }
          }
        ]
      }

      if (sourceFieldId === pivot) {
        return [
          {
            type: 'InvalidMovement',
            message: validationErrors.INVALID_MOVEMENT_WITH_SELF(sourceFieldId),
            details: { step }
          }
        ]
      }

      return []
    }

    const suggestion = didYouMean(movement, validMoves)

    let message = validationErrors.INVALID_MOVEMENT_NAME(movement)

    if (suggestion) {
      message = validationErrors.INVALID_MOVEMENT_NAME_WITH_SUGGESTION(movement, suggestion)
    }

    return [
      {
        type: 'InvalidMovement',
        message,
        details: { step }
      }
    ]
  }
}

export default FieldMovementStepValidator
