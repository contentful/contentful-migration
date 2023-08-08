import Intent from '../base-intent'
import { PlanMessage } from '../../interfaces/plan-message'

export default class EditorLayoutInvalidMethodIntent extends Intent {
  isEditorLayoutUpdate (): boolean {
    return true
  }
  isEditorLayoutInvalidMethod (): boolean {
    return true
  }
  groupsWith (): boolean {
    return false
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
  toActions () {
    return []
  }
  toPlanMessage (): PlanMessage {
    return {
      heading: '',
      details: [],
      sections: []
    }
  }
}
