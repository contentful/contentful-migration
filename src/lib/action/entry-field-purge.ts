import { APIAction } from './action'
import OfflineAPI from '../offline-api/index'

class EntryFieldPurgeAction extends APIAction {
  private contentTypeId: string
  private fieldId: string

  constructor (contentTypeId: string, fieldId: string) {
    super()
    this.contentTypeId = contentTypeId
    this.fieldId = fieldId
  }

  async applyTo (api: OfflineAPI) {
    const entries = await api.getEntriesForContentType(this.contentTypeId)

    for (const entry of entries) {
      delete entry.fields[this.fieldId]
    }
  }
}

export { EntryFieldPurgeAction }
