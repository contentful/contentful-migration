'use strict';

const { expect } = require('chai');
const Bluebird = require('bluebird');

const validateChunks = require('./validate-chunks').default;

describe('tag plan validation', function () {
  describe('when creating a tag twice', function () {
    it('returns an error', Bluebird.coroutine(function * () {
      const errors = yield validateChunks(function up (migration) {
        migration.createTag('person', {
          name: 'foo'
        });
        migration.createTag('person', {
          name: 'the new name'
        });
      }, []);

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

  describe('when creating a tag that already exists', function () {
    it('returns an error', Bluebird.coroutine(function * () {
      const tags = [{
        sys: { id: 'somethingElse' }
      }, {
        sys: { id: 'person' }
      }];

      const errors = yield validateChunks(function up (migration) {
        migration.createTag('person', {
          name: 'foo'
        });
      }, [], tags);

      expect(errors).to.eql([
        {
          type: 'InvalidAction',
          message: 'Tag with id "person" already exists.',
          details: {
            step: {
              'type': 'tag/create',
              'meta': {
                'tagInstanceId': 'tag/person/0'
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
});
