import * as Joi from 'joi'
import * as _ from 'lodash'
import { reach } from 'hoek'
import * as kindOf from 'kind-of'
import fieldValidations from './field-validations'
import errorMessages from './errors'
import { PayloadValidationError } from '../../interfaces/errors'

interface SimplifiedValidationError {
  message: string
  path: string
  type: string
  context?: {
    isRequiredDependency?: boolean
    isForbiddenDependency?: boolean
    dependsOn?: {
      key: string,
      value: any
    }
    dupeValue?: any
    key?: any
    keys?: any[],
    valids?: any[]
  }
}

const enforceDependency = function ({ valid, when, is }) {
  return valid.when(when, {
    is: is, then: Joi.any().required(), otherwise: Joi.any().forbidden()
  }).error((errors) => {
    return errors.map((error) => {
      const path = error.path
      const splitPath = path.split('.')
      // top level would be 0.foo
      // anything nested would be 0.foo.bar
      let subPath = [when]
      if (splitPath.length >= 3) {
        subPath = splitPath.slice(1, splitPath.length - 1).concat(subPath)
      }
      const keyPath = subPath.join('.')

      if (error.type === 'any.required') {
        error.type = 'any.required'
        Object.assign(error.context, {
          isRequiredDependency: true,
          dependsOn: {
            key: keyPath,
            value: is
          }
        })
      }

      if (error.type === 'any.unknown' && error.flags.presence === 'forbidden') {
        Object.assign(error.context, {
          isForbiddenDependency: true,
          dependsOn: {
            key: keyPath,
            value: is
          }
        })
      }

      return error
    })
  })
}

const itemsValid = Joi.object().keys({
  type: Joi.string().valid('Symbol', 'Link').required(),
  linkType: enforceDependency({
    valid: Joi.string().valid('Asset', 'Entry'),
    when: 'type',
    is: 'Link'
  }),
  validations: Joi.array().unique().items(fieldValidations)
})

const fieldSchema = Joi.object().keys({
  id: Joi.string().required(),
  newId: Joi.string()
    .invalid(Joi.ref('id'))
    .max(64)
    // the empty case will be caught by joi by default, we don't want duplicate errors
    .regex(/^$|^[a-zA-Z][a-zA-Z0-9_]*$/),
  name: Joi.string().required(),
  type: Joi.string().valid(
    'Symbol',
    'Text',
    'Integer',
    'Number',
    'Date',
    'Boolean',
    'Object',
    'Link',
    'Array',
    'Location'
  ).required(),
  linkType: enforceDependency({
    valid: Joi.string().valid('Asset', 'Entry'),
    when: 'type',
    is: 'Link'
  }),
  items: enforceDependency({
    valid: itemsValid,
    when: 'type',
    is: 'Array'
  }),
  omitted: Joi.boolean(),
  deleted: Joi.boolean(),
  localized: Joi.boolean(),
  required: Joi.boolean(),
  validations: Joi.array().unique().items(fieldValidations),
  disabled: Joi.boolean()
})

const fieldsSchema = Joi.array().items(fieldSchema)

const MAX_FIELDS = 50
const contentTypeSchema = Joi.object().keys({
  name: Joi.string().required(),
  description: Joi.string(),
  displayField: Joi.string(),
  fields: Joi.array().max(MAX_FIELDS).required()
})

const validateContentType = function (payload): PayloadValidationError[] {
  const contentTypeId = payload.meta.contentTypeId

  const { error } = Joi.validate(payload.payload, contentTypeSchema, {
    abortEarly: false
  })

  if (!error) {
    return []
  }

  return error.details.map(({ path, type }): PayloadValidationError => {
    if (type === 'any.required') {
      return {
        type: 'InvalidPayload',
        message: errorMessages.contentType.REQUIRED_PROPERTY(path)
      }
    }
    if (type === 'array.max' && path === 'fields') {
      return {
        type: 'InvalidPayload',
        message: errorMessages.contentType.TOO_MANY_FIELDS(contentTypeId, MAX_FIELDS)
      }
    }
  })
}

const unknownCombinationError = function ({ path, keys }): SimplifiedValidationError {
  const type = 'object.unknownCombination'
  const message = `"${keys.join()}" is not allowed`
  const context = { keys }

  return { message, path, type, context }
}

// Receives Array<ValidationError> with this structure:
// [{
//   message: '"foo" is not allowed',
//   path: '0.validations.2.foo',
//   type: 'object.allowUnknown',
//   context: { child: 'foo', key: 'foo' }
// }]
const combineErrors = function (fieldValidationsErrors: SimplifiedValidationError[]): SimplifiedValidationError[] {
  const byItemPath: _.Dictionary<SimplifiedValidationError[]> = _.groupBy(fieldValidationsErrors, ({ path }) => {
    return path.split('.').slice(0, -1).join('.')
  })

  const pathErrorTuples: [string, SimplifiedValidationError[]][] = _.entries(byItemPath)

  const uniqPropErrorsByPath: [string, SimplifiedValidationError[]][] = _.map(pathErrorTuples, ([path, itemErrors]): [string, SimplifiedValidationError[]] => {
    const uniqErrors: SimplifiedValidationError[] = _.uniqBy(itemErrors, 'context.key')
    return [path, uniqErrors]
  })

  return uniqPropErrorsByPath.map(([path, errors]) => {
    const keys = errors.map((error) => reach(error, 'context.key'))

    // Invalid property
    if (keys.length === 1) {
      const [errorSample] = errors
      return errorSample
    }

    // Invalid combined properties
    return unknownCombinationError({ path, keys })
  })
}

// Joi might return an `object.allowUnknown` error for each
// non-matched field validation in `Joi.alternatives.try()`.
// They are noise, execept when all error types are the same.
const cleanNoiseFromJoiErrors = function (error: Joi.ValidationError): SimplifiedValidationError[] {
  const [normalErrors, fieldValidationsErrors] = _.partition(error.details, (detail) => {
    const [, fieldProp] = detail.path.split('.')
    return fieldProp !== 'validations'
  })

  if (!fieldValidationsErrors.length) {
    return normalErrors
  }

  const isUnknownValidationsProp = fieldValidationsErrors.every(({ type }) => type === 'object.allowUnknown')

  if (isUnknownValidationsProp) {
    const combinedErrors = combineErrors(fieldValidationsErrors)

    return [...normalErrors, ...combinedErrors]
  }

  const remainingFieldValidationsErrors = fieldValidationsErrors.filter(({ type }) => type !== 'object.allowUnknown')

  return [...normalErrors, ...remainingFieldValidationsErrors]
}

const validateFields = function (payload): PayloadValidationError[] {
  const fields = payload.payload.fields
  const { error } = Joi.validate(fields, fieldsSchema, {
    abortEarly: false
  })

  if (!error) {
    return []
  }

  return cleanNoiseFromJoiErrors(error).map((details: SimplifiedValidationError): PayloadValidationError => {
    const { path, type, context } = details

    // `path` looks like `0.field`
    // look up the field
    const [index, ...fieldNames] = path.split('.')
    const prop = fieldNames.join('.')
    const field = fields[index]

    if (type === 'any.required') {
      if (context.isRequiredDependency) {
        const dependentProp = context.dependsOn.key
        const dependentValue = context.dependsOn.value

        return {
          type: 'InvalidPayload',
          message: errorMessages.field.REQUIRED_DEPENDENT_PROPERTY(prop, field.id, dependentProp, dependentValue)
        }
      }

      return {
        type: 'InvalidPayload',
        message: errorMessages.field.REQUIRED_PROPERTY(prop, field.id)
      }
    }

    if (type === 'any.unknown') {
      if (context.isForbiddenDependency) {
        const dependentProp = context.dependsOn.key
        const dependentValue = context.dependsOn.value

        return {
          type: 'InvalidPayload',
          message: errorMessages.field.FORBIDDEN_DEPENDENT_PROPERTY(prop, field.id, dependentProp, dependentValue)
        }
      }

      return {
        type: 'InvalidPayload',
        message: errorMessages.field.FORBIDDEN_PROPERTY(prop, field.id)
      }
    }

    if (type === 'any.allowOnly') {
      return {
        type: 'InvalidPayload',
        message: errorMessages.field.PROPERTY_MUST_BE_ONE_OF(prop, field.id, context.valids)
      }
    }

    if (type === 'any.invalid' && path.includes('newId')) {
      return {
        type: 'InvalidPayload',
        message: errorMessages.field.ID_MUST_BE_DIFFERENT(field.id)
      }
    }

    const isIdSchemaError = (type) => {
      return ['string.max', 'any.empty', 'string.regex.base'].includes(type)
    }

    if (path.includes('newId') && isIdSchemaError(type)) {
      return {
        type: 'InvalidPayload',
        message: errorMessages.field.ID_MUST_MATCH_SCHEMA(field.id, field.newId)
      }
    }

    // Field `validations` errors
    if (prop.startsWith('validations')) {
      if (type === 'array.unique') {
        return {
          type: 'InvalidPayload',
          message: errorMessages.field.validations.DUPLICATED_VALIDATION(context.dupeValue)
        }
      }

      if (type === 'object.allowUnknown') {
        return {
          type: 'InvalidPayload',
          message: errorMessages.field.validations.INVALID_VALIDATION_PROPERTY(context.key)
        }
      }

      if (type === 'object.unknownCombination') {
        return {
          type: 'InvalidPayload',
          message: errorMessages.field.validations.INVALID_VALIDATION_PROPERTY_COMBINATION(context.keys)
        }
      }

      if (type.endsWith('.base')) {
        const [expectedType] = type.split('.base')
        const actualType = kindOf(reach(field, prop))

        return {
          type: 'InvalidPayload',
          message: errorMessages.field.validations.INVALID_VALIDATION_PARAMETER(context.key, expectedType, actualType)
        }
      }
    }
  })
}

export {
  validateContentType,
  validateFields
}
