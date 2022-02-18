import { APIAction } from './action'
import OfflineAPI from '../offline-api/index'
import { FieldRenameProps } from './field-rename'

class EntryFieldRenameAction extends APIAction {
  private contentTypeId: string
  private fieldId: string
  private props: FieldRenameProps

  constructor(contentTypeId: string, fieldId: string, props: FieldRenameProps) {
    super()
    this.contentTypeId = contentTypeId
    this.fieldId = fieldId
    this.props = props
  }

  async applyTo(api: OfflineAPI) {
    const entries = await api.getEntriesForContentType(this.contentTypeId)

    for (const entry of entries) {
      const { newId } = this.props
      const field = entry.fields[this.fieldId]

      const newFields = { ...entry.fields, [newId]: field }
      delete newFields[this.fieldId]

      entry.fields = newFields
    }
  }
}

export { EntryFieldRenameAction }
