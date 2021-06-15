import { ApiHook } from '../../index'
import { ContentTypePayloadValidator } from '../content-type'
import { PayloadValidationError } from '../../../interfaces/errors'
import { ContentType } from '../../../entities/content-type'
import { validateContentType, validateFields } from './schema-validation'

export default class SchemaValidator implements ContentTypePayloadValidator {
  public hooks = [ApiHook.SaveContentType]

  public validate (contentType: ContentType): PayloadValidationError[] {
    const ctErrors = validateContentType(contentType)
    const fieldErrors = validateFields(contentType)

    return ctErrors.concat(fieldErrors)
  }
}
