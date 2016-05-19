import test from 'tape'
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
  failingActionTest,
  failingVersionActionTest
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
