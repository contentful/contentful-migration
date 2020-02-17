import { PublishBehavior } from '../utils/should-publish'

export default interface ContentTransform {
  from: string[],
  to: string[],
  shouldPublish?: PublishBehavior,
  transformEntryForLocale (inputFields: any, locale: string): any
}
