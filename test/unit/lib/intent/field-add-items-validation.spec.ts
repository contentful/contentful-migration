import { describe, it } from 'vitest'
import actionCreators from '../../../../src/lib/migration-steps/action-creators'
import FieldAddItemsValidationIntent from '../../../../src/lib/intent/field-add-items-validation'
import { expect } from 'chai'
import runIntent from './run-intent'
import fakeCallsite from '../../../helpers/fake-callsite'
import makeApiContentType from '../../../helpers/make-api-content-type'
import { APIContentType } from '../../../../src/lib/interfaces/content-type'

describe('FieldAddItemsValidationIntent', function () {
  describe('when adding validations to array field items', function () {
    it('adds validations to existing items validations', async function () {
      const intent: FieldAddItemsValidationIntent = actionCreators.field.addItemsValidation(
        'test',
        0,
        'test',
        0,
        fakeCallsite(),
        [{ unique: true }]
      )

      const contentTypes: APIContentType[] = [
        {
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
      ]

      const api = await runIntent(intent, contentTypes, [])

      const contentType = await api.getContentType('test')
      const field = contentType.fields.getField('test')
      expect(field.items?.validations).to.have.length(2)
      expect(field.items?.validations?.[0]).to.deep.equal({ size: { min: 1 } })
      expect(field.items?.validations?.[1]).to.deep.equal({ unique: true })
    })

    it('creates items validations array if it does not exist', async function () {
      const intent: FieldAddItemsValidationIntent = actionCreators.field.addItemsValidation(
        'test',
        0,
        'test',
        0,
        fakeCallsite(),
        [{ unique: true }]
      )

      const contentTypes: APIContentType[] = [
        {
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
      ]

      const api = await runIntent(intent, contentTypes, [])

      const contentType = await api.getContentType('test')
      const field = contentType.fields.getField('test')
      expect(field.items?.validations).to.have.length(1)
      expect(field.items?.validations?.[0]).to.deep.equal({ unique: true })
    })

    it('creates items object if it does not exist', async function () {
      const intent: FieldAddItemsValidationIntent = actionCreators.field.addItemsValidation(
        'test',
        0,
        'test',
        0,
        fakeCallsite(),
        [{ unique: true }]
      )

      const contentTypes: APIContentType[] = [
        {
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
      ]

      const api = await runIntent(intent, contentTypes, [])

      const contentType = await api.getContentType('test')
      const field = contentType.fields.getField('test')
      expect(field.items).to.not.equal(undefined)
      expect(field.items?.type).to.equal('Symbol')
      expect(field.items?.validations).to.have.length(1)
      expect(field.items?.validations?.[0]).to.deep.equal({ unique: true })
    })
  })
})
