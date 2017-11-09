import Intent from './base-intent'
import { FieldUpdateAction } from '../action/field-update'
import { ContentTypeSaveAction } from '../action/content-type-save'
import { ContentTypePublishAction } from '../action/content-type-publish'
import { EntryFieldPurgeAction } from '../action/entry-field-purge'
import { PlanMessage } from '../interfaces/plan-message'
import chalk from 'chalk'

export default class FieldDeleteIntent extends Intent {
  isFieldDelete () {
    return true
  }

  groupsWith (): boolean {
    return false
  }

  endsGroup (): boolean {
    return true
  }

  toActions () {
    return [
      new FieldUpdateAction(
        this.getContentTypeId(),
        this.payload.fieldId,
        { omitted: true }
      ),
      // Save and publish are wrapped around packages automatically
      // But in this case we need to insert some explicit ones
      new ContentTypeSaveAction(this.getContentTypeId()),
      new ContentTypePublishAction(this.getContentTypeId()),
      new FieldUpdateAction(
        this.getContentTypeId(),
        this.payload.fieldId,
        { deleted: true }
      ),
      new EntryFieldPurgeAction(
        this.getContentTypeId(),
        this.payload.fieldId
      )
    ]
  }

  toPlanMessage (): PlanMessage {
    return {
      heading: chalk`Update Content Type {bold.yellow ${this.getContentTypeId()}}`,
      sections: [{
        heading: chalk`Delete field {yellow ${this.getFieldId()}}`,
        details: []
      }],
      details: []
    }
  }
}
