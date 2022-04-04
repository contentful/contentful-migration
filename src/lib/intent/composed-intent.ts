import Intent from '../interfaces/intent'
import { RawStep } from '../interfaces/raw-step'
import { PlanMessage, Section } from '../interfaces/plan-message'
import { difference, groupBy, flatten, values, entries } from 'lodash'

function mergeSections(sections: Section[]): Section {
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
  private tagId: string

  private intents: Intent[]

  constructor(intents: Intent[]) {
    // Intents share the same content type id
    this.contentTypeId = intents[0].getContentTypeId()
    this.tagId = intents[0].getTagId()
    this.intents = intents
  }

  getIntents(): Intent[] {
    return this.intents
  }

  // TODO: adjust interface so we don't have to implement all this
  getFieldId(): string {
    return null
  }
  getRawType(): string {
    return null
  }
  isEditorInterfaceUpdate(): boolean {
    return false
  }
  isContentTypeUpdate(): boolean {
    return false
  }
  isContentTypeDelete(): boolean {
    return false
  }
  isContentTypeCreate(): boolean {
    return false
  }
  isFieldCreate(): boolean {
    return false
  }
  isFieldUpdate(): boolean {
    return false
  }
  isFieldDelete(): boolean {
    return false
  }
  isFieldRename(): boolean {
    return false
  }
  isFieldMove(): boolean {
    return false
  }
  isAboutContentType(): boolean {
    return false
  }
  isAboutField(): boolean {
    return false
  }
  isAboutEditorLayout(): boolean {
    return false
  }
  isContentTransform(): boolean {
    return false
  }

  isEntryDerive(): boolean {
    return false
  }

  isEntryTransformToType(): boolean {
    return false
  }

  isGroupable(): boolean {
    return false
  }

  isEditorInterfaceIntent(): boolean {
    return this.intents.some((intent) => intent.isEditorInterfaceIntent())
  }

  isSidebarUpdate(): boolean {
    return true
  }

  getContentTypeId(): string {
    return this.contentTypeId
  }

  getRelatedContentTypeIds(): string[] {
    return [this.getContentTypeId()]
  }

  requiresAllEntries(): boolean {
    return false
  }

  requiresAllTags(): boolean {
    return this.intents.some((intent) => intent.requiresAllTags())
  }

  requiresContentType() {
    return false
  }

  groupsWith(): boolean {
    return false
  }

  endsGroup(): boolean {
    return false
  }

  toRaw(): RawStep {
    throw new Error('Not implemented')
  }

  shouldSave(): boolean {
    return this.intents.some((intent) => intent.shouldSave())
  }

  shouldPublish(): boolean {
    return this.intents.some((intent) => intent.shouldPublish())
  }

  isComposedIntent(): boolean {
    return true
  }

  isTagIntent(): boolean {
    // TODO Is this a viable option? How can we be sure that composed
    // intents are not a mix of ct intents and tag intents?
    return this.intents.some((intent) => intent.isTagIntent())
  }

  getTagId(): string {
    return this.tagId
  }

  isTagCreate(): boolean {
    return false
  }

  isTagUpdate(): boolean {
    return false
  }

  isTagDelete(): boolean {
    return false
  }

  isEntrySetTags(): boolean {
    return false
  }

  getInvalidMethod(): string {
    return null
  }

  getFieldGroupId(): string {
    return null
  }

  getNewFieldGroupId(): string {
    return null
  }

  getFieldGroupProps() {
    return null
  }

  isEditorLayoutCreate(): boolean {
    return false
  }

  isEditorLayoutDelete(): boolean {
    return false
  }

  isEditorLayoutUpdate(): boolean {
    return false
  }

  isEditorLayoutInvalidMethod(): boolean {
    return false
  }

  isFieldGroupCreate(): boolean {
    return false
  }

  isFieldGroupDelete(): boolean {
    return false
  }

  isFieldGroupUpdate(): boolean {
    return false
  }

  isFieldGroupIdChange(): boolean {
    return false
  }

  isFieldGroupControlChange(): boolean {
    return false
  }

  toActions() {
    return flatten(this.intents.map((intent) => intent.toActions()))
  }

  toPlanMessage(): PlanMessage {
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

    const contentTypeOrTagUpdates = this.intents.filter(
      (intent) => intent.isContentTypeUpdate() || intent.isTagUpdate()
    )

    const fieldCreates = this.intents.filter((intent) => intent.isFieldCreate())
    const editorInterfaceUpdates = this.intents.filter((intent) => intent.isEditorInterfaceUpdate())

    const createdFieldIds = fieldCreates.map((createIntent) => createIntent.getFieldId())
    const fieldUpdates = this.intents.filter((intent) => intent.isFieldUpdate())
    const fieldMoves = this.intents.filter((intent) => intent.isFieldMove())

    const createdFieldUpdates = fieldUpdates.filter((updateIntent) =>
      createdFieldIds.includes(updateIntent.getFieldId())
    )
    const onlyFieldUpdates = difference(fieldUpdates, createdFieldUpdates)

    const onlyFieldUpdatesByField = groupBy(onlyFieldUpdates, (intent) => intent.getFieldId())
    const createdFieldUpdatesByField = groupBy(createdFieldUpdates, (intent) => intent.getFieldId())

    const editorLayoutUpdates = this.intents.filter((intent) => intent.isEditorLayoutUpdate())

    const topLevelDetails = flatten(
      contentTypeOrTagUpdates.map((updateIntent) => updateIntent.toPlanMessage().details)
    )

    const sidebarUpdates = flatten(
      this.intents
        .filter((intent) => intent.isSidebarUpdate())
        .map((i) => i.toPlanMessage().sections)
    )

    let createSections = []

    for (const editorInterfaceIntent of editorInterfaceUpdates) {
      const updateSections = editorInterfaceIntent.toPlanMessage().sections
      const [updateSection] = updateSections
      const heading = updateSection.heading
      const mergedSection = mergeSections(updateSections) || { details: [] }
      const nextUpdateSection = {
        ...mergedSection,
        heading
      }
      createSections.push(nextUpdateSection)
    }

    for (const createIntent of fieldCreates) {
      const fieldId = createIntent.getFieldId()
      const [createSection] = createIntent.toPlanMessage().sections
      const heading = createSection.heading
      const updateIntents = createdFieldUpdatesByField[fieldId] || []
      const allFieldUpdateSections = flatten(
        updateIntents.map((fieldIntent) => fieldIntent.toPlanMessage().sections)
      )
      const mergedSection = mergeSections(allFieldUpdateSections) || { details: [] }
      const nextCreateSection = {
        ...mergedSection,
        heading
      }

      createSections.push(nextCreateSection)
    }

    for (const updateIntents of values(onlyFieldUpdatesByField)) {
      const allSections: Section[] = flatten(
        updateIntents.map((intent) => intent.toPlanMessage().sections)
      )
      const nextUpdateSection = mergeSections(allSections)

      createSections.push(nextUpdateSection)
    }

    for (const moveIntent of fieldMoves) {
      const planMessage = moveIntent.toPlanMessage()
      createSections = createSections.concat(planMessage.sections)
    }

    for (const updateIntent of editorLayoutUpdates) {
      const planMessage = updateIntent.toPlanMessage()
      createSections = createSections.concat(planMessage.sections)
    }

    createSections = [...createSections, ...sidebarUpdates]

    return {
      heading: mainHeading,
      details: topLevelDetails,
      sections: createSections
    }
  }
}
