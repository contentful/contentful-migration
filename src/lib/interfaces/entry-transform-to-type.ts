export default interface TransformEntryToType {
  sourceContentType: string,
  targetContentType: string,
  from: string[],
  to: string[],
  identityKey: (fromFields: any) => Promise<string>
  shouldPublish?: boolean,
  removeOldEntries?: boolean,
  transformEntryForLocale (inputFields: any, locale: string): Promise<any>
}
