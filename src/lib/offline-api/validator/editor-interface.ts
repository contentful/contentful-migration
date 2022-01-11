import { ApiHook } from '..'
import { EditorInterfaces } from '../../entities/content-type'
import {
  PayloadValidationError,
  InvalidActionError
} from '../../interfaces/errors'
import { validateEditorInterface } from './schema/schema-validation'

interface EditorInterfacePayloadValidator {
  hooks: ApiHook[]
  validate (editorInterface: EditorInterfaces): (InvalidActionError | PayloadValidationError)[]
}

export class EditorInterfaceSchemaValidator
  implements EditorInterfacePayloadValidator {
  public hooks = [ApiHook.SaveEditorInterface]

  public validate (editorInterface: EditorInterfaces): PayloadValidationError[] {
    const editorInterfaceErrors = validateEditorInterface(editorInterface)
    return editorInterfaceErrors
  }
}
