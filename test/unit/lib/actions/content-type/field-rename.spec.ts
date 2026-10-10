import { describe, it } from 'vitest'
import { expect } from 'chai'
import lodash from 'lodash'
import { FieldRenameAction } from '../../../../../src/lib/action/field-rename'
import ContentType from '../../../../../src/lib/entities/content-type'

const { cloneDeep } = lodash

describe('rename field', () => {
  describe('annotations on renamed field', () => {
    it('renames the corresponding key in metadata', async () => {
      const contentType = {
        sys: {
          id: 'dog',
          version: 1
        },
        name: 'Dog',
        description: 'the pet',
        displayField: 'fieldA',
        fields: [
          {
            id: 'fieldA',
            type: 'Link',
            linkType: 'Entry'
          }
        ],
        metadata: {
          annotations: {
            ContentType: [
              {
                sys: {
                  id: 'Contentful:AggregateRoot',
                  type: 'Link',
                  linkType: 'Annotation'
                }
              }
            ],
            ContentTypeField: {
              fieldA: [
                {
                  sys: {
                    id: 'Contentful:AggregateComponent',
                    type: 'Link',
                    linkType: 'Annotation'
                  }
                }
              ]
            }
          }
        }
      }

      const fieldId = contentType.fields[0].id
      const newId = `${fieldId}renamed`
      const action = new FieldRenameAction(contentType.sys.id, fieldId, {
        newId
      })
      const contentTypeObj = new ContentType(cloneDeep(contentType))
      await action.applyTo(contentTypeObj)
      const updatedContentType = cloneDeep(contentType)
      updatedContentType.fields[0].id = newId
      updatedContentType.metadata.annotations.ContentTypeField[newId] =
        updatedContentType.metadata.annotations.ContentTypeField[fieldId]

      delete updatedContentType.metadata.annotations.ContentTypeField[fieldId]

      expect(contentTypeObj.toAPI()).to.deep.equal(updatedContentType)
    })
  })
})
