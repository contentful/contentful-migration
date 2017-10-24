import { StateInterface } from '../state/index'

interface Action<EntityType> {
  applyTo (state: StateInterface<EntityType>): Promise<void>
}

export {
  Action as default,
  Action
}
