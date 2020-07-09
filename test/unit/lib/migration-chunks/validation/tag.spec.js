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
        sys: { id: 'somethingElse' }, name: 'bar'
      }, {
        sys: { id: 'person' }, name: 'more'
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

  describe('when creating a tag with a name that already exists', function () {
    it('returns an error', Bluebird.coroutine(function * () {
      const tags = [{
        sys: { id: 'somethingElse' }, name: 'foo'
      }, {
        sys: { id: 'person' }, name: 'more'
      }];

      const errors = yield validateChunks(function up (migration) {
        migration.createTag('differentId', {
          name: 'foo'
        });
      }, [], tags);

      expect(errors).to.eql([
        {
          type: 'InvalidAction',
          message: 'Tag with name "foo" already exists.',
          details: {
            step: {
              'type': 'tag/update',
              'meta': {
                'tagInstanceId': 'tag/differentId/0'
              },
              'payload': {
                'tagId': 'differentId',
                'props': {
                  'name': 'foo'
                }
              }
            }
          }
        }
      ]);
    }));
  });

  describe('when editing a tag before creating it', function () {
    it('returns an error', Bluebird.coroutine(function * () {
      const tags = [{
        sys: { id: 'somethingElse' }
      }];

      const errors = yield validateChunks(function up (migration) {
        migration.editTag('person', {
          name: 'foo'
        });

        migration.createTag('person', {
          name: 'the new name'
        });
      }, [], tags);

      expect(errors).to.eql([
        {
          type: 'InvalidAction',
          message: 'You cannot set a property on tag "person" because it has not yet been created.',
          details: {
            step: {
              'type': 'tag/update',
              'meta': {
                'tagInstanceId': 'tag/person/0'
              },
              'payload': {
                'tagId': 'person',
                'props': {
                  'name': 'foo'
                }
              }
            }
          }
        }
      ]);
    }));
  });
});
