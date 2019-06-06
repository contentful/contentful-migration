'use strict';

const Bluebird = require('bluebird');
const co = Bluebird.coroutine;

const { expect } = require('chai');
const cli = require('./cli');
const { createDevEnvironment, deleteDevEnvironment, getDevEditorInterface } = require('../helpers/client');

const uuid = require('uuid');
const ENVIRONMENT_ID = uuid.v4();

const SOURCE_TEST_SPACE = process.env.CONTENTFUL_INTEGRATION_SOURCE_SPACE;

describe('apply sidebar migration examples', function () {
  this.timeout(30000);
  let environmentId;

  before(co(function * () {
    this.timeout(30000);
    environmentId = yield createDevEnvironment(SOURCE_TEST_SPACE, ENVIRONMENT_ID);
  }));

  after(co(function * () {
    yield deleteDevEnvironment(SOURCE_TEST_SPACE, environmentId);
  }));

  it('migrates the sidebar with 24-add-sidebar-widget-to-existing-content-type.js', function (done) {
    cli()
      .run(`--space-id ${SOURCE_TEST_SPACE} --environment-id ${environmentId} ./examples/24-add-sidebar-widget-to-existing-content-type.js`)
      .on(/\? Do you want to apply the migration \(Y\/n\)/).respond('y\n')
      .end(co(function * () {
        const editorInterfaces = yield getDevEditorInterface(SOURCE_TEST_SPACE, environmentId, 'customSidebar');
        const sidebar = editorInterfaces.sidebar;
        expect(sidebar).to.eql([
          {
            'disabled': false,
            'settings': {},
            'widgetId': 'publication-widget',
            'widgetNamespace': 'sidebar-builtin'
          },
          {
            'disabled': false,
            'settings': {
              'tagField': 'tags',
              'imageField': 'image'
            },
            'widgetId': 'imageTaggingExtensionId',
            'widgetNamespace': 'extension'
          }
        ]);
        done();
      }));
  });
});
