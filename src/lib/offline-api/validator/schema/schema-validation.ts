import * as Joi from 'joi'
import * as _ from 'lodash'
import { reach } from '@hapi/hoek'
import kindOf from 'kind-of'
import errorMessages from '../errors'
import { PayloadValidationError } from '../../../interfaces/errors'
import { ContentType, EditorInterfaces } from '../../../entities/content-type'
import { Tag } from '../../../entities/tag'
import { contentTypeSchema, MAX_FIELDS } from './content-type-schema'
import { tagSchema } from './tag-schema'
import { createFieldsSchema } from './fields-schema'
import { createEditorLayoutSchema } from './editor-layout-schema'

interface SimplifiedValidationError {
  message: string
  path: (string | number)[]
  type: string
  context?: {
    isRequiredDependency?: boolean
    isForbiddenDependency?: boolean
    dependsOn?: {
      key: string
      value: any
    }
    dupeValue?: any
    key?: any
    keys?: any[]
    valids?: any[]
    value?: any
  }
}

const validateContentType = function (contentType: ContentType): PayloadValidationError[] {
  const contentTypeId = contentType.id
  const { error } = contentTypeSchema.validate(_.omit(contentType.toAPI(), ['sys']), {
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
    if (type === 'array.max' && path[0] === 'fields' && path.length === 1) {
      return {
        type: 'InvalidPayload',
        message: errorMessages.contentType.TOO_MANY_FIELDS(contentTypeId, MAX_FIELDS)
      }
    }
  })
}

const validateEditorInterface = function (
  editorInterface: EditorInterfaces
): PayloadValidationError[] {
  const groupControls = editorInterface.getGroupControls() || []
  const tabsIds = groupControls
    .filter(
      (control) => control.widgetNamespace === 'builtin' && control.widgetId === 'topLevelTab'
    )
    .map((control) => control.groupId)
  const validateResult = createEditorLayoutSchema(tabsIds).validate(
    editorInterface.getEditorLayout(),
    {
      abortEarly: false
    }
  )

  const { error } = validateResult

  if (!error) {
    return []
  }

  return error.details.map((err): PayloadValidationError => {
    if (err.type === 'array.max' && err.path.length === 0) {
      return {
        type: 'InvalidPayload',
        message: errorMessages.editorLayout.TOO_MANY_TABS()
      }
    }
    if (err.type === 'any.only') {
      return {
        type: 'InvalidPayload',
        message: errorMessages.editorLayout.TAB_CONTROL_INVALID(err.context.value)
      }
    }
    if (err.type === 'any.invalid') {
      return {
        type: 'InvalidPayload',
        message: errorMessages.editorLayout.FIELD_SET_CONTROL_INVALID(err.context.value)
      }
    }
    if (err.type === 'any.required') {
      return {
        type: 'InvalidPayload',
        message: errorMessages.editorLayout.FIELD_GROUP_LEVEL_TOO_DEEP()
      }
    }
  })
}

const validateTag = function (tag: Tag): PayloadValidationError[] {
  const { error } = tagSchema.validate(_.omit(tag.toApiTag(), ['sys']), {
    abortEarly: false
  })

  if (!error) {
    return []
  }

  return error.details.map(({ path, type }): PayloadValidationError => {
    if (type === 'any.required') {
      return {
        type: 'InvalidPayload',
        message: errorMessages.tag.REQUIRED_PROPERTY(path)
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

// Receives ValidationError[] with this structure:
// [{
//   message: '"foo" is not allowed',
//   path: [0, 'validations', 2, 'foo'],
//   type: 'object.allowUnknown',
//   context: { child: 'foo', key: 'foo' }
// }]
const combineErrors = function (
  fieldValidationsError: Joi.ValidationErrorItem
): SimplifiedValidationError[] {
  const fieldValidationsErrors = fieldValidationsError.context.details

  const byItemPath: _.Dictionary<SimplifiedValidationError[]> = _.groupBy(
    fieldValidationsErrors,
    ({ path }) => {
      return path.slice(0, -1).join('.')
    }
  )

  // Remove object.unknown error for alternatives.match field validation if there are deeper nested validation errors
  if (fieldValidationsError.type === 'alternatives.match' && Object.keys(byItemPath).length > 1) {
    const alternativesMatchErrorPath = fieldValidationsError.path.join('.')
    delete byItemPath[alternativesMatchErrorPath]
  }

  const pathErrorTuples: [string, SimplifiedValidationError[]][] = _.entries(byItemPath)

  const uniqPropErrorsByPath: [string, SimplifiedValidationError[]][] = _.map(
    pathErrorTuples,
    ([path, itemErrors]): [string, SimplifiedValidationError[]] => {
      const uniqErrors: SimplifiedValidationError[] = _.uniqBy(itemErrors, 'context.key')
      return [path, uniqErrors]
    }
  )

  return uniqPropErrorsByPath.map(([path, errors]) => {
    const keys = errors.map((error) => reach(error, 'context.key'))

    // Invalid property
    if (keys.length === 1) {
      const [errorSample] = errors
      return errorSample
    }

    // Invalid combined properties
    return unknownCombinationError({ path: path.split('.'), keys })
  })
}

// Joi might return an `object.unknown` error for each
// non-matched field validation in `Joi.alternatives.try()`.
// They are noise, execept when all error types are the same.
const cleanNoiseFromJoiErrors = function (error: Joi.ValidationError): SimplifiedValidationError[] {
  const [normalErrors, fieldValidationsErrors] = _.partition(error.details, (detail) => {
    const [, fieldProp] = detail.path
    return fieldProp !== 'validations'
  })

  if (!fieldValidationsErrors.length) {
    return normalErrors
  }

  let allErrors = [...normalErrors]

  for (const fieldValidationsError of fieldValidationsErrors) {
    const errorDetails = fieldValidationsError.context.details

    if (!errorDetails) {
      allErrors = [...allErrors, fieldValidationsError]
      continue
    }

    const isUnknownValidationsProp = errorDetails.every(({ type }) => type === 'object.unknown')

    if (isUnknownValidationsProp) {
      const combinedErrors = combineErrors(fieldValidationsError)

      allErrors = [...allErrors, ...combinedErrors]
      continue
    }

    const remainingFieldValidationsErrors = errorDetails.filter(
      ({ type }) => type !== 'object.unknown'
    )
    allErrors = [...allErrors, ...remainingFieldValidationsErrors]
  }

  return allErrors
}

const validateFields = function (
  contentType: ContentType,
  locales: string[]
): PayloadValidationError[] {
  const fields = contentType.fields.toRaw()
  const validateResult = createFieldsSchema(locales).validate(fields, {
    abortEarly: false
  })

  const { error } = validateResult

  if (!error) {
    return []
  }

  const cleanErrors = cleanNoiseFromJoiErrors(error)

  return cleanErrors.map((details: SimplifiedValidationError): PayloadValidationError => {
    const { path, type, context } = details

    // `path` looks like [0, 'field']
    // look up the field
    const [index, ...fieldNames] = path
    const prop = fieldNames.join('.')
    const field = fields[index]
    if (prop.startsWith('defaultValue')) {
      if (type === 'object.unknown') {
        return {
          type: 'InvalidPayload',
          message: errorMessages.field.defaultValue.INVALID_LOCALE(field.id, context.key)
        }
      }

      if (type === 'any.unknown') {
        if (field.type === 'Array') {
          return {
            type: 'InvalidPayload',
            message: errorMessages.field.defaultValue.UNSUPPORTED_ARRAY_ITEMS_TYPE(
              field.id,
              path[1],
              field.items.type
            )
          }
        }
        return {
          type: 'InvalidPayload',
          message: errorMessages.field.defaultValue.UNSUPPORTED_FIELD_TYPE(
            field.id,
            path[1],
            field.type
          )
        }
      }

      if (field.type === 'Date') {
        return {
          type: 'InvalidPayload',
          message: errorMessages.field.defaultValue.DATE_TYPE_MISMATCH(
            field.id,
            kindOf(context.value),
            context.value,
            context.key,
            field.type
          )
        }
      }
      return {
        type: 'InvalidPayload',
        message: errorMessages.field.defaultValue.TYPE_MISMATCH(
          field.id,
          kindOf(context.value),
          context.key,
          field.type
        )
      }
    }

    // Field `allowedResources` errors
    if (prop.startsWith('allowedResources')) {
      if (path.length > 3) {
        const error = details.message.replace(/".+?"/, `"${context.key}"`)
        return {
          type: 'InvalidPayload',
          message: errorMessages.allowedResources.INVALID_RESOURCE_PROPERTY(
            field.id,
            path[2],
            error
          )
        }
      }

      if (type === 'object.base') {
        const actualType = kindOf(reach(field, prop))

        return {
          type: 'InvalidPayload',
          message: errorMessages.allowedResources.INVALID_RESOURCE(
            field.id,
            context.key,
            actualType
          )
        }
      }

      if (type === 'array.min') {
        return {
          type: 'InvalidPayload',
          message: errorMessages.allowedResources.TOO_FEW_ITEMS(field.id, 'allowedResources')
        }
      }

      if (type === 'array.max') {
        return {
          type: 'InvalidPayload',
          message: errorMessages.allowedResources.TOO_MANY_ITEMS(field.id, 'allowedResources')
        }
      }

      if (type === 'array.unique') {
        return {
          type: 'InvalidPayload',
          message: errorMessages.allowedResources.DUPLICATE_SOURCE(
            field.id,
            context.value.source,
            'allowedResources'
          )
        }
      }
    } else if (path.slice(-2).includes('allowedResources')) {
      if (type === 'array.min') {
        return {
          type: 'InvalidPayload',
          message: errorMessages.allowedResources.TOO_FEW_ITEMS(field.id, prop)
        }
      }

      if (type === 'array.max') {
        return {
          type: 'InvalidPayload',
          message: errorMessages.allowedResources.TOO_MANY_ITEMS(field.id, prop)
        }
      }

      if (type === 'array.unique') {
        return {
          type: 'InvalidPayload',
          message: errorMessages.allowedResources.DUPLICATE_SOURCE(
            field.id,
            context.value.source,
            prop
          )
        }
      }
    } else if (
      ['validations', 'nodes', 'allowedResources'].every((pathItem) => path.includes(pathItem))
    ) {
      const error = details.message.replace(/".+?"/, `"${context.key}"`)

      return {
        type: 'InvalidPayload',
        message: errorMessages.allowedResources.INVALID_RESOURCE_PROPERTY(field.id, path[6], error)
      }
    }

    if (type === 'any.required') {
      if (context.isRequiredDependency) {
        const dependentProp = context.dependsOn.key
        const dependentValue = context.dependsOn.value

        return {
          type: 'InvalidPayload',
          message: errorMessages.field.REQUIRED_DEPENDENT_PROPERTY(
            prop,
            field.id,
            dependentProp,
            dependentValue
          )
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
          message: errorMessages.field.FORBIDDEN_DEPENDENT_PROPERTY(
            prop,
            field.id,
            dependentProp,
            dependentValue
          )
        }
      }

      return {
        type: 'InvalidPayload',
        message: errorMessages.field.FORBIDDEN_PROPERTY(prop, field.id)
      }
    }

    if (type === 'any.only') {
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
      return ['string.max', 'string.empty', 'string.pattern.base'].includes(type)
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

      if (type === 'object.unknown') {
        return {
          type: 'InvalidPayload',
          message: errorMessages.field.validations.INVALID_VALIDATION_PROPERTY(context.key)
        }
      }

      if (type === 'object.unknownCombination') {
        return {
          type: 'InvalidPayload',
          message: errorMessages.field.validations.INVALID_VALIDATION_PROPERTY_COMBINATION(
            context.keys
          )
        }
      }

      if (type.endsWith('.base')) {
        const [expectedType] = type.split('.base')
        const actualType = kindOf(reach(field, prop))

        return {
          type: 'InvalidPayload',
          message: errorMessages.field.validations.INVALID_VALIDATION_PARAMETER(
            context.key,
            expectedType,
            actualType
          )
        }
      }
    }
  })
}

export { validateContentType, validateEditorInterface, validateFields, validateTag }
