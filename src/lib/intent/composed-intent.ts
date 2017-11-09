import Intent from '../interfaces/intent'
import { RawStep } from '../interfaces/raw-step'
import { flatten } from 'lodash'
import { PlanMessage } from '../interfaces/plan-message'

export default class ComposedIntent implements Intent {
  private contentTypeId: string
  private intents: Intent[]

  constructor (intents: Intent[]) {
    // Intents share the same content type id
    this.contentTypeId = intents[0].getContentTypeId()
    this.intents = intents
  }

  getIntents (): Intent[] {
    return this.intents
  }

  // TODO: adjust interface so we don't have to implement all this
  getFieldId (): string {
    return null
  }
  getRawType (): string {
    return null
  }
  isContentTypeUpdate (): boolean {
    return false
  }
  isContentTypeDelete (): boolean {
    return false
  }
  isContentTypeCreate (): boolean {
    return false
  }
  isFieldCreate (): boolean {
    return false
  }
  isFieldUpdate (): boolean {
    return false
  }
  isFieldDelete (): boolean {
    return false
  }
  isFieldRename (): boolean {
    return false
  }
  isFieldMove (): boolean {
    return false
  }
  isAboutContentType (): boolean {
    return false
  }
  isAboutField (): boolean {
    return false
  }
  isContentTransform (): boolean {
    return false
  }

  getContentTypeId (): string {
    return this.contentTypeId
  }

  groupsWith (): boolean {
    return false
  }

  endsGroup (): boolean {
    return false
  }

  toRaw (): RawStep {
    throw new Error('Not implemented')
  }

  shouldSave (): boolean {
    return true
  }

  shouldPublish (): boolean {
    return true
  }

  isComposedIntent (): boolean {
    return true
  }

  toActions () {
    return flatten(this.intents.map((intent) => intent.toActions()))
  }

  toPlanMessage (): PlanMessage {
    const [firstIntent] = this.intents

    // TODO: show more details about entry transforms
    if (firstIntent.isContentTransform()) {
      const singleHeading = firstIntent.toPlanMessage().heading
      const transformCount = this.intents.length

      const combinedHeading = `${singleHeading} (${transformCount}x)`

      return {
        heading: combinedHeading
      }
    }

    const mainHeading = firstIntent.toPlanMessage().heading

    const contentTypeUpdates = this.intents.filter((intent) => intent.isContentTypeUpdate())
    const fieldCreates = this.intents.filter((intent) => intent.isFieldCreate())
  }
}
