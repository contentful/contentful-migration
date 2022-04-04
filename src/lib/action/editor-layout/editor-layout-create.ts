import OfflineAPI from '../../offline-api'
import { APIAction } from '../action'

class EditorLayoutCreateAction extends APIAction {
  private readonly contentTypeId: string

  constructor (contentTypeId: string) {
    super()
    this.contentTypeId = contentTypeId
  }

  async applyTo (api: OfflineAPI) {
    const editorInterfaces = await api.getEditorInterfaces(this.contentTypeId)
    const contentType = await api.getContentType(this.contentTypeId)

    await editorInterfaces.createEditorLayout(contentType.fields.fields)
    await editorInterfaces.createGroupControls()
  }
}

export { EditorLayoutCreateAction }
