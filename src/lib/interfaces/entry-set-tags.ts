export default interface EntrySetTags {
  contentType: string,
  from: string[],
  setTagsForEntry (inputFields: any, entryTags: object[], apiTags: object[]): any
}
