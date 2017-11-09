import Intent from '../interfaces/intent'
import { RawStep } from '../interfaces/raw-step'
import { PlanMessage } from '../interfaces/plan-message'
import { difference, groupBy, flatten } from 'lodash'

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

    const createdFieldIds = fieldCreates.map((createIntent) => createIntent.getFieldId())
    const fieldUpdates = this.intents.filter((intent) => intent.isFieldUpdate())
    const fieldMoves = this.intents.filter((intent) => intent.isFieldMove())
    const fieldRenames = this.intents.filter((intent) => intent.isFieldRename())

    const createdFieldUpdates = fieldUpdates.filter((updateIntent) => createdFieldIds.includes(updateIntent.getFieldId()))
    const onlyFieldUpdates = difference(fieldUpdates, createdFieldUpdates)

    const onlyFieldUpdatesByField = groupBy(onlyFieldUpdates, (intent) => intent.getFieldId())
    const createdFieldUpdatesByField = groupBy(createdFieldUpdates, (intent) => intent.getFieldId())

    const topLevelDetails = flatten(contentTypeUpdates.map((updateIntent) => updateIntent.toPlanMessage().details))

    const createSections = []

    for (const fieldId of createdFieldIds) {
      const createIntent = fieldCreates.find((createIntent) => createIntent.getFieldId() === fieldId)
      const heading = createIntent.toPlanMessage().sections[0].heading
      let details = []
      const updateIntents = createdFieldUpdatesByField[fieldId]
      for (const updateIntent of updateIntents) {
        const message = updateIntent.toPlanMessage()
        details = details.concat(message.details)
      }
      createSections.push({
        heading,
        details
      })
    }

    return {
      heading: mainHeading,
      details: topLevelDetails,
      sections: createSections
    }
  }
}
