import test from 'blue-tape'
import { cloneMock } from '../mocks/entities'
import setupHttpMock from '../mocks/http'
import { wrapUsageCollection } from '../../../lib/entities/usage'
import {
  entityCollectionWrappedTest
} from '../test-creators/instance-entity-methods'

function setup (promise) {
  return {
    httpMock: setupHttpMock(promise),
    entityMock: cloneMock('usage')
  }
}

test('Usage period collection is wrapped', (t) => {
  entityCollectionWrappedTest(t, setup, {
    wrapperMethod: wrapUsageCollection
  })
})
