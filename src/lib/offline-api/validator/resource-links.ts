import { ApiHook } from '../'
import { ContentTypePayloadValidator } from './content-type'
import { InvalidActionError, PayloadValidationError } from '../../interfaces/errors'
import { isResourceLink, MAX_RESOURCE_LINKS } from '../../utils/resource-links'
import errorMessages from './errors'

export default class ResourceLinksValidator implements ContentTypePayloadValidator {
  public hooks = [ApiHook.SaveContentType]

  public validate({ contentType }): (InvalidActionError | PayloadValidationError)[] {
    const errors: (InvalidActionError | PayloadValidationError)[] = []

    const fields = contentType.fields.toRaw()
    const resourceLinkCount = fields.filter(isResourceLink).length

    if (resourceLinkCount > MAX_RESOURCE_LINKS) {
      errors.push({
        type: 'InvalidPayload',
        message: errorMessages.contentType.TOO_MANY_RESOURCE_LINK_FIELDS(contentType.id)
      })
    }

    for (const field of fields) {
      if (isResourceLink(field) && !field.allowedResources) {
        errors.push({
          type: 'InvalidPayload',
          message: errorMessages.field.REQUIRED_DEPENDENT_PROPERTY(
            'allowedResources',
            field.id,
            'type',
            'ResourceLink'
          )
        })
      }

      if (!isResourceLink(field) && field.allowedResources) {
        errors.push({
          type: 'InvalidPayload',
          message: errorMessages.field.FORBIDDEN_DEPENDENT_PROPERTY(
            'allowedResources',
            field.id,
            'type',
            'ResourceLink'
          )
        })
      }
    }

    return errors
  }
}
