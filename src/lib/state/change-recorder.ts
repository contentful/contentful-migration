import { State, StateInterface } from './index'

interface Batch<EntityType> {
  id: string
  state: State<EntityType>
}

export default class ChangeRecorder<EntityType> implements StateInterface<EntityType> {
  private committedState: State<EntityType>
  private stagedState: State<EntityType> = null
  private hasOpenBatch: boolean = false
  private batches: Batch<EntityType>[] = []
  private batchId: string = null

  constructor (initial: Map<String, EntityType> = new Map()) {
    this.committedState = new State(initial)
  }

  async startBatch (id: string) {
    this.hasOpenBatch = true
    this.stagedState = new State()
    this.batchId = id
  }

  async endBatch () {
    this.batches.push({
      id: this.batchId,
      state: this.stagedState
    })

    for await (const [key, value] of this.stagedState.deletionIterator) {
      await this.committedState.delete(key)
    }

    for await (const [key, value] of this.stagedState.entityIterator) {
      await this.committedState.set(key, value)
    }
    this.hasOpenBatch = false
    this.stagedState = null
    this.batchId = null
  }

  async has (key: String) {
    this.assertOpenBatch()

    const hasStaged = await this.stagedState.has(key)
    const hasCommited = await this.committedState.has(key)

    if (hasStaged || hasCommited) {
      return true
    }

    return false
  }

  async get (key: String) {
    this.assertOpenBatch()

    const hasStaged = await this.stagedState.has(key)
    const hasCommited = await this.committedState.has(key)

    if (!hasStaged && !hasCommited) {
      throw new Error(`Cannot get key ${key} because it does not exist`)
    }

    if (hasStaged) {
      return this.stagedState.get(key)
    }

    return this.committedState.get(key)
  }

  async set (key: String, value: EntityType) {
    this.assertOpenBatch()

    return this.stagedState.set(key, value)
  }

  async delete (key: String) {
    this.assertOpenBatch()

    const hasStaged = await this.stagedState.has(key)
    const hasCommited = await this.committedState.has(key)

    if (!hasStaged && !hasCommited) {
      throw new Error(`Cannot delete key ${key} because it does not exist`)
    }

    // Payload needs to be copied to staged state before deleting it
    if (!hasStaged && hasCommited) {
      const commitedEntity = await this.committedState.get(key)
      await this.stagedState.set(key, commitedEntity)
    }

    return this.stagedState.delete(key)
  }

  async wasDeleted (key: String) {
    this.assertOpenBatch()

    const deletedInStaged = await this.stagedState.wasDeleted(key)
    const deletedInCommited = await this.committedState.wasDeleted(key)

    return deletedInStaged || deletedInCommited
  }

  async stagedForDeletion (key: String) {
    this.assertOpenBatch()

    return this.stagedState.wasDeleted(key)
  }

  async hasCommited (key: String) {
    return this.committedState.has(key)
  }

  async getCommited (key: String) {
    return this.committedState.get(key)
  }

  async getBatches () {
    if (this.hasOpenBatch) {
      throw new Error('Batch needs to be closed before calling getBatches method on it.')
    }
    return this.batches
  }

  // TODO: I wanna be a decorator
  private assertOpenBatch () {
    if (this.hasOpenBatch) {
      return
    }

    throw new Error('Batch needs to be opened before calling StateInterface methods on it.')
  }
}
