import Intent from '../interfaces/intent'
import { RawStep } from '../interfaces/raw-step'
import { PlanMessage, Section } from '../interfaces/plan-message'
import { difference, groupBy, flatten, values, entries } from 'lodash'

function mergeSections (sections: Section[]): Section {
  const sameSections = groupBy(sections, 'heading')
  const mergedSections: Section[] = []

  for (const [heading, sections] of entries(sameSections)) {
    const details: string[] = flatten(sections.map((section: Section) => section.details || []))
    const section: Section = { heading, details }

    mergedSections.push(section)
  }

  if (mergedSections.length > 1) {
    throw new Error('mergeSections expect to receive sections from same type (i.e. same heading)')
  }

  return mergedSections[0]
}

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
  isEditorInterfaceUpdate (): boolean {
    return false
  }
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

  isEntryDerive (): boolean {
    return false
  }

  getContentTypeId (): string {
    return this.contentTypeId
  }

  getRelatedContentTypeIds (): string[] {
    return [this.getContentTypeId()]
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
        heading: combinedHeading,
        sections: [],
        details: []
      }
    }

    const mainHeading = firstIntent.toPlanMessage().heading

    const contentTypeUpdates = this.intents.filter((intent) => intent.isContentTypeUpdate())

    const fieldCreates = this.intents.filter((intent) => intent.isFieldCreate())

    const createdFieldIds = fieldCreates.map((createIntent) => createIntent.getFieldId())
    const fieldUpdates = this.intents.filter((intent) => intent.isFieldUpdate())
    const fieldMoves = this.intents.filter((intent) => intent.isFieldMove())

    const createdFieldUpdates = fieldUpdates.filter((updateIntent) => createdFieldIds.includes(updateIntent.getFieldId()))
    const onlyFieldUpdates = difference(fieldUpdates, createdFieldUpdates)

    const onlyFieldUpdatesByField = groupBy(onlyFieldUpdates, (intent) => intent.getFieldId())
    const createdFieldUpdatesByField = groupBy(createdFieldUpdates, (intent) => intent.getFieldId())

    const topLevelDetails = flatten(contentTypeUpdates.map((updateIntent) => updateIntent.toPlanMessage().details))

    let createSections = []

    for (const createIntent of fieldCreates) {
      const fieldId = createIntent.getFieldId()
      const [createSection] = createIntent.toPlanMessage().sections
      const heading = createSection.heading
      const updateIntents = createdFieldUpdatesByField[fieldId] || []
      const allFieldUpdateSections = flatten(updateIntents.map((fieldIntent) => fieldIntent.toPlanMessage().sections))
      const mergedSection = mergeSections(allFieldUpdateSections) || { details: [] }
      const nextCreateSection = {
        ...mergedSection,
        heading
      }

      createSections.push(nextCreateSection)
    }

    for (const updateIntents of values(onlyFieldUpdatesByField)) {
      const allSections: Section[] = flatten(updateIntents.map((intent) => intent.toPlanMessage().sections))
      const nextUpdateSection = mergeSections(allSections)

      createSections.push(nextUpdateSection)
    }

    for (const moveIntent of fieldMoves) {
      const planMessage = moveIntent.toPlanMessage()
      createSections = createSections.concat(planMessage.sections)
    }

    return {
      heading: mainHeading,
      details: topLevelDetails,
      sections: createSections
    }
  }
}
