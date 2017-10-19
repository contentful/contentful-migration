import { Intent as IntentInterface } from '../interfaces/intent'
import { Action as ActionInterface } from '../interfaces/action'
import { RawStep, RawStepMeta, RawStepPayload} from '../interfaces/raw-step'

export default abstract class Intent implements IntentInterface {
  protected type: string
  protected meta: RawStepMeta
  protected payload: RawStepPayload

  constructor (rawStep: RawStep) {
    this.type = rawStep.type
    this.meta = rawStep.meta
    this.payload = rawStep.payload
  }

  // abstract toActions (): ActionInterface[]

  isContentTypeUpdate () {
    return false
  }

  isContentTypeDelete() {
    return false
  }

  isContentTypeCreate () {
    return false
  }

  isFieldCreate () {
    return false
  }

  isFieldUpdate () {
    return false
  }

  isFieldDelete () {
    return false
  }

  isFieldRename () {
    return false
  }

  isFieldMove () {
    return false
  }

  isContentTransform () {
    return false
  }

  toRaw (): RawStep {
    return {
      type: this.type,
      meta: this.meta,
      payload: this.payload
    };
  }
}
