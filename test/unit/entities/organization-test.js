import test from 'blue-tape'
import { cloneMock } from '../mocks/entities'
import setupHttpMock from '../mocks/http'

import { wrapOrganization, wrapOrganizationCollection } from '../../../lib/entities/organization'
import {
  entityCollectionWrappedTest,
  entityWrappedTest
} from '../test-creators/instance-entity-methods'

function setup (promise) {
  return {
    httpMock: setupHttpMock(promise),
    entityMock: cloneMock('organization')
  }
}

test('Organization is wrapped', (t) => {
  entityWrappedTest(t, setup, {
    wrapperMethod: wrapOrganization
  })
})

test('Organization collection is wrapped', (t) => {
  entityCollectionWrappedTest(t, setup, {
    wrapperMethod: wrapOrganizationCollection
  })
})
