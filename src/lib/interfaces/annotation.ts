import _ from 'lodash'
import { PayloadValidationError } from './errors'

type AnnotationTarget = {
  type: string
  accept?: Record<string, any>[]
}

type AssignmentTarget = {
  type: string
  data: Record<string, any>
}

export type AnnotationAssignment = {
  annotationId: string
  target: AssignmentTarget
}

/**
 * This data structure does not include all the properties defined in CEP-0125
 * It only contains the operative information needed at this implementation stage.
 */
export type AnnotationData = {
  id: string
  targets: AnnotationTarget[]
}

export class Annotation {
  private annotationData: AnnotationData

  constructor(annotationData: AnnotationData) {
    this.annotationData = annotationData
  }

  static isValidId(id: string): id is AnnotationId {
    return Object.keys(availableAnnotations).includes(id)
  }

  /**
   * Verifies if given assignment complies with the annotation definition
   */
  validateAssignment(assignment: AnnotationAssignment): PayloadValidationError | undefined {
    const { targets } = this.annotationData

    const isValidTarget = targets.some((target) => {
      if (target.type !== assignment.target.type) {
        return false
      }
      return (
        !target.accept ||
        target.accept.some((requirements) => _.isMatch(assignment.target.data, requirements))
      )
    })

    if (!isValidTarget) {
      return {
        type: 'InvalidPayload',
        message: `Invalid annotation assignment for annotation "${this.annotationData.id}". Annotation target mismatch`
      }
    }
  }
}

export const availableAnnotations = {
  'Contentful:AggregateRoot': new Annotation({
    id: 'Contentful:AggregateRoot',
    targets: [
      {
        type: 'ContentType'
      }
    ]
  }),
  'Contentful:ManagedByEnvironmentTemplate': new Annotation({
    id: 'Contentful:ManagedByEnvironmentTemplate',
    targets: [
      {
        type: 'ContentType'
      }
    ]
  }),
  'Contentful:AggregateComponent': new Annotation({
    id: 'Contentful:AggregateComponent',
    targets: [
      {
        type: 'ContentTypeField',
        accept: [
          {
            type: 'Link',
            linkType: 'Entry'
          },
          {
            type: 'Array',
            items: {
              type: 'Link',
              linkType: 'Entry'
            }
          }
        ]
      }
    ]
  })
}

export type AnnotationId = keyof typeof availableAnnotations

export function validateAnnotationAssignment(
  assignment: AnnotationAssignment
): PayloadValidationError | undefined {
  const annotation =
    availableAnnotations[assignment.annotationId as keyof typeof availableAnnotations]
  if (!annotation) {
    return {
      type: 'InvalidPayload',
      message: `Invalid annotation assignment. Annotation "${assignment.annotationId}" not found`
    }
  }

  return annotation.validateAssignment(assignment)
}

export type AnnotationLink = {
  sys: {
    type: 'Link'
    linkType: 'Annotation'
    id: AnnotationId
  }
}
