import * as Joi from 'joi'

const validation = (name, constraint) => Joi.object({
  [name]: constraint,
  message: Joi.string()
})

const range = (type) => Joi.object({
  min: Joi[type]().allow(null),
  max: Joi[type]().allow(null)
})

const linkContentType = validation('linkContentType', Joi.array().items(Joi.string()))
const inValidation = validation('in', Joi.array())
const linkMimetypeGroup = validation('linkMimetypeGroup', Joi.array().items(Joi.string()))
const size = validation('size', range('number'))
const rangeValidation = validation('range', range('number'))

const regexp = validation('regexp', Joi.object({
  pattern: Joi.string(),
  flags: Joi.string().allow(null).optional()
}))

const unique = validation('unique', Joi.boolean())
const dateRange = validation('dateRange', range('string'))

const assetImageDimensions = validation('assetImageDimensions', Joi.object({
  width: range('number'),
  height: range('number')
}))

const assetFileSize = validation('assetFileSize', range('number'))

const fieldValidations = Joi.alternatives().try(
  linkContentType,
  inValidation,
  linkMimetypeGroup,
  size,
  rangeValidation,
  regexp,
  unique,
  dateRange,
  assetImageDimensions,
  assetFileSize
)

export default fieldValidations
