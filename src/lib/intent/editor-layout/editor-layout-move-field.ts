import Intent from '../base-intent'
import { PlanMessage } from '../../interfaces/plan-message'
import chalk from 'chalk'
import { EditorLayoutMoveFieldGroupAction } from '../../action/editor-layout/editor-layout-move-field'
import { SaveEditorInterfaceAction } from '../../action/editorinterface-save'
import { EditorLayoutFieldMovementDirection } from '../../entities/content-type'

export default class EditorLayoutMoveFieldIntent extends Intent {
  isEditorInterfaceIntent () {
    return true
  }
  isEditorLayoutUpdate () {
    return true
  }
  isGroupable () {
    return true
  }
  groupsWith (other: Intent): boolean {
    return other.isGroupable()
      && other.isEditorLayoutUpdate()
      && this.isSameContentType(other)
  }
  endsGroup (): boolean {
    return false
  }
  shouldSave (): boolean {
    return false
  }
  shouldPublish (): boolean {
    return false
  }

  getPivotId () {
    return this.payload.movement.pivot
  }

  getDirection () {
    return this.payload.movement.direction as EditorLayoutFieldMovementDirection
  }

  toActions () {
    return [
      new EditorLayoutMoveFieldGroupAction(
        this.payload.contentTypeId,
        this.payload.fieldId,
        this.getDirection(),
        this.getPivotId()
      ),
      new SaveEditorInterfaceAction(this.payload.contentTypeId)
    ]
  }

  toPlanMessage (): PlanMessage {

    const direction = this.getDirection()
    const pivot = this.getPivotId()
    let humanizedMovement

    if (direction === 'toTheTopOfFieldGroup') {
      humanizedMovement = chalk`to the first position ${pivot ? chalk`of group {yellow ${pivot}}` : 'of its group'}`
    }

    if (direction === 'toTheBottomOfFieldGroup') {
      humanizedMovement = chalk`to the last position ${pivot ? chalk`of group {yellow ${pivot}}` : 'of its group'}`
    }

    if (direction === 'afterField') {
      humanizedMovement = chalk`after field {yellow ${pivot}}`
    }

    if (direction === 'beforeField') {
      humanizedMovement = chalk`before field {yellow ${pivot}}`
    }

    if (direction === 'afterFieldGroup') {
      humanizedMovement = chalk`after field group {yellow ${pivot}}`
    }

    if (direction === 'beforeFieldGroup') {
      humanizedMovement = chalk`before field group {yellow ${pivot}}`
    }

    return {
      heading: chalk`Update editor layout for content type {bold.yellow ${this.getContentTypeId()}}`,
      sections: [{
        heading: chalk`Move field {yellow ${this.payload.fieldId}} ${humanizedMovement}`,
        details: []
      }],
      details: []
    }
  }
}
