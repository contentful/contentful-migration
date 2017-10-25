import ContentType from '../entities/content-type'
import Entry from '../entities/entry'
import FakeApi from '../fake-api/index'

abstract class APIAction {
  abstract applyTo (api: FakeApi): Promise<void>
}

abstract class EntityAction {
  // Really should be using an ENUM here
  abstract getEntityType (): string
  abstract getEntityId (): string
  // For Entries, we could add `getEntityQuery` or something like that
  // So that we do not need to know Entry IDs to transform them
  abstract applyTo (entity: ContentType|Entry): Promise<void>
}

export {
  APIAction,
  EntityAction
}
