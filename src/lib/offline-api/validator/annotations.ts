import { ApiHook } from '..'
import { ContentTypePayloadValidator, ContentTypePayloadValidatorOptions } from './content-type'
import { PayloadValidationError } from '../../interfaces/errors'

import { validateAnnotationAssignment } from '../../interfaces/annotation'
import APIContentType from '../../interfaces/content-type'

type ContentTypeFieldAssignments = NonNullable<
  NonNullable<
    NonNullable<NonNullable<APIContentType['metadata']>['annotations']>['ContentTypeField']
  >
>

function validateFieldAssignments(
  contentTypeFieldAssignments: ContentTypeFieldAssignments,
  contentType: APIContentType
): PayloadValidationError[] {
  const errors: PayloadValidationError[] = []
  const assignments = Object.entries(contentTypeFieldAssignments)
  for (const [fieldId, fieldAssignments] of assignments) {
    // check if field exists first
    const fieldDefinition = contentType.fields.find((field) => field.id === fieldId)

    if (!fieldDefinition) {
      // TODO: collect the errors
      errors.push({
        type: 'InvalidPayload',
        message: `Invalid annotation assignment, Field "${fieldId}" not found`
      })
      continue
    }

    for (const [, assignmentPayload] of fieldAssignments.entries()) {
      const {
        sys: { id: annotationId }
      } = assignmentPayload

      const assignment = {
        annotationId,
        target: {
          type: 'ContentTypeField',
          data: fieldDefinition
        }
      }
      const error = validateAnnotationAssignment(assignment)
      if (error) {
        errors.push(error)
      }
    }
  }

  return errors
}
type ContentTypeAssignments = NonNullable<
  NonNullable<NonNullable<APIContentType['metadata']>['annotations']>['ContentType']
>

function validateContentTypeAssignment(
  contentTypeAssignments: ContentTypeAssignments,
  contentType: APIContentType
): PayloadValidationError[] {
  const errors: PayloadValidationError[] = []
  for (const assignmentPayload of contentTypeAssignments.values()) {
    const {
      sys: { id: annotationId }
    } = assignmentPayload

    const assignment = {
      annotationId,
      target: {
        type: 'ContentType',
        data: contentType
      }
    }
    const error = validateAnnotationAssignment(assignment)
    if (error) {
      errors.push(error)
    }
  }

  return errors
}

export function validateAnnotations(contentType: APIContentType): PayloadValidationError[] {
  if (!contentType?.metadata?.annotations) {
    return
  }

  const {
    ContentType: contentTypeAssignments = [],
    ContentTypeField: contentTypeFieldAssignments = {}
  } = contentType.metadata.annotations
  return [
    ...validateContentTypeAssignment(contentTypeAssignments, contentType),
    ...validateFieldAssignments(contentTypeFieldAssignments, contentType)
  ].filter((e) => Boolean(e))
}

export default class AnnotationsValidator implements ContentTypePayloadValidator {
  public hooks = [ApiHook.SaveContentType]

  public validate({ contentType }: ContentTypePayloadValidatorOptions): PayloadValidationError[] {
    return validateAnnotations(contentType.toAPI())
  }
}
