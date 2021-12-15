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

  isSameContentType (other: Intent): boolean {
    return this.getContentTypeId() === other.getContentTypeId()
  }

  getRelatedContentTypeIds () {
    return [this.getContentTypeId()]
  }

  getFieldId () {
    return this.payload.fieldId
  }

  requiresAllEntries () {
    return false
  }

  requiresAllTags () {
    return false
  }

  requiresContentType () {
    return false
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

  isEntryTransformToType () {
    return false
  }

  isEditorInterfaceUpdate () {
    return false
  }

  isSidebarUpdate () {
    return false
  }

  isGroupable () {
    return false
  }

  isEditorInterfaceIntent () {
    return false
  }

  isEditorLayoutUpdate () {
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

  getTagId (): string {
    return ''
  }

  isTagCreate (): boolean {
    return false
  }

  isTagUpdate (): boolean {
    return false
  }

  isTagDelete (): boolean {
    return false
  }

  isTagIntent (): boolean {
    return false
  }

  isEntrySetTags (): boolean {
    return false
  }

  abstract toActions (): (APIAction | EntityAction)[]
  abstract toPlanMessage (): PlanMessage
}
