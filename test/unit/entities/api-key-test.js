import test from 'blue-tape'
import {cloneMock} from '../mocks/entities'
import setupHttpMock from '../mocks/http'
import {wrapApiKey, wrapApiKeyCollection} from '../../../lib/entities/api-key'
import {
  entityWrappedTest,
  entityCollectionWrappedTest,
  entityUpdateTest,
  entityDeleteTest,
  failingActionTest,
  failingVersionActionTest
} from '../test-creators/instance-entity-methods'

function setup (promise) {
  return {
    httpMock: setupHttpMock(promise),
    entityMock: cloneMock('apiKey')
  }
}

test('ApiKey is wrapped', (t) => {
  entityWrappedTest(t, setup, {
    wrapperMethod: wrapApiKey
  })
})

test('ApiKey collection is wrapped', (t) => {
  return entityCollectionWrappedTest(t, setup, {
    wrapperMethod: wrapApiKeyCollection
  })
})

test('ApiKey update', (t) => {
  return entityUpdateTest(t, setup, {
    wrapperMethod: wrapApiKey
  })
})

test('ApiKey update fails', (t) => {
  return failingVersionActionTest(t, setup, {
    wrapperMethod: wrapApiKey,
    actionMethod: 'update'
  })
})

test('ApiKey delete', (t) => {
  return entityDeleteTest(t, setup, {
    wrapperMethod: wrapApiKey
  })
})

test('ApiKey delete fails', (t) => {
  return failingActionTest(t, setup, {
    wrapperMethod: wrapApiKey,
    actionMethod: 'delete'
  })
})
