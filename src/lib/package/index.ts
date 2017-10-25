import Intent from '../interfaces/intent'
import RawStep from '../interfaces/raw-step'
import ContentType from '../entities/content-type'
import FakeAPI from '../fake-api/index'
import { APIAction, EntityAction } from '../action/action'
import { ContentTypeSaveAction } from '../action/content-type-save'
import { ContentTypePublishAction } from '../action/content-type-publish'

class Package {
  private intents: Intent[]
  private contentTypeId: string
  private _createsContentType: boolean

  constructor (intents: Intent[] = []) {
    this.intents = intents
    this.contentTypeId = intents[0].getContentTypeId()

    this._createsContentType = intents.some((intent) => {
      return intent.isContentTypeCreate()
    })
  }

  getIntents (): Intent[] {
    return this.intents
  }

  getContentTypeId (): string {
    return this.contentTypeId
  }

  createsContentType (): boolean {
    return this._createsContentType
  }

  toRawSteps (): RawStep[] {
    return this.intents.map((intent) => intent.toRaw())
  }

  async applyTo (api: FakeAPI) {
    await api.startRecordingRequests('foo')
    const intents = this.getIntents()
    for (const intent of intents) {
      for (const action of intent.toActions()) {
        if (action instanceof APIAction) {
          await action.applyTo(api)
        }
        if (action instanceof EntityAction) {
          const entityType = action.getEntityType()
          const entityId = action.getEntityId()

          if (entityType === 'CONTENT_TYPE') {
            const ct = await api.getContentType(entityId)
            await action.applyTo(ct)
          }
        }
      }
    }
    // Auto insert publish and save
    const save = new ContentTypeSaveAction(this.getContentTypeId())
    const publish = new ContentTypePublishAction(this.getContentTypeId())

    await save.applyTo(api)
    await publish.applyTo(api)
    await api.stopRecordingRequests()
  }
}

export {
  Package as default,
  Package
}
