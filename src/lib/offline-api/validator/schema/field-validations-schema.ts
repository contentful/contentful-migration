import * as Joi from 'joi'
import { hasAlphaHeader } from '../../../../bin/lib/config'

const validation = (name, constraint) => Joi.object({
  [name]: constraint,
  message: Joi.string()
})

const range = (type) => Joi.object({
  min: Joi[type]().allow(null),
  max: Joi[type]().allow(null)
})

const rangeForDate = () => Joi.object({
  before: Joi.string().optional().allow(null),
  after: Joi.string().optional().allow(null),
  min: Joi.string().optional().allow(null),
  max: Joi.string().optional().allow(null)
})

const linkContentType = validation('linkContentType', Joi.array().items(Joi.string()))
const relationshipType = validation('relationshipType', Joi.array().items(Joi.string().valid('Composition')))
const inValidation = validation('in', Joi.array())
const linkMimetypeGroup = validation('linkMimetypeGroup', Joi.array().items(Joi.string()))
const size = validation('size', range('number'))
const rangeValidation = validation('range', range('number'))

const regexp = validation('regexp', Joi.object({
  pattern: Joi.string(),
  flags: Joi.string().allow(null).optional()
}))

const prohibitRegexp = validation('prohibitRegexp', Joi.object({
  pattern: Joi.string(),
  flags: Joi.string().allow(null).optional()
}))

const unique = validation('unique', Joi.boolean())
const dateRange = validation('dateRange', rangeForDate())

const assetImageDimensions = validation('assetImageDimensions', Joi.object({
  width: range('number'),
  height: range('number')
}))

const assetFileSize = validation('assetFileSize', range('number'))

const nodes = validation('nodes', Joi.object({
  'embedded-entry-block': Joi.array(),
  'embedded-entry-inline': Joi.array(),
  'embedded-asset-block': Joi.array(),
  'entry-hyperlink': Joi.array(),
  'asset-hyperlink': Joi.array(),
  'hyperlink': Joi.array()
}))

const enabledMarks = validation('enabledMarks', Joi.array().items(Joi.string().valid('bold', 'italic', 'code', 'underline')))

const enabledNodeTypes = validation('enabledNodeTypes', Joi.array().items(Joi.string().valid(
  'heading-1',
  'heading-2',
  'heading-3',
  'heading-4',
  'heading-5',
  'heading-6',
  'ordered-list',
  'unordered-list',
  'hr',
  'blockquote',
  'embedded-entry-block',
  'embedded-asset-block',
  'hyperlink',
  'entry-hyperlink',
  'asset-hyperlink',
  'embedded-entry-inline'
)))

const getFieldValidations = () => Joi.alternatives().try(
  ...[
  linkContentType,
  inValidation,
  linkMimetypeGroup,
  size,
  rangeValidation,
  regexp,
  prohibitRegexp,
  unique,
  dateRange,
  assetImageDimensions,
  assetFileSize,
  nodes,
  enabledMarks,
  enabledNodeTypes,
  hasAlphaHeader('assembly-types') ? relationshipType : undefined,
  ].filter(Boolean)
)

export default getFieldValidations
