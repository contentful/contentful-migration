'use strict';

const Bluebird = require('bluebird');

const path = require('path');
const { createManagementClient } = require('../../bin/lib/contentful-client');

const config = {
  accessToken: process.env.CONTENTFUL_INTEGRATION_MANAGEMENT_TOKEN,
  application: 'contentful.migration-cli.e2e-test/0.0.0'
};

const client = createManagementClient(config);

const makeRequest = function (spaceId, requestConfig) {
  requestConfig.url = path.join(spaceId, requestConfig.url);
  return client.rawRequest(requestConfig);
};

const waitForJobCompletion = Bluebird.coroutine(function * (makeRequest, spaceId, jobId) {
  while (true) {
    const devSpaceJob = yield makeRequest(spaceId, {
      method: 'GET',
      url: `/dev_space_jobs/${jobId}`,
      headers: {
        'X-Contentful-Beta-Dev-Spaces': 1
      }
    });

    const status = devSpaceJob.status.value;

    if (status === 'failed') {
      throw new Error('Could not create dev space');
    }

    if (status === 'done') {
      return;
    }

    yield Bluebird.delay(1000);
  }
});

const createDevSpace = Bluebird.coroutine(function * (spaceId, name) {
  const devSpaceJob = yield makeRequest(spaceId, {
    method: 'POST',
    url: '/dev_space_jobs',
    headers: {
      'X-Contentful-Beta-Dev-Spaces': 1
    },
    data: {
      name
    }
  });

  const jobId = devSpaceJob.sys.id;

  yield waitForJobCompletion(makeRequest, spaceId, jobId);

  return devSpaceJob.devSpace.sys.id;
});

function getDevContentType (spaceId, id) {
  return makeRequest(spaceId, {
    method: 'GET',
    url: `/content_types/${id}`,
    headers: {
      'X-Contentful-Beta-Dev-Spaces': 1
    }
  });
}

function deleteDevSpace (spaceId) {
  return makeRequest(spaceId, {
    method: 'DELETE',
    url: '',
    headers: {
      'X-Contentful-Beta-Dev-Spaces': 1
    }
  });
}

module.exports = {
  makeRequest,
  createDevSpace,
  deleteDevSpace,
  getDevContentType
};
