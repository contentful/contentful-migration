import Intent from '../interfaces/intent'
import IntentValidator from '../interfaces/intent-validator'
import ValidationError from '../interfaces/errors'
import RawStep from '../interfaces/raw-step'

class IntentList {
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

  toRaw (): RawStep[] {
    return this.intents.map((intent) => intent.toRaw())
  }

  slice (): IntentList[] {
    const slices: IntentList[] = [];

    let currentList: Intent[] = [];
    let previousIntentInGroup: Intent | null = null;

    for (const intent of this.intents) {
      if (previousIntentInGroup === null || intent.groupsWith(previousIntentInGroup)) {
        currentList.push(intent)
      } else {
        slices.push(new IntentList(currentList));
        currentList = [
          intent
        ];
      }
      previousIntentInGroup = intent;

      if (intent.endsGroup()) {
        slices.push(new IntentList(currentList));
        currentList = []
        previousIntentInGroup = null
      }
    }
    slices.push(new IntentList(currentList));


    return slices
  }
}

export default IntentList