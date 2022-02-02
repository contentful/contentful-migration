'use strict';
import validateBatches from '../../offline-api/validation/validate-batches';

const { expect } = require('chai');

const validateChunks = require('./validate-chunks').default;

describe('editor layout plan validation', function () {
  describe('when calling editor layout method which doesn’t exist', function () {
    it('returns an error', async function () {
      const contentTypes = [{
        sys: { id: 'page' }
      }];

      const errors = await validateChunks(function (migration) {
        const Page = migration.editContentType('page');
        const editorLayout = Page.createEditorLayout();
        editorLayout.invalidMethod();
      }, contentTypes);

      expect(errors).to.eql([
        {
          type: 'InvalidAction',
          message: '"invalidMethod" is not a valid method for editor layout.',
          details: {
            step: {
              type: 'contentType/callInvalidEditorLayoutMethod',
              meta: {
                contentTypeInstanceId: 'contentType/page/0'
              },
              payload: {
                contentTypeId: 'page',
                invalidMethod: 'invalidMethod'
              }
            }
          }
        }
      ]);
    });
  });
  describe('create editor layout', function () {
    describe('when creating an editor layout for a content type that doesn’t exist', function () {
      it('returns an error', async function () {
        const contentTypes = [];

        const errors = await validateChunks(function (migration) {
          const InvalidCt = migration.editContentType('invalid');
          InvalidCt.createEditorLayout();
        }, contentTypes);

        expect(errors).to.eql([
          {
            type: 'InvalidAction',
            message: 'You cannot update the editor layout for content type "invalid" because it does not exist.',
            details: {
              step: {
                type: 'contentType/createEditorLayout',
                meta: {
                  contentTypeInstanceId: 'contentType/invalid/0'
                },
                payload: {
                  contentTypeId: 'invalid'
                }
              }
            }
          }
        ]);
      });
    });
  });
  describe('create field group', function () {
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
    describe('when field group ID contains invalid character', function () {
      it('returns an error', async function () {
        const contentTypes = [{
          sys: { id: 'page' }
        }];

        const editorInterfaces = {
          page: {
            sys: {
              version: 1
            },
            editorLayout: []
          }
        };

        const errors = await validateChunks(function (migration) {
          const Page = migration.editContentType('page');
          const editorLayout = Page.editEditorLayout();

          editorLayout
            .createFieldGroup('group with wrong character', {
              name: 'Content'
            });
        }, contentTypes, [], editorInterfaces);

        expect(errors).to.eql([
          {
            type: 'InvalidAction',
            message: 'Field group id "group with wrong character" for content type "page" must consist of only letters and numbers.',
            details: {
              step: {
                type: 'contentType/createEditorLayoutFieldGroup',
                meta: {
                  contentTypeInstanceId: 'contentType/page/0'
                },
                payload: {
                  contentTypeId: 'page',
                  fieldGroupId: 'group with wrong character',
                  parentFieldGroupId: undefined
                }
              }
            }
          }
        ]);
      });
    });
    describe('when field group ID is empty', function () {
      it('returns an error', async function () {
        const contentTypes = [{
          sys: { id: 'page' }
        }];

        const editorInterfaces = {
          page: {
            sys: {
              version: 1
            },
            editorLayout: []
          }
        };

        const errors = await validateChunks(function (migration) {
          const Page = migration.editContentType('page');
          const editorLayout = Page.editEditorLayout();

          editorLayout
            .createFieldGroup('', {
              name: 'Content'
            });
        }, contentTypes, [], editorInterfaces);

        expect(errors).to.eql([
          {
            type: 'InvalidAction',
            message: 'Field group id "" for content type "page" must consist of only letters and numbers.',
            details: {
              step: {
                type: 'contentType/createEditorLayoutFieldGroup',
                meta: {
                  contentTypeInstanceId: 'contentType/page/0'
                },
                payload: {
                  contentTypeId: 'page',
                  fieldGroupId: '',
                  parentFieldGroupId: undefined
                }
              }
            }
          }
        ]);
      });
    });
    describe('when field group ID starts with number', function () {
      it('returns an error', async function () {
        const contentTypes = [{
          sys: { id: 'page' }
        }];

        const editorInterfaces = {
          page: {
            sys: {
              version: 1
            },
            editorLayout: []
          }
        };

        const errors = await validateChunks(function (migration) {
          const Page = migration.editContentType('page');
          const editorLayout = Page.editEditorLayout();

          editorLayout
            .createFieldGroup('1group', {
              name: 'Content'
            });
        }, contentTypes, [], editorInterfaces);

        expect(errors).to.eql([
          {
            type: 'InvalidAction',
            message: 'Field group id "1group" for content type "page" must start with a letter.',
            details: {
              step: {
                type: 'contentType/createEditorLayoutFieldGroup',
                meta: {
                  contentTypeInstanceId: 'contentType/page/0'
                },
                payload: {
                  contentTypeId: 'page',
                  fieldGroupId: '1group',
                  parentFieldGroupId: undefined
                }
              }
            }
          }
        ]);
      });
    });
    describe('when field group ID is too long', function () {
      it('returns an error', async function () {
        const contentTypes = [{
          sys: { id: 'page' }
        }];

        const editorInterfaces = {
          page: {
            sys: {
              version: 1
            },
            editorLayout: []
          }
        };

        const errors = await validateChunks(function (migration) {
          const Page = migration.editContentType('page');
          const editorLayout = Page.editEditorLayout();

          editorLayout
            .createFieldGroup('fieldGroupWithIdThatContainsTheRightCharactersButIsTooLong', {
              name: 'Content'
            });
        }, contentTypes, [], editorInterfaces);

        expect(errors).to.eql([
          {
            type: 'InvalidAction',
            message: 'Field group id "fieldGroupWithIdThatContainsTheRightCharactersButIsTooLong" for content type "page" must not exceed 50 characters.',
            details: {
              step: {
                type: 'contentType/createEditorLayoutFieldGroup',
                meta: {
                  contentTypeInstanceId: 'contentType/page/0'
                },
                payload: {
                  contentTypeId: 'page',
                  fieldGroupId: 'fieldGroupWithIdThatContainsTheRightCharactersButIsTooLong',
                  parentFieldGroupId: undefined
                }
              }
            }
          }
        ]);
      });
    });
  });
  describe('update field group', function () {
    describe('when field group name is too long', function () {
      it('returns an error', async function () {
        const contentTypes = [{
          sys: { id: 'page' }
        }];

        const editorInterfaces = {
          page: {
            sys: {
              version: 1
            },
            editorLayout: []
          }
        };

        const errors = await validateChunks(function (migration) {
          const Page = migration.editContentType('page');
          const editorLayout = Page.editEditorLayout();

          editorLayout
            .createFieldGroup('content', {
              name: 'Field group name that is indeed quite a bit too long'
            });
        }, contentTypes, [], editorInterfaces);

        expect(errors).to.eql([
          {
            type: 'InvalidAction',
            message: 'Name for field group with id "content" for content type "page" must not exceed 50 characters.',
            details: {
              step: {
                type: 'contentType/updateEditorLayoutFieldGroup',
                meta: {
                  contentTypeInstanceId: 'contentType/page/0'
                },
                payload: {
                  contentTypeId: 'page',
                  fieldGroupId: 'content',
                  fieldGroupProps: {
                    name: 'Field group name that is indeed quite a bit too long'
                  }
                }
              }
            }
          }
        ]);
      });
    });
  });
  describe('change field group control', function () {
    describe('when field group ID does not exist', function () {
      it('returns an error', async function () {
        const contentTypes = [{
          sys: { id: 'page' }
        }];

        const editorInterfaces = {
          page: {
            sys: {
              version: 1
            },
            editorLayout: []
          }
        };

        const errors = await validateChunks(function (migration) {
          const Page = migration.editContentType('page');
          const editorLayout = Page.editEditorLayout();

          editorLayout.changeFieldGroupControl('content', 'builtin', 'topLevelTab');
        }, contentTypes, [], editorInterfaces);

        expect(errors).to.eql([
          {
            type: 'InvalidAction',
            message: 'Field group "content" does not exist.',
            details: {
              step: {
                type: 'contentType/updateGroupControl',
                meta: {
                  contentTypeInstanceId: 'contentType/page/0'
                },
                payload: {
                  contentTypeId: 'page',
                  fieldGroupId: 'content',
                  groupControl: {
                    settings: undefined,
                    widgetId: 'topLevelTab',
                    widgetNamespace: 'builtin'
                  }
                }
              }
            }
          }
        ]);
      });
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
        const editorLayout = Page.editEditorLayout();

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
  describe('when saving an editor layout with more than 2 levels deep', function () {
    it('returns an error', async function () {
      const contentTypes = [{
        sys: { id: 'page' },
        name: 'Page',
        fields: [{ id: 'title', name: 'Page title', type: 'Symbol' }]
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
              items: [{ fieldId: 'title' }]
            }
          ],
          groupControls: [
            {
              groupId: 'content',
              widgetNamespace: 'builtin',
              widgetId: 'topLevelTab'
            }
          ]
        }
      };
      const errors = await validateBatches(function (migration) {
        const page = migration.editContentType('page');
        const editorLayout = page.editEditorLayout();

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
      }, contentTypes, [], [], [], editorInterfaces);

      expect(errors).to.eql([[{
        type: 'InvalidPayload',
        message: 'Editor layout cannot have more than 2 levels of depth'
      }]]);
    });
  });

  describe('change field group id', () => {
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

    describe('when group id is not defined', () => {
      it('returns an error', async () => {
        const errors = await validateChunks(function (migration) {
          const Page = migration.editContentType('page');
          const editorLayout = Page.editEditorLayout();

          editorLayout.changeFieldGroupId();
        }, testCts, [], testEis);

        expect(errors).to.eql([
          {
            type: 'InvalidAction',
            message: 'Field group id to change not specified',
            details: {
              step: {
                type: 'contentType/changeEditorLayoutFieldGroupId',
                meta: { contentTypeInstanceId: 'contentType/page/0' },
                payload: {
                  contentTypeId: 'page',
                  fieldGroupId: undefined,
                  newFieldGroupId: undefined
                }
              }
            }
          }
        ]);
      });
    });

    describe('when new group id is not defined', () => {
      it('returns an error', async () => {
        const errors = await validateChunks(function (migration) {
          const Page = migration.editContentType('page');
          const editorLayout = Page.editEditorLayout();

          editorLayout.changeFieldGroupId('content');
        }, testCts, [], testEis);

        expect(errors).to.eql([
          {
            type: 'InvalidAction',
            message: 'New id for field group "content" not specified',
            details: {
              step: {
                type: 'contentType/changeEditorLayoutFieldGroupId',
                meta: { contentTypeInstanceId: 'contentType/page/0' },
                payload: {
                  contentTypeId: 'page',
                  fieldGroupId: 'content',
                  newFieldGroupId: undefined
                }
              }
            }
          }
        ]);
      });
    });

    describe('when group id does not exist', () => {
      it('returns an error', async () => {
        const errors = await validateChunks(function (migration) {
          const Page = migration.editContentType('page');
          const editorLayout = Page.editEditorLayout();

          editorLayout.changeFieldGroupId('not_existing');
        }, testCts, [], testEis);

        expect(errors).to.eql([
          {
            type: 'InvalidAction',
            message: 'New id for field group "not_existing" not specified',
            details: {
              step: {
                type: 'contentType/changeEditorLayoutFieldGroupId',
                meta: { contentTypeInstanceId: 'contentType/page/0' },
                payload: {
                  contentTypeId: 'page',
                  fieldGroupId: 'not_existing',
                  newFieldGroupId: undefined
                }
              }
            }
          }
        ]);
      });
    });
    describe('when new group already exists', () => {
      it('returns an error', async () => {
        const errors = await validateChunks(function (migration) {
          const Page = migration.editContentType('page');
          const editorLayout = Page.editEditorLayout();

          editorLayout.changeFieldGroupId('content', 'seo');
        }, testCts, [], testEis);

        expect(errors).to.eql([
          {
            type: 'InvalidAction',
            message: 'Field group "seo" already exists on content type "page"',
            details: {
              step: {
                type: 'contentType/changeEditorLayoutFieldGroupId',
                meta: { contentTypeInstanceId: 'contentType/page/0' },
                payload: {
                  contentTypeId: 'page',
                  fieldGroupId: 'content',
                  newFieldGroupId: 'seo'
                }
              }
            }
          }
        ]);
      });
    });
    describe('when renaming to the same group id', () => {
      it('returns an error', async () => {
        const errors = await validateChunks(function (migration) {
          const Page = migration.editContentType('page');
          const editorLayout = Page.editEditorLayout();

          editorLayout.changeFieldGroupId('content', 'content');
        }, testCts, [], testEis);
        expect(errors).to.eql([
          {
            type: 'InvalidAction',
            message: 'New field group id "content" is the same as original',
            details: {
              step: {
                type: 'contentType/changeEditorLayoutFieldGroupId',
                meta: { contentTypeInstanceId: 'contentType/page/0' },
                payload: {
                  contentTypeId: 'page',
                  fieldGroupId: 'content',
                  newFieldGroupId: 'content'
                }
              }
            }
          }
        ]);
      });
    });
    describe('when field group ID contains invalid character', function () {
      it('returns an error', async function () {
        const errors = await validateChunks(function (migration) {
          const Page = migration.editContentType('page');
          const editorLayout = Page.editEditorLayout();

          editorLayout.changeFieldGroupId('content', 'group with wrong character');
        }, testCts, [], testEis);

        expect(errors).to.eql([
          {
            type: 'InvalidAction',
            message: 'Field group id "group with wrong character" for content type "page" must consist of only letters and numbers.',
            details: {
              step: {
                type: 'contentType/changeEditorLayoutFieldGroupId',
                meta: {
                  contentTypeInstanceId: 'contentType/page/0'
                },
                payload: {
                  contentTypeId: 'page',
                  fieldGroupId: 'content',
                  newFieldGroupId: 'group with wrong character'
                }
              }
            }
          }
        ]);
      });
    });
    describe('when field group ID is empty', function () {
      it('returns an error', async function () {
        const errors = await validateChunks(function (migration) {
          const Page = migration.editContentType('page');
          const editorLayout = Page.editEditorLayout();

          editorLayout.changeFieldGroupId('content', '');
        }, testCts, [], testEis);

        expect(errors).to.eql([
          {
            type: 'InvalidAction',
            message: 'Field group id "" for content type "page" must consist of only letters and numbers.',
            details: {
              step: {
                type: 'contentType/changeEditorLayoutFieldGroupId',
                meta: {
                  contentTypeInstanceId: 'contentType/page/0'
                },
                payload: {
                  contentTypeId: 'page',
                  fieldGroupId: 'content',
                  newFieldGroupId: ''
                }
              }
            }
          }
        ]);
      });
    });
    describe('when field group ID starts with number', function () {
      it('returns an error', async function () {
        const errors = await validateChunks(function (migration) {
          const Page = migration.editContentType('page');
          const editorLayout = Page.editEditorLayout();

          editorLayout.changeFieldGroupId('content', '1group');
        }, testCts, [], testEis);

        expect(errors).to.eql([
          {
            type: 'InvalidAction',
            message: 'Field group id "1group" for content type "page" must start with a letter.',
            details: {
              step: {
                type: 'contentType/changeEditorLayoutFieldGroupId',
                meta: {
                  contentTypeInstanceId: 'contentType/page/0'
                },
                payload: {
                  contentTypeId: 'page',
                  fieldGroupId: 'content',
                  newFieldGroupId: '1group'
                }
              }
            }
          }
        ]);
      });
    });
    describe('when field group ID is too long', function () {
      it('returns an error', async function () {
        const errors = await validateChunks(function (migration) {
          const Page = migration.editContentType('page');
          const editorLayout = Page.editEditorLayout();

          editorLayout.changeFieldGroupId('content', 'fieldGroupWithIdThatContainsTheRightCharactersButIsTooLong');
        }, testCts, [], testEis);

        expect(errors).to.eql([
          {
            type: 'InvalidAction',
            message: 'Field group id "fieldGroupWithIdThatContainsTheRightCharactersButIsTooLong" for content type "page" must not exceed 50 characters.',
            details: {
              step: {
                type: 'contentType/changeEditorLayoutFieldGroupId',
                meta: {
                  contentTypeInstanceId: 'contentType/page/0'
                },
                payload: {
                  contentTypeId: 'page',
                  fieldGroupId: 'content',
                  newFieldGroupId: 'fieldGroupWithIdThatContainsTheRightCharactersButIsTooLong'
                }
              }
            }
          }
        ]);
      });
    });
    describe('when renaming is valid', () => {
      it('succeeds', async () => {
        const errors = await validateChunks(function (migration) {
          const Page = migration.editContentType('page');
          const editorLayout = Page.editEditorLayout();

          editorLayout.changeFieldGroupId('content', 'main');
        }, testCts, [], testEis);
        expect(errors).to.eql([]);
      });
      it('registers new ID for validation', async () => {
        const errors = await validateChunks(function (migration) {
          const Page = migration.editContentType('page');
          const editorLayout = Page.editEditorLayout();

          editorLayout.changeFieldGroupId('content', 'main');
          editorLayout.changeFieldGroupId('main', 'main');
        }, testCts, [], testEis);
        expect(errors).to.eql(
          [
            {
              message: 'New field group id "main" is the same as original',
              type: 'InvalidAction',
              details: {
                step: {
                  meta: {
                    contentTypeInstanceId: 'contentType/page/0'
                  },
                  payload: {
                    contentTypeId: 'page',
                    fieldGroupId: 'main',
                    newFieldGroupId: 'main'
                  },
                  type: 'contentType/changeEditorLayoutFieldGroupId'
                }
              }
            }
          ]
        );
      });
      it('deregisters old ID for validation', async () => {
        const errors = await validateChunks(function (migration) {
          const Page = migration.editContentType('page');
          const editorLayout = Page.editEditorLayout();

          editorLayout.changeFieldGroupId('content', 'main');
          editorLayout.createFieldGroup('content', { name: 'Content' });
        }, testCts, [], testEis);
        expect(errors).to.eql([]);
      });
    });
  });

  describe('when saving an editor layout with more than 5 tabs', function () {
    it('returns an error', async function () {
      const contentTypes = [{
        sys: { id: 'page' },
        name: 'Page',
        fields: [{ id: 'title', name: 'Page title', type: 'Symbol' }]
      }];

      const tabs = [];
      const tabsControls = [];
      for (let i = 0; i < 4; i++) {
        tabs.push({
          groupId: `content${i}`,
          name: `Content${i}`,
          items: [{ fieldId: 'title' }]
        });
        tabsControls.push({
          groupId: `content${i}`,
          widgetNamespace: 'builtin',
          widgetId: 'topLevelTab'
        });
      }

      const editorInterfaces = {
        page: {
          sys: {
            version: 1
          },
          editorLayout: [
            {
              groupId: 'content',
              name: 'Content',
              items: [{ fieldId: 'title' }]
            },
            ...tabs
          ],
          groupControls: [
            {
              groupId: 'content',
              widgetNamespace: 'builtin',
              widgetId: 'topLevelTab'
            },
            ...tabsControls
          ]
        }
      };

      const errors = await validateBatches(function (migration) {
        const page = migration.editContentType('page');
        const editorLayout = page.editEditorLayout();

        editorLayout.createFieldGroup('content5', {
          name: 'Content5'
        });
      }, contentTypes, [], [], [], editorInterfaces);

      expect(errors).to.eql([[{
        type: 'InvalidPayload',
        message: 'Editor layout cannot have more than 5 tabs'
      }]]);
    });
  });

  describe('when saving an editor layout with a tab that has fieldset control', function () {
    it('returns an error', async function () {
      const contentTypes = [{
        sys: { id: 'page' },
        name: 'Page',
        fields: [{ id: 'title', name: 'Page title', type: 'Symbol' }]
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
              items: [{ fieldId: 'title' }]
            },
            {
              groupId: 'settings',
              name: 'Settings',
              items: []
            }
          ],
          groupControls: [
            {
              groupId: 'content',
              widgetNamespace: 'builtin',
              widgetId: 'topLevelTab'
            },
            {
              groupId: 'settings',
              widgetNamespace: 'builtin',
              widgetId: 'topLevelTab'
            }
          ]
        }
      };

      const errors = await validateBatches(function (migration) {
        const page = migration.editContentType('page');
        const editorLayout = page.editEditorLayout();
        editorLayout.changeFieldGroupControl('settings', 'builtin', 'fieldset');
      }, contentTypes, [], [], [], editorInterfaces);

      expect(errors).to.eql([[{
        type: 'InvalidPayload',
        message: 'Editor layout tab "settings" requires a "topLevelTab" widget group control'
      }]]);
    });
  });
  describe('when saving an editor layout with a field set that has tab control', function () {
    it('returns an error', async function () {
      const contentTypes = [{
        sys: { id: 'page' },
        name: 'Page',
        fields: [{ id: 'title', name: 'Page title', type: 'Symbol' }]
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
              items: [{ fieldId: 'title' }, {
                groupId: 'details',
                name: 'Details',
                items: []
              }]
            }
          ],
          groupControls: [
            {
              groupId: 'content',
              widgetNamespace: 'builtin',
              widgetId: 'topLevelTab'
            }
          ]
        }
      };

      const errors = await validateBatches(function (migration) {
        const page = migration.editContentType('page');
        const editorLayout = page.editEditorLayout();
        editorLayout.changeFieldGroupControl('details', 'builtin', 'topLevelTab');
      }, contentTypes, [], [], [], editorInterfaces);

      expect(errors).to.eql([[{
        type: 'InvalidPayload',
        message: 'Editor layout field set "details" cannot have a "topLevelTab" widget group control'
      }]]);
    });
  });

  describe('when saving an editor layout with less than 2 groups', function () {
    it('returns an error', async function () {
      const contentTypes = [{
        sys: { id: 'page' },
        name: 'Page',
        fields: [{ id: 'title', name: 'Page title', type: 'Symbol' }]
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
              items: [{ fieldId: 'title' }, {
                groupId: 'details',
                name: 'Details',
                items: []
              }]
            }
          ],
          groupControls: [
            {
              groupId: 'content',
              widgetNamespace: 'builtin',
              widgetId: 'topLevelTab'
            }
          ]
        }
      };

      const errors = await validateBatches(function (migration) {
        const page = migration.editContentType('page');
        const editorLayout = page.editEditorLayout();
        editorLayout.deleteFieldGroup('details');
      }, contentTypes, [], [], [], editorInterfaces);

      expect(errors).to.eql([[{
        type: 'InvalidPayload',
        message: 'Editor layout cannot have less than 2 groups'
      }]]);
    });
  });
  describe('when saving an editor layout with more than 15 field sets', function () {
    it('returns an error', async function () {
      const contentTypes = [{
        sys: { id: 'page' },
        name: 'Page',
        fields: [{ id: 'title', name: 'Page title', type: 'Symbol' }]
      }];

      const fieldSets = [];
      for (let i = 0; i <= 15; i++) {
        fieldSets.push({
          groupId: `fieldSet${i}`,
          name: `Field set ${i}`,
          items: []
        });
      }

      const editorInterfaces = {
        page: {
          sys: {
            version: 1
          },
          editorLayout: [
            {
              groupId: 'content',
              name: 'Content',
              items: [{ fieldId: 'title' }, ...fieldSets]
            }
          ],
          groupControls: [
            {
              groupId: 'content',
              widgetNamespace: 'builtin',
              widgetId: 'topLevelTab'
            }
          ]
        }
      };

      const errors = await validateBatches(function (migration) {
        const page = migration.editContentType('page');
        const editorLayout = page.editEditorLayout();
        editorLayout.createFieldGroup('details', {
          name: 'Details'
        });
      }, contentTypes, [], [], [], editorInterfaces);

      expect(errors).to.eql([[{
        type: 'InvalidPayload',
        message: 'Editor layout cannot have more than 15 field sets'
      }]]);
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
