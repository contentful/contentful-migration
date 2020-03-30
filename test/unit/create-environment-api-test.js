import test from 'blue-tape'

import { toPlainObject } from 'contentful-sdk-core'
import createEnvironmentApi, {__RewireAPI__ as createEnvironmentApiRewireApi} from '../../lib/create-environment-api'
import {
  contentTypeMock,
  editorInterfaceMock,
  assetMock,
  assetWithFilesMock,
  uploadMock,
  entryMock,
  localeMock,
  setupEntitiesMock,
  cloneMock,
  uiExtensionMock,
  snapShotMock
} from './mocks/entities'
import setupHttpMock from './mocks/http'
import {
  makeGetEntityTest,
  makeGetCollectionTest,
  makeCreateEntityTest,
  makeCreateEntityWithIdTest,
  makeEntityMethodFailingTest,
  testGettingEntrySDKObject
} from './test-creators/static-entity-methods'
import { wrapEntry } from '../../lib/entities/entry'
import { wrapAsset } from '../../lib/entities/asset'

function setup (promise) {
  const entitiesMock = setupEntitiesMock(createEnvironmentApiRewireApi)
  const httpMock = setupHttpMock(promise)
  const httpUploadMock = setupHttpMock(promise)
  const api = createEnvironmentApi({ http: httpMock, httpUpload: httpUploadMock })
  return {
    api,
    httpMock,
    httpUploadMock,
    entitiesMock
  }
}

function teardown () {
  createEnvironmentApiRewireApi.__ResetDependency__('entities')
}

test('API call environment delete', (t) => {
  t.plan(1)
  const {api} = setup(Promise.resolve({}))

  return api.delete()
    .then((r) => {
      t.pass('environment was deleted')
      teardown()
    })
})

test('API call environment delete fails', (t) => {
  t.plan(1)
  const error = cloneMock('error')
  const {api} = setup(Promise.reject(error))

  return api.delete()
    .catch((r) => {
      t.equals(r.name, '404 Not Found')
      teardown()
    })
})

test('API call environment update', (t) => {
  t.plan(3)
  const responseData = {
    sys: { id: 'id', type: 'Environment' },
    name: 'updatedname'
  }
  let {api, httpMock, entitiesMock} = setup(Promise.resolve({data: responseData}))
  entitiesMock.environment.wrapEnvironment.returns(responseData)

  // mocks data that would exist in a environment object already retrieved from the server
  api.sys = { id: 'id', type: 'Environment', version: 2 }
  api = toPlainObject(api)

  api.name = 'updatedname'
  return api.update()
    .then((r) => {
      t.looseEqual(r, responseData, 'environment is wrapped')
      t.equals(httpMock.put.args[0][1].name, 'updatedname', 'data is sent')
      t.equals(httpMock.put.args[0][2].headers['X-Contentful-Version'], 2, 'version header is sent')
      teardown()
    })
})

test('API call environment update fails', (t) => {
  t.plan(1)
  const error = cloneMock('error')
  let {api} = setup(Promise.reject(error))

  // mocks data that would exist in a environment object already retrieved from the server
  api.sys = { id: 'id', type: 'Space', version: 2 }
  api = toPlainObject(api)

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

test('API call getEditorInterfaceForContentType', (t) => {
  makeGetEntityTest(t, setup, teardown, {
    entityType: 'editorInterface',
    mockToReturn: editorInterfaceMock,
    methodToTest: 'getEditorInterfaceForContentType'
  })
})

test('API call getEditorInterfaceForContentType fails', (t) => {
  makeEntityMethodFailingTest(t, setup, teardown, {
    methodToTest: 'getEditorInterfaceForContentType'
  })
})

test('API call getEntry', (t) => {
  makeGetEntityTest(t, setup, teardown, {
    entityType: 'entry',
    mockToReturn: entryMock,
    methodToTest: 'getEntry'
  })
})

test('GetSDKEntry from data', (t) => {
  const expectedFunctions = ['toPlainObject', 'update', 'delete', 'publish', 'unpublish', 'archive', 'unarchive', 'isPublished', 'isUpdated', 'isDraft', 'isArchived']
  testGettingEntrySDKObject(t, setup, {
    type: 'entry',
    wrapFunctionName: 'wrapEntry',
    resourceMock: entryMock,
    wrapFunction: wrapEntry,
    expectedFunctions: expectedFunctions,
    getResourceFromDataFunctionName: 'getEntryFromData'
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
      t.equals(httpMock.put.args[0][0], 'entries/entryId', 'entry id is sent')
      t.looseEqual(httpMock.put.args[0][1], entryMock, 'data is sent')
      t.equals(httpMock.put.args[0][2].headers['X-Contentful-Content-Type'], 'contentTypeId', 'content type is specified')
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

test('GetSDKAsset from data', (t) => {
  const expectedFunctions = ['processForLocale', 'processForAllLocales', 'toPlainObject', 'update', 'delete', 'publish', 'unpublish', 'archive', 'unarchive']
  testGettingEntrySDKObject(t, setup, {
    type: 'asset',
    wrapFunctionName: 'wrapAsset',
    resourceMock: assetMock,
    wrapFunction: wrapAsset,
    expectedFunctions: expectedFunctions,
    getResourceFromDataFunctionName: 'getAssetFromData'
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

test('API call createAssetFromFiles', (t) => {
  const { api, httpMock, httpUploadMock, entitiesMock } = setup(Promise.resolve({}))

  entitiesMock.upload.wrapUpload.returns(Promise.resolve(uploadMock))
  httpUploadMock.post.returns(Promise.resolve({
    data: {
      sys: {
        id: 'some_random_id'
      }
    }
  }))
  httpMock.post.returns(Promise.resolve({
    data: assetWithFilesMock
  }))

  return api.createAssetFromFiles({
    fields: {
      file: {
        locale: {
          contentType: 'image/svg+xml',
          fileName: 'filename.svg',
          file: '<svg xmlns="http://www.w3.org/2000/svg"><path fill="red" d="M50 50h150v50H50z"/></svg>'
        },
        locale2: {
          contentType: 'image/svg+xml',
          fileName: 'filename.svg',
          file: '<svg xmlns="http://www.w3.org/2000/svg"><path fill="blue" d="M50 50h150v50H50z"/></svg>'
        }
      }
    }
  })
    .then(() => {
      t.equals(httpUploadMock.post.args[0][1], '<svg xmlns="http://www.w3.org/2000/svg"><path fill="red" d="M50 50h150v50H50z"/></svg>', 'uploads file #1 to upload endpoint')
      t.equals(httpUploadMock.post.args[1][1], '<svg xmlns="http://www.w3.org/2000/svg"><path fill="blue" d="M50 50h150v50H50z"/></svg>', 'uploads file #2 to upload endpoint')
      t.deepEqual(entitiesMock.asset.wrapAsset.args[0][1], assetWithFilesMock, 'wrapAsset was called with proper asset')
    })
})

test('API call getUpload', (t) => {
  makeGetEntityTest(t, setup, teardown, {
    entityType: 'upload',
    mockToReturn: uploadMock,
    methodToTest: 'getUpload'
  })
})

test('API call getUpload fails', (t) => {
  makeEntityMethodFailingTest(t, setup, teardown, {
    methodToTest: 'getUpload'
  })
})

test('API call createUpload', (t) => {
  const { api, httpUploadMock, entitiesMock } = setup(Promise.resolve({}))
  const mockedUpload = {
    sys: {
      id: 'some_random_id'
    }
  }
  httpUploadMock.post.returns(Promise.resolve({
    data: mockedUpload
  }))

  return api.createUpload({
    contentType: 'image/svg',
    fileName: 'filename.svg',
    file: '<svg><path fill="red" d="M50 50h150v50H50z"/></svg>'
  })
    .then(() => {
      t.equals(httpUploadMock.post.args[0][2].headers['Content-Type'], 'application/octet-stream')
      t.equals(httpUploadMock.post.args[0][1], '<svg><path fill="red" d="M50 50h150v50H50z"/></svg>', 'uploads file to upload endpoint')
      t.deepEqual(entitiesMock.upload.wrapUpload.args[0][1], mockedUpload, 'wrapUpload was called with correct raw upload object')
    })
})

test('API call createUpload defaults the content type to octet-stream', (t) => {
  const { api, httpUploadMock, entitiesMock } = setup(Promise.resolve({}))
  const mockedUpload = {
    sys: {
      id: 'some_random_id'
    }
  }
  httpUploadMock.post.returns(Promise.resolve({
    data: mockedUpload
  }))

  return api.createUpload({ // no contentType set here
    fileName: 'filename.svg',
    file: '<svg><path fill="red" d="M50 50h150v50H50z"/></svg>'
  })
    .then(() => {
      t.equals(httpUploadMock.post.args[0][2].headers['Content-Type'], 'application/octet-stream')
      t.equals(httpUploadMock.post.args[0][1], '<svg><path fill="red" d="M50 50h150v50H50z"/></svg>', 'uploads file to upload endpoint')
      t.deepEqual(entitiesMock.upload.wrapUpload.args[0][1], mockedUpload, 'wrapUpload was called with correct raw upload object')
    })
})

test('API call createAssetFromFiles with invalid data', (t) => {
  const { api } = setup(Promise.resolve({}))
  return t.shouldFail(api.createAssetFromFiles({
    fields: {
      file: {
        locale: {}
      }
    }
  }), new Error('Unable to locate a file to upload.'))
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

test('API call getEntrySnapshots snapshots', (t) => {
  makeGetCollectionTest(t, setup, teardown, {
    entityType: 'snapshot',
    mockToReturn: snapShotMock,
    methodToTest: 'getEntrySnapshots'
  })
})

test('API call getEntrySnapshots fails', (t) => {
  makeEntityMethodFailingTest(t, setup, teardown, {
    methodToTest: 'getEntrySnapshots'
  })
})

test('API call getContentTypeSnapshots snapshots', (t) => {
  makeGetCollectionTest(t, setup, teardown, {
    entityType: 'snapshot',
    mockToReturn: snapShotMock,
    methodToTest: 'getContentTypeSnapshots'
  })
})

test('API call getContentTypeSnapshots fails', (t) => {
  makeEntityMethodFailingTest(t, setup, teardown, {
    methodToTest: 'getContentTypeSnapshots'
  })
})

test('API call getUiExtension', (t) => {
  makeGetEntityTest(t, setup, teardown, {
    entityType: 'uiExtension',
    mockToReturn: uiExtensionMock,
    methodToTest: 'getUiExtension'
  })
})

test('API call getUiExtension fails', (t) => {
  makeEntityMethodFailingTest(t, setup, teardown, {
    methodToTest: 'getUiExtension'
  })
})

test('API call getUiExtensions', (t) => {
  makeGetCollectionTest(t, setup, teardown, {
    entityType: 'uiExtension',
    mockToReturn: uiExtensionMock,
    methodToTest: 'getUiExtensions'
  })
})

test('API call getUiExtensions fails', (t) => {
  makeEntityMethodFailingTest(t, setup, teardown, {
    methodToTest: 'getUiExtensions'
  })
})

test('API call createUiExtension', (t) => {
  makeEntityMethodFailingTest(t, setup, teardown, {
    entityType: 'uiExtension',
    mockToReturn: uiExtensionMock,
    methodToTest: 'createUiExtension'
  })
})

test('API call createUiExtension fails', (t) => {
  makeEntityMethodFailingTest(t, setup, teardown, {
    methodToTest: 'createUiExtension'
  })
})

test('API call createUiExtensionWithId', (t) => {
  makeCreateEntityWithIdTest(t, setup, teardown, {
    entityType: 'uiExtension',
    mockToReturn: uiExtensionMock,
    methodToTest: 'createUiExtensionWithId',
    entityPath: 'extensions'
  })
})

test('API call createUiExtensionWithId fails', (t) => {
  makeEntityMethodFailingTest(t, setup, teardown, {
    methodToTest: 'createUiExtensionWithId'
  })
})
