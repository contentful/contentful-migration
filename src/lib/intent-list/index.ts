import { Intent as IntentInterface } from '../interfaces/intent'
import IntentValidator from '../interfaces/intent-validator'
import RawStep from '../interfaces/raw-step'
import ComposedIntent from '../intent/composed-intent'
import { OfflineAPI } from '../offline-api/index'
import { APIAction, EntityAction, EntityType } from '../action/action'
import { ContentTypeSaveAction } from '../action/content-type-save'
import { ContentTypePublishAction } from '../action/content-type-publish'
import { TagSaveAction } from '../action/tag-save'

import ValidationError from '../interfaces/errors'

class IntentList {
  private intents: IntentInterface[]
  private validators: IntentValidator[] = []

  constructor (intents: IntentInterface[]) {
    this.intents = intents
  }

  addValidator (validator: IntentValidator) {
    this.validators.push(validator)
  }

  validate (): ValidationError[] {
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
    return errors
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
      // TODO give this a real name
      await api.startRecordingRequests(intent)

      for (const action of intent.toActions()) {

        if (action instanceof APIAction) {
          await action.applyTo(api)
          continue
        }
        if (action instanceof EntityAction) {
          const entityType = action.getEntityType()
          const entityId = action.getEntityId()

          if (entityType === EntityType.ContentType) {
            const ct = await api.getContentType(entityId)
            await action.applyTo(ct)
          }
          if (entityType === EntityType.EditorInterface) {
            try {
              const editorInterfaces = await api.getEditorInterfaces(entityId)
              await action.applyTo(editorInterfaces)
            } catch {
              // TODO: maybe a better handling
            }
          }
          if (entityType === EntityType.Tag) {
            const tag = await api.getTag(entityId)
            await action.applyTo(tag)
          }
          continue
        }
      }

      // Auto insert publish and save

      if (intent.shouldSave()) {
        let save: any
        if (intent.isTagIntent()) {
          save = new TagSaveAction(intent.getTagId())
        } else {
          save = new ContentTypeSaveAction(intent.getContentTypeId())
        }
        await save.applyTo(api)
      }

      if (intent.shouldPublish()) {
        const publish = new ContentTypePublishAction(intent.getContentTypeId())
        await publish.applyTo(api)
      }

      await api.stopRecordingRequests()
    }
  }
}

export default IntentList
