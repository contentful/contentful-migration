import Action from './action'
import RawStep from './raw-step'

interface Intent {
  toActions() : Action[]
  toRaw(): RawStep
}

export {
  Intent as default,
  Intent
}