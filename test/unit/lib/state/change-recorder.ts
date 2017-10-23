'use strict'

const Bluebird = require('bluebird')
const { expect } = require('chai')

import ChangeRecorder from '../../../../src/lib/state/change-recorder'

const makeStandardState = function () {
  const initialState = new Map([
    ['foo', 'foo'],
    ['bar', 'bar']
  ])

  return new ChangeRecorder<String>(initialState)
}

describe('ChangeRecorder', function () {
  it('needs to be opened before accessing StateInterface method', async function () {
    const state = makeStandardState()

    // TODO: iterate over all methods that are 'assertForOpenBatch'

    await expect(state.get('foo')).to.be.rejected()
  })

  it('needs to be closed before calling getBatches', async function () {
    const state = makeStandardState()

    await state.startBatch('batch name')
    await expect(state.getBatches()).to.be.rejected()
  })

  it('writes to and reads from staged state', async function () {
    const state = makeStandardState()

    await state.startBatch('batch name')
    await state.set('bar', 'baz')

    expect(await state.get('bar')).to.eql('baz')
    expect(await state.getCommited('bar')).to.eql('bar')
  })

  it('reads from committed state if not present in staged state', async function () {
    const state = makeStandardState()

    await state.startBatch('batch name')

    const entity = await state.get('foo')
    const committedEntity = await state.getCommited('foo')

    expect(entity).to.eql('foo')
    expect(committedEntity).to.eql('foo')
  })

  it('copies payload to staged state on deletion', async function () {
    const state = makeStandardState()

    await state.startBatch('batch name')
    await state.delete('foo')

    expect(await state.wasDeleted('foo')).to.be.true()
    expect(await state.stagedForDeletion('foo')).to.be.true()
  })

  it('commits changes on batch close', async function () {
    const state = makeStandardState()

    await state.startBatch('batch name')
    await state.set('bar', 'baz')
    await state.set('something-new', 'fourty-two')
    await state.endBatch()

    await state.startBatch('second batch')
    await state.delete('foo')
    expect(await state.getCommited('something-new')).to.eql('fourty-two')
    await state.endBatch()

    const batches = await state.getBatches()

    expect(batches.length).to.eql(2)

    const [firstBatch, secondBatch] = batches

    expect(firstBatch.id).to.eql('batch name')
    expect(await firstBatch.state.getAll()).to.eql(new Map([
      ['bar', 'baz'],
      ['something-new', 'fourty-two']
    ]))

    expect(secondBatch.id).to.eql('second batch')
    expect(await secondBatch.state.getAll()).to.eql(new Map())
    expect(await secondBatch.state.getDeletions()).to.eql(new Map([
      ['foo', 'foo']
    ]))
  })
})
