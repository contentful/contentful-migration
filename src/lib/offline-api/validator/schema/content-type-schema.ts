import * as Joi from 'joi'

const MAX_FIELDS = 50
const contentTypeSchema = Joi.object().keys({
  name: Joi.string().required(),
  description: Joi.string(),
  displayField: Joi.string(),
  fields: Joi.array().max(MAX_FIELDS).required()
})

export default contentTypeSchema
export {
  MAX_FIELDS,
  contentTypeSchema
}
