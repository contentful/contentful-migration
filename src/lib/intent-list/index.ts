import { Intent as IntentInterface } from '../interfaces/intent'
import IntentValidator from '../interfaces/intent-validator'
import ErrorCollection from '../errors/error-collection'
import RawStep from '../interfaces/raw-step'
import ComposedIntent from '../intent/composed-intent'
import { OfflineAPI } from '../offline-api/index'
import { APIAction, EntityAction } from '../action/action'
import { EntryTransformAction } from '../action/entry-transform'
import { ContentTypeSaveAction } from '../action/content-type-save'
import { ContentTypePublishAction } from '../action/content-type-publish'

class IntentList {
  private intents: IntentInterface[]
  private validators: IntentValidator[] = []

  constructor (intents: IntentInterface[]) {
    this.intents = intents
  }

  addValidator (validator: IntentValidator) {
    this.validators.push(validator)
  }

  validate (): void {
    let errors = []

    for (const intent of this.getIntents()) {
      for (const validator of this.validators) {
        if (validator.appliesTo(intent)) {
          const intentErrors = validator.validate(intent)
          if (intentErrors.length) {
            errors = errors.concat(intentErrors)
          }
        }
      }
    }
    if (errors.length) {
      throw new ErrorCollection(errors)
    }
  }

  toRaw (): RawStep[] {
    return this.intents.map((intent) => intent.toRaw())
  }

  getIntents (): IntentInterface[] {
    return this.intents
  }

  compressed (): IntentList {
    let composedIntents: IntentInterface[] = []
    let composableIntents: IntentInterface[] = []

    for (const intent of this.intents) {
      const lastComposableIntent = composableIntents.length ? composableIntents[composableIntents.length - 1] : null
      if (lastComposableIntent === null || intent.groupsWith(lastComposableIntent)) {
        composableIntents.push(intent)
      } else {
        if (composableIntents.length === 1) {
          // No need to compose a single intent, just append
          composedIntents = composedIntents.concat(composableIntents)
        } else {
          // Compose multiple intents into single intent
          composedIntents.push(new ComposedIntent(composableIntents))
        }

        // Start new round of composable intents
        composableIntents = [intent]
      }

      // Sometimes the group needs to be closed after the current intent
      if (intent.endsGroup()) {
        if (composableIntents.length === 1) {
          // No need to compose a single intent, just append
          composedIntents = composedIntents.concat(composableIntents)
        } else {
          // Compose multiple intents into single intent
          composedIntents.push(new ComposedIntent(composableIntents))
        }

        composableIntents = []
      }
    }

    if (composableIntents.length === 1) {
      composedIntents = composedIntents.concat(composableIntents)
    }

    if (composableIntents.length > 1) {
      composedIntents.push(new ComposedIntent(composableIntents))
    }

    return new IntentList(composedIntents)
  }

  async applyTo (api: OfflineAPI) {
    const intents = this.getIntents()

    for (const intent of intents) {
      await api.startRecordingRequests('foo')

      for (const action of intent.toActions()) {
        if (action instanceof APIAction) {
          await action.applyTo(api)
          continue
        }

        if (action instanceof EntryTransformAction) {
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

      if (!intent.isContentTypeDelete()) {
        // Auto insert publish and save

        if (intent.shouldSave()) {
          const save = new ContentTypeSaveAction(intent.getContentTypeId())
          await save.applyTo(api)
        }

        if (intent.shouldPublish()) {
          const publish = new ContentTypePublishAction(intent.getContentTypeId())
          await publish.applyTo(api)
        }
      }

      await api.stopRecordingRequests()
    }
  }
}

export default IntentList
