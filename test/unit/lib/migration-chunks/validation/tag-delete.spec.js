'use strict'

const { expect } = require('chai')
const validateChunks = require('./validate-chunks').default

describe('tag delete validation', function () {
  describe('when deleting a tag twice', function () {
    it('returns an error', async function () {
      const tags = [
        {
          sys: { id: 'foo' }
        }
      ]

      const errors = await validateChunks(
        function up(migration) {
          migration.deleteTag('foo')
          migration.deleteTag('foo')
        },
        [],
        tags
      )

      expect(errors).to.eql([
        {
          type: 'InvalidAction',
          message: 'Tag with id "foo" cannot be deleted more than once.',
          details: {
            step: {
              type: 'tag/delete',
              meta: {
                tagInstanceId: 'tag/foo/1'
              },
              payload: {
                tagId: 'foo'
              }
            }
          }
        }
      ])
    })
  })

  describe('when deleting several tags several times', function () {
    it('returns the right errors', async function () {
      const tags = [{ sys: { id: 'foo' } }, { sys: { id: 'bar' } }, { sys: { id: 'baz' } }]

      const errors = await validateChunks(
        function up(migration) {
          migration.deleteTag('foo')
          migration.deleteTag('bar')
          migration.deleteTag('baz')
          migration.deleteTag('foo')
          migration.deleteTag('bar')
          migration.deleteTag('baz')
          migration.deleteTag('foo')
          migration.deleteTag('bar')
          migration.deleteTag('baz')
        },
        [],
        tags
      )

      expect(errors).to.eql([
        {
          type: 'InvalidAction',
          message: 'Tag with id "foo" cannot be deleted more than once.',
          details: {
            step: {
              type: 'tag/delete',
              meta: {
                tagInstanceId: 'tag/foo/1'
              },
              payload: {
                tagId: 'foo'
              }
            }
          }
        },
        {
          type: 'InvalidAction',
          message: 'Tag with id "bar" cannot be deleted more than once.',
          details: {
            step: {
              type: 'tag/delete',
              meta: {
                tagInstanceId: 'tag/bar/1'
              },
              payload: {
                tagId: 'bar'
              }
            }
          }
        },
        {
          type: 'InvalidAction',
          message: 'Tag with id "baz" cannot be deleted more than once.',
          details: {
            step: {
              type: 'tag/delete',
              meta: {
                tagInstanceId: 'tag/baz/1'
              },
              payload: {
                tagId: 'baz'
              }
            }
          }
        },
        {
          type: 'InvalidAction',
          message: 'Tag with id "foo" cannot be deleted more than once.',
          details: {
            step: {
              type: 'tag/delete',
              meta: {
                tagInstanceId: 'tag/foo/2'
              },
              payload: {
                tagId: 'foo'
              }
            }
          }
        },
        {
          type: 'InvalidAction',
          message: 'Tag with id "bar" cannot be deleted more than once.',
          details: {
            step: {
              type: 'tag/delete',
              meta: {
                tagInstanceId: 'tag/bar/2'
              },
              payload: {
                tagId: 'bar'
              }
            }
          }
        },
        {
          type: 'InvalidAction',
          message: 'Tag with id "baz" cannot be deleted more than once.',
          details: {
            step: {
              type: 'tag/delete',
              meta: {
                tagInstanceId: 'tag/baz/2'
              },
              payload: {
                tagId: 'baz'
              }
            }
          }
        }
      ])
    })
  })

  describe('when deleting a tag that does not exist', function () {
    it('returns an error', async function () {
      const tags = [
        {
          sys: { id: 'foo' }
        },
        {
          sys: { id: 'bar' }
        }
      ]

      const errors = await validateChunks(
        function up(migration) {
          migration.deleteTag('baz')
        },
        [],
        tags
      )

      expect(errors).to.eql([
        {
          type: 'InvalidAction',
          message: 'You cannot delete tag "baz" because it does not exist.',
          details: {
            step: {
              type: 'tag/delete',
              meta: {
                tagInstanceId: 'tag/baz/0'
              },
              payload: {
                tagId: 'baz'
              }
            }
          }
        }
      ])
    })
  })

  describe('when editing a tag that has been deleted earlier', function () {
    it('returns an error', async function () {
      const tags = [
        {
          sys: { id: 'foo' }
        }
      ]

      const errors = await validateChunks(
        function up(migration) {
          migration.deleteTag('foo')
          migration.editTag('foo').name('another name')
        },
        [],
        tags
      )

      expect(errors).to.eql([
        {
          type: 'InvalidAction',
          message: 'Tag with id "foo" cannot be edited because it was deleted before.',
          details: {
            step: {
              type: 'tag/update',
              meta: {
                tagInstanceId: 'tag/foo/1'
              },
              payload: {
                tagId: 'foo',
                props: {
                  name: 'another name'
                }
              }
            }
          }
        }
      ])
    })

    it('returns an error also when several edits after several deletes', async function () {
      const tags = [
        {
          sys: { id: 'foo' },
          name: 'tag name'
        },
        {
          sys: { id: 'bar' }
        }
      ]

      const errors = await validateChunks(
        function up(migration) {
          migration.editTag('bar').name('confusedYet?')
          migration.deleteTag('foo')
          migration.editTag('foo').name('yet?')
          migration.deleteTag('bar')
          migration.editTag('bar').name('last name')
        },
        [],
        tags
      )

      expect(errors).to.eql([
        {
          type: 'InvalidAction',
          message: 'Tag with id "foo" cannot be edited because it was deleted before.',
          details: {
            step: {
              type: 'tag/update',
              meta: {
                tagInstanceId: 'tag/foo/1'
              },
              payload: {
                tagId: 'foo',
                props: {
                  name: 'yet?'
                }
              }
            }
          }
        },
        {
          type: 'InvalidAction',
          message: 'Tag with id "bar" cannot be edited because it was deleted before.',
          details: {
            step: {
              type: 'tag/update',
              meta: {
                tagInstanceId: 'tag/bar/2'
              },
              payload: {
                tagId: 'bar',
                props: {
                  name: 'last name'
                }
              }
            }
          }
        }
      ])
    })
  })
})
