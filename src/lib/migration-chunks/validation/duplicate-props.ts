import IntentList from '../../intent-list'
import ComposedIntent from '../../intent/composed-intent'
import ValidationError from '../../interfaces/errors'
import errorMessages from './errors'
import { Intent } from '../../interfaces/intent'

const isSameEntity = (step, otherStep) => {
  return (
    step.payload.contentTypeId === otherStep.payload.contentTypeId &&
    step.payload.fieldId === otherStep.payload.fieldId
  )
}

const getErrorMsgParams = (step) => {
  const type = step.type.split('/')[0]
  const params = {
    field: {
      type: 'field',
      id: step.payload.fieldId
    },
    contentType: {
      type: 'content type',
      id: step.payload.contentTypeId
    },
    tag: {
      type: 'tag',
      id: step.payload.tagId
    }
  }
  return params[type]
}

const getDuplicateProps = (step, chunk, stepIndex) => {
  return Object.keys(step.payload.props).reduce((duplicateProps, prop) => {
    const isDuplicate = chunk.slice(0, stepIndex).some((stepBefore) => {
      return stepBefore.payload.props &&
        isSameEntity(step, stepBefore) &&
        stepBefore.payload.props.hasOwnProperty(prop)
    })
    if (isDuplicate) {
      duplicateProps.push(prop)
    }
    return duplicateProps
  }, [])
}

const getErrorsForIntents = (intents: Intent[]) => {
  return intents.reduce((intentErrors, intent, stepIndex) => {
    const step = intent.toRaw()
    if (step.payload.props) {
      const duplicateProps = getDuplicateProps(step, intents, stepIndex)
      const errors = duplicateProps.map((duplicateProp) => {
        const { type, id } = getErrorMsgParams(step)
        return {
          type: 'InvalidAction',
          message: errorMessages.generic.DUPLICATE_PROP(duplicateProp, type, id),
          details: { intent }
        }
      })
      intentErrors = intentErrors.concat(errors)
    }
    return intentErrors
  }, [])
}

export default function (intentList: IntentList): ValidationError[] {
  const intents = intentList.compressed().getIntents()
  return intents.reduce((errors, intent) => {
    if (intent.isComposedIntent()) {
      return errors.concat(getErrorsForIntents((intent as ComposedIntent).getIntents()))
    }

    return errors
  }, [])
}
