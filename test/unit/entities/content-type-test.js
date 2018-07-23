import test from 'blue-tape'
import {cloneMock} from '../mocks/entities'
import setupHttpMock from '../mocks/http'
import {wrapContentType, wrapContentTypeCollection} from '../../../lib/entities/content-type'
import {
  entityWrappedTest,
  entityCollectionWrappedTest,
  entityUpdateTest,
  entityDeleteTest,
  entityPublishTest,
  entityActionTest,
  entityCollectionActionTest,
  failingActionTest,
  failingVersionActionTest,
  isPublishedTest,
  isUpdatedTest,
  isDraftTest,
  omitAndDeleteFieldTest,
  failingOmitAndDeleteFieldTest
} from '../test-creators/instance-entity-methods'

function setup (promise) {
  return {
    httpMock: setupHttpMock(promise),
    entityMock: cloneMock('contentType')
  }
}

test('ContentType is wrapped', (t) => {
  return entityWrappedTest(t, setup, {
    wrapperMethod: wrapContentType
  })
})

test('ContentType collection is wrapped', (t) => {
  return entityCollectionWrappedTest(t, setup, {
    wrapperMethod: wrapContentTypeCollection
  })
})

test('ContentType update', (t) => {
  return entityUpdateTest(t, setup, {
    wrapperMethod: wrapContentType
  })
})

test('ContentType update fails', (t) => {
  return failingVersionActionTest(t, setup, {
    wrapperMethod: wrapContentType,
    actionMethod: 'update'
  })
})

test('ContentType delete', (t) => {
  return entityDeleteTest(t, setup, {
    wrapperMethod: wrapContentType
  })
})

test('ContentType delete fails', (t) => {
  return failingActionTest(t, setup, {
    wrapperMethod: wrapContentType,
    actionMethod: 'delete'
  })
})

test('ContentType publish', (t) => {
  return entityPublishTest(t, setup, {
    wrapperMethod: wrapContentType
  })
})

test('ContentType publish fails', (t) => {
  return failingVersionActionTest(t, setup, {
    wrapperMethod: wrapContentType,
    actionMethod: 'publish'
  })
})

test('ContentType unpublish', (t) => {
  return entityActionTest(t, setup, {
    wrapperMethod: wrapContentType,
    actionMethod: 'unpublish'
  })
})

test('ContentType unpublish fails', (t) => {
  return failingActionTest(t, setup, {
    wrapperMethod: wrapContentType,
    actionMethod: 'unpublish'
  })
})

test('ContentType getSnapshots fails', (t) => {
  return failingActionTest(t, setup, {
    wrapperMethod: wrapContentType,
    actionMethod: 'getSnapshots'
  })
})

test('ContentType getSnapshot fails', (t) => {
  return failingActionTest(t, setup, {
    wrapperMethod: wrapContentType,
    actionMethod: 'getSnapshot'
  })
})

test('ContentType getEditorInterface', (t) => {
  return entityActionTest(t, setup, {
    wrapperMethod: wrapContentType,
    actionMethod: 'getEditorInterface'
  })
})

test('ContentType getEditorInterface fails', (t) => {
  return failingActionTest(t, setup, {
    wrapperMethod: wrapContentType,
    actionMethod: 'getEditorInterface'
  })
})

test('ContentType getSnapshots', (t) => {
  return entityCollectionActionTest(t, setup, {
    wrapperMethod: wrapContentType,
    actionMethod: 'getSnapshots'
  })
})

test('ContentType getSnapshot', (t) => {
  return entityActionTest(t, setup, {
    wrapperMethod: wrapContentType,
    actionMethod: 'getSnapshot'
  })
})

test('ContentType isPublished', (t) => {
  isPublishedTest(t, setup, {wrapperMethod: wrapContentType})
})

test('ContentType isUpdated', (t) => {
  isUpdatedTest(t, setup, {wrapperMethod: wrapContentType})
})

test('ContentType isDraft', (t) => {
  isDraftTest(t, setup, {wrapperMethod: wrapContentType})
})

test('ContentType omitAndDeleteField', (t) => {
  omitAndDeleteFieldTest(t, setup, {wrapperMethod: wrapContentType})
})

test('ContentType omitAndDeleteField fails', (t) => {
  failingOmitAndDeleteFieldTest(t, setup, {wrapperMethod: wrapContentType})
})
