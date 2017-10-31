import ValidationError from '../../interfaces/errors'
import * as errorMessages from './errors'
import { Package } from '../../package/index'

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

const getErrorsForPackage = (pkg: Package) => {
  const intents = pkg.getIntents()
  return intents.reduce((pkgErrors, intent, stepIndex) => {
    const step = intent.toRaw()
    if (step.payload.props) {
      const duplicateProps = getDuplicateProps(step, intents, stepIndex)
      const errors = duplicateProps.map((duplicateProp) => {
        const { type, id } = getErrorMsgParams(step)
        return {
          type: 'InvalidAction',
          message: errorMessages.DUPLICATE_PROP(duplicateProp, type, id),
          details: { intent }
        }
      })
      pkgErrors = pkgErrors.concat(errors)
    }
    return pkgErrors
  }, [])
}

export default function (packages: Package[]): ValidationError[] {
  return packages.reduce((errors, pkg) => {
    const pkgErrors = getErrorsForPackage(pkg)
    return errors.concat(pkgErrors)
  }, [])
}
