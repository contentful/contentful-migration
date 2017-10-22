'use strict';

const Bluebird = require('bluebird');
const { expect } = require('chai');
const sinon = require('sinon');

const migrationSteps = require('../../../src/lib/migration-steps').migration;
const IntentList = require('../../../src/lib/intent-list').default;
const deletedCtEntries = require('../../../src/lib/deleted-ct-entries').default;

const co = Bluebird.coroutine;

describe('Entries fetcher', function () {
  it('adds entries info to content types', co(function * () {
    const intents = yield migrationSteps(function up (migration) {
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

    const intentList = new IntentList(intents);
    const sliced = intentList.slice();
    const raw = sliced.map((list) => list.toRaw());

    const contentTypes = [
      { sys: { id: 'foo' } },
      { sys: { id: 'bar' } }
    ];
    const contentTypesWithEntryInfo = yield deletedCtEntries(raw, contentTypes, request);

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
