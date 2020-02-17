import { PublishBehavior } from '../utils/should-publish'

export default interface TransformEntryToType {
  sourceContentType: string,
  targetContentType: string,
  from?: string[],
  identityKey: (fromFields: any) => Promise<string>
  shouldPublish?: PublishBehavior,
  removeOldEntries?: boolean,
  updateReferences?: boolean,
  transformEntryForLocale (inputFields: any, locale: string): Promise<any>
}
