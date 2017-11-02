import RawStep from '../interfaces/raw-step'
import OfflineAPI from '../offline-api/index'
import { APIAction, EntityAction } from '../action/action'
import { ContentTypeSaveAction } from '../action/content-type-save'
import { ContentTypePublishAction } from '../action/content-type-publish'
import { EntryTransformAction } from '../action/entry-transform'
import { Intent } from '../intent'

class Package {
  public createsContentType: boolean = false
  public transformsContent: boolean = false
  public updatesContentType: boolean = false
  public deletesContentType: boolean = false
  public modifiesFields: boolean = false

  private intents: Intent[]
  private contentTypeId: string

  constructor (intents: Intent[] = []) {
    this.contentTypeId = intents[0].getContentTypeId()

    this.createsContentType = intents.some((intent) => intent.isContentTypeCreate())

    this.transformsContent = intents.some((intent) => intent.isContentTransform())

    this.deletesContentType = intents.some((intent) => intent.isContentTypeDelete())

    this.updatesContentType = intents.some((intent) => intent.isContentTypeUpdate())

    this.modifiesFields = intents.some((intent) => {
      return intent.isFieldCreate() ||
        intent.isFieldUpdate() ||
        intent.isFieldDelete() ||
        intent.isFieldRename() ||
        intent.isFieldMove()
    })

    const intentsWithPkgInfo = intents.map((intent) => {
      intent.setPackage(this)
      return intent
    })
    this.intents = intentsWithPkgInfo
  }

  getIntents (): Intent[] {
    return this.intents
  }

  getContentTypeId (): string {
    return this.contentTypeId
  }

  toRawSteps (): RawStep[] {
    return this.intents.map((intent) => intent.toRaw())
  }

  async applyTo (api: OfflineAPI) {
    await api.startRecordingRequests('foo')
    const intents = this.getIntents()
    if (this.transformsContent) {
      for (const intent of intents) {
        for (const action of intent.toActions()) {
          if (action instanceof EntryTransformAction) {
            await action.applyTo(api)
            continue
          }
        }
      }
    } else {
      for (const intent of intents) {
        for (const action of intent.toActions()) {
          if (action instanceof APIAction) {
            await action.applyTo(api)
            continue
          }
          if (action instanceof EntityAction) {
            const entityType = action.getEntityType()
            const entityId = action.getEntityId()

            if (entityType === 'CONTENT_TYPE') {
              const ct = await api.getContentType(entityId)
              await action.applyTo(ct)
            }
            continue
          }
        }
      }

      if (!this.deletesContentType) {
        // Auto insert publish and save
        const save = new ContentTypeSaveAction(this.getContentTypeId())
        const publish = new ContentTypePublishAction(this.getContentTypeId())

        await save.applyTo(api)
        await publish.applyTo(api)
      }
    }
    await api.stopRecordingRequests()
  }
}

export {
  Package as default,
  Package
}
