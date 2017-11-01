import * as _ from 'lodash'
import Intent from '../intent'
import IntentValidator from '../interfaces/intent-validator'
import ErrorCollection from '../errors/error-collection'
import RawStep from '../interfaces/raw-step'
import Package from '../package/index'

class IntentList {
  private intents: Intent[]
  private packages: Package[] = []
  private validators: IntentValidator[] = []

  constructor (intents: Intent[]) {
    this.packages = this.transformToPackages(intents)
    this.intents = _.flatten(this.packages.map((pkg) => pkg.getIntents()))
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
    return this.packages
  }

  getIntents (): Intent[] {
    return this.intents
  }

  private transformToPackages (intents: Intent[]) {
    const packages: Package[] = []

    let currentList: Intent[] = []
    let previousIntentInGroup: Intent | null = null

    for (const intent of intents) {
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
}

export default IntentList
