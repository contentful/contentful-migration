export default interface ContentTransform {
  from: string[],
  to: string[],
  shouldPublish?: boolean,
  transformEntryForLocale (inputFields: any, locale: string): any
}
