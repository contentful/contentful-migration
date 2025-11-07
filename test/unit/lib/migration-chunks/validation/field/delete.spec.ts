import { describe, it, expect } from 'vitest'
import validateChunks from '../validate-chunks'

describe('field deletion plan validation', () => {
  describe('when creating a field two times but deleting it in between and then once more', () => {
    it('returns an error', async () => {
      const contentTypes: any[] = []
      const errors = await validateChunks(function up(migration: any) {
        const person = migration.createContentType('person', {
          description: 'A content type for a person',
          name: 'foo'
        })

        person.createField('name').type('Symbol')
        person.deleteField('name')
        person.createField('name').type('Decimal')

        migration.createContentType('animal').name('animal').description('An animal')

        person.createField('name').type('Array')
      }, contentTypes)

      expect(errors).toEqual([
        {
          type: 'InvalidAction',
          message: 'Field with id "name" cannot be created more than once.',
          details: {
            step: {
              type: 'field/create',
              meta: {
                contentTypeInstanceId: 'contentType/person/0',
                fieldInstanceId: 'fields/name/3'
              },
              payload: {
                contentTypeId: 'person',
                fieldId: 'name'
              }
            }
          }
        }
      ])
    })
  })

  describe('when creating a field two times but deleting it in between', () => {
    it('returns no errors', async () => {
      const contentTypes: any[] = []
      const errors = await validateChunks(function up(migration: any) {
        const person = migration.createContentType('person', {
          description: 'A content type for a person',
          name: 'foo'
        })

        person.createField('name').type('Symbol')
        person.deleteField('name')
        person.createField('name').type('Decimal')
      }, contentTypes)

      expect(errors).toEqual([])
    })
  })

  describe('when deleting a field that does not exist', () => {
    it('returns an error', async () => {
      const contentTypes: any[] = []
      const errors = await validateChunks(function up(migration: any) {
        const person = migration.createContentType('person', {
          description: 'A content type for a person',
          name: 'foo'
        })

        person.deleteField('name')
      }, contentTypes)

      expect(errors).toEqual([
        {
          type: 'InvalidAction',
          message: 'Field with id "name" cannot be deleted because it does not exist.',
          details: {
            step: {
              type: 'field/delete',
              meta: {
                contentTypeInstanceId: 'contentType/person/0',
                fieldInstanceId: 'fields/name/0'
              },
              payload: {
                contentTypeId: 'person',
                fieldId: 'name'
              }
            }
          }
        }
      ])
    })
  })

  describe('when deleting a field twice', () => {
    it('returns an error', async () => {
      const contentTypes: any[] = []
      const errors = await validateChunks(function up(migration: any) {
        const person = migration.createContentType('person', {
          description: 'A content type for a person',
          name: 'foo'
        })

        person.createField('name').type('Symbol')
        person.deleteField('name')

        migration.createContentType('chunk-breaker', {
          description: 'a chunk breaker',
          name: 'chunk breaker'
        })

        person.deleteField('name')
      }, contentTypes)

      expect(errors).toEqual([
        {
          type: 'InvalidAction',
          message: 'Field with id "name" cannot be deleted because it has already been deleted.',
          details: {
            step: {
              type: 'field/delete',
              meta: {
                contentTypeInstanceId: 'contentType/person/0',
                fieldInstanceId: 'fields/name/2'
              },
              payload: {
                contentTypeId: 'person',
                fieldId: 'name'
              }
            }
          }
        }
      ])
    })
  })

  describe('when deleting a field that exists on a remote content type', () => {
    it('returns no error', async () => {
      const contentTypes = [
        {
          sys: { id: 'person' },
          fields: [{ id: 'name', type: 'Symbol' }]
        }
      ]

      const errors = await validateChunks(function up(migration: any) {
        const person = migration.editContentType('person')

        person.deleteField('name')
      }, contentTypes)

      expect(errors).toEqual([])
    })
  })

  describe('when deleting a field on a content type that does not exist', () => {
    it('returns an error', async () => {
      const contentTypes: any[] = []
      const errors = await validateChunks(function up(migration: any) {
        const person = migration.editContentType('person')
        person.deleteField('name')
      }, contentTypes)

      expect(errors).toEqual([
        {
          type: 'InvalidAction',
          message:
            'You cannot delete the field with id "name" on content type "person" because the content type does not exist.',
          details: {
            step: {
              type: 'field/delete',
              meta: {
                contentTypeInstanceId: 'contentType/person/0',
                fieldInstanceId: 'fields/name/0'
              },
              payload: {
                contentTypeId: 'person',
                fieldId: 'name'
              }
            }
          }
        }
      ])
    })
  })
})
