import test from 'blue-tape'
import {cloneMock} from '../mocks/entities'
import setupHttpMock from '../mocks/http'
import {wrapTeamSpaceMembership, wrapTeamSpaceMembershipCollection} from '../../../lib/entities/team-space-membership'
import {
  entityWrappedTest,
  entityCollectionWrappedTest,
  entityDeleteTest,
  failingActionTest,
  failingVersionActionTest
} from '../test-creators/instance-entity-methods'

function setup (promise) {
  return {
    httpMock: setupHttpMock(promise),
    entityMock: cloneMock('teamSpaceMembership')
  }
}

test('TeamSpaceMembership is wrapped', (t) => {
  entityWrappedTest(t, setup, {
    wrapperMethod: wrapTeamSpaceMembership
  })
})

test('TeamSpaceMembership collection is wrapped', (t) => {
  return entityCollectionWrappedTest(t, setup, {
    wrapperMethod: wrapTeamSpaceMembershipCollection
  })
})

test('TeamSpaceMembership update', (t) => {
  t.plan(3)
  const { httpMock, entityMock } = setup()
  entityMock.sys.version = 2
  const entity = wrapTeamSpaceMembership(httpMock, entityMock)
  entity.roles[0].sys.id = 'updatedId'
  return entity.update()
    .then((response) => {
      t.ok(response.toPlainObject, 'response is wrapped')
      t.equals(httpMock.put.args[0][1].roles[0].sys.id, 'updatedId', 'data is sent')
      t.equals(httpMock.put.args[0][2].headers['X-Contentful-Version'], 2, 'version header is sent')
      return {httpMock, entityMock, response}
    })
})

test('TeamSpaceMembership update fails', (t) => {
  return failingVersionActionTest(t, setup, {
    wrapperMethod: wrapTeamSpaceMembership,
    actionMethod: 'update'
  })
})

test('TeamSpaceMembership delete', (t) => {
  return entityDeleteTest(t, setup, {
    wrapperMethod: wrapTeamSpaceMembership
  })
})

test('TeamSpaceMembership delete fails', (t) => {
  return failingActionTest(t, setup, {
    wrapperMethod: wrapTeamSpaceMembership,
    actionMethod: 'delete'
  })
})
