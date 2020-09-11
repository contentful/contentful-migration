import { ApiHook } from '../'
import { Tag } from '../../entities/tag'
import { PayloadValidationError, InvalidActionError } from '../../interfaces/errors'
import { validateTag } from './schema/schema-validation'

interface TagPayloadValidator {
  hooks: ApiHook[]
  validate (tag: Tag, savedTag?: Tag): (InvalidActionError | PayloadValidationError)[]
}

export class TagSchemaValidator implements TagPayloadValidator {
  public hooks = [ApiHook.SaveTag]

  public validate (tag: Tag): PayloadValidationError[] {
    const tagErrors = validateTag(tag)
    return tagErrors
  }
}
