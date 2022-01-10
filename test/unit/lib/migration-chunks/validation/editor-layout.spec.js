'use strict';

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
});
