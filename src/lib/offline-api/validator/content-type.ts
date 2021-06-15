import { ApiHook } from '../'
import { ContentType } from '../../entities/content-type'
import { PayloadValidationError, InvalidActionError } from '../../interfaces/errors'

export type ContentTypePayloadValidatorOptions = {
  contentType: ContentType
  locales: string[]
  savedContentType?: ContentType
  publishedContentType?: ContentType
}

export interface ContentTypePayloadValidator {
  hooks: ApiHook[]
  validate (options: ContentTypePayloadValidatorOptions): (InvalidActionError | PayloadValidationError)[]
}
