import test from 'blue-tape'
import {cloneMock} from '../mocks/entities'
import setupHttpMock from '../mocks/http'
import {wrapRole, wrapRoleCollection} from '../../../lib/entities/role'
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
    entityMock: cloneMock('role')
  }
}

test('Role is wrapped', (t) => {
  entityWrappedTest(t, setup, {
    wrapperMethod: wrapRole
  })
})

test('Role collection is wrapped', (t) => {
  return entityCollectionWrappedTest(t, setup, {
    wrapperMethod: wrapRoleCollection
  })
})

test('Role update', (t) => {
  return entityUpdateTest(t, setup, {
    wrapperMethod: wrapRole
  })
})

test('Role update fails', (t) => {
  return failingVersionActionTest(t, setup, {
    wrapperMethod: wrapRole,
    actionMethod: 'update'
  })
})

test('Role delete', (t) => {
  return entityDeleteTest(t, setup, {
    wrapperMethod: wrapRole
  })
})

test('Role delete fails', (t) => {
  return failingActionTest(t, setup, {
    wrapperMethod: wrapRole,
    actionMethod: 'delete'
  })
})
