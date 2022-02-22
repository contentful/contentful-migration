import { ApiHook } from '../../index'
import { ContentTypePayloadValidator } from '../content-type'
import { PayloadValidationError } from '../../../interfaces/errors'
import { validateContentType, validateFields } from './schema-validation'

export default class SchemaValidator implements ContentTypePayloadValidator {
  public hooks = [ApiHook.SaveContentType]

  public validate({ contentType, locales }): PayloadValidationError[] {
    const ctErrors = validateContentType(contentType)
    const fieldErrors = validateFields(contentType, locales)

    return ctErrors.concat(fieldErrors)
  }
}
