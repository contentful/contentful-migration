export default interface TransformEntryToType {
  sourceContentType: string
  targetContentType: string
  from?: string[]
  entryIds?: string[]
  identityKey: (fromFields: any) => Promise<string>
  shouldPublish?: boolean | 'preserve'
  useLocaleBasedPublishing?: boolean
  removeOldEntries?: boolean
  updateReferences?: boolean
  transformEntryForLocale(inputFields: any, locale: string): Promise<any>
}
