import Intent from '../intent'
import IntentValidator from '../interfaces/intent-validator'
import ErrorCollection from '../errors/error-collection'
import RawStep from '../interfaces/raw-step'
import Package from '../package/index'

class IntentList {
  private intents: Intent[]
  private validators: IntentValidator[] = []

  constructor (intents: Intent[]) {
    this.intents = intents
  }

  addValidator (validator: IntentValidator) {
    this.validators.push(validator)
  }

  validate (): void {
    let errors = []

    for (const intent of this.getIntents()) {
      for (const validator of this.validators) {
        if (validator.appliesTo(intent)) {
          const intentErrors = validator.validate(intent)
          if (intentErrors.length) {
            errors = errors.concat(intentErrors)
          }
        }
      }
    }
    if (errors.length) {
      throw new ErrorCollection(errors)
    }
  }

  toRaw (): RawStep[] {
    return this.intents.map((intent) => intent.toRaw())
  }

  toPackages (): Package[] {
    const packages: Package[] = []

    let currentList: Intent[] = []
    let previousIntentInGroup: Intent | null = null

    for (const intent of this.intents) {
      if (previousIntentInGroup === null || intent.groupsWith(previousIntentInGroup)) {
        currentList.push(intent)
      } else {
        packages.push(new Package(currentList))
        currentList = [
          intent
        ]
      }
      previousIntentInGroup = intent

      if (intent.endsGroup()) {
        packages.push(new Package(currentList))
        currentList = []
        previousIntentInGroup = null
      }
    }

    if (currentList.length > 0) {
      packages.push(new Package(currentList))
    }

    return packages
  }

  getIntents (): Intent[] {
    return this.intents
  }
}

export default IntentList
