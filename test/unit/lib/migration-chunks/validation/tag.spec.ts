import { describe, it, expect } from 'vitest'
import validateChunks from './validate-chunks'

describe('tag plan validation', () => {
  describe('when creating a tag twice', () => {
    it('returns an error', async () => {
      const errors = await validateChunks(function up(migration: any) {
        migration.createTag('person', {
          name: 'foo'
        })
        migration.createTag('person', {
          name: 'the new name'
        })
      }, [])

      expect(errors).toEqual([
        {
          type: 'InvalidAction',
          message: 'Tag with id "person" cannot be created more than once.',
          details: {
            step: {
              type: 'tag/create',
              meta: {
                tagInstanceId: 'tag/person/1'
              },
              payload: {
                tagId: 'person',
                tagVisibility: 'private'
              }
            }
          }
        }
      ])
    })
  })

  describe('when editing a tag before creating it', () => {
    it('returns an error', async () => {
      const tags = [
        {
          sys: { id: 'somethingElse' }
        }
      ]

      const errors = await validateChunks(
        function up(migration: any) {
          migration.editTag('person', {
            name: 'foo'
          })

          migration.createTag('person', {
            name: 'the new name'
          })
        },
        [],
        tags
      )

      expect(errors).toEqual([
        {
          type: 'InvalidAction',
          message: 'You cannot set a property on tag "person" because it has not yet been created.',
          details: {
            step: {
              type: 'tag/update',
              meta: {
                tagInstanceId: 'tag/person/0'
              },
              payload: {
                tagId: 'person',
                props: {
                  name: 'foo'
                }
              }
            }
          }
        }
      ])
    })
  })

  describe('when editing a tag that already exists and creating it again later on', () => {
    it('returns an error', async () => {
      const tags = [
        {
          sys: { id: 'somethingElse' }
        },
        {
          sys: { id: 'person' }
        }
      ]

      const errors = await validateChunks(
        function up(migration: any) {
          migration.editTag('person', {
            name: 'foo'
          })

          migration.editTag('somethingElse', {
            name: 'bar'
          })

          migration.createTag('person', {
            name: 'the new name'
          })
        },
        [],
        tags
      )

      expect(errors).toEqual([
        {
          type: 'InvalidAction',
          message: 'Tag with id "person" already exists.',
          details: {
            step: {
              type: 'tag/create',
              meta: {
                tagInstanceId: 'tag/person/1'
              },
              payload: {
                tagId: 'person',
                tagVisibility: 'private'
              }
            }
          }
        }
      ])
    })
  })

  describe('when creating a tag that already exists', () => {
    it('returns an error', async () => {
      const tags = [
        {
          sys: { id: 'somethingElse' },
          name: 'bar'
        },
        {
          sys: { id: 'person' },
          name: 'more'
        }
      ]

      const errors = await validateChunks(
        function up(migration: any) {
          migration.createTag('person', {
            name: 'foo'
          })
        },
        [],
        tags
      )

      expect(errors).toEqual([
        {
          type: 'InvalidAction',
          message: 'Tag with id "person" already exists.',
          details: {
            step: {
              type: 'tag/create',
              meta: {
                tagInstanceId: 'tag/person/0'
              },
              payload: {
                tagId: 'person',
                tagVisibility: 'private'
              }
            }
          }
        }
      ])
    })
  })

  describe('when creating a tag with a name that already exists', () => {
    it('returns an error', async () => {
      const tags = [
        {
          sys: { id: 'somethingElse' },
          name: 'foo'
        },
        {
          sys: { id: 'person' },
          name: 'more'
        }
      ]

      const errors = await validateChunks(
        function up(migration: any) {
          migration.createTag('differentId', {
            name: 'foo'
          })
        },
        [],
        tags
      )

      expect(errors).toEqual([
        {
          type: 'InvalidAction',
          message: 'Tag with name "foo" already exists.',
          details: {
            step: {
              type: 'tag/update',
              meta: {
                tagInstanceId: 'tag/differentId/0'
              },
              payload: {
                tagId: 'differentId',
                props: {
                  name: 'foo'
                }
              }
            }
          }
        }
      ])
    })
  })

  describe('when editing a tag that does not exist', () => {
    it('returns an error', async () => {
      const tags = [
        {
          sys: { id: 'somethingElse' }
        }
      ]

      const errors = await validateChunks(
        function up(migration: any) {
          migration.editTag('person', {
            name: 'foo'
          })

          migration.editTag('somethingElse', {
            name: 'bar'
          })

          migration.editTag('person', {
            name: 'the new name'
          })
        },
        [],
        tags
      )

      expect(errors).toEqual([
        {
          type: 'InvalidAction',
          message: 'You cannot set a property on tag "person" because it does not exist.',
          details: {
            step: {
              type: 'tag/update',
              meta: {
                tagInstanceId: 'tag/person/0'
              },
              payload: {
                tagId: 'person',
                props: {
                  name: 'foo'
                }
              }
            }
          }
        },
        {
          type: 'InvalidAction',
          message: 'You cannot set a property on tag "person" because it does not exist.',
          details: {
            step: {
              type: 'tag/update',
              meta: {
                tagInstanceId: 'tag/person/1'
              },
              payload: {
                tagId: 'person',
                props: {
                  name: 'the new name'
                }
              }
            }
          }
        }
      ])
    })
  })

  describe('when setting the same prop more than once in one chunk', () => {
    it('returns an error', async () => {
      const tags: any[] = []

      const errors = await validateChunks(
        function up(migration: any) {
          const person = migration.createTag('person').name('Person')
          person.name('Person McPersonface')
        },
        [],
        tags
      )

      expect(errors).toEqual([
        {
          type: 'InvalidAction',
          message:
            'You are setting the property "name" on tag "person" more than once. Please set it only once.',
          details: {
            step: {
              type: 'tag/update',
              meta: {
                tagInstanceId: 'tag/person/0'
              },
              payload: {
                tagId: 'person',
                props: {
                  name: 'Person McPersonface'
                }
              }
            }
          }
        }
      ])
    })
  })
})
