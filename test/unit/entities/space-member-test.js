import test from 'blue-tape'
import {cloneMock} from '../mocks/entities'
import setupHttpMock from '../mocks/http'
import {wrapSpaceMember, wrapSpaceMemberCollection} from '../../../lib/entities/space-member'
import {
  entityWrappedTest,
  entityCollectionWrappedTest
} from '../test-creators/instance-entity-methods'

function setup (promise) {
  return {
    httpMock: setupHttpMock(promise),
    entityMock: cloneMock('spaceMembership')
  }
}

test('SpaceMember is wrapped', (t) => {
  entityWrappedTest(t, setup, {
    wrapperMethod: wrapSpaceMember
  })
})

test('SpaceMember collection is wrapped', (t) => {
  return entityCollectionWrappedTest(t, setup, {
    wrapperMethod: wrapSpaceMemberCollection
  })
})
