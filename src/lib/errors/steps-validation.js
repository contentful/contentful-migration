'use strict';

class StepsValidationError extends Error {
  constructor (details) {
    const message = `Steps validation failed:\n${JSON.stringify(details)}`;
    super(message);
    this.details = details;
  }
}

module.exports = StepsValidationError;
