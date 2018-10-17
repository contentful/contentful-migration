import { APIAction } from './action'
import { OfflineAPI } from '../offline-api/index'

class SaveEditorInterfaceAction extends APIAction {
  protected contentTypeId: string

  constructor (contentTypeId: string) {
    super()
    this.contentTypeId = contentTypeId
  }

  async applyTo (api: OfflineAPI) {
    try {
      await api.saveEditorInterfaces(this.contentTypeId)
    } catch {
      // TODO: Maybe a better handling
      // What the heck are you doing?
      // When fetching the editor interfaces
      // the offline API will always create an editor interface
      // for the content type if it does not exist.
      // So we shouldn't throw at the first place maybe ?
    }
  }
}

export { SaveEditorInterfaceAction }
