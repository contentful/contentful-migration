'use strict';
import validateBatches from '../../offline-api/validation/validate-batches';

const { expect } = require('chai');

const validateChunks = require('./validate-chunks').default;

describe('editor layout plan validation', function () {
  describe('when creating a field group with the same id twice', function () {
    it('returns an error', async function () {
      const contentTypes = [{
        sys: { id: 'page' }
      }];

      const errors = await validateChunks(function (migration) {
        const Page = migration.editContentType('page');
        const editorLayout = Page.createEditorLayout();

        editorLayout
          .createFieldGroup('content', {
            name: 'Content'
          });

        editorLayout
          .createFieldGroup('content', {
            name: 'Content'
          });
      }, contentTypes);

      expect(errors).to.eql([
        {
          type: 'InvalidAction',
          message: 'Field group with id "content" for content type "page" cannot be created more than once.',
          details: {
            step: {
              type: 'contentType/createEditorLayoutFieldGroup',
              meta: {
                contentTypeInstanceId: 'contentType/page/0'
              },
              payload: {
                contentTypeId: 'page',
                fieldGroupId: 'content',
                parentFieldGroupId: undefined
              }
            }
          }
        }
      ]);
    });
  });
  describe('when creating a field group that already exists', function () {
    it('returns an error', async function () {
      const contentTypes = [{
        sys: { id: 'page' }
      }];

      const editorInterfaces = {
        page: {
          sys: {
            version: 1
          },
          editorLayout: [
            {
              groupId: 'content',
              name: 'Content',
              items: []
            }
          ]
        }
      };

      const errors = await validateChunks(function (migration) {
        const Page = migration.editContentType('page');
        const editorLayout = Page.editEditorLayout();

        editorLayout
          .createFieldGroup('content', {
            name: 'Content'
          });
      }, contentTypes, [], editorInterfaces);

      expect(errors).to.eql([
        {
          type: 'InvalidAction',
          message: 'Field group with id "content" for content type "page" already exists.',
          details: {
            step: {
              type: 'contentType/createEditorLayoutFieldGroup',
              meta: {
                contentTypeInstanceId: 'contentType/page/0'
              },
              payload: {
                contentTypeId: 'page',
                fieldGroupId: 'content',
                parentFieldGroupId: undefined
              }
            }
          }
        }
      ]);
    });
  });
  describe('when deleting a field group that doesn\'t exist', function () {
    it('returns an error', async function () {
      const contentTypes = [{
        sys: { id: 'page' }
      }];

      const errors = await validateChunks(function (migration) {
        const Page = migration.editContentType('page');
        const editorLayout = Page.createEditorLayout();

        editorLayout.deleteFieldGroup('content');
      }, contentTypes);

      expect(errors).to.eql([
        {
          type: 'InvalidAction',
          message: 'You cannot delete a field group with id "content" on content type "page" because it does not exist.',
          details: {
            step: {
              type: 'contentType/deleteEditorLayoutFieldGroup',
              meta: {
                contentTypeInstanceId: 'contentType/page/0'
              },
              payload: {
                contentTypeId: 'page',
                fieldGroupId: 'content'
              }
            }
          }
        }
      ]);
    });
  });
  describe('when deleting a field group with the same id twice', function () {
    it('returns an error', async function () {
      const contentTypes = [{
        sys: { id: 'page' }
      }];

      const editorInterfaces = {
        page: {
          sys: {
            version: 1
          },
          editorLayout: [
            {
              groupId: 'content',
              name: 'Content',
              items: []
            }
          ]
        }
      };

      const errors = await validateChunks(function (migration) {
        const Page = migration.editContentType('page');
        const editorLayout = Page.createEditorLayout();

        editorLayout.deleteFieldGroup('content');
        editorLayout.deleteFieldGroup('content');
      }, contentTypes, [], editorInterfaces);

      expect(errors).to.eql([
        {
          type: 'InvalidAction',
          message: 'Field group with id "content" on content type "page" cannot be deleted more than once.',
          details: {
            step: {
              type: 'contentType/deleteEditorLayoutFieldGroup',
              meta: {
                contentTypeInstanceId: 'contentType/page/0'
              },
              payload: {
                contentTypeId: 'page',
                fieldGroupId: 'content'
              }
            }
          }
        }
      ]);
    });
  });
  describe.only('when saving an editor layout with more than 2 levels of nesting', function () {
    it('returns an error', async function () {
      const contentTypes = [{
        sys: { id: 'page' }
      }];

      const errors = await validateBatches(function (migration) {
        const Page = migration.editContentType('page');
        // Page.createField('name').name('Internal name').type('Symbol');
        // Page.createField('title').name('Page title').type('Symbol');
        const editorLayout = Page.createEditorLayout();

        editorLayout
          .createFieldGroup('settings', {
            name: 'Settings'
          });

        editorLayout.editFieldGroup('settings')
          .createFieldGroup('seo')
          .name('SEO');

        editorLayout.editFieldGroup('seo')
          .createFieldGroup('keywords')
          .name('Keywords');
      }, contentTypes);

      expect(errors).to.eql([
        {
        }
      ]);
    });
  });
  describe('field movement', () => {
    let testCts, testEis;
    beforeEach(() => {
      testCts = [{
        sys: { id: 'page' },
        fields: [{
          id: 'foo',
          name: 'Foo',
          type: 'Symbol'
        },
        {
          id: 'bar',
          name: 'Bar',
          type: 'Symbol'
        },
        {
          id: 'baz',
          name: 'Baz',
          type: 'Symbol'
        }]
      }];

      testEis = {
        page: {
          sys: {
            version: 1
          },
          editorLayout: [
            {
              groupId: 'content',
              name: 'Content',
              items: [{ fieldId: 'foo' }]
            },
            {
              groupId: 'settings',
              name: 'Settings',
              items: [{
                groupId: 'seo',
                name: 'Seo',
                items: [{ fieldId: 'bar' }, { fieldId: 'baz' }]
              }]
            }
          ]
        }
      };
    });

    describe('when field does not exist', () => {
      it('returns an error', async () => {
        const errors = await validateChunks(function (migration) {
          const Page = migration.editContentType('page');
          const editorLayout = Page.editEditorLayout();

          editorLayout
            .moveField('not_existing').toTheTopOfFieldGroup();
        }, testCts, [], testEis);

        expect(errors).to.eql([
          {
            type: 'InvalidAction',
            message: 'Field "not_existing" does not exist',
            details: {
              step: {
                type: 'contentType/moveFieldInEditorLayout',
                meta: { contentTypeInstanceId: 'contentType/page/0' },
                payload: {
                  contentTypeId: 'page',
                  fieldId: 'not_existing',
                  fieldGroupId: undefined,
                  movement: { direction: 'toTheTopOfFieldGroup', pivot: undefined }
                }
              }
            }
          }
        ]);
      });
    });
    describe('when direction is invalid', () => {
      it('returns an error', async () => {
        const errors = await validateChunks(function (migration) {
          const Page = migration.editContentType('page');
          const editorLayout = Page.editEditorLayout();

          editorLayout
            .moveField('foo').toTheCloud();
        }, testCts, [], testEis);

        expect(errors).to.eql([
          {
            type: 'InvalidAction',
            message: 'Field "foo" cannot be moved: invalid direction "toTheCloud"',
            details: {
              step: {
                type: 'contentType/moveFieldInEditorLayout',
                meta: { contentTypeInstanceId: 'contentType/page/0' },
                payload: {
                  contentTypeId: 'page',
                  fieldId: 'foo',
                  fieldGroupId: undefined,
                  movement: { direction: 'toTheCloud', pivot: undefined }
                }
              }
            }
          }
        ]);
      });
    });
    describe('when moved field and pivot field are the same', () => {
      it('returns an error', async () => {
        const errors = await validateChunks(function (migration) {
          const Page = migration.editContentType('page');
          const editorLayout = Page.editEditorLayout();

          editorLayout
            .moveField('foo').afterField('foo');
        }, testCts, [], testEis);

        expect(errors).to.eql([
          {
            type: 'InvalidAction',
            message: 'Field "foo" cannot be moved using itself as pivot',
            details: {
              step: {
                type: 'contentType/moveFieldInEditorLayout',
                meta: { contentTypeInstanceId: 'contentType/page/0' },
                payload: {
                  contentTypeId: 'page',
                  fieldId: 'foo',
                  fieldGroupId: undefined,
                  movement: { direction: 'afterField', pivot: 'foo' }
                }
              }
            }
          }
        ]);
      });
    });
    describe('when pivot field does not exist', () => {
      it('returns an error', async () => {
        const errors = await validateChunks(function (migration) {
          const Page = migration.editContentType('page');
          const editorLayout = Page.editEditorLayout();

          editorLayout
            .moveField('foo').afterField('not_existing');
        }, testCts, [], testEis);

        expect(errors).to.eql([
          {
            type: 'InvalidAction',
            message: 'Field "foo" cannot be moved: pivot field "not_existing" does not exist',
            details: {
              step: {
                type: 'contentType/moveFieldInEditorLayout',
                meta: { contentTypeInstanceId: 'contentType/page/0' },
                payload: {
                  contentTypeId: 'page',
                  fieldId: 'foo',
                  fieldGroupId: undefined,
                  movement: { direction: 'afterField', pivot: 'not_existing' }
                }
              }
            }
          }
        ]);
      });
    });
    describe('when pivot field is not provided', () => {
      it('returns an error', async () => {
        const errors = await validateChunks(function (migration) {
          const Page = migration.editContentType('page');
          const editorLayout = Page.editEditorLayout();

          editorLayout
            .moveField('foo').afterField();
        }, testCts, [], testEis);

        expect(errors).to.eql([
          {
            type: 'InvalidAction',
            message: 'Field "foo" cannot be moved: missing field pivot',
            details: {
              step: {
                type: 'contentType/moveFieldInEditorLayout',
                meta: { contentTypeInstanceId: 'contentType/page/0' },
                payload: {
                  contentTypeId: 'page',
                  fieldId: 'foo',
                  fieldGroupId: undefined,
                  movement: { direction: 'afterField', pivot: undefined }
                }
              }
            }
          }
        ]);
      });
    });
    describe('when pivot field group is not provided', () => {
      it('returns an error', async () => {
        const errors = await validateChunks(function (migration) {
          const Page = migration.editContentType('page');
          const editorLayout = Page.editEditorLayout();

          editorLayout
            .moveField('foo').afterFieldGroup();
        }, testCts, [], testEis);

        expect(errors).to.eql([
          {
            type: 'InvalidAction',
            message: 'Field "foo" cannot be moved: missing field group pivot',
            details: {
              step: {
                type: 'contentType/moveFieldInEditorLayout',
                meta: { contentTypeInstanceId: 'contentType/page/0' },
                payload: {
                  contentTypeId: 'page',
                  fieldId: 'foo',
                  fieldGroupId: undefined,
                  movement: { direction: 'afterFieldGroup', pivot: undefined }
                }
              }
            }
          }
        ]);
      });
    });
    describe('when pivot field group does not exist', () => {
      it('returns an error', async () => {
        const errors = await validateChunks(function (migration) {
          const Page = migration.editContentType('page');
          const editorLayout = Page.editEditorLayout();

          editorLayout
            .moveField('foo').afterFieldGroup('not_existing_group');
        }, testCts, [], testEis);

        expect(errors).to.eql([
          {
            type: 'InvalidAction',
            message: 'Field "foo" cannot be moved: pivot field group "not_existing_group" does not exist',
            details: {
              step: {
                type: 'contentType/moveFieldInEditorLayout',
                meta: { contentTypeInstanceId: 'contentType/page/0' },
                payload: {
                  contentTypeId: 'page',
                  fieldId: 'foo',
                  fieldGroupId: undefined,
                  movement: { direction: 'afterFieldGroup', pivot: 'not_existing_group' }
                }
              }
            }
          }
        ]);
      });
    });
    describe('when destination field group does not exist', () => {
      it('returns an error', async () => {
        const errors = await validateChunks(function (migration) {
          const Page = migration.editContentType('page');
          const editorLayout = Page.editEditorLayout();

          editorLayout
            .moveField('foo').toTheTopOfFieldGroup('not_existing_group');
        }, testCts, [], testEis);

        expect(errors).to.eql([
          {
            type: 'InvalidAction',
            message: 'Field "foo" cannot be moved: destination group "not_existing_group" does not exist',
            details: {
              step: {
                type: 'contentType/moveFieldInEditorLayout',
                meta: { contentTypeInstanceId: 'contentType/page/0' },
                payload: {
                  contentTypeId: 'page',
                  fieldId: 'foo',
                  fieldGroupId: undefined,
                  movement: { direction: 'toTheTopOfFieldGroup', pivot: 'not_existing_group' }
                }
              }
            }
          }
        ]);
      });
    });
    describe('when destination field group is not provided', () => {
      it('succeeds', async () => {
        const errors = await validateChunks(function (migration) {
          const Page = migration.editContentType('page');
          const editorLayout = Page.editEditorLayout();

          editorLayout
            .moveField('foo').toTheTopOfFieldGroup();
        }, testCts, [], testEis);

        expect(errors).to.eql([]);
      });
    });
  });
});
