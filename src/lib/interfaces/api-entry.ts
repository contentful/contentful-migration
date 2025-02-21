import APITagLink from './api-tag-link'
import type { EntityMetaSysProps } from 'contentful-management'

export default interface APIEntry {
  sys: {
    id: EntityMetaSysProps['id']
    version: EntityMetaSysProps['version']
    publishedVersion?: EntityMetaSysProps['publishedVersion']
    contentType: {
      sys: {
        type: string
        linkType: string
        id: string
      }
    }
    fieldStatus?: EntityMetaSysProps['fieldStatus']
  }
  fields: object
  metadata?: { tags: APITagLink[] }
}
