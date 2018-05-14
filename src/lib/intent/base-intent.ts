import { Intent as IntentInterface } from '../interfaces/intent'
import { RawStep, RawStepMeta, RawStepPayload } from '../interfaces/raw-step'
import { APIAction, EntityAction } from '../action/action'
import { PlanMessage } from '../interfaces/plan-message'

export default abstract class Intent implements IntentInterface {
  protected type: string
  protected meta: RawStepMeta
  protected payload: RawStepPayload

  constructor (rawStep: RawStep) {
    this.type = rawStep.type
    this.meta = rawStep.meta
    this.payload = rawStep.payload
  }

  getContentTypeId () {
    return this.payload.contentTypeId
  }

  getRelatedContentTypeIds () {
    return [this.getContentTypeId()]
  }

  getFieldId () {
    return this.payload.fieldId
  }

  isContentTypeUpdate () {
    return false
  }

  isContentTypeDelete () {
    return false
  }

  isContentTypeCreate () {
    return false
  }

  isFieldCreate () {
    return false
  }

  isFieldUpdate () {
    return false
  }

  isFieldDelete () {
    return false
  }

  isFieldRename () {
    return false
  }

  isFieldMove () {
    return false
  }

  isContentTransform () {
    return false
  }

  isEntryDerive () {
    return false
  }

  isEditorInterfaceUpdate () {
    return false
  }

  isAboutContentType () {
    return (
      this.isContentTypeUpdate() ||
      this.isContentTypeCreate() ||
      this.isContentTypeDelete()
    )
  }

  isAboutField () {
    return (
      this.isFieldCreate() ||
      this.isFieldUpdate() ||
      this.isFieldMove() ||
      this.isFieldRename() ||
      this.isFieldDelete()
    )
  }

  isComposedIntent () {
    return false
  }

  groupsWith (other: Intent): boolean {
    // A content transform does not end the group,
    // but still could share a content type ID
    if (other.isContentTransform()) {
      return false
    }

    if (other.getContentTypeId() === this.getContentTypeId()) {
      return true
    }
    return false
  }

  abstract endsGroup (): boolean

  shouldSave (): boolean {
    return true
  }

  shouldPublish (): boolean {
    if (!this.shouldSave()) {
      throw new Error('Cannot publish when shouldSave has falsy value')
    }

    return true
  }

  toRaw (): RawStep {
    return {
      type: this.type,
      meta: this.meta,
      payload: this.payload
    }
  }

  getRawType (): string {
    return this.type
  }

  abstract toActions (): (APIAction | EntityAction)[]
  abstract toPlanMessage (): PlanMessage
}
