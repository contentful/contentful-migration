import EntryDerive from '../interfaces/entry-derive'
import { APIAction } from './action'
import { OfflineAPI } from '../offline-api'
import { ContentType } from '../entities/content-type'
import isDefined from '../utils/is-defined'

import Entry from '../entities/entry'
import * as _ from 'lodash'
import shouldPublishLocalChanges from '../utils/should-publish-local-changes'

class EntryDeriveAction extends APIAction {
  private contentTypeId: string
  private fromFields: string[]
  private referenceField: string
  private derivedContentType: string
  private deriveEntryForLocale: (inputFields: any, locale: string) => Promise<any>
  private identityKey: (fromFields: any) => Promise<string>
  private shouldPublish: boolean | 'preserve'

  constructor (contentTypeId: string, entryDerivation: EntryDerive) {
    super()
    this.contentTypeId = contentTypeId
    this.fromFields = entryDerivation.from
    this.referenceField = entryDerivation.toReferenceField
    this.derivedContentType = entryDerivation.derivedContentType
    this.deriveEntryForLocale = entryDerivation.deriveEntryForLocale
    this.identityKey = entryDerivation.identityKey
    this.shouldPublish = isDefined(entryDerivation.shouldPublish) ? entryDerivation.shouldPublish : true
  }

  async applyTo (api: OfflineAPI) {
    const entries: Entry[] = await api.getEntriesForContentType(this.contentTypeId)
    const locales: string[] = await api.getLocalesForSpace()
    const sourceContentType: ContentType = await api.getContentType(this.contentTypeId)

    for (const entry of entries) {
      const inputs = _.pick(entry.fields, this.fromFields)
      const newEntryId = await this.identityKey(inputs)
      const hasEntry = await api.hasEntry(newEntryId)

      let skipEntry = true
      let fieldsForTargetEntry = {}

      for (const locale of locales) {
        let outputsForCurrentLocale
        try {
          outputsForCurrentLocale = await this.deriveEntryForLocale(inputs, locale)
        } catch (err) {
          await api.recordRuntimeError(err)
          continue
        }

        if (outputsForCurrentLocale === undefined) {
          continue
        }

        skipEntry = false

        // we collect all the values for the target entry before writing it to the
        // offline API because we don't yet know if the entry might be skipped
        // TODO: verify that the derivedFields actually get written to
        // and to no other field
        for (const [fieldId, localizedValue] of _.entries(outputsForCurrentLocale)) {
          if (!fieldsForTargetEntry[fieldId]) {
            fieldsForTargetEntry[fieldId] = {}
          }
          fieldsForTargetEntry[fieldId][locale] = localizedValue
        }
      }

      // if derive returned undefined for all locales of this entry, there are no changes
      // to be made, neither on the source nor the target entry, so we move on to the next
      if (skipEntry) {
        continue
      }

      if (!hasEntry) {
        // TODO: How do we handle already existing links?
        // Usually you would not want to derive the contents again
        // But what if the previous round may not have been complete
        // for example one optional field was missing in the previous iteration
        const targetEntry = await api.createEntry(this.derivedContentType, newEntryId)

        // we are not skipping this source entry and the target entry does not yet exist,
        // so now is the time to write the collected target entry values to the offline API
        for (const [fieldId, localizedField] of _.entries(fieldsForTargetEntry)) {
          if (!targetEntry.fields[fieldId]) {
            targetEntry.setField(fieldId, {})
          }

          for (const [locale, localizedValue] of _.entries((localizedField as object))) {
            targetEntry.setFieldForLocale(fieldId, locale, localizedValue)
          }

        }
        await api.saveEntry(targetEntry.id)
        if (shouldPublishLocalChanges(this.shouldPublish, entry)) {
          await api.publishEntry(targetEntry.id)
        }
      }
      const field = sourceContentType.fields.getField(this.referenceField)
      entry.setField(this.referenceField, {})
      for (const locale of locales) {
        const sys = {
          type: 'Link',
          linkType: 'Entry',
          id: newEntryId
        }
        const fieldValue = (field.type === 'Array') ? [{ sys }] : { sys }
        entry.setFieldForLocale(this.referenceField, locale, fieldValue)
      }

      await api.saveEntry(entry.id)
      if (shouldPublishLocalChanges(this.shouldPublish, entry)) {
        await api.publishEntry(entry.id)
      }
    }
  }
}

export { EntryDeriveAction }
