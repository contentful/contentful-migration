import { Intent as IntentInterface } from '../interfaces/intent'
import { RawStep, RawStepMeta, RawStepPayload } from '../interfaces/raw-step'

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

  endsGroup (): boolean {
    return false
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
}
