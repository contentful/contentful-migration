import shouldPublishLocalChanges from '../utils/should-publish-local-changes'
import { APIAction } from './action'
import { OfflineAPI } from '../offline-api'
import Entry from '../entities/entry'
import * as _ from 'lodash'

class EntryTransformAction extends APIAction {
  private contentTypeId: string
  private fromFields: string[]
  private transformEntryForLocale: Function
  private shouldPublish: boolean | 'preserve'
  private useLocaleBasedPublishing: boolean
  constructor(
    contentTypeId: string,
    fromFields: string[],
    transformation: Function,
    shouldPublish: boolean | 'preserve' = 'preserve',
    useLocaleBasedPublishing: boolean = false
  ) {
    super()
    this.contentTypeId = contentTypeId
    this.fromFields = fromFields
    // this.toFields = toFields
    this.transformEntryForLocale = transformation
    this.shouldPublish = shouldPublish
    this.useLocaleBasedPublishing = useLocaleBasedPublishing
  }

  async applyTo(api: OfflineAPI) {
    const entries: Entry[] = await api.getEntriesForContentType(this.contentTypeId)
    const locales: string[] = await api.getLocalesForSpace()
    for (const entry of entries) {
      const inputs = _.pick(entry.fields, this.fromFields)
      let changesForThisEntry = false
      for (const locale of locales) {
        let outputsForCurrentLocale
        try {
          outputsForCurrentLocale = await this.transformEntryForLocale(inputs, locale, {
            id: entry.id
          })
        } catch (err) {
          await api.recordRuntimeError(err)
          continue
        }

        if (outputsForCurrentLocale === undefined) {
          continue
        }
        changesForThisEntry = true

        // TODO verify that the toFields actually get written to
        // and to no other field
        Object.keys(outputsForCurrentLocale).forEach((fieldId) => {
          if (!entry.fields[fieldId]) {
            entry.setField(fieldId, {})
          }
          entry.setFieldForLocale(fieldId, locale, outputsForCurrentLocale[fieldId])
        })
      }
      if (changesForThisEntry) {
        await api.saveEntry(entry.id)
        if (shouldPublishLocalChanges(this.shouldPublish, entry, this.useLocaleBasedPublishing)) {
          if (this.useLocaleBasedPublishing) {
            const localesToPublish =
              this.shouldPublish === 'preserve'
                ? Object.entries(entry.fieldStatus['*'])
                    .filter(([, status]) => status === 'published')
                    .map(([locale]) => locale)
                : locales
            await api.localeBasedPublishEntry(entry.id, localesToPublish)
          } else {
            await api.publishEntry(entry.id)
          }
        }
      }
    }
  }
}

export { EntryTransformAction }
