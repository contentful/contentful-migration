import { describe, it, expect } from 'vitest'
import validateBatches from './validate-batches'

describe('payload validation', () => {
  describe('when setting a new id but it does not fit the requirements', () => {
    it('returns an error if too short', async () => {
      const migration = function (migration) {
        migration.editContentType('book').changeFieldId('title', '')
      }

      const existingCts = [
        {
          sys: {
            version: 1,
            id: 'book'
          },
          name: 'Book',
          fields: [
            {
              id: 'title',
              name: 'Title',
              type: 'Symbol'
            },
            {
              id: 'pages',
              name: 'Pages',
              type: 'Number'
            }
          ]
        }
      ]

      const errors = await validateBatches(migration, existingCts)

      expect(errors).toEqual([
        [
          {
            type: 'InvalidPayload',
            message: `The new ID "" for the field "title" does not match the requirements. IDs must be between 1 and 64 characters long, start with a letter, and contain only alphanumeric characters as well as underscores.`
          }
        ]
      ])
    })

    it('returns an error if too long', async () => {
      const longId = Array(65).fill('a').join('')
      const migration = function (migration) {
        migration.editContentType('book').changeFieldId('title', longId)
      }

      const existingCts = [
        {
          sys: {
            version: 1,
            id: 'book'
          },
          name: 'Book',
          fields: [
            {
              id: 'title',
              name: 'Title',
              type: 'Symbol'
            },
            {
              id: 'pages',
              name: 'Pages',
              type: 'Number'
            }
          ]
        }
      ]

      const errors = await validateBatches(migration, existingCts)

      expect(errors).toEqual([
        [
          {
            type: 'InvalidPayload',
            message: `The new ID "${longId}" for the field "title" does not match the requirements. IDs must be between 1 and 64 characters long, start with a letter, and contain only alphanumeric characters as well as underscores.`
          }
        ]
      ])
    })

    it('returns an error for wrong characters', async () => {
      const migration = function (migration) {
        migration.editContentType('book').changeFieldId('title', '12#hello')
      }

      const existingCts = [
        {
          sys: {
            version: 1,
            id: 'book'
          },
          name: 'Book',
          fields: [
            {
              id: 'title',
              name: 'Title',
              type: 'Symbol'
            },
            {
              id: 'pages',
              name: 'Pages',
              type: 'Number'
            }
          ]
        }
      ]

      const errors = await validateBatches(migration, existingCts)

      expect(errors).toEqual([
        [
          {
            type: 'InvalidPayload',
            message: `The new ID "12#hello" for the field "title" does not match the requirements. IDs must be between 1 and 64 characters long, start with a letter, and contain only alphanumeric characters as well as underscores.`
          }
        ]
      ])
    })
  })

  it('does not return errors when referring to a field by its new id in the same migration', async () => {
    const migration = function (migration) {
      const book = migration.editContentType('book')
      book.changeFieldId('title', 'newTitle')
      book.editField('newTitle').name('new Title')
    }

    const existingCts = [
      {
        sys: {
          version: 1,
          id: 'book'
        },
        name: 'Book',
        fields: [
          {
            id: 'title',
            name: 'Title',
            type: 'Symbol'
          },
          {
            id: 'pages',
            name: 'Pages',
            type: 'Number'
          }
        ]
      }
    ]

    const errors = await validateBatches(migration, existingCts)
    expect(errors).toEqual([[], []])
  })
})
