export interface StateInterface<EntityType> {
  set(key: String, value: EntityType)
  get(key: String)
  has(key: String)
  delete(key: String)
  wasDeleted(key: String)
  getDeletions() : Promise<Map<String, EntityType>>
  getAll() : Promise<Map<String, EntityType>>
  entityIterator: AsyncIterable<EntityType>
  deletionIterator: AsyncIterable<EntityType>
}

(Symbol as any).asyncIterator = Symbol.asyncIterator || Symbol.for("Symbol.asyncIterator");

export class State<EntityType> implements StateInterface<EntityType> {
  private entities:Map<String, EntityType> = new Map();
  private deletedEntities: Map<String, EntityType> = new Map();

  constructor (initial: Map<String, EntityType> = new Map()) {
    for (const [key, value] of initial) {
      this.entities.set(key, value);
    }
  }

  async set (key: String, value: EntityType) {
    this.entities.set(key, value);
    this.deletedEntities.delete(key);
  }

  async get (key: String) {
    const hasKey = await this.has(key);
    if (!hasKey) {
      throw new Error(`Cannot get key ${key} because it does not exist`);
    }
    return this.entities.get(key);
  }

  async has (key: String) {
    return this.entities.has(key);
  }

  async delete (key: String) {
    const hasKey = await this.has(key);

    if (!hasKey) {
      throw new Error(`Cannot delete key ${key} because it does not exist`);
    }

    const entity = await this.get(key);
    this.deletedEntities.set(key, entity);
    this.entities.delete(key);
  }

  async wasDeleted (key: String) {
    return this.deletedEntities.has(key);
  }

  async getDeletions () {
    return this.deletedEntities;
  }

  async getAll () {
    return this.entities;
  }

  get entityIterator(): AsyncIterable<EntityType> {
    return {
      [Symbol.asyncIterator]: (): AsyncIterator<EntityType> =>  {
        let keys = Array.from(this.entities.keys());
        let index = 0;

        return {
          next: async (): Promise<IteratorResult<EntityType>> => {
            const isDone = index === keys.length;

            const result = {
              done: isDone,
              value: isDone ? undefined : this.entities.get(keys[index])
            };

            index += 1;

            return result;
          }
        }
      }
    }
  } 

  get deletionIterator(): AsyncIterable<EntityType> {
    return {
      [Symbol.asyncIterator]: (): AsyncIterator<EntityType> => {
        let keys = Array.from(this.deletedEntities.keys());
        let index = 0;

        return {
          next: async (): Promise<IteratorResult<EntityType>> => {
            const isDone = index === keys.length;

            const result = {
              done: isDone,
              value: isDone ? undefined : this.deletedEntities.get(keys[index])
            };

            index += 1;

            return result;
          }
        }
      }
    }
  } 
}

export default State