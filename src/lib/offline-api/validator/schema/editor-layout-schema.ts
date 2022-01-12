import * as Joi from 'joi'

const field = Joi.object().keys({
  fieldId: Joi.string().required()
})

const fieldSet = Joi.object().keys({
  name: Joi.string().required(),
  groupId: Joi.string().required(),
  items: Joi.array().items(field)
})

export function createEditorLayoutSchema () {
  const editorLayoutSchema = Joi.array().items(Joi.object().keys({
    name: Joi.string().required(),
    groupId: Joi.string().required(),
    items: Joi.array().items(Joi.alternatives().try(fieldSet, field))
  }))

  return editorLayoutSchema
}
