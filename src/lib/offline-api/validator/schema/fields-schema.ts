import * as Joi from 'joi'
import fieldValidations from './field-validations-schema'

const enforceDependency = function ({ valid, when, is }) {
  return valid.when(when, {
    is: is, then: Joi.any().required(), otherwise: Joi.any().forbidden()
  }).error((errors) => {
    return errors.map((error) => {
      const path = error.path
      const splitPath = path
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
    'Location',
    'RichText'
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

export default fieldsSchema
