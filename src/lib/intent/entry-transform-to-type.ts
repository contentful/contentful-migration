import Intent from './base-intent'
import { EntryTransformToTypeAction } from '../action/entry-transform-to-type'
import { PlanMessage } from '../interfaces/plan-message'
import chalk from 'chalk'

export default class EntryTransformToTypeIntent extends Intent {
  getRelatedContentTypeIds () {
    return [
      this.payload.entryTransformationToType.sourceContentType
    ]
  }
  isEntryTransformToType () {
    return true
  }

  endsGroup (): boolean {
    return true
  }

  groupsWith (): boolean {
    return false
  }

  requiresAllTags () {
    return true
  }

  toActions () {
    return [
      new EntryTransformToTypeAction(
        this.payload.entryTransformationToType
      )
    ]
  }

  toPlanMessage (): PlanMessage {
    return {
      heading: chalk`Migrate entries from {bold.yellow ${this.getContentTypeId()}}`,
      details: [
        `from: ${this.payload.entryTransformationToType.sourceContentType}`,
        `to: ${this.payload.entryTransformationToType.targetContentType}`
      ],
      sections: []
    }
  }

  shouldSave () {
    return false
  }

  shouldPublish () {
    return false
  }

  requiresAllEntries () {
    return this.payload.entryTransformationToType.updateReferences
  }
}
