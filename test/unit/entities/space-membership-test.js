import test from 'tape'
import {cloneMock} from '../mocks/entities'
import setupHttpMock from '../mocks/http'
import {wrapSpaceMembership, wrapSpaceMembershipCollection} from '../../../lib/entities/space-membership'
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
    entityMock: cloneMock('spaceMembership')
  }
}

test('SpaceMembership is wrapped', (t) => {
  entityWrappedTest(t, setup, {
    wrapperMethod: wrapSpaceMembership
  })
})

test('SpaceMembership collection is wrapped', (t) => {
  return entityCollectionWrappedTest(t, setup, {
    wrapperMethod: wrapSpaceMembershipCollection
  })
})

test('SpaceMembership update', (t) => {
  return entityUpdateTest(t, setup, {
    wrapperMethod: wrapSpaceMembership
  })
})

test('SpaceMembership update fails', (t) => {
  return failingVersionActionTest(t, setup, {
    wrapperMethod: wrapSpaceMembership,
    actionMethod: 'update'
  })
})

test('SpaceMembership delete', (t) => {
  return entityDeleteTest(t, setup, {
    wrapperMethod: wrapSpaceMembership
  })
})

test('SpaceMembership delete fails', (t) => {
  return failingActionTest(t, setup, {
    wrapperMethod: wrapSpaceMembership,
    actionMethod: 'delete'
  })
})
