import test from 'blue-tape'
import { cloneMock } from '../mocks/entities'
import setupHttpMock from '../mocks/http'
import { wrapUsagePeriodCollection } from '../../../lib/entities/usage-period'
import {
  entityCollectionWrappedTest
} from '../test-creators/instance-entity-methods'

function setup (promise) {
  return {
    httpMock: setupHttpMock(promise),
    entityMock: cloneMock('usage-period')
  }
}

test('Usage period collection is wrapped', (t) => {
  entityCollectionWrappedTest(t, setup, {
    wrapperMethod: wrapUsagePeriodCollection
  })
})
