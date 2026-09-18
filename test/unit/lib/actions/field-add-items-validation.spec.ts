import { describe, it, beforeEach } from 'vitest'
import { expect } from 'chai'
import { FieldAddItemsValidationAction } from '../../../../src/lib/action/field-add-items-validation'
import ContentType from '../../../../src/lib/entities/content-type'
import { APIContentType } from '../../../../src/lib/interfaces/content-type'

describe('FieldAddItemsValidationAction', () => {
  let contentType: ContentType
  let action: FieldAddItemsValidationAction

  beforeEach(() => {
    const apiContentType: APIContentType = {
      sys: {
        id: 'test',
        version: 1
      },
      name: 'Test',
      fields: [
        {
          id: 'test',
          type: 'Array',
          items: {
            type: 'Symbol',
            validations: [{ size: { min: 1 } }]
          }
        }
      ]
    }
    contentType = new ContentType(apiContentType)
  })

  describe('applyTo', () => {
    it('adds validations to existing items validations', async () => {
      action = new FieldAddItemsValidationAction('test', 'test', [{ unique: true }])
      await action.applyTo(contentType)

      const field = contentType.fields.getField('test')
      expect(field.items?.validations).to.have.length(2)
      expect(field.items?.validations?.[0]).to.deep.equal({ size: { min: 1 } })
      expect(field.items?.validations?.[1]).to.deep.equal({ unique: true })
    })

    it('creates items validations array if it does not exist', async () => {
      const apiContentType: APIContentType = {
        sys: {
          id: 'test',
          version: 1
        },
        name: 'Test',
        fields: [
          {
            id: 'test',
            type: 'Array',
            items: {
              type: 'Symbol'
            }
          }
        ]
      }
      contentType = new ContentType(apiContentType)

      action = new FieldAddItemsValidationAction('test', 'test', [{ unique: true }])
      await action.applyTo(contentType)

      const field = contentType.fields.getField('test')
      expect(field.items?.validations).to.have.length(1)
      expect(field.items?.validations?.[0]).to.deep.equal({ unique: true })
    })

    it('creates items object if it does not exist', async () => {
      const apiContentType: APIContentType = {
        sys: {
          id: 'test',
          version: 1
        },
        name: 'Test',
        fields: [
          {
            id: 'test',
            type: 'Array'
          }
        ]
      }
      contentType = new ContentType(apiContentType)

      action = new FieldAddItemsValidationAction('test', 'test', [{ unique: true }])
      await action.applyTo(contentType)

      const field = contentType.fields.getField('test')
      expect(field.items).to.not.equal(undefined)
      expect(field.items?.type).to.equal('Symbol')
      expect(field.items?.validations).to.have.length(1)
      expect(field.items?.validations?.[0]).to.deep.equal({ unique: true })
    })
  })
})
