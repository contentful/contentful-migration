const Bluebird = require('bluebird');
const path = require('path');
const { createManagementClient } = require('../../bin/lib/contentful-client');
const { expect } = require('chai');
const createDog = require('../../examples/01-angry-dog');
const modifyDog = require('../../examples/02-friendly-dog');
const longExample = require('../../examples/03-long-example');
const invalidScript = require('../../examples/05-plan-errors');
const idChange = require('../../examples/change-field-id');
const deleteContentType = require('../../examples/delete-content-type');
const fieldValidation = require('../../examples/09-validate-validations');

const createMigrationParser = require('../../lib/migration-parser');
const executor = require('../../lib/executor');
const co = Bluebird.coroutine;

const SOURCE_TEST_SPACE = process.env.CONTENTFUL_INTEGRATION_SOURCE_SPACE;

const config = {
  accessToken: process.env.CONTENTFUL_INTEGRATION_MANAGEMENT_TOKEN,
  application: 'contentful.migration-cli.integration-test/0.0.0'
};

const client = createManagementClient(config);

const makeRequest = function (spaceId, requestConfig) {
  requestConfig.url = path.join(spaceId, requestConfig.url);
  return client.rawRequest(requestConfig);
};

const waitForJobCompletion = co(function * (makeRequest, spaceId, jobId) {
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

// returns dev space ID
const createDevSpace = co(function * (makeRequest, spaceId, name) {
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

describe('the migration', function () {
  this.timeout(30000);
  let migrationParser;
  let migrator;
  let request;

  before(co(function * () {
    this.timeout(30000);
    const devSpaceId = yield createDevSpace(makeRequest, SOURCE_TEST_SPACE, 'migration test dev space');
    request = makeRequest.bind(null, devSpaceId);
    migrationParser = createMigrationParser(request);
    migrator = co(function * (migration) {
      const requests = yield migrationParser(migration);
      yield executor(requests, request);
    });
  }));

  after(co(function * () {
    yield request({
      method: 'DELETE',
      url: '',
      headers: {
        'X-Contentful-Beta-Dev-Spaces': 1
      }
    });
  }));


  it('creates a content type', co(function * () {
    yield migrator(createDog);

    const dogResult = yield request({
      method: 'GET',
      url: '/content_types/dog',
      headers: {
        'X-Contentful-Beta-Dev-Spaces': 1
      }
    });

    expect(dogResult.name).to.eql('angry dog');
    expect(dogResult.description).to.eql('super angry');

    expect(dogResult.fields).to.eql([
      {
        id: 'woofs',
        name: 'woof woof',
        type: 'Number',
        required: true,
        disabled: false,
        localized: false,
        omitted: false,
        validations: []
      }
    ]);
  }));

  it('deletes a field', co(function * () {
    yield Bluebird.delay(5000);

    yield migrator(function (migration) {
      const dog = migration.editContentType('dog');
      dog.deleteField('woofs');
    });

    const dogResultAfterDelete = yield request({
      method: 'GET',
      url: '/content_types/dog',
      headers: {
        'X-Contentful-Beta-Dev-Spaces': 1
      }
    });

    expect(dogResultAfterDelete.fields.length).to.eql(0);
  }));

  it('modifies an existing field', co(function * () {
    yield migrator(modifyDog);

    const resultAfterModify = yield request({
      method: 'GET',
      url: '/content_types/dog',
      headers: {
        'X-Contentful-Beta-Dev-Spaces': 1
      }
    });

    expect(resultAfterModify.name).to.eql('Friendly dog');
    expect(resultAfterModify.description).to.eql('Who\'s a good boy? He is!');
    expect(resultAfterModify.fields).to.eql([
      {
        id: 'goodboys',
        name: 'number of times he has been called a good boy',
        type: 'Number',
        required: false,
        disabled: false,
        localized: false,
        omitted: false,
        validations: []
      }
    ]);
  }));

  it('changes field IDs', co(function * () {
    yield migrator(idChange);

    const resultAfterModify = yield request({
      method: 'GET',
      url: '/content_types/dog',
      headers: {
        'X-Contentful-Beta-Dev-Spaces': 1
      }
    });

    expect(resultAfterModify.fields).to.eql([
      {
        id: 'aDifferentId',
        name: 'ID switching is fun!',
        type: 'Number',
        required: false,
        disabled: false,
        localized: false,
        omitted: false,
        validations: []
      }
    ]);
  }));

  it('deletes a contentType', co(function * () {
    let result;
    yield migrator(deleteContentType);

    try {
      yield request({
        method: 'GET',
        url: `/content_types/dog`,
        headers: {
          'X-Contentful-Beta-Dev-Spaces': 1
        }
      });
    } catch (err) {
      expect(err.name).to.eql('NotFound');
    }

    expect(result).to.be.undefined();
  }));

  it('allows valid field validation', co(function * () {
    yield migrator(fieldValidation);

    const resultAfterModify = yield request({
      method: 'GET',
      url: '/content_types/dieatary-food',
      headers: {
        'X-Contentful-Beta-Dev-Spaces': 1
      }
    });

    expect(resultAfterModify.fields).to.eql([
      {
        id: 'name',
        name: 'name of the food',
        type: 'Symbol',
        required: false,
        disabled: false,
        localized: false,
        omitted: false,
        validations: [{
          unique: true
        }]
      },
      {
        id: 'calories',
        name: 'amount of calories the food contains',
        type: 'Number',
        required: false,
        disabled: false,
        localized: false,
        omitted: false,
        validations: [{
          range: {
            max: 500
          }
        }]
      }
    ]);
  }));

  it('works when creating and modifying lots of things', co(function * () {
    yield migrator(longExample);

    const person = yield request({
      method: 'GET',
      url: '/content_types/person',
      headers: {
        'X-Contentful-Beta-Dev-Spaces': 1
      }
    });
    const animal = yield request({
      method: 'GET',
      url: '/content_types/animal',
      headers: {
        'X-Contentful-Beta-Dev-Spaces': 1
      }
    });

    expect(person.name).to.eql('Person');
    expect(person.description).to.eql('A content type for a person');
    expect(person.fields).to.eql([
      {
        id: 'age',
        name: 'Age',
        type: 'Number',
        required: true,
        disabled: false,
        localized: false,
        omitted: false,
        validations: []
      },
      {
        id: 'fullName',
        name: 'Full name',
        type: 'Symbol',
        required: true,
        disabled: false,
        localized: true,
        omitted: false,
        validations: []
      },
      {
        id: 'pet',
        name: 'Their pet',
        type: 'Link',
        linkType: 'Entry',
        required: false,
        disabled: false,
        localized: false,
        omitted: false,
        validations: []
      }
    ]);

    expect(animal.name).to.eql('Animal');
    expect(animal.description).to.eql('An animal');
    expect(animal.fields).to.eql([
      {
        id: 'species',
        name: 'The species of the animal',
        type: 'Symbol',
        required: true,
        disabled: false,
        localized: false,
        omitted: false,
        validations: []
      },
      {
        id: 'isFurry',
        name: 'Is this a furry animal',
        type: 'Boolean',
        required: false,
        disabled: false,
        localized: false,
        omitted: false,
        validations: []
      },
      {
        id: 'name',
        name: 'The name of the animal',
        type: 'Symbol',
        required: true,
        localized: true,
        disabled: false,
        omitted: false,
        validations: []
      }
    ]);
  }));

  it('throws an error when the script is invalid', co(function * () {
    let result;

    try {
      result = yield migrationParser(invalidScript);
    } catch (err) {
      expect(err).to.be.an('error');
      expect(err.message).to.include('Chunks validation failed');
    }

    expect(result).to.be.undefined();
  }));
});
