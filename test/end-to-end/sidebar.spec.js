'use strict';

const { expect } = require('chai');
const cli = require('./cli');
const { createDevEnvironment, deleteDevEnvironment, getDevEditorInterface } = require('../helpers/client');
const { DEFAULT_SIDEBAR_LIST } = require('../../built/lib/action/sidebarwidget');

const uuid = require('uuid');
const ENVIRONMENT_ID = uuid.v4();

const SOURCE_TEST_SPACE = process.env.CONTENTFUL_SPACE_ID;

describe('apply sidebar migration examples', function () {
  this.timeout(30000);
  let environmentId;

  before(async () => {
    this.timeout(30000);
    environmentId = await createDevEnvironment(SOURCE_TEST_SPACE, ENVIRONMENT_ID);
  });

  after(async () => {
    await deleteDevEnvironment(SOURCE_TEST_SPACE, environmentId);
  });

  it('migrates the sidebar with 24-add-sidebar-widgets-to-new-content-type.js', function (done) {
    cli()
      .run(`--space-id ${SOURCE_TEST_SPACE} --environment-id ${environmentId} ./examples/24-add-sidebar-widgets-to-new-content-type.js`)
      .on(/\? Do you want to apply the migration \(Y\/n\)/).respond('y\n')
      .end(async () => {
        const editorInterfaces = await getDevEditorInterface(SOURCE_TEST_SPACE, environmentId, 'customSidebar');
        const sidebar = editorInterfaces.sidebar;

        expect(sidebar).to.eql([
          ...DEFAULT_SIDEBAR_LIST,
          {
            disabled: false,
            settings: {
              tagField: 'tags',
              imageField: 'image'
            },
            widgetId: 'imageTaggingExtensionId',
            widgetNamespace: 'extension'
          }
        ]);
        done();
      });
  });

  it('migrates the sidebar with 27-add-sidebar-widgets-to-existing-content-type.js', function (done) {
    cli()
      .run(`--space-id ${SOURCE_TEST_SPACE} --environment-id ${environmentId} ./examples/27-add-sidebar-widgets-to-existing-content-type.js`)
      .on(/\? Do you want to apply the migration \(Y\/n\)/).respond('y\n')
      .end(async () => {
        const editorInterfaces = await getDevEditorInterface(SOURCE_TEST_SPACE, environmentId, 'richTextTest');
        const sidebar = editorInterfaces.sidebar;
        expect(sidebar).to.eql([
          ...DEFAULT_SIDEBAR_LIST,
          {
            disabled: false,
            settings: {
              tagField: 'tags',
              imageField: 'image'
            },
            widgetId: 'imageTaggingExtensionId',
            widgetNamespace: 'extension'
          }
        ]);
        done();
      });
  });
});
