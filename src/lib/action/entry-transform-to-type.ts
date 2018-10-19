import EntryTransformToType from '../interfaces/entry-transform-to-type'
import { APIAction } from './action'
import { OfflineAPI } from '../offline-api'
//import { ContentType } from '../entities/content-type'
import Entry from '../entities/entry'
import * as _ from 'lodash'

class EntryTransformToTypeAction extends APIAction {
  private fromFields: string[]
  private sourceContentTypeId: string
  private targetContentTypeId: string
  private transformEntryForLocale: (inputFields: any, locale: string) => Promise<any>
  private identityKey: (fromFields: any) => Promise<string>
  private shouldPublish: boolean
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
    //const sourceContentType: ContentType = await api.getContentType(this.sourceContentTypeId)

    for (const entry of entries) {
      const inputs = _.pick(entry.fields, this.fromFields)
      const newEntryId = await this.identityKey(inputs)
      const hasEntry = await api.hasEntry(newEntryId)

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

      if (false && !hasEntry) {
        // TODO: How do we handle already existing links?
        // Usually you would not want to derive the contents again
        // But what if the previous round may not have been complete
        // for example one optional field was missing in the previous iteration
        const targetEntry = await api.createEntry(this.targetContentTypeId, newEntryId)

        // we are not skipping this source entry and the target entry does not yet exist,
        // so now is the time to write the collected target entry values to the offline API
        for (const [fieldId, localizedField] of _.entries(fieldsForTargetEntry)) {
          if (!targetEntry.fields[fieldId]) {
            targetEntry.setField(fieldId, {})
          }

          for (const [locale, localizedValue] of _.entries(localizedField)) {
            targetEntry.setFieldForLocale(fieldId, locale, localizedValue)
          }

        }
        await api.saveEntry(targetEntry.id)
        if (this.shouldPublish) {
          await api.publishEntry(targetEntry.id)
        }
      }

      if(this.updateReferences) {
        // TODO
        const parents = await api.getParentEntries(entry.id);

        for (const parent of parents) {
          let saveEntry = false;
          const fields = parent.fields;
          Object.keys(fields).forEach(key => {
            if (fields[key] instanceof Object && fields[key][locales[0]].sys.id === entry.id) {
              console.log(JSON.stringify(fields[key]));

              // replace linked ids?
              for (const locale of locales) {
                parent.setFieldForLocale(key, locale, newEntryId);
                saveEntry = true;
              }
            }
          });

          if (saveEntry) {
            await api.saveEntry(parent.id);
            if (this.shouldPublish) {
              await api.publishEntry(parent.id)
            }
          }
        }
      }

      if(this.removeOldEntries) {
        if(entry.isPublished) {
          await api.unpublishEntry(entry.id);
        }
        await api.deleteEntry(entry.id);
      }
    }
  }
}

export { EntryTransformToTypeAction }
