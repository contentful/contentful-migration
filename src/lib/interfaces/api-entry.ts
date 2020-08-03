import APITagLink from './api-tag-link'

export default interface APIEntry {
  sys: {
    id: string,
    version: number,
    publishedVersion?: number,
    contentType: {
      sys: {
        type: string,
        linkType: string,
        id: string
      }
    }
  },
  fields: object
  metadata?: {tags: APITagLink[]}
}
