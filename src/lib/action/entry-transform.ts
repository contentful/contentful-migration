import { APIAction } from './action'
import { OfflineAPI } from '../offline-api'
import Entry from '../entities/entry'
import * as _ from 'lodash'

class EntryTransformAction extends APIAction {
  private contentTypeId: string
  private fromFields: string[]
  // private toFields: string[]
  private transformEntryForLocale: Function
  private shouldPublish: boolean

  // constructor (contentTypeId: string, fromFields: string[], toFields: string[], transformation: Function) {
  constructor (contentTypeId: string, fromFields: string[], transformation: Function, shouldPublish: boolean = true) {
    super()
    this.contentTypeId = contentTypeId
    this.fromFields = fromFields
    // this.toFields = toFields
    this.transformEntryForLocale = transformation
    this.shouldPublish = shouldPublish
  }

  async applyTo (api: OfflineAPI) {
    const entries: Entry[] = await api.getEntriesForContentType(this.contentTypeId)
    const locales: string[] = await api.getLocalesForSpace()
    for (const entry of entries) {
      const inputs = _.pick(entry.fields, this.fromFields)
      for (const locale of locales) {
        let outputsForCurrentLocale
        try {
          outputsForCurrentLocale = await this.transformEntryForLocale(inputs, locale)
        } catch (err) {
          await api.recordRuntimeError(err)
          continue
        }
        // TODO verify that the toFields actually get written to
        // and to no other field
        Object.keys(outputsForCurrentLocale).forEach((fieldId) => {
          if (!entry.fields[fieldId]) {
            entry.setField(fieldId, {})
          }
          entry.setFieldForLocale(fieldId, locale, outputsForCurrentLocale[fieldId])
        })

        await api.saveEntry(entry.id)
        if (this.shouldPublish) {
          await api.publishEntry(entry.id)
        }
      }
    }
  }
}

export { EntryTransformAction }
