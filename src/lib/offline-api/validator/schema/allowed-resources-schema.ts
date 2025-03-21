import * as Joi from 'joi'
import { MAX_ALLOWED_RESOURCES } from '../../../utils/resource-links'

export const allowedResourcesSchema = Joi.array()
  .min(1)
  .max(MAX_ALLOWED_RESOURCES)
  .unique('source')
  .items(
    Joi.alternatives().conditional(
      Joi.object({ type: Joi.string().regex(/^Contentful:/) }).unknown(),
      {
        then: Joi.object({
          type: Joi.string().valid('Contentful:Entry'),
          source: Joi.string(),
          contentTypes: Joi.array().min(1).items(Joi.string())
        }),
        otherwise: Joi.object({
          type: Joi.string().regex(/^[a-zA-Z][a-zA-Z0-9]*:[A-Za-z0-9]+$/)
        })
      }
    )
  )
