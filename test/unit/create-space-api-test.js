import test from 'blue-tape'
import sinon from 'sinon'

import createSpaceApi, {__RewireAPI__ as createSpaceApiRewireApi} from '../../lib/create-space-api'
import {contentTypeMock, assetMock, entryMock} from './mocks'

let entitiesMock

function setupWithData ({promise}) {
  entitiesMock = {
    contentType: {
      wrapContentType: sinon.stub(),
      wrapContentTypeCollection: sinon.stub()
    },
    entry: {
      wrapEntry: sinon.stub(),
      wrapEntryCollection: sinon.stub()
    },
    asset: {
      wrapAsset: sinon.stub(),
      wrapAssetCollection: sinon.stub()
    }
  }
  createSpaceApiRewireApi.__Rewire__('entities', entitiesMock)
  const getStub = sinon.stub()
  const api = createSpaceApi({
    http: {
      get: getStub.returns(promise)
    }
  })
  return {api, getStub}
}

function teardown () {
  createSpaceApiRewireApi.__ResetDependency__('entities')
}

test('API call getContentType', (t) => {
  t.plan(1)
  const {api} = setupWithData({
    promise: Promise.resolve({ data: contentTypeMock })
  })
  entitiesMock.contentType.wrapContentType.returns(contentTypeMock)

  return api.getContentType('ctid')
  .then((r) => {
    t.looseEqual(r, contentTypeMock)
    teardown()
  })
})

test('API call getContentType fails', (t) => {
  t.plan(1)
  const data = 'error'
  const {api} = setupWithData({
    promise: Promise.reject(data)
  })

  return api.getContentType('ctid')
  .then(() => {}, (r) => {
    t.looseEqual(r, data)
    teardown()
  })
})

test('API call getContentTypes', (t) => {
  t.plan(1)
  const data = {
    total: 100,
    skip: 0,
    limit: 10,
    items: [contentTypeMock]
  }
  const {api} = setupWithData({
    promise: Promise.resolve({ data: data })
  })
  entitiesMock.contentType.wrapContentTypeCollection.returns(data)

  return api.getContentTypes()
  .then((r) => {
    t.looseEqual(r, data)
    teardown()
  })
})

test('API call getContentTypes fails', (t) => {
  t.plan(1)
  const data = 'error'
  const {api} = setupWithData({
    promise: Promise.reject(data)
  })

  return api.getContentTypes()
  .then(() => {}, (r) => {
    t.looseEqual(r, data)
    teardown()
  })
})

test('API call getEntry', (t) => {
  t.plan(1)
  const {api} = setupWithData({
    promise: Promise.resolve({ data: entryMock })
  })
  entitiesMock.entry.wrapEntry.returns(entryMock)

  return api.getEntry('eid')
  .then((r) => {
    t.looseEqual(r, entryMock)
    teardown()
  })
})

test('API call getEntry fails', (t) => {
  t.plan(1)
  const data = 'data'
  const {api} = setupWithData({
    promise: Promise.reject(data)
  })

  return api.getEntry('eid')
  .then(() => {}, (r) => {
    t.looseEqual(r, data)
    teardown()
  })
})

test('API call getEntries', (t) => {
  t.plan(1)

  const data = {
    total: 100,
    skip: 0,
    limit: 10,
    items: [entryMock]
  }

  const {api} = setupWithData({
    promise: Promise.resolve({ data: data })
  })
  entitiesMock.entry.wrapEntryCollection.returns(data)

  return api.getEntries()
  .then((r) => {
    t.looseEqual(r, data, 'returns expected data')
    teardown()
  })
})

test('API call getEntries fails', (t) => {
  t.plan(1)
  const data = 'data'
  const {api} = setupWithData({
    promise: Promise.reject(data)
  })

  return api.getEntries()
  .then(() => {}, (r) => {
    t.looseEqual(r, data)
    teardown()
  })
})

test('API call getAsset', (t) => {
  t.plan(1)
  const {api} = setupWithData({
    promise: Promise.resolve({ data: assetMock })
  })
  entitiesMock.asset.wrapAsset.returns(assetMock)

  return api.getAsset('aid')
  .then((r) => {
    t.looseEqual(r, assetMock)
    teardown()
  })
})

test('API call getAsset fails', (t) => {
  t.plan(1)
  const data = 'data'
  const {api} = setupWithData({
    promise: Promise.reject(data)
  })
  entitiesMock.asset.wrapAsset.returns(data)

  return api.getAsset('aid')
  .then(() => {}, (r) => {
    t.looseEqual(r, data)
    teardown()
  })
})

test('API call getAssets', (t) => {
  t.plan(1)
  const data = {
    total: 100,
    skip: 0,
    limit: 10,
    items: [assetMock]
  }
  const {api} = setupWithData({
    promise: Promise.resolve({ data: data })
  })
  entitiesMock.asset.wrapAssetCollection.returns(data)

  return api.getAssets()
  .then((r) => {
    t.looseEqual(r, data)
    teardown()
  })
})

test('API call getAssets fails', (t) => {
  t.plan(1)
  const data = 'data'
  const {api} = setupWithData({
    promise: Promise.reject(data)
  })

  return api.getAssets()
  .then(() => {}, (r) => {
    t.looseEqual(r, data)
    teardown()
  })
})
