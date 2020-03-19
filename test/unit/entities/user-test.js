import test from 'blue-tape'
import {cloneMock} from '../mocks/entities'
import setupHttpMock from '../mocks/http'
import {wrapUser, wrapUserCollection} from '../../../lib/entities/user'
import {entityWrappedTest, entityCollectionWrappedTest} from '../test-creators/instance-entity-methods'

function setup (promise) {
  return {
    httpMock: setupHttpMock(promise),
    entityMock: cloneMock('user')
  }
}

test('User is wrapped', (t) => {
  entityWrappedTest(t, setup, {
    wrapperMethod: wrapUser
  })
})

test('User collection is wrapped', (t) => {
  return entityCollectionWrappedTest(t, setup, {
    wrapperMethod: wrapUserCollection
  })
})
