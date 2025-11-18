import { describe, it, expect } from 'vitest'

import FieldMovementValidator from '../../../../src/lib/intent-validator/field-movement'
import createValidator from './validate-steps'
const validateSteps = createValidator([FieldMovementValidator])

describe('field-movement validation', () => {
  describe('when doing an invalid movement', () => {
    it('returns all validation errors', async () => {
      const validationErrors = await validateSteps(function up(migration) {
        const person = migration.editContentType('person', {
          description: 'A content type for a person',
          name: 'Person'
        })

        person.moveField('field').somewhere()
      })

      expect(validationErrors).toEqual([
        {
          type: 'InvalidMovement',
          message: '"somewhere" is not a valid field movement.',
          details: {
            step: {
              type: 'field/move',
              meta: {
                contentTypeInstanceId: 'contentType/person/0',
                fieldInstanceId: 'fields/field/0'
              },
              payload: {
                contentTypeId: 'person',
                fieldId: 'field',
                movement: {
                  direction: 'somewhere',
                  pivot: undefined
                }
              }
            }
          }
        }
      ])
    })
  })

  describe('when moving a field relative to itself', () => {
    it('returns all validation errors', async () => {
      const validationErrors = await validateSteps(function up(migration) {
        const person = migration.editContentType('person', {
          description: 'A content type for a person',
          name: 'Person'
        })

        person.moveField('name').afterField('name')
      })

      expect(validationErrors).toEqual([
        {
          type: 'InvalidMovement',
          message: 'You cannot move the field "name" relative to itself.',
          details: {
            step: {
              type: 'field/move',
              meta: {
                contentTypeInstanceId: 'contentType/person/0',
                fieldInstanceId: 'fields/name/0'
              },
              payload: {
                contentTypeId: 'person',
                fieldId: 'name',
                movement: {
                  direction: 'afterField',
                  pivot: 'name'
                }
              }
            }
          }
        }
      ])
    })
  })

  describe('when doing an almost valid movement', () => {
    it('returns all validation errors', async () => {
      const validationErrors = await validateSteps(function up(migration) {
        const person = migration.editContentType('person', {
          description: 'A content type for a person',
          name: 'Person'
        })

        person.moveField('field').toTheTp()
      })

      expect(validationErrors).toEqual([
        {
          type: 'InvalidMovement',
          message: '"toTheTp" is not a valid field movement. Did you mean "toTheTop"?',
          details: {
            step: {
              type: 'field/move',
              meta: {
                contentTypeInstanceId: 'contentType/person/0',
                fieldInstanceId: 'fields/field/0'
              },
              payload: {
                contentTypeId: 'person',
                fieldId: 'field',
                movement: {
                  direction: 'toTheTp',
                  pivot: undefined
                }
              }
            }
          }
        }
      ])
    })
  })

  describe('when doing a movement with an invalid type', () => {
    it('does not error on invalid types for toTheTop and toTheBottom', async () => {
      const validationErrors = await validateSteps(function up(migration) {
        const person = migration.editContentType('person', {
          description: 'A content type for a person',
          name: 'Person'
        })

        person.moveField('field').toTheTop(true)
        person.moveField('field').toTheBottom('pivot-field')
      })

      expect(validationErrors).toEqual([])
    })

    it('returns all validation errors', async () => {
      const validationErrors = await validateSteps(function up(migration) {
        const person = migration.editContentType('person', {
          description: 'A content type for a person',
          name: 'Person'
        })

        person.moveField('field').afterField(true)
      })

      expect(validationErrors).toEqual([
        {
          type: 'InvalidType',
          message: '"boolean" is not a valid type for field movement. Expected "string".',
          details: {
            step: {
              type: 'field/move',
              meta: {
                contentTypeInstanceId: 'contentType/person/0',
                fieldInstanceId: 'fields/field/0'
              },
              payload: {
                contentTypeId: 'person',
                fieldId: 'field',
                movement: {
                  direction: 'afterField',
                  pivot: true
                }
              }
            }
          }
        }
      ])
    })
  })
})
