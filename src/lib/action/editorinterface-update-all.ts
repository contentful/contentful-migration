import { EditorInterfaces } from '../entities/content-type'
import { APIEditorInterfaces } from '../interfaces/content-type'
import { EntityAction, EntityType } from './action'

export class EditorInterfaceUpdateAllAction extends EntityAction {
  protected contentTypeId: string
  protected editorInterfaces: Omit<APIEditorInterfaces, 'sys'>

  constructor(contentTypeId: string, editorInterfaces: Omit<APIEditorInterfaces, 'sys'>) {
    super()
    this.contentTypeId = contentTypeId
    this.editorInterfaces = editorInterfaces
  }

  getEntityType(): EntityType {
    return EntityType.EditorInterface
  }

  getEntityId(): string {
    return this.contentTypeId
  }

  async applyTo(editorInterfaces: EditorInterfaces) {
    editorInterfaces.updateAllEditorInterfaces(this.editorInterfaces)
  }
}
