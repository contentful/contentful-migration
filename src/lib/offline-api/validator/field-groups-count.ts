import { ApiHook } from '..'
import errorMessages from './errors'
import { EditorInterfacePayloadValidator } from './editor-interface'
import { EditorInterfaces } from '../../entities/content-type'
import { collectFieldGroupIds } from '../../utils/editor-layout'
import { PayloadValidationError } from '../../interfaces/errors'

export default class FieldGroupsCountValidator implements EditorInterfacePayloadValidator {
  public hooks = [ApiHook.SaveEditorInterface]

  public validate (editorInterface: EditorInterfaces): PayloadValidationError[] {
    const errors: PayloadValidationError[] = []
    const editorLayout = editorInterface.getEditorLayout()

    const groupsCount = collectFieldGroupIds(editorLayout).length
    const tabsCount = editorLayout.length

    if (groupsCount < 2) {
      errors.push({
        type: 'InvalidPayload',
        message: errorMessages.editorLayout.TOO_FEW_FIELD_GROUPS()
      })
    }

    if (groupsCount - tabsCount > 15) {
      errors.push({
        type: 'InvalidPayload',
        message: errorMessages.editorLayout.TOO_MANY_FIELD_SETS()
      })
    }

    return errors
  }
}
