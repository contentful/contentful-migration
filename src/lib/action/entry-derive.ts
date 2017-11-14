import EntryDerive from '../interfaces/entry-derive'
import { APIAction } from './action'
import { OfflineAPI } from '../offline-api'
import Entry from '../entities/entry'
import * as _ from 'lodash'

class EntryDeriveAction extends APIAction {
  private contentTypeId: string
  private fromFields: string[]
  private referenceField: string
  private derivedContentType: string
  // TODO: We do not use this here at all
  // Only for validation before.
  // Maybe also ensure we use it here
  // private derivedFields: string[]
  private deriveEntryForLocale: (inputFields: any, locale: string) => Promise<any>
  private identityKey: (fromFields: any) => Promise<string>
  private shouldPublish: boolean

  constructor (contentTypeId: string, entryDerivation: EntryDerive) {
    super()
    this.contentTypeId = contentTypeId
    this.fromFields = entryDerivation.from
    this.referenceField = entryDerivation.toReferenceField
    this.derivedContentType = entryDerivation.derivedContentType
    this.deriveEntryForLocale = entryDerivation.deriveEntryForLocale
    this.identityKey = entryDerivation.identityKey
    this.shouldPublish = entryDerivation.shouldPublish || true
  }

  async applyTo (api: OfflineAPI) {
    const entries: Entry[] = await api.getEntriesForContentType(this.contentTypeId)
    const locales: string[] = await api.getLocalesForSpace()
    for (const entry of entries) {
      const inputs = _.pick(entry.fields, this.fromFields)
      const newEntryId = await this.identityKey(inputs)
      const hasEntry = await api.hasEntry(newEntryId)

      if (!hasEntry) {
        // TODO: How do we handle already existing links?
        // Usually you would not want to derive the contents again
        // But what if the previous round may not have been complete
        // for example one optional field was missing in the previous iteration
        const targetEntry = await api.createEntry(this.derivedContentType, newEntryId)

        for (const locale of locales) {
          let outputsForCurrentLocale
          try {
            outputsForCurrentLocale = await this.deriveEntryForLocale(inputs, locale)
          } catch (e) {
            continue
          }
          if (!outputsForCurrentLocale) {
            // TODO: Figure out how to deal with `undefined`
            // And how to make these things explicit
            continue
          }
          // TODO: verify that the toFields actually get written to
          // and to no other field
          Object.keys(outputsForCurrentLocale).forEach((fieldId) => {
            if (!targetEntry.fields[fieldId]) {
              targetEntry.setField(fieldId, {})
            }
            targetEntry.setFieldForLocale(fieldId, locale, outputsForCurrentLocale[fieldId])
          })
        }
        await api.saveEntry(targetEntry.id)
        if (this.shouldPublish) {
          await api.publishEntry(targetEntry.id)
        }
      }

      // TODO: `setFieldForLocale` does not create the path
      // to the field object and assigns directly.
      // So if the field never existed before it fails
      entry.setField(this.referenceField, {})
      for (const locale of locales) {
        entry.setFieldForLocale(this.referenceField, locale, {
          sys: {
            type: 'Link',
            linkType: 'Entry',
            id: newEntryId
          }
        })
      }

      await api.saveEntry(entry.id)
      if (this.shouldPublish) {
        await api.publishEntry(entry.id)
      }
    }
  }
}

export { EntryDeriveAction }
