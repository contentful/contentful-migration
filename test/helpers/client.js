'use strict';

const Bluebird = require('bluebird');
const packageVersion = require('../../package.json').version;
const { createManagementClient } = require('../../built/bin/lib/contentful-client');
const createMakeRequest = require('../../built/bin/cli').createMakeRequest;

const config = {
  accessToken: process.env.CONTENTFUL_INTEGRATION_TEST_CMA_TOKEN,
  application: `contentful.migration-cli.e2e-test/${packageVersion}`
};


const client = createManagementClient(config);

const makeRequest = function (spaceId, environmentId, requestConfig) {
  return createMakeRequest(client, { spaceId, environmentId })(requestConfig);
};

const waitForJobCompletion = Bluebird.coroutine(function * (makeRequest, spaceId, environmentId) {
  while (true) {
    try {
      const environmentJob = yield makeRequest(spaceId, environmentId, {
        method: 'GET',
        url: ``
      });

      const status = environmentJob.sys.status.sys.id;
      if (status === 'failed') {
        throw new Error('Could not create dev env');
      }

      if (status === 'ready') {
        return;
      }

      yield Bluebird.delay(1000);
    } catch (error) {
      console.log('Env job failed');
      console.log(JSON.stringify(error));
      throw error;
    }
  }
});

const createDevEnvironment = Bluebird.coroutine(function * (spaceId, environmentId) {
  try {
    yield makeRequest(spaceId, environmentId, {
      method: 'PUT',
      url: '',
      data: {
        name: environmentId
      }
    });

    yield waitForJobCompletion(makeRequest, spaceId, environmentId);
  } catch (error) {
    console.log('Could not initiate dev env job');
    console.log(JSON.stringify(error));
    throw error;
  }
  return environmentId;
});

function getDevContentType (spaceId, environmentId, id) {
  return makeRequest(spaceId, environmentId, {
    method: 'GET',
    url: `/content_types/${id}`
  });
}

function getDevEditorInterface (spaceId, environmentId, id) {
  return makeRequest(spaceId, environmentId, {
    method: 'GET',
    url: `/content_types/${id}/editor_interface`
  });
}

function getEntries (spaceId, environmentId, id) {
  return makeRequest(spaceId, environmentId, {
    method: 'GET',
    url: `/entries?content_type=${id}`
  });
}

function deleteDevEnvironment (spaceId, environmentId) {
  return makeRequest(spaceId, environmentId, {
    method: 'DELETE',
    url: ''
  });
}

function getDevTag (spaceId, environmentId, id) {
  return makeRequest(spaceId, environmentId, {
    method: 'GET',
    url: `/tags/${id}`
  });
}

module.exports = {
  makeRequest,
  createDevEnvironment,
  deleteDevEnvironment,
  getDevContentType,
  getEntries,
  getDevEditorInterface,
  getDevTag
};
