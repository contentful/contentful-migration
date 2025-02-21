export default interface ContentTransform {
  from: string[]
  to: string[]
  shouldPublish?: boolean | 'preserve'
  useLocaleBasedPublishing?: boolean
  transformEntryForLocale(inputFields: any, locale: string): any
}
