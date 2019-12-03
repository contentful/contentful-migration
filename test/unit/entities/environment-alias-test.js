import test from 'blue-tape'
import {cloneMock} from '../mocks/entities'
import setupHttpMock from '../mocks/http'
import {wrapEnvironmentAlias, wrapEnvironmentAliasCollection} from '../../../lib/entities/environment-alias'
import {
  entityWrappedTest,
  entityCollectionWrappedTest,
  entityUpdateTest,
  failingVersionActionTest
} from '../test-creators/instance-entity-methods'

function setup (promise) {
  return {
    httpMock: setupHttpMock(promise),
    entityMock: cloneMock('environmentAlias')
  }
}

test('Environment alias is wrapped', (t) => {
  entityWrappedTest(t, setup, {
    wrapperMethod: wrapEnvironmentAlias
  })
})

test('Environment alias collection is wrapped', (t) => {
  return entityCollectionWrappedTest(t, setup, {
    wrapperMethod: wrapEnvironmentAliasCollection
  })
})

test('Environment alias update', (t) => {
  return entityUpdateTest(t, setup, {
    wrapperMethod: wrapEnvironmentAlias
  })
})

test('Environment alias update fails', (t) => {
  return failingVersionActionTest(t, setup, {
    wrapperMethod: wrapEnvironmentAlias,
    actionMethod: 'update'
  })
})
