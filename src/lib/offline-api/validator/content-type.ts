import { ApiHook } from '../'
import { ContentType } from '../../entities/content-type'
import { PayloadValidationError, InvalidActionError } from '../../interfaces/errors'

export interface ContentTypePayloadValidator {
  hooks: ApiHook[]
  validate (contentType: ContentType, savedContentType?: ContentType, publishedContentType?: ContentType): (InvalidActionError | PayloadValidationError)[]
}
