interface ValidationError {
  type: string,
  message: string
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
  message: string
}

interface InvalidMovementError extends ValidationError {
  type: 'InvalidMovement',
  message: string
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
