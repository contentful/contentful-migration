import { APIAction } from './action'
import { OfflineAPI } from '../fake-api'
import Entry from '../entities/entry'

class EntryTransformAction extends APIAction {
  private contentTypeId: string
  private fromFields: string[]
  private toFields: string[]
  private transform: Function

  constructor (contentTypeId: string, fromFields: string[], toFields: string[], transform: Function) {
    super()
    this.contentTypeId = contentTypeId
    this.fromFields = fromFields
    this.toFields = toFields
    this.transform = transform
  }

  async applyTo (api: OfflineAPI) {
    const entries: Entry[] = await api.getEntriesForContentType(this.contentTypeId)
    for (const entry of entries) {
      const inputs = this.fromFields.map((fieldId) => entry.fields[fieldId])
      const outputs = await this.transform(inputs)
      for (let i = 0; i < this.toFields.length; i++) {
        entry.fields[this.toFields[i]] = outputs[i]
      }
      await api.saveEntry(entry.id)
      await api.publishEntry(entry.id)
    }
  }
}

export { EntryTransformAction }
