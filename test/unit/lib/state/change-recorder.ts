'use strict';

const Bluebird = require('bluebird');
const { expect } = require('chai');

import ChangeRecorder from '../../../../src/lib/state/change-recorder';

describe('State', function () {
  it('can get an entity', async function  () {
    const state = new ChangeRecorder<String>(new Map([
      ['foo', 'foo'],
      ['bar', 'bar']
    ]));

    expect(await state.get('foo')).to.eql('foo');
    expect(await state.get('bar')).to.eql('bar');
  });

  it('can tell if it has an entity', async function () {
    const state = new ChangeRecorder<String>(new Map([
      ['foo', 'foo'],
      ['bar', 'bar']
    ]));

    expect(await state.has('foo')).to.eql(true);
    expect(await state.has('baz')).to.eql(false);
  })

  it('throws if it cannot get an entity', async function () {
    const state = new ChangeRecorder<String>(new Map([
      ['foo', 'foo'],
      ['bar', 'bar']
    ]));

    await expect(state.get('baz')).to.be.rejected()
  });

  it('throws if it cannot delete an entity', async function () {
    const state = new ChangeRecorder<String>(new Map([
      ['foo', 'foo'],
      ['bar', 'bar']
    ]));

    await expect(state.delete('baz')).to.be.rejected()
  });

  it('can delete an entity', async function () {
    const state = new ChangeRecorder<String>(new Map([
      ['foo', 'foo'],
      ['bar', 'bar']
    ]));

    await state.delete('foo');
    expect(await state.has('foo')).to.eql(false);
    expect(await state.wasDeleted('foo')).to.eql(true);
  });

  it('can delete and set an entity again', async function () {
    const state = new ChangeRecorder<String>(new Map([
      ['foo', 'foo'],
      ['bar', 'bar']
    ]));

    await state.delete('foo');
    expect(await state.has('foo')).to.eql(false);
    expect(await state.wasDeleted('foo')).to.eql(true);

    await state.set('foo', 'bar');
    expect(await state.has('foo')).to.eql(true);
    expect(await state.wasDeleted('foo')).to.eql(false);

  });
});
