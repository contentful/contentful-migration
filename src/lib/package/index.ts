import Intent from '../interfaces/intent'
import RawStep from '../interfaces/raw-step'

class Package {
  private intents: Intent[]

  constructor (intents: Intent[] = []) {
    this.intents = intents
  }

  getIntents (): Intent[] {
    return this.intents
  }

  toRawSteps (): RawStep[] {
    return this.intents.map((intent) => intent.toRaw())
  }
}

export {
  Package as default,
  Package
}
