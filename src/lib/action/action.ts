import { ContentType, EditorInterfaces } from '../entities/content-type'
import Entry from '../entities/entry'
import Tag from '../entities/tag'
import OfflineApi from '../offline-api/index'

abstract class APIAction {
  abstract applyTo (api: OfflineApi): Promise<void>
}

abstract class EntityAction {
  abstract getEntityType (): EntityType
  abstract getEntityId (): string
  // For Entries, we could add `getEntityQuery` or something like that
  // So that we do not need to know Entry IDs to transform them
  abstract applyTo (entity: ContentType | Entry | EditorInterfaces | Tag): Promise<void>
}

enum EntityType {
  ContentType = 'CONTENT_TYPE',
  EditorInterface = 'EDITOR_INTERFACE',
  Tag = 'TAG'
}

export {
  APIAction,
  EntityAction,
  EntityType
}
