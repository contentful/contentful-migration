import { ContentType, EditorInterfaces } from '../entities/content-type'
import Entry from '../entities/entry'
import OfflineApi from '../offline-api/index'

abstract class APIAction {
  abstract applyTo (api: OfflineApi): Promise<void>
}

abstract class EntityAction {
  // Really should be using an ENUM here
  abstract getEntityType (): string
  abstract getEntityId (): string
  // For Entries, we could add `getEntityQuery` or something like that
  // So that we do not need to know Entry IDs to transform them
  abstract applyTo (entity: ContentType | Entry | EditorInterfaces): Promise<void>
}

export {
  APIAction,
  EntityAction
}
