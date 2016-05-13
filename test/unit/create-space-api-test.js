import test from 'blue-tape'

import createSpaceApi, {__RewireAPI__ as createSpaceApiRewireApi} from '../../lib/create-space-api'
import {contentTypeMock, assetMock, entryMock} from './utils/mocks'
import setupHttpEntitiesMocks from './utils/setup-http-entities-mocks'
import {cloneMock} from './utils/mocks'
import {
  makeGetEntityTest,
  makeGetCollectionTest,
  makeCreateEntityTest,
  makeCreateEntityWithIdTest,
  makeEntityMethodFailingTest
} from './utils/make-entity-tests'

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
  makeCreateEntityTest(t, setup, teardown, {
    entityType: 'contentType',
    mockToReturn: contentTypeMock,
    methodToTest: 'createContentType'
  })
})

test('API call createContentType fails', (t) => {
  makeEntityMethodFailingTest(t, setup, teardown, {
    methodToTest: 'createContentType'
  })
})

test('API call createContentTypeWithId', (t) => {
  makeCreateEntityWithIdTest(t, setup, teardown, {
    entityType: 'contentType',
    mockToReturn: contentTypeMock,
    methodToTest: 'createContentTypeWithId',
    entityPath: 'content_types'
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

test('API call createEntry', (t) => {
  makeCreateEntityTest(t, setup, teardown, {
    entityType: 'entry',
    mockToReturn: entryMock,
    methodToTest: 'createEntry'
  })
})

test('API call createEntry fails', (t) => {
  makeEntityMethodFailingTest(t, setup, teardown, {
    methodToTest: 'createEntry'
  })
})

test('API call createEntryWithId', (t) => {
  makeCreateEntityWithIdTest(t, setup, teardown, {
    entityType: 'entry',
    mockToReturn: entryMock,
    methodToTest: 'createEntryWithId',
    entityPath: 'entries'
  })
})

test('API call createEntryWithId fails', (t) => {
  makeEntityMethodFailingTest(t, setup, teardown, {
    methodToTest: 'createEntryWithId'
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

test('API call createAsset', (t) => {
  makeCreateEntityTest(t, setup, teardown, {
    entityType: 'asset',
    mockToReturn: assetMock,
    methodToTest: 'createAsset'
  })
})

test('API call createAsset fails', (t) => {
  makeEntityMethodFailingTest(t, setup, teardown, {
    methodToTest: 'createAsset'
  })
})

test('API call createAssetWithId', (t) => {
  makeCreateEntityWithIdTest(t, setup, teardown, {
    entityType: 'asset',
    mockToReturn: assetMock,
    methodToTest: 'createAssetWithId',
    entityPath: 'assets'
  })
})

test('API call createAssetWithId fails', (t) => {
  makeEntityMethodFailingTest(t, setup, teardown, {
    methodToTest: 'createAssetWithId'
  })
})
