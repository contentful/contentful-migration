import test from 'blue-tape'

import mixinToPlainObject from 'contentful-sdk-core/mixins/to-plain-object'
import createSpaceApi, {__RewireAPI__ as createSpaceApiRewireApi} from '../../lib/create-space-api'
import {contentTypeMock, assetMock, entryMock, localeMock} from './mocks/entities'
import {setupEntitiesMock} from './mocks/entities'
import setupHttpMock from './mocks/http'
import {cloneMock} from './mocks/entities'
import {
  makeGetEntityTest,
  makeGetCollectionTest,
  makeCreateEntityTest,
  makeCreateEntityWithIdTest,
  makeEntityMethodFailingTest
} from './test-creators/static-entity-methods'

function setup (promise) {
  const entitiesMock = setupEntitiesMock(createSpaceApiRewireApi)
  const httpMock = setupHttpMock(promise)
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

test('API call space update', (t) => {
  t.plan(3)
  const responseData = {
    sys: { id: 'id', type: 'Space' },
    name: 'updatedname'
  }
  let {api, httpMock, entitiesMock} = setup(Promise.resolve({data: responseData}))
  entitiesMock.space.wrapSpace.returns(responseData)

  // mocks data that would exist in a space object already retrieved from the server
  api.sys = { id: 'id', type: 'Space', version: 2 }
  api = mixinToPlainObject(api)

  api.name = 'updatedname'
  return api.update()
  .then((r) => {
    t.looseEqual(r, responseData, 'space is wrapped')
    t.equals(httpMock.put.args[0][1].name, 'updatedname', 'data is sent')
    t.equals(httpMock.put.args[0][2].headers['X-Contentful-Version'], 2, 'version header is sent')
    teardown()
  })
})

test('API call space update fails', (t) => {
  t.plan(1)
  const error = cloneMock('error')
  let {api} = setup(Promise.reject(error))

  // mocks data that would exist in a space object already retrieved from the server
  api.sys = { id: 'id', type: 'Space', version: 2 }
  api = mixinToPlainObject(api)

  return api.update()
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
  t.plan(3)
  const {api, httpMock, entitiesMock} = setup(Promise.resolve({}))
  entitiesMock.entry.wrapEntry
  .returns(entryMock)

  return api.createEntry('contentTypeId', entryMock)
  .then((r) => {
    t.looseEqual(r, entryMock)
    t.looseEqual(httpMock.post.args[0][1], entryMock, 'data is sent')
    t.looseEqual(httpMock.post.args[0][2].headers['X-Contentful-Content-Type'], 'contentTypeId', 'content type is specified')
    teardown()
  })
})

test('API call createEntry fails', (t) => {
  makeEntityMethodFailingTest(t, setup, teardown, {
    methodToTest: 'createEntry'
  })
})

test('API call createEntryWithId', (t) => {
  t.plan(4)
  const {api, httpMock, entitiesMock} = setup(Promise.resolve({}))
  entitiesMock.entry.wrapEntry
  .returns(entryMock)

  return api.createEntryWithId('contentTypeId', 'entryId', entryMock)
  .then((r) => {
    t.looseEqual(r, entryMock)
    t.looseEqual(httpMock.put.args[0][0], 'entries/entryId', 'entry id is sent')
    t.looseEqual(httpMock.put.args[0][1], entryMock, 'data is sent')
    t.looseEqual(httpMock.put.args[0][2].headers['X-Contentful-Content-Type'], 'contentTypeId', 'content type is specified')
    teardown()
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

test('API call getLocale', (t) => {
  makeGetEntityTest(t, setup, teardown, {
    entityType: 'locale',
    mockToReturn: localeMock,
    methodToTest: 'getLocale'
  })
})

test('API call getLocale fails', (t) => {
  makeEntityMethodFailingTest(t, setup, teardown, {
    methodToTest: 'getLocale'
  })
})

test('API call getLocales', (t) => {
  makeGetCollectionTest(t, setup, teardown, {
    entityType: 'locale',
    mockToReturn: localeMock,
    methodToTest: 'getLocales'
  })
})

test('API call getLocales fails', (t) => {
  makeEntityMethodFailingTest(t, setup, teardown, {
    methodToTest: 'getLocales'
  })
})

test('API call createLocale', (t) => {
  makeCreateEntityTest(t, setup, teardown, {
    entityType: 'locale',
    mockToReturn: localeMock,
    methodToTest: 'createLocale'
  })
})

test('API call createLocale fails', (t) => {
  makeEntityMethodFailingTest(t, setup, teardown, {
    methodToTest: 'createLocale'
  })
})
