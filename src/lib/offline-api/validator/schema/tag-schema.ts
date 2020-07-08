import * as Joi from 'joi'

const MAX_NAME_LENGTH = 256
const tagSchema = Joi.object().keys({
  name: Joi.string().max(MAX_NAME_LENGTH).required()
})

export default tagSchema
export {
  tagSchema
}
