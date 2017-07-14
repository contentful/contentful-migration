import test from 'tape'
import { Promise } from 'es6-promise'
import {cloneMock} from '../mocks/entities'
import setupHttpMock from '../mocks/http'
import {wrapAsset, wrapAssetCollection} from '../../../lib/entities/asset'
import {
  entityWrappedTest,
  entityCollectionWrappedTest,
  entityUpdateTest,
  entityDeleteTest,
  entityPublishTest,
  entityActionTest,
  failingActionTest,
  failingVersionActionTest,
  isPublishedTest,
  isUpdatedTest,
  isDraftTest,
  isArchivedTest
} from '../test-creators/instance-entity-methods'

function setup (promise) {
  return {
    httpMock: setupHttpMock(promise),
    entityMock: cloneMock('asset')
  }
}

test('Asset is wrapped', (t) => {
  entityWrappedTest(t, setup, {
    wrapperMethod: wrapAsset
  })
})

test('Asset collection is wrapped', (t) => {
  return entityCollectionWrappedTest(t, setup, {
    wrapperMethod: wrapAssetCollection
  })
})

test('Asset update', (t) => {
  return entityUpdateTest(t, setup, {
    wrapperMethod: wrapAsset
  })
})

test('Asset update fails', (t) => {
  return failingVersionActionTest(t, setup, {
    wrapperMethod: wrapAsset,
    actionMethod: 'update'
  })
})

test('Asset delete', (t) => {
  return entityDeleteTest(t, setup, {
    wrapperMethod: wrapAsset
  })
})

test('Asset delete fails', (t) => {
  return failingActionTest(t, setup, {
    wrapperMethod: wrapAsset,
    actionMethod: 'delete'
  })
})

test('Asset publish', (t) => {
  return entityPublishTest(t, setup, {
    wrapperMethod: wrapAsset
  })
})

test('Asset publish fails', (t) => {
  return failingVersionActionTest(t, setup, {
    wrapperMethod: wrapAsset,
    actionMethod: 'publish'
  })
})

test('Asset unpublish', (t) => {
  return entityActionTest(t, setup, {
    wrapperMethod: wrapAsset,
    actionMethod: 'unpublish'
  })
})

test('Asset unpublish fails', (t) => {
  return failingActionTest(t, setup, {
    wrapperMethod: wrapAsset,
    actionMethod: 'unpublish'
  })
})

test('Asset archive', (t) => {
  return entityActionTest(t, setup, {
    wrapperMethod: wrapAsset,
    actionMethod: 'archive'
  })
})

test('Asset archive fails', (t) => {
  return failingVersionActionTest(t, setup, {
    wrapperMethod: wrapAsset,
    actionMethod: 'archive'
  })
})

test('Asset unarchive', (t) => {
  return entityActionTest(t, setup, {
    wrapperMethod: wrapAsset,
    actionMethod: 'unarchive'
  })
})

test('Asset unarchive fails', (t) => {
  return failingActionTest(t, setup, {
    wrapperMethod: wrapAsset,
    actionMethod: 'unarchive'
  })
})

test('Asset isPublished', (t) => {
  isPublishedTest(t, setup, {wrapperMethod: wrapAsset})
})

test('Asset isUpdated', (t) => {
  isUpdatedTest(t, setup, {wrapperMethod: wrapAsset})
})

test('Asset isDraft', (t) => {
  isDraftTest(t, setup, {wrapperMethod: wrapAsset})
})

test('Asset isArchived', (t) => {
  isArchivedTest(t, setup, {wrapperMethod: wrapAsset})
})

test('Asset processing for one locale succeeds', (t) => {
  t.plan(3)
  const responseMock = cloneMock('asset')
  responseMock.fields = {
    file: {'en-US': {fileName: 'filename.jpg', url: 'http://server/filename.jpg'}}
  }
  const {httpMock, entityMock} = setup(Promise.resolve({data: responseMock}))
  entityMock.sys.version = 2
  const entity = wrapAsset(httpMock, entityMock)
  return entity.processForLocale('en-US')
    .then((response) => {
      t.equals(httpMock.put.args[0][0], 'assets/id/files/en-US/process', 'correct locale is sent')
      t.equals(httpMock.put.args[0][2].headers['X-Contentful-Version'], 2, 'version header is sent')
      t.equals(httpMock.get.args[0][0], 'assets/id', 'asset was checked after processing')
    })
})

test('Asset processing for one locale fails due to timeout', (t) => {
  t.plan(2)
  const responseMock = cloneMock('asset')
  responseMock.fields = {
    file: {'en-US': {fileName: 'filename.jpg'}} // url property never sent in response
  }
  const {httpMock, entityMock} = setup(Promise.resolve({data: responseMock}))
  entityMock.sys.version = 2
  const entity = wrapAsset(httpMock, entityMock)
  return entity.processForLocale('en-US')
    .catch((error) => {
      t.ok(httpMock.get.callCount > 1, 'asset is checked multiple times')
      t.equals(error.name, 'AssetProcessingTimeout', 'timeout is thrown')
    })
})

test('Asset processing for multiple locales succeeds', (t) => {
  t.plan(6)
  const responseMock = cloneMock('asset')
  responseMock.fields = {
    file: {
      'en-US': {fileName: 'filename.jpg', url: 'http://server/filename.jpg'},
      'de-DE': {fileName: 'filename.jpg', url: 'http://server/filename.jpg'}
    }
  }
  const {httpMock, entityMock} = setup(Promise.resolve({data: responseMock}))
  entityMock.fields = {
    file: {
      'en-US': {fileName: 'filename.jpg', upload: 'http://server/filename.jpg'},
      'de-DE': {fileName: 'filename.jpg', upload: 'http://server/filename.jpg'}
    }
  }
  entityMock.sys.version = 2
  const entity = wrapAsset(httpMock, entityMock)
  return entity.processForAllLocales()
    .then((response) => {
      t.equals(httpMock.put.args[0][0], 'assets/id/files/en-US/process', 'en-US locale is sent')
      t.equals(httpMock.put.args[1][0], 'assets/id/files/de-DE/process', 'de-DE locale is sent')
      t.equals(httpMock.put.args[0][2].headers['X-Contentful-Version'], 2, 'version header is sent for first locale')
      t.equals(httpMock.put.args[1][2].headers['X-Contentful-Version'], 2, 'version header is sent for second locale')
      t.equals(httpMock.get.args[0][0], 'assets/id', 'asset was checked after processing for first locale')
      t.equals(httpMock.get.args[1][0], 'assets/id', 'asset was checked after processing for second locale')
    })
})

test('Asset processing for multiple locales fails due to timeout', (t) => {
  t.plan(2)
  const responseMock = cloneMock('asset')
  responseMock.fields = {
    file: {
      'en-US': {fileName: 'filename.jpg'}, // url property never sent
      'de-DE': {fileName: 'filename.jpg'} // url property never sent
    }
  }
  const {httpMock, entityMock} = setup(Promise.resolve({data: responseMock}))
  entityMock.fields = {
    file: {
      'en-US': {fileName: 'filename.jpg', upload: 'http://server/filename.jpg'},
      'de-DE': {fileName: 'filename.jpg', upload: 'http://server/filename.jpg'}
    }
  }
  entityMock.sys.version = 2
  const entity = wrapAsset(httpMock, entityMock)
  return entity.processForAllLocales()
    .catch((error) => {
      t.ok(httpMock.get.callCount > 1, 'asset is checked multiple times')
      t.equals(error.name, 'AssetProcessingTimeout', 'timeout is thrown')
    })
})
