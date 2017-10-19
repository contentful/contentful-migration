import Intent from '../interfaces/intent'
import IntentValidator from '../interfaces/intent-validator'
import ValidationError from '../interfaces/errors'

class StepList {
  private intents: Intent[]
  private validators: IntentValidator[]

  constructor (intents: Intent[]) {
    this.intents = intents;
    this.validators = [];
  }

  addValidator (validator: IntentValidator) {
    this.validators.push(validator);
  }

  validate (): ValidationError[] {
    let errors = [];

    for (const intent of this.intents) {
      for (const validator of this.validators) {
        if (validator.appliesTo(intent)) {
          errors = errors.concat(validator.validate(intent));
        }
      }
    }

    return errors;
  }
}

export default StepList