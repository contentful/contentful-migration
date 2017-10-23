import { State, StateInterface } from './index'

interface Batch<EntityType> {
  id: string
  state: State<EntityType>
}

export default class ChangeRecorder<EntityType> {
  private committedState: State<EntityType>;
  private hasOpenBatch: boolean = false;
  private batches: Batch<EntityType>[] = [];
  private currentBatch: Batch<EntityType> = null;

  constructor(initial: Map<String, EntityType> = new Map()) {
    this.committedState = new State(initial);
  }

  startBatch (id: string) {

  }
}