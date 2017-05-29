import test from 'tape'
import { cloneMock } from '../mocks/entities'
import setupHttpMock from '../mocks/http'
import { wrapOrganizationCollection } from '../../../lib/entities/organization'
import {
  entityCollectionWrappedTest
} from '../test-creators/instance-entity-methods'

function setup (promise) {
  return {
    httpMock: setupHttpMock(promise),
    entityMock: cloneMock('organization')
  }
}

test('Organization collection is wrapped', (t) => {
  entityCollectionWrappedTest(t, setup, {
    wrapperMethod: wrapOrganizationCollection
  })
})
