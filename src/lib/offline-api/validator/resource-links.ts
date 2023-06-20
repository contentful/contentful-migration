import { ApiHook } from '../'
import { ContentTypePayloadValidator } from './content-type'
import { InvalidActionError, PayloadValidationError } from '../../interfaces/errors'
import {
  getEnabledResourceLinkNodes,
  isResourceLink,
  MAX_RESOURCE_LINKS
} from '../../utils/resource-links'
import errorMessages from './errors'

export default class ResourceLinksValidator implements ContentTypePayloadValidator {
  public hooks = [ApiHook.SaveContentType]

  public validate({ contentType }): (InvalidActionError | PayloadValidationError)[] {
    const errors: (InvalidActionError | PayloadValidationError)[] = []

    const fields = contentType.fields.toRaw()
    const resourceLinkCount = fields.filter(
      (field) => isResourceLink(field) || getEnabledResourceLinkNodes(field)?.length
    ).length

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

      const enabledResourceLinkNodes = getEnabledResourceLinkNodes(field)
      if (Array.isArray(enabledResourceLinkNodes) && enabledResourceLinkNodes.length > 0) {
        const nodesValidation = field.validations?.find(
          ({ nodes }) => nodes && typeof nodes === 'object'
        )

        if (!nodesValidation) {
          errors.push({
            type: 'InvalidPayload',
            message: errorMessages.field.REQUIRED_DEPENDENT_PROPERTY(
              'validations[].nodes',
              field.id,
              'type',
              'RichText'
            )
          })
        } else {
          for (const nodeType of enabledResourceLinkNodes) {
            if (!nodesValidation.nodes[nodeType]?.allowedResources) {
              errors.push({
                type: 'InvalidPayload',
                message: errorMessages.field.REQUIRED_DEPENDENT_PROPERTY(
                  `validations[].nodes.${nodeType}.allowedResources`,
                  field.id,
                  'validations[].enabledNodeTypes[]',
                  nodeType
                )
              })
            }
          }
        }
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
