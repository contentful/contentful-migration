'use strict';

class PayloadValidationError extends Error {
  constructor (details) {
    const message = `Payload validation failed:\n${JSON.stringify(details)}`;
    super(message);
    this.details = details;
  }
}

module.exports = PayloadValidationError;
