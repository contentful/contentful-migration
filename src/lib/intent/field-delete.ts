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
    const contentTypeId = this.getContentTypeId()
    const fieldId = this.getFieldId()

    return [
      new FieldUpdateAction(contentTypeId, fieldId, { omitted: true }),
      // Save and publish are wrapped around packages automatically
      // But in this case we need to insert some explicit ones
      new ContentTypeSaveAction(contentTypeId),
      new ContentTypePublishAction(contentTypeId),
      new FieldUpdateAction(contentTypeId, fieldId, { deleted: true }),
      new EntryFieldPurgeAction(contentTypeId, fieldId)
    ]
  }

  toPlanMessage (): PlanMessage {
    return {
      heading: chalk`Update Content Type {bold.yellow ${this.getContentTypeId()}}`,
      sections: [
        {
          heading: chalk`Delete field {yellow ${this.getFieldId()}}`,
          details: []
        }
      ],
      details: []
    }
  }
}
