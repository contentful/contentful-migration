import RawStep from '../interfaces/raw-step'
import OfflineAPI from '../offline-api/index'
import { APIAction, EntityAction } from '../action/action'
import { ContentTypeSaveAction } from '../action/content-type-save'
import { ContentTypePublishAction } from '../action/content-type-publish'
import { EntryTransformAction } from '../action/entry-transform'
import { Intent } from '../intent'

const applyTransformActions = async (api, intents) => {
  for (const intent of intents) {
    for (const action of intent.toActions()) {
      if (action instanceof EntryTransformAction) {
        await action.applyTo(api)
        continue
      }
    }
  }
}

interface ApplyModifiers {
  deletesContentType: boolean
  savesContentType: boolean,
  publishesContentType: boolean
}

const applyIntents = async (api, intents, ctId, modifiers: ApplyModifiers) => {
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

  if (!modifiers.deletesContentType) {
    // Auto insert publish and save

    if (modifiers.savesContentType) {
      const save = new ContentTypeSaveAction(ctId)
      await save.applyTo(api)
    }

    if (modifiers.publishesContentType) {
      const publish = new ContentTypePublishAction(ctId)
      await publish.applyTo(api)
    }
  }
}

class Package {
  public createsContentType: boolean = false
  public transformsContent: boolean = false
  public updatesContentType: boolean = false
  public deletesContentType: boolean = false
  public modifiesFields: boolean = false
  public savesContentType: boolean = true
  public publishesContentType: boolean = true
  private renamesField: boolean = false

  private intents: Intent[]
  private contentTypeId: string

  constructor (intents: Intent[] = []) {
    this.contentTypeId = intents[0].getContentTypeId()

    this.createsContentType = intents.some((intent) => intent.isContentTypeCreate())

    this.transformsContent = intents.some((intent) => intent.isContentTransform())

    this.deletesContentType = intents.some((intent) => intent.isContentTypeDelete())

    this.updatesContentType = intents.some((intent) => intent.isContentTypeUpdate())

    // TODO: better abstraction than package,
    // values inside intents cannot have different values
    // for those checks
    this.savesContentType = intents.every((intent) => intent.shouldSave())
    this.publishesContentType = intents.every((intent) => intent.shouldPublish())

    this.modifiesFields = intents.some((intent) => {
      return intent.isFieldCreate() ||
        intent.isFieldUpdate() ||
        intent.isFieldDelete() ||
        intent.isFieldRename() ||
        intent.isFieldMove()
    })

    this.renamesField = intents.some((intent) => {
      return intent.isFieldRename()
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
      await applyTransformActions(api, intents)
    } else {
      await applyIntents(api, intents, this.getContentTypeId(), {
        deletesContentType: this.deletesContentType,
        savesContentType: this.savesContentType,
        publishesContentType: this.publishesContentType
      })
    }
    await api.stopRecordingRequests()
  }
}

export {
  Package as default,
  Package
}
