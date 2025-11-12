import { expect } from 'chai'
import validateChunks from './validate-chunks'

describe('Transform entries chunk validation', function () {
  describe('when transforming entries of a non existing Content Type', function () {
    it('returns an error', async function () {
      const func = () => {
        console.log('transform')
      }
      const contentTypes = []
      const errors = await validateChunks(function up(migration) {
        migration.transformEntries({
          contentType: 'dog',
          from: ['field'],
          to: ['field'],
          transformEntryForLocale: func
        })
      }, contentTypes)

      expect(errors).to.eql([
        {
          details: {
            step: {
              meta: {
                contentTypeInstanceId: 'contentType/dog/0'
              },
              payload: {
                contentTypeId: 'dog',
                transformation: {
                  from: ['field'],
                  to: ['field'],
                  transformEntryForLocale: func
                }
              },
              type: 'contentType/transformEntries'
            }
          },
          message: 'You cannot transform entries for content type "dog" because it does not exist.',
          type: 'InvalidAction'
        }
      ])
    })
  })

  describe('when transforming entries of a deleted content type', function () {
    it('returns an error', async function () {
      const func = () => {
        console.log('transform')
      }
      const contentTypes = [{ fields: [], sys: { id: 'dog' } }]
      const errors = await validateChunks(function up(migration) {
        migration.deleteContentType('dog')
        migration.transformEntries({
          contentType: 'dog',
          from: ['field'],
          to: ['field'],
          transformEntryForLocale: func
        })
      }, contentTypes)

      expect(errors).to.eql([
        {
          details: {
            step: {
              meta: {
                contentTypeInstanceId: 'contentType/dog/1'
              },
              payload: {
                contentTypeId: 'dog',
                transformation: {
                  from: ['field'],
                  to: ['field'],
                  transformEntryForLocale: func
                }
              },
              type: 'contentType/transformEntries'
            }
          },
          message: 'You cannot transform entries for content type "dog" because it was deleted.',
          type: 'InvalidAction'
        }
      ])
    })
  })

  describe('when transforming entries to a just created field', function () {
    it('returns no error', async function () {
      const func = () => {
        console.log('transform')
      }
      const contentTypes = [
        {
          fields: [{ id: 'field', type: 'Symbol', description: 'A field' }],
          sys: { id: 'dog' }
        }
      ]
      const errors = await validateChunks(function up(migration) {
        migration.editContentType('dog').createField('toField').type('Symbol')
        migration.transformEntries({
          contentType: 'dog',
          from: ['field'],
          to: ['toField'],
          transformEntryForLocale: func
        })
      }, contentTypes)

      expect(errors).to.eql([])
    })
  })

  describe('when transforming entries of a not yet created content type', function () {
    it('returns an error', async function () {
      const func = () => {
        console.log('transform')
      }
      const contentTypes = []
      const errors = await validateChunks(function up(migration) {
        migration.transformEntries({
          contentType: 'dog',
          from: ['field'],
          to: ['field'],
          transformEntryForLocale: func
        })
        migration.createContentType('dog')
      }, contentTypes)

      expect(errors).to.eql([
        {
          details: {
            step: {
              meta: {
                contentTypeInstanceId: 'contentType/dog/0'
              },
              payload: {
                contentTypeId: 'dog',
                transformation: {
                  from: ['field'],
                  to: ['field'],
                  transformEntryForLocale: func
                }
              },
              type: 'contentType/transformEntries'
            }
          },
          message:
            'You cannot transform entries for content type "dog" because it has not yet been created.',
          type: 'InvalidAction'
        }
      ])
    })
  })

  describe('when transforming entries with invalid "from"', function () {
    it('returns an error', async function () {
      const func = () => {
        console.log('transform')
      }
      const contentTypes = []
      const errors = await validateChunks(function up(migration) {
        const dog = migration.createContentType('dog')

        dog.createField('name').type('Symbol')

        migration.transformEntries({
          contentType: 'dog',
          from: ['surname'],
          to: ['firstname'],
          transformEntryForLocale: func
        })
      }, contentTypes)

      expect(errors).to.eql([
        {
          details: {
            step: {
              meta: {
                contentTypeInstanceId: 'contentType/dog/1'
              },
              payload: {
                contentTypeId: 'dog',
                transformation: {
                  from: ['surname'],
                  to: ['firstname'],
                  transformEntryForLocale: func
                }
              },
              type: 'contentType/transformEntries'
            }
          },
          message:
            'You cannot transform entries for content type "dog" because "surname", "firstname" can\'t be found on it.',
          type: 'InvalidEntriesTransformation'
        }
      ])
    })
  })
})
