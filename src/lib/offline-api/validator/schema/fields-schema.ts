import * as Joi from 'joi'
import fieldValidations from './field-validations-schema'

export function createFieldsSchema(locales: string[]) {
  const fieldSchema = Joi.object().keys({
    id: Joi.string().required(),
    newId: Joi.string()
      .invalid(Joi.ref('id'))
      .max(64)
      // the empty case will be caught by joi by default, we don't want duplicate errors
      .regex(/^$|^[a-zA-Z][a-zA-Z0-9_]*$/),
    name: Joi.string().required(),
    type: Joi.string()
      .valid(
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
      )
      .required(),
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
    defaultValue: Joi.object()
      .strict()
      .pattern(
        Joi.valid(...locales),
        Joi.when(Joi.ref('...type'), {
          otherwise: Joi.forbidden(),
          switch: [
            {
              is: 'Symbol',
              then: Joi.string()
            },
            {
              is: 'Text',
              then: Joi.string()
            },
            {
              is: 'Number',
              then: Joi.number()
            },
            {
              is: 'Integer',
              then: Joi.number().integer()
            },
            {
              is: 'Boolean',
              then: Joi.boolean()
            },
            {
              is: 'Date',
              then: Joi.date().iso().strict(false)
            },
            {
              is: 'Array',
              then: Joi.when(Joi.ref('...items.type'), {
                is: 'Symbol',
                then: Joi.array().items(Joi.string()),
                otherwise: Joi.forbidden()
              })
            }
          ]
        })
      ),
    disabled: Joi.boolean()
  })

  const fieldsSchema = Joi.array().items(fieldSchema)

  return fieldsSchema
}

const enforceDependency = function ({ valid, when, is }) {
  return valid
    .when(when, {
      is: is,
      then: Joi.any().required(),
      otherwise: Joi.any().forbidden()
    })
    .error((errors) => {
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

const itemsValid = Joi.object().keys({
  type: Joi.string().valid('Symbol', 'Link').required(),
  linkType: enforceDependency({
    valid: Joi.string().valid('Asset', 'Entry'),
    when: 'type',
    is: 'Link'
  }),
  validations: Joi.array().unique().items(fieldValidations)
})
