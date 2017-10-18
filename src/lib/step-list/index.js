'use strict';

const Intent = require('../intent').default;

class StepList {
  constructor (steps) {
    this.steps = steps;
    this.validators = [];
  }

  addValidator (validator) {
    this.validators.push(validator);
  }

  validate () {
    let errors = [];

    for (const step of this.steps) {
      for (const validator of this.validators) {
        if (validator.appliesTo(step)) {
          errors = errors.concat(validator.validate(step));
        }
      }
    }

    return errors;
  }

  static fromRaw (rawSteps) {
    return new StepList(rawSteps.map((rawStep) => new Intent(rawStep)));
  }
}

module.exports = StepList;
