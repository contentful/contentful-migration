'use strict';

const { expect } = require('chai');
const Bluebird = require('bluebird');

const validateChunks = require('./validate-chunks').default;

describe('content type plan validation', function () {
  describe('when creating a tag twice', function () {
    it('returns an error', Bluebird.coroutine(function * () {
      const tags = [{
        sys: { id: 'somethingElse' }
      }];

      const errors = yield validateChunks(function up (migration) {
        migration.createTag('person', {
          name: 'foo'
        });
        migration.createTag('person', {
          name: 'the new name'
        });
      }, tags);

      expect(errors).to.eql([
        {
          type: 'InvalidAction',
          message: 'Tag with id "person" cannot be created more than once.',
          details: {
            step: {
              'type': 'tag/create',
              'meta': {
                'tagInstanceId': 'tag/person/1'
              },
              'payload': {
                'tagId': 'person'
              }
            }
          }
        }
      ]);
    }));
  });

  // TODO:
  // describe('when creating a tag that already exists', function () {
  // })
});
