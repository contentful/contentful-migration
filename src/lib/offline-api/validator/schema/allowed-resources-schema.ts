import * as Joi from 'joi'
import { MAX_ALLOWED_RESOURCES } from '../../../utils/resource-links'

export const allowedResourcesSchema = Joi.array()
  .min(1)
  .max(MAX_ALLOWED_RESOURCES)
  .unique('source')
  .items(
    Joi.object({
      type: Joi.string().valid('Contentful:Entry'),
      source: Joi.string(),
      contentTypes: Joi.array().min(1).items(Joi.string())
    })
  )
