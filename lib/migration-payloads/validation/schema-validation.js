const Joi = require('joi');

const errorMessages = require('./errors');

const enforceDependency = function ({ valid, when, is }) {
  return valid.when(when, {
    is: is, then: Joi.required(), otherwise: Joi.forbidden()
  }).error((errors) => {
    return errors.map((error) => {
      const path = error.path;
      const splitPath = path.split('.');
      // top level would be 0.foo
      // anything nested would be 0.foo.bar
      let subPath = [when];
      if (splitPath.length >= 3) {
        subPath = splitPath.slice(1, splitPath.length - 1).concat(subPath);
      }
      const keyPath = subPath.join('.');

      if (error.type === 'any.required') {
        error.type = 'any.required';
        Object.assign(error.context, {
          isRequiredDependency: true,
          dependsOn: {
            key: keyPath,
            value: is
          }
        });
      }

      if (error.type === 'any.unknown' && error.flags.presence === 'forbidden') {
        Object.assign(error.context, {
          isForbiddenDependency: true,
          dependsOn: {
            key: keyPath,
            value: is
          }
        });
      }

      return error;
    });
  });
};

const itemsValid = Joi.object().keys({
  type: Joi.valid('Symbol', 'Link').required(),
  linkType: enforceDependency({
    valid: Joi.valid('Asset', 'Entry'),
    when: 'type',
    is: 'Link'
  }),
  validations: Joi.array()
});

const fieldSchema = Joi.object().keys({
  id: Joi.string().required(),
  name: Joi.string().required(),

  type: Joi.valid(
    'Symbol',
    'Text',
    'Integer',
    'Number',
    'Date',
    'Boolean',
    'Object',
    'Link',
    'Array'
  ).required(),
  linkType: enforceDependency({
    valid: Joi.valid(['Asset', 'Entry']),
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
  validations: Joi.array(),
  disabled: Joi.boolean()
});

const fieldsSchema = Joi.array().items(fieldSchema);

const MAX_FIELDS = 50;
const contentTypeSchema = Joi.object().keys({
  name: Joi.string().required(),
  description: Joi.string(),
  displayField: Joi.string(),
  fields: Joi.array().max(MAX_FIELDS).required()
});

const validateContentType = function (payload) {
  const contentTypeId = payload.meta.contentTypeId;

  const { error } = Joi.validate(payload.payload, contentTypeSchema, {
    abortEarly: false
  });

  if (!error) {
    return [];
  }

  return error.details.map(({ path, type }) => {
    if (type === 'any.required') {
      return {
        type: 'InvalidPayload',
        message: errorMessages.contentType.REQUIRED_PROPERTY(path)
      };
    }
    if (type === 'array.max' && path === 'fields') {
      return {
        type: 'InvalidPayload',
        message: errorMessages.contentType.TOO_MANY_FIELDS(contentTypeId, MAX_FIELDS)
      };
    }
  });
};

const validateFields = function (payload) {
  const fields = payload.payload.fields;
  const { error } = Joi.validate(fields, fieldsSchema, {
    abortEarly: false
  });

  if (!error) {
    return [];
  }

  return error.details.map((details) => {
    const { path, type, context } = details;

    // `path` looks like `0.field`
    // look up the field
    const [index, ...fieldNames] = path.split('.');
    const prop = fieldNames.join('.');
    const field = fields[index];

    if (type === 'any.required') {
      if (context.isRequiredDependency) {
        const dependentProp = context.dependsOn.key;
        const dependentValue = context.dependsOn.value;

        return {
          type: 'InvalidPayload',
          message: errorMessages.field.REQUIRED_DEPENDENT_PROPERTY(prop, field.id, dependentProp, dependentValue)
        };
      }

      return {
        type: 'InvalidPayload',
        message: errorMessages.field.REQUIRED_PROPERTY(prop, field.id)
      };
    }

    if (type === 'any.unknown') {
      if (context.isForbiddenDependency) {
        const dependentProp = context.dependsOn.key;
        const dependentValue = context.dependsOn.value;

        return {
          type: 'InvalidPayload',
          message: errorMessages.field.FORBIDDEN_DEPENDENT_PROPERTY(prop, field.id, dependentProp, dependentValue)
        };
      }

      return {
        type: 'InvalidPayload',
        message: errorMessages.field.FORBIDDEN_PROPERTY(prop, field.id)
      };
    }

    if (type === 'any.allowOnly') {
      return {
        type: 'InvalidPayload',
        message: errorMessages.field.PROPERTY_MUST_BE_ONE_OF(prop, field.id, context.valids)
      };
    }
  });
};

module.exports = {
  validateContentType,
  validateFields
};
