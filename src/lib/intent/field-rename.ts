import Intent from './base-intent'
import { FieldRenameAction } from '../action/field-rename'
import { EntryFieldRenameAction } from '../action/entry-field-rename'
import { CopyEditorInterfaceAction } from '../action/editorinterface-copy'
import { SaveEditorInterfaceAction } from '../action/editorinterface-save'
import { ResetEditorInterfaceAction } from '../action/editorinterface-reset'
import { ContentTypeSaveAction } from '../action/content-type-save'
import { ContentTypePublishAction } from '../action/content-type-publish'
import { FieldUpdateAction } from '../action/field-update'
import { PlanMessage } from '../interfaces/plan-message'
import chalk from 'chalk'
import { EditorLayoutRenameFieldAction } from '../action/editor-layout/editor-layout-rename-field'

export default class FieldRenameIntent extends Intent {
  isFieldRename() {
    return true
  }

  groupsWith(): boolean {
    return false
  }

  endsGroup(): boolean {
    return true
  }

  getNewId(): string {
    return this.payload.props.newId
  }

  shouldSave(): boolean {
    return false
  }

  shouldPublish(): boolean {
    return false
  }

  toActions() {
    const ctId = this.getContentTypeId()

    return [
      new FieldUpdateAction(ctId, this.getFieldId(), { newId: this.getNewId() }),

      new ContentTypeSaveAction(ctId),
      new ContentTypePublishAction(ctId),

      new FieldRenameAction(ctId, this.getFieldId(), { newId: this.getNewId() }),

      new CopyEditorInterfaceAction(ctId, this.getFieldId(), this.getNewId()),

      new ResetEditorInterfaceAction(ctId, this.getFieldId()),

      new EditorLayoutRenameFieldAction(ctId, this.getFieldId(), this.getNewId()),

      new SaveEditorInterfaceAction(ctId),

      new EntryFieldRenameAction(ctId, this.payload.fieldId, { newId: this.getNewId() })
    ]
  }

  toPlanMessage(): PlanMessage {
    return {
      heading: chalk`Update Content Type {bold.yellow ${this.getContentTypeId()}}`,
      sections: [
        {
          heading: chalk`Rename field {yellow ${this.getFieldId()}} to {yellow ${this.getNewId()}}`,
          details: []
        }
      ],
      details: []
    }
  }
}
