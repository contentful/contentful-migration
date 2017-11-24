import Intent from './base-intent'
import { EntryTransformAction } from '../action/entry-transform'
import { PlanMessage } from '../interfaces/plan-message'
import chalk from 'chalk'

export default class EntryTransformIntent extends Intent {
  isContentTransform () {
    return true
  }

  endsGroup (): boolean {
    return true
  }

  groupsWith (): boolean {
    return false
  }

  toActions () {
    return [
      new EntryTransformAction(
        this.getContentTypeId(),
        this.payload.transformation.from,
        this.payload.transformation.transformEntryForLocale,
        this.payload.transformation.shouldPublish
      )
    ]
  }

  toPlanMessage (): PlanMessage {
    return {
      heading: chalk`Transform entries for {bold.yellow ${this.getContentTypeId()}}`,
      details: [],
      sections: []
    }
  }

  shouldSave () {
    return false
  }

  shouldPublish () {
    return false
  }
}
