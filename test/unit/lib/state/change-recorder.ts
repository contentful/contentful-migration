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
});
