export default interface EntryDerive {
  derivedContentType: string,
  from: string[],
  toReferenceField: string,
  derivedFields: string[],
  identityKey: (fromFields: any) => Promise<string>
  shouldPublish?: boolean,
  deriveEntryForLocale (inputFields: any, locale: string): Promise<any>
}
