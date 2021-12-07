'use strict';
const { expect } = require('chai');
const validateChunks = require('./validate-chunks').default;

describe('tag plan validation', function () {
  describe('when creating a tag twice', function () {
    it('returns an error', async function () {
      const errors = await validateChunks(function up (migration) {
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
      ]);
    });
  });

  describe('when editing a tag before creating it', function () {
    it('returns an error', async function () {
      const tags = [{
        sys: { id: 'somethingElse' }
      }];

      const errors = await validateChunks(function up (migration) {
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
      ]);
    });
  });

  describe('when editing a tag that already exists and creating it again later on', function () {
    it('returns an error', async function () {
      const tags = [{
        sys: { id: 'somethingElse' }
      }, {
        sys: { id: 'person' }
      }];

      const errors = await validateChunks(function up (migration) {
        migration.editTag('person', {
          name: 'foo'
        });

        migration.editTag('somethingElse', {
          name: 'bar'
        });

        migration.createTag('person', {
          name: 'the new name'
        });
      }, [], tags);

      expect(errors).to.eql([
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
      ]);
    });
  });

  describe('when creating a tag that already exists', function () {
    it('returns an error', async function () {
      const tags = [{
        sys: { id: 'somethingElse' }, name: 'bar'
      }, {
        sys: { id: 'person' }, name: 'more'
      }];

      const errors = await validateChunks(function up (migration) {
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
      ]);
    });
  });

  describe('when creating a tag with a name that already exists', function () {
    it('returns an error', async function () {
      const tags = [{
        sys: { id: 'somethingElse' }, name: 'foo'
      }, {
        sys: { id: 'person' }, name: 'more'
      }];

      const errors = await validateChunks(function up (migration) {
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
      ]);
    });
  });

  describe('when editing a tag that does not exist', function () {
    it('returns an error', async function () {
      const tags = [{
        sys: { id: 'somethingElse' }
      }];

      const errors = await validateChunks(function up (migration) {
        migration.editTag('person', {
          name: 'foo'
        });

        migration.editTag('somethingElse', {
          name: 'bar'
        });

        migration.editTag('person', {
          name: 'the new name'
        });
      }, [], tags);

      expect(errors).to.eql([
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
      ]);
    });
  });

  describe('when setting the same prop more than once in one chunk', function () {
    it('returns an error', async function () {
      const tags = [];

      const errors = await validateChunks(function up (migration) {
        const person = migration.createTag('person').name('Person');
        person.name('Person McPersonface');
      }, [], tags);

      expect(errors).to.eql([
        {
          type: 'InvalidAction',
          message: 'You are setting the property "name" on tag "person" more than once. Please set it only once.',
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
      ]);
    });
  });
});
