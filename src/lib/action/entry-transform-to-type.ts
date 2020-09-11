import EntryTransformToType from '../interfaces/entry-transform-to-type'
import shouldPublishLocalChanges from '../utils/should-publish-local-changes'
import { APIAction } from './action'
import { OfflineAPI } from '../offline-api'
import Entry from '../entities/entry'
import * as _ from 'lodash'

class EntryTransformToTypeAction extends APIAction {
  private fromFields?: string[]
  private sourceContentTypeId: string
  private targetContentTypeId: string
  private transformEntryForLocale: (inputFields: any, locale: string) => Promise<any>
  private identityKey: (fromFields: any) => Promise<string>
  private shouldPublish: boolean | 'preserve'
  private removeOldEntries: boolean
  private updateReferences: boolean

  constructor (entryTransformation: EntryTransformToType) {
    super()
    this.fromFields = entryTransformation.from
    this.sourceContentTypeId = entryTransformation.sourceContentType
    this.targetContentTypeId = entryTransformation.targetContentType
    this.identityKey = entryTransformation.identityKey
    this.shouldPublish = entryTransformation.shouldPublish || false
    this.removeOldEntries = entryTransformation.removeOldEntries || false
    this.updateReferences = entryTransformation.updateReferences || false
    this.transformEntryForLocale = entryTransformation.transformEntryForLocale
  }

  async applyTo (api: OfflineAPI) {
    const entries: Entry[] = await api.getEntriesForContentType(this.sourceContentTypeId)
    const locales: string[] = await api.getLocalesForSpace()

    for (const entry of entries) {
      const inputs = this.fromFields ? _.pick(entry.fields, this.fromFields) : entry.fields
      const newEntryId = await this.identityKey(inputs)
      const hasEntry = await api.hasEntry(newEntryId)

      if (hasEntry) {
        await api.recordRuntimeError(new Error(`Entry with id '${newEntryId}' already exists`))
        continue
      }

      let skipEntry = true
      let fieldsForTargetEntry = {}

      for (const locale of locales) {
        let outputsForCurrentLocale
        try {
          outputsForCurrentLocale = await this.transformEntryForLocale(inputs, locale)
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

      const targetEntry = await api.createEntry(this.targetContentTypeId, newEntryId)

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

      // look for entries linking to the old entry and replace them with references to the new entry
      if (this.updateReferences) {
        const links = await api.getLinks(entry.id, locales)
        for (const link of links) {
          if (!link.isInArray()) {
            link.element.setFieldForLocale(link.field, link.locale,{ sys: { id: newEntryId, type: 'Link', linkType: 'Entry' } })
          } else {
            link.element.replaceArrayLinkForLocale(link.field, link.locale, link.index, newEntryId)
          }

          await api.saveEntry(link.element.id)
          if (shouldPublishLocalChanges(this.shouldPublish, link.element)) {
            await api.publishEntry(link.element.id)
          }
        }
      }

      // remove the original item
      if (this.removeOldEntries) {
        if (entry.isPublished) {
          await api.unpublishEntry(entry.id)
        }
        await api.deleteEntry(entry.id)
      }
    }
  }
}

export { EntryTransformToTypeAction }
