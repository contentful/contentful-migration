import * as Joi from 'joi'
import getFieldValidations from './field-validations-schema'

const enforceDependency = function ({ valid, when, is }) {
  return valid.when(when, {
    is: is, then: Joi.any().required(), otherwise: Joi.any().forbidden()
  }).error((errors) => {
    return errors.map((error) => {
      const path = error.path
      // top level would be 0.foo
      // anything nested would be 0.foo.bar
      let subPath = [when]
      if (path.length >= 3) {
        subPath = path.slice(1, path.length - 1).concat(subPath)
      }
      const keyPath = subPath.join('.')

      if (error.code === 'any.required') {
        // When there are nested `enforceDependency` calls
        // the error handler is invoked multiple times for every level
        // but the same error `local` is propagated
        // Thus we only assign this once, at the earliest failing level,
        // and leave it in place for the rest of the chain
        if (!error.local.isRequiredDependency) {
          Object.assign(error.local, {
            isRequiredDependency: true,
            dependsOn: {
              key: keyPath,
              value: is
            }
          })
        }
      }

      if (error.code === 'any.unknown' && error.flags.presence === 'forbidden') {
        if (!error.local.isForbiddenDependency) {
          Object.assign(error.local, {
            isForbiddenDependency: true,
            dependsOn: {
              key: keyPath,
              value: is
            }
          })
        }
      }

      return error
    })
  })
}

const getValidItems = () => Joi.object().keys({
  type: Joi.string().valid('Symbol', 'Link').required(),
  linkType: enforceDependency({
    valid: Joi.string().valid('Asset', 'Entry'),
    when: 'type',
    is: 'Link'
  }),
  validations: Joi.array().unique().items(getFieldValidations())
})

const getFieldSchema = () => Joi.object().keys({
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
    valid: getValidItems(),
    when: 'type',
    is: 'Array'
  }),
  omitted: Joi.boolean(),
  deleted: Joi.boolean(),
  localized: Joi.boolean(),
  required: Joi.boolean(),
  validations: Joi.array().unique().items(getFieldValidations()),
  initialValue: Joi.object().keys({
    "en-US": Joi.string(),
  }),
  
  // Joi.object().when('type', {
  //   is: 'Symbol',
  //   then: Joi.object().pattern(/.*/, Joi.string()),
  //   otherwise: Joi.any().forbidden()
  // }),
  
  // enforceDependency({
  //   valid: Joi.object().keys({
  //     "en-US": Joi.string(),
  //   }),//Joi.object().pattern(/.*/, Joi.string()),
  //   when: 'type',
  //   is: 'Symbol'
  // }),
  
  // Joi.object().pattern(/.*/, enforceDependency({
  //     valid: Joi.string(),
  //     when: Joi.ref('...type'),
  //     is: 'Symbol'
  //   })),
  
  // }).concat(),
  disabled: Joi.boolean()
})

const getFieldsSchema = () => Joi.array().items(getFieldSchema())

export default getFieldsSchema
