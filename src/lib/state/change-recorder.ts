import { State, StateInterface } from './index'

interface Batch<EntityType> {
  id: string
  state: State<EntityType>
}

export default class ChangeRecorder<EntityType> {
  private committedState: State<EntityType>;
  private hasOpenBatch: boolean = false;
  private batches: Batch<EntityType>[] = [];
  private batchId: string = null;
  private stagedState: State<EntityType> = null;

  constructor(initial: Map<String, EntityType> = new Map()) {
    this.committedState = new State(initial);
  }

  startBatch (id: string) {
    this.hasOpenBatch = true;
    this.stagedState = new State();
    this.batchId = id;
  }

  async endBatch () {
    this.batches.push({
      id: this.batchId,
      state: this.stagedState
    });

    for await (const [key, value] of this.stagedState.deletionIterator) {
      await this.committedState.delete(key);
    }

    for await (const [key, value] of this.stagedState.entityIterator) {
      await this.committedState.set(key, value);
    }
    this.hasOpenBatch = false;
    this.stagedState = null;
    this.batchId = null;
  }
}