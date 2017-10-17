'use strict';

class ChunksValidationError extends Error {
  constructor (details) {
    const message = `Chunks validation failed:\n${JSON.stringify(details)}`;
    super(message);
    this.details = details;
  }
}

module.exports = ChunksValidationError;
