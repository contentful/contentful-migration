import Intent from './base-intent'
import { EntryDeriveAction } from '../action/entry-derive'
import { PlanMessage } from '../interfaces/plan-message'
import chalk from 'chalk'

export default class EntryDeriveIntent extends Intent {
  getRelatedContentTypeIds() {
    return [this.getContentTypeId(), this.payload.derivation.derivedContentType]
  }
  isEntryDerive() {
    return true
  }

  endsGroup(): boolean {
    return true
  }

  groupsWith(): boolean {
    return false
  }

  requiresAllTags() {
    return true
  }

  toActions() {
    return [new EntryDeriveAction(this.getContentTypeId(), this.payload.derivation)]
  }

  toPlanMessage(): PlanMessage {
    return {
      heading: chalk`Derive entries from {bold.yellow ${this.getContentTypeId()}}`,
      details: [
        `from: ${this.payload.derivation.from}`,
        `to: ${this.payload.derivation.derivedFields}`,
        `via: ${this.payload.derivation.toReferenceField}`
      ],
      sections: []
    }
  }

  shouldSave() {
    return false
  }

  shouldPublish() {
    return false
  }
}
