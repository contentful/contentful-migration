import { APIAction } from './action'
import { OfflineAPI } from '../offline-api/index'

class SaveEditorInterfaceAction extends APIAction {
  protected contentTypeId: string

  constructor (contentTypeId: string) {
    super()
    this.contentTypeId = contentTypeId
  }

  async applyTo (api: OfflineAPI) {
    await api.saveEditorInterfaces(this.contentTypeId)
  }
}

export { SaveEditorInterfaceAction }
