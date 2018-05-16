import test from 'blue-tape'
import {cloneMock} from '../mocks/entities'
import setupHttpMock from '../mocks/http'
import {wrapPreviewApiKey, wrapPreviewApiKeyCollection} from '../../../lib/entities/preview-api-key'
import {
  entityWrappedTest,
  entityCollectionWrappedTest
} from '../test-creators/instance-entity-methods'

function setup (promise) {
  return {
    httpMock: setupHttpMock(promise),
    entityMock: cloneMock('previewApiKey')
  }
}

test('PreviewApiKey is wrapped', (t) => {
  entityWrappedTest(t, setup, {
    wrapperMethod: wrapPreviewApiKey
  })
})

test('PreviewApiKey collection is wrapped', (t) => {
  return entityCollectionWrappedTest(t, setup, {
    wrapperMethod: wrapPreviewApiKeyCollection
  })
})
