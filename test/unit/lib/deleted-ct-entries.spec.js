'use strict';

const Bluebird = require('bluebird');
const { expect } = require('chai');
const sinon = require('sinon');

const migrationPlan = require('../../../lib/migration-chunks');
const migrationSteps = require('../../../lib/migration-steps');
const deletedCtEntries = require('../../../lib/deleted-ct-entries');

const co = Bluebird.coroutine;

describe('Entries fetcher', function () {
  it('adds entries info to content types', co(function * () {
    const steps = yield migrationSteps(function up (migration) {
      migration.deleteContentType('foo');
      migration.deleteContentType('bar');
    });


    const request = sinon.stub();
    request
      .withArgs({
        method: 'GET',
        url: '/entries?sys.contentType.sys.id=foo'
      })
      .resolves({ items: ['item', 'item'] });

    request
      .withArgs({
        method: 'GET',
        url: '/entries?sys.contentType.sys.id=bar'
      })
      .resolves({ items: [] });

    const plan = migrationPlan(steps);
    const contentTypes = [
      { sys: { id: 'foo' } },
      { sys: { id: 'bar' } }
    ];
    const contentTypesWithEntryInfo = yield deletedCtEntries(plan, contentTypes, request);

    expect(contentTypesWithEntryInfo).to.eql([
      {
        sys: { id: 'foo' },
        hasEntries: true
      },
      {
        sys: { id: 'bar' }
      }
    ]);
  }));
});
