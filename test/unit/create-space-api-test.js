import test from 'blue-tape'

import createSpaceApi, {__RewireAPI__ as createSpaceApiRewireApi} from '../../lib/create-space-api'
import {contentTypeMock, assetMock, entryMock} from './utils/mocks'
import setupHttpEntitiesMocks from './utils/setup-http-entities-mocks'
import {cloneMock} from './utils/mocks'
import {makeGetEntityTest, makeGetCollectionTest, makeEntityMethodFailingTest} from './utils/make-entity-tests'

function setup (promise) {
  const {httpMock, entitiesMock} = setupHttpEntitiesMocks(
    createSpaceApiRewireApi, promise
  )
  const api = createSpaceApi({ http: httpMock })
  return {
    api,
    httpMock,
    entitiesMock
  }
}

function teardown () {
  createSpaceApiRewireApi.__ResetDependency__('entities')
}

test('API call space delete', (t) => {
  t.plan(1)
  const {api} = setup(Promise.resolve({}))

  return api.delete()
  .then((r) => {
    t.pass('space was deleted')
    teardown()
  })
})

test('API call space delete fails', (t) => {
  t.plan(1)
  const error = cloneMock('error')
  const {api} = setup(Promise.reject(error))

  return api.delete()
  .catch((r) => {
    t.equals(r.name, '404 Not Found')
    teardown()
  })
})

test('API call getContentType', (t) => {
  makeGetEntityTest(t, setup, teardown, {
    entityType: 'contentType',
    mockToReturn: contentTypeMock,
    methodToTest: 'getContentType'
  })
})

test('API call getContentType fails', (t) => {
  makeEntityMethodFailingTest(t, setup, teardown, {
    methodToTest: 'getContentType'
  })
})

test('API call getContentTypes', (t) => {
  makeGetCollectionTest(t, setup, teardown, {
    entityType: 'contentType',
    mockToReturn: contentTypeMock,
    methodToTest: 'getContentTypes'
  })
})

test('API call getContentTypes fails', (t) => {
  makeEntityMethodFailingTest(t, setup, teardown, {
    methodToTest: 'getContentTypes'
  })
})

test('API call createContentType', (t) => {
  t.plan(2)
  const {api, httpMock, entitiesMock} = setup(Promise.resolve({}))
  entitiesMock.contentType.wrapContentType.returns(contentTypeMock)

  return api.createContentType(contentTypeMock)
  .then((r) => {
    t.looseEqual(r, contentTypeMock)
    t.looseEqual(httpMock.post.args[0][1], contentTypeMock, 'data is sent')
    teardown()
  })
})

test('API call createContentType fails', (t) => {
  makeEntityMethodFailingTest(t, setup, teardown, {
    methodToTest: 'createContentType'
  })
})

test('API call createContentTypeWithId', (t) => {
  t.plan(3)
  const id = 'post'
  const {api, httpMock, entitiesMock} = setup(Promise.resolve({}))
  entitiesMock.contentType.wrapContentType.returns(contentTypeMock)

  return api.createContentTypeWithId(id, contentTypeMock)
  .then((r) => {
    t.looseEqual(r, contentTypeMock)
    t.equals(httpMock.put.args[0][0], 'content_types/' + id, 'specified id is sent')
    t.looseEqual(httpMock.put.args[0][1], contentTypeMock, 'data is sent')
    teardown()
  })
})

test('API call createContentTypeWithId fails', (t) => {
  makeEntityMethodFailingTest(t, setup, teardown, {
    methodToTest: 'createContentTypeWithId'
  })
})

test('API call getEntry', (t) => {
  makeGetEntityTest(t, setup, teardown, {
    entityType: 'entry',
    mockToReturn: entryMock,
    methodToTest: 'getEntry'
  })
})

test('API call getEntry fails', (t) => {
  makeEntityMethodFailingTest(t, setup, teardown, {
    methodToTest: 'getEntry'
  })
})

test('API call getEntries', (t) => {
  makeGetCollectionTest(t, setup, teardown, {
    entityType: 'entry',
    mockToReturn: entryMock,
    methodToTest: 'getEntries'
  })
})

test('API call getEntries fails', (t) => {
  makeEntityMethodFailingTest(t, setup, teardown, {
    methodToTest: 'getEntries'
  })
})

test('API call getAsset', (t) => {
  makeGetEntityTest(t, setup, teardown, {
    entityType: 'asset',
    mockToReturn: assetMock,
    methodToTest: 'getAsset'
  })
})

test('API call getAsset fails', (t) => {
  makeEntityMethodFailingTest(t, setup, teardown, {
    methodToTest: 'getAsset'
  })
})

test('API call getAssets', (t) => {
  makeGetCollectionTest(t, setup, teardown, {
    entityType: 'asset',
    mockToReturn: assetMock,
    methodToTest: 'getAssets'
  })
})

test('API call getAssets fails', (t) => {
  makeEntityMethodFailingTest(t, setup, teardown, {
    methodToTest: 'getAssets'
  })
})
