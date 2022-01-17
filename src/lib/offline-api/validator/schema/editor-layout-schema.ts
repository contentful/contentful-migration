import * as Joi from 'joi'
import { MAX_TABS } from '../../../utils/editor-layout'

const fieldSchema = Joi.object().keys({
  fieldId: Joi.string().required()
})

export function createEditorLayoutSchema (tabsIds: string[]) {
  const fieldSetSchema = Joi.object().keys({
    name: Joi.string().required(),
    groupId: Joi.string().required().invalid(...tabsIds),
    items: Joi.array().items(fieldSchema)
  })

  const editorLayoutSchema = Joi.array().items(Joi.object().keys({
    name: Joi.string().required(),
    groupId: Joi.string().required().valid(...tabsIds),
    items: Joi.array()
      .items(Joi.alternatives().conditional(Joi.object({ groupId: Joi.exist() }).unknown(), {
        then: fieldSetSchema,
        otherwise: fieldSchema
      }))
  })).max(MAX_TABS)

  return editorLayoutSchema
}
