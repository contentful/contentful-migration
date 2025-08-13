import EntryDerive from '../interfaces/entry-derive'
import { APIAction } from './action'
import { OfflineAPI } from '../offline-api'
import { ContentType } from '../entities/content-type'
import isDefined from '../utils/is-defined'

import Entry from '../entities/entry'
import * as _ from 'lodash'
import shouldPublishLocalChanges from '../utils/should-publish-local-changes'
import { createHash } from 'crypto'

class EntryDeriveAction extends APIAction {
  private contentTypeId: string
  private fromFields: string[]
  private referenceField: string
  private derivedContentType: string
  private derivedFields: string[]
  private deriveEntryForLocale: (
    inputFields: any,
    locale: string,
    { id }: { id: string }
  ) => Promise<any>
  private deriveEntriesForLocale?: (
    inputFields: any,
    locale: string,
    context: { id: string }
  ) => Promise<Array<{ fields: Record<string, any> }>> | Array<{ fields: Record<string, any> }>
  private identityKey: (fromFields: any) => Promise<string>
  private shouldPublish: boolean | 'preserve'
  private useLocaleBasedPublishing: boolean
  private derivedEntryId?: (params: {
    sourceId: string
    locale: string
    index: number
    candidate: { fields: Record<string, any> }
  }) => string
  private publishDerived?: 'always' | 'never' | 'preserve'

  constructor(contentTypeId: string, entryDerivation: EntryDerive) {
    super()
    this.contentTypeId = contentTypeId
    this.fromFields = entryDerivation.from
    this.referenceField = entryDerivation.toReferenceField
    this.derivedContentType = entryDerivation.derivedContentType
    this.derivedFields = entryDerivation.derivedFields
    this.deriveEntryForLocale = entryDerivation.deriveEntryForLocale
    this.deriveEntriesForLocale = entryDerivation.deriveEntriesForLocale
    this.identityKey = entryDerivation.identityKey
    this.shouldPublish = isDefined(entryDerivation.shouldPublish)
      ? entryDerivation.shouldPublish
      : true
    this.useLocaleBasedPublishing = isDefined(entryDerivation.useLocaleBasedPublishing)
      ? entryDerivation.useLocaleBasedPublishing
      : false
    this.derivedEntryId = entryDerivation.derivedEntryId
    this.publishDerived = entryDerivation.publishDerived
  }

  private async publishEntry(api: OfflineAPI, entry: Entry, locales: string[]) {
    if (this.useLocaleBasedPublishing) {
      await api.localeBasedPublishEntry(entry.id, locales)
    } else {
      await api.publishEntry(entry.id)
    }
  }

  private isDerivedFieldAllowed(fieldId: string): boolean {
    return this.derivedFields?.includes(fieldId)
  }

  private resolveChildPublishMode(): boolean | 'preserve' {
    if (this.publishDerived === 'always') return true
    if (this.publishDerived === 'never') return false
    if (this.publishDerived === 'preserve') return 'preserve'
    return this.shouldPublish
  }

  async applyTo(api: OfflineAPI) {
    const entries: Entry[] = await api.getEntriesForContentType(this.contentTypeId)
    const locales: string[] = await api.getLocalesForSpace()
    const sourceContentType: ContentType = await api.getContentType(this.contentTypeId)

    for (const entry of entries) {
      const inputs = _.pick(entry.fields, this.fromFields)
      const newEntryId = await this.identityKey(inputs)
      const hasEntry = await api.hasEntry(newEntryId)

      // Multi-entry mode: derive multiple children and set array of links
      if (this.deriveEntriesForLocale) {
        const field = sourceContentType.fields.getField(this.referenceField)
        // Validate destination is Array<Link<Entry>>
        if (
          !(
            field &&
            field.type === 'Array' &&
            field.items?.type === 'Link' &&
            field.items?.linkType === 'Entry'
          )
        ) {
          await api.recordRuntimeError(
            new Error(
              `Invalid destination: field "${this.referenceField}" must be of type Array<Link<Entry>> to use deriveEntriesForLocale.`
            )
          )
          continue
        }

        // If validations specify linkContentType ensure includes derivedContentType
        const linkContentTypeValidation = (field.items?.validations || []).find((v) =>
          Array.isArray(v?.linkContentType)
        )
        if (
          linkContentTypeValidation &&
          !linkContentTypeValidation.linkContentType.includes(this.derivedContentType)
        ) {
          await api.recordRuntimeError(
            new Error(
              `Destination field "${this.referenceField}" validations.linkContentType does not include "${this.derivedContentType}".`
            )
          )
          continue
        }

        // For each locale, derive child entries and link them positionally
        for (const locale of locales) {
          let derivedList: Array<{ fields: Record<string, any> }> = []
          try {
            const res = await this.deriveEntriesForLocale(inputs, locale, { id: entry.id })
            derivedList = Array.isArray(res) ? res : []
          } catch (err) {
            await api.recordRuntimeError(err)
            continue
          }

          const childIdsInOrder: string[] = []
          for (let index = 0; index < derivedList.length; index++) {
            const candidate = derivedList[index]
            const targetId = this.derivedEntryId
              ? this.derivedEntryId({ sourceId: entry.id, locale, index, candidate })
              : defaultDerivedChildId(entry.id, this.referenceField, locale, index)

            childIdsInOrder.push(targetId)

            const childExists = await api.hasEntry(targetId)
            if (!childExists) {
              const targetEntry = await api.createEntry(this.derivedContentType, targetId)
              // Only write declared derivedFields for this locale
              for (const [fieldId, localizedField] of _.entries(candidate.fields)) {
                if (!this.isDerivedFieldAllowed(fieldId)) continue
                if (!targetEntry.fields[fieldId]) {
                  targetEntry.setField(fieldId, {})
                }
                const value = _.get(localizedField, locale)
                if (value !== undefined) {
                  targetEntry.setFieldForLocale(fieldId, locale, value)
                }
              }
              await api.saveEntry(targetEntry.id)
              // Publish behavior for derived children
              const childPublishMode = this.resolveChildPublishMode()
              if (
                shouldPublishLocalChanges(childPublishMode, entry, this.useLocaleBasedPublishing)
              ) {
                if (this.useLocaleBasedPublishing) {
                  await api.localeBasedPublishEntry(targetEntry.id, [locale])
                } else {
                  await api.publishEntry(targetEntry.id)
                }
              }
            } else {
              // Update existing entry fields for this locale (upsert semantics)
              const targetEntry = (
                await api.getEntriesForContentType(this.derivedContentType)
              ).find((e) => e.id === targetId)
              for (const [fieldId, localizedField] of _.entries(candidate.fields)) {
                if (!this.isDerivedFieldAllowed(fieldId)) continue
                if (!targetEntry.fields[fieldId]) {
                  targetEntry.setField(fieldId, {})
                }
                const value = _.get(localizedField, locale)
                if (value !== undefined) {
                  targetEntry.setFieldForLocale(fieldId, locale, value)
                }
              }
              await api.saveEntry(targetEntry.id)
              const childPublishMode = this.resolveChildPublishMode()
              if (
                shouldPublishLocalChanges(childPublishMode, entry, this.useLocaleBasedPublishing)
              ) {
                if (this.useLocaleBasedPublishing) {
                  await api.localeBasedPublishEntry(targetEntry.id, [locale])
                } else {
                  await api.publishEntry(targetEntry.id)
                }
              }
            }
          }

          // Write array of links for this locale (can be empty)
          const links = childIdsInOrder.map((id) => ({
            sys: { type: 'Link', linkType: 'Entry', id }
          }))
          entry.setFieldForLocale(this.referenceField, locale, links)
        }

        await api.saveEntry(entry.id)
        if (shouldPublishLocalChanges(this.shouldPublish, entry, this.useLocaleBasedPublishing)) {
          await this.publishEntry(api, entry, locales)
        }
        continue
      }

      // Single-entry mode
      let skipEntry = true
      let fieldsForTargetEntry = {}

      for (const locale of locales) {
        let outputsForCurrentLocale
        try {
          outputsForCurrentLocale = await this.deriveEntryForLocale(inputs, locale, {
            id: entry.id
          })
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

          for (const [locale, localizedValue] of _.entries(localizedField as object)) {
            targetEntry.setFieldForLocale(fieldId, locale, localizedValue)
          }
        }
        await api.saveEntry(targetEntry.id)
        if (shouldPublishLocalChanges(this.shouldPublish, entry, this.useLocaleBasedPublishing)) {
          await this.publishEntry(api, targetEntry, locales)
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
        const fieldValue = field.type === 'Array' ? [{ sys }] : { sys }
        entry.setFieldForLocale(this.referenceField, locale, fieldValue)
      }

      await api.saveEntry(entry.id)
      if (shouldPublishLocalChanges(this.shouldPublish, entry, this.useLocaleBasedPublishing)) {
        await this.publishEntry(api, entry, locales)
      }
    }
  }
}

export { EntryDeriveAction }

function defaultDerivedChildId(
  sourceId: string,
  toReferenceField: string,
  locale: string,
  index: number
): string {
  const base = `${sourceId}-${toReferenceField}-${locale}-${index}`
  if (base.length <= 64) return base
  const hash = shortHash(base)
  const maxBase = 64 - (1 + hash.length)
  return `${base.slice(0, Math.max(0, maxBase))}-${hash}`
}

function shortHash(input: string): string {
  const hashHex = createHash('sha256').update(input).digest('hex')
  const base36 = BigInt('0x' + hashHex).toString(36)
  return base36.slice(0, 6)
}
