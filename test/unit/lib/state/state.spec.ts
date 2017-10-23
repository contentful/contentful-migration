'use strict';

const Bluebird = require('bluebird');
const { expect } = require('chai');

import State from '../../../../src/lib/state/index';

const co = Bluebird.coroutine;

describe('State', function () {
  it('can get an entity', async function  () {
    const state = new State<String>(new Map([
      ['foo', 'foo'],
      ['bar', 'bar']
    ]));

    expect(await state.get('foo')).to.eql('foo');
    expect(await state.get('bar')).to.eql('bar');
  });

  it('can get all entities', async function () {
    const state = new State<String>(new Map([
      ['foo', 'foo'],
      ['bar', 'bar']
    ]));

    expect(await state.getAll()).to.eql(new Map([
      ['foo', 'foo'],
      ['bar', 'bar']
    ]));
  });

  it('can iterate all entities', async function () {
    const state = new State<String>(new Map([
      ['foo', 'foos'],
      ['bar', 'bars']
    ]));

    const iterated = []
    for await (const entity of state.entityIterator) {
      iterated.push(entity);
    }
    expect(iterated).to.eql([
      'foos', 'bars'
    ])
  });

  it('can tell if it has an entity', async function () {
    const state = new State<String>(new Map([
      ['foo', 'foo'],
      ['bar', 'bar']
    ]));

    expect(await state.has('foo')).to.eql(true);
    expect(await state.has('baz')).to.eql(false);
  })

  it('throws if it cannot get an entity', async function () {
    const state = new State<String>(new Map([
      ['foo', 'foo'],
      ['bar', 'bar']
    ]));

    await expect(state.get('baz')).to.be.rejected()
  });

  it('throws if it cannot delete an entity', async function () {
    const state = new State<String>(new Map([
      ['foo', 'foo'],
      ['bar', 'bar']
    ]));

    await expect(state.delete('baz')).to.be.rejected()
  });

  it('can delete an entity', async function () {
    const state = new State<String>(new Map([
      ['foo', 'foo'],
      ['bar', 'bar']
    ]));

    await state.delete('foo');
    expect(await state.has('foo')).to.eql(false);
    expect(await state.wasDeleted('foo')).to.eql(true);

    expect(await state.getDeletions()).to.eql(new Map([
      ['foo', 'foo']
    ]));
  });

  it('can iterate all deleted entities', async function () {
    const state = new State<String>(new Map([
      ['foo', 'foos'],
      ['bar', 'bars']
    ]));

    await state.delete('foo');
    await state.delete('bar');

    const iterated = []
    for await (const entity of state.deletionIterator) {
      iterated.push(entity);
    }
    expect(iterated).to.eql([
      'foos', 'bars'
    ])
  });

  it('can delete and set an entity again', async function () {
    const state = new State<String>(new Map([
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
