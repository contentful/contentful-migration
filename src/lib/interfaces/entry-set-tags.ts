import APITagLink from './api-tag-link'

export default interface EntrySetTags {
  contentType: string,
  from: string[],
  setTagsForEntry (inputFields: any, entryTags: APITagLink[], apiTags: APITagLink[]): any
}
