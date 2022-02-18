export default interface ContentTransform {
  from: string[]
  to: string[]
  shouldPublish?: boolean | 'preserve'
  transformEntryForLocale(inputFields: any, locale: string): any
}
