import test from 'blue-tape'
import {cloneMock} from '../mocks/entities'
import setupHttpMock from '../mocks/http'
import {
  wrapPersonalAccessToken,
  wrapPersonalAccessTokenCollection
} from '../../../lib/entities/personal-access-token'
import {
  entityWrappedTest,
  entityCollectionWrappedTest
} from '../test-creators/instance-entity-methods'

function setup (promise) {
  return {
    httpMock: setupHttpMock(promise),
    entityMock: cloneMock('personalAccessToken')
  }
}

test('personalAccessToken is wrapped', (t) => {
  entityWrappedTest(t, setup, {
    wrapperMethod: wrapPersonalAccessToken
  })
})

test('personalAccessToken collection is wrapped', (t) => {
  return entityCollectionWrappedTest(t, setup, {
    wrapperMethod: wrapPersonalAccessTokenCollection
  })
})
