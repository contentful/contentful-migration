import { describe, it } from 'vitest'
import { expect } from 'chai'
import lodash from 'lodash'
const { cloneDeep } = lodash
import { FieldUpdateAction } from '../../../../../src/lib/action/field-update'
import ContentType from '../../../../../src/lib/entities/content-type'
import APIContentType from '../../../../../src/lib/interfaces/content-type'

describe('delete field', () => {
  describe('annotations on deleted field', () => {
    it('removes the corresponding key in metadata', async () => {
      const contentType: APIContentType = {
        sys: {
          id: 'dog',
          version: 1
        },
        name: 'Dog',
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
      const updatedField = {
        id: 'fieldA',
        type: 'Link',
        linkType: 'Entry',
        deleted: true
      }
      const action = new FieldUpdateAction(contentType.sys.id, fieldId, updatedField)

      await action.applyTo(new ContentType(contentType))
      const updatedContentType = cloneDeep(contentType)
      updatedContentType.fields = [updatedField]

      delete updatedContentType.metadata.annotations.ContentTypeField[fieldId]

      expect(contentType).to.deep.equal(updatedContentType)
    })
  })
})
