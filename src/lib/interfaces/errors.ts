import { Intent } from '../intent/index'

interface ValidationError {
  type: string,
  message: string,
  details?: {
    intent: Intent
  }
}

interface PayloadValidationError extends ValidationError {
  type: 'InvalidPayload',
  message: string
}

interface InvalidActionError extends ValidationError {
  type: 'InvalidAction',
  message: string
}

interface InvalidTypeError extends ValidationError {
  type: 'InvalidType',
  message: string,
  details: {
    intent: Intent
  }
}

interface InvalidMovementError extends ValidationError {
  type: 'InvalidMovement',
  message: string,
  details: {
    intent: Intent
  }
}

interface InvalidPropertyError extends ValidationError {
  type: 'InvalidProperty',
  message: string
}

export {
  ValidationError as default,
  PayloadValidationError,
  InvalidActionError,
  InvalidTypeError,
  InvalidMovementError,
  InvalidPropertyError
}
