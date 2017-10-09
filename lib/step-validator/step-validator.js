'use strict';

/*
  Base Class  (Interface) for steps validation
  All validators need to implement:
    `appliesTo(step)` => is this a step that can be validated with this validator
    `validate(step)` => return any validation errors of that step
 */
class StepValidator {
  appliesTo () {
    return false;
  }

  validate () {
    return [];
  }
}

module.exports = StepValidator;
