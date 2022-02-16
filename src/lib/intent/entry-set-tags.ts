import Intent from './base-intent'
import { EntrySetTagsAction } from '../action/entry-set-tags'
import { PlanMessage } from '../interfaces/plan-message'
import chalk from 'chalk'

export default class EntrySetTagsIntent extends Intent {
  isEntrySetTags (): boolean {
    return true
  }

  endsGroup (): boolean {
    return true
  }

  groupsWith (): boolean {
    return false
  }

  requiresAllTags (): boolean {
    return true
  }

  toActions () {
    return [
      new EntrySetTagsAction(
        this.getContentTypeId(),
        this.payload.entryTransformationForTags.from,
        this.payload.entryTransformationForTags.setTagsForEntry
      )
    ]
  }

  toPlanMessage (): PlanMessage {
    return {
      heading: chalk`Updating tags on entries for {bold.yellow ${this.getContentTypeId()}}`,
      details: [`from: ${this.payload.entryTransformationForTags.from}`],
      sections: []
    }
  }

  shouldSave () {
    return true
  }

  shouldPublish () {
    return false
  }
}
