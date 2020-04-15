import test from 'blue-tape'
import {cloneMock} from '../mocks/entities'
import setupHttpMock from '../mocks/http'
import {wrapTeamMembership, wrapTeamMembershipCollection} from '../../../lib/entities/team-membership'
import {
  entityWrappedTest,
  entityCollectionWrappedTest
} from '../test-creators/instance-entity-methods'

function setup (promise) {
  return {
    httpMock: setupHttpMock(promise),
    entityMock: cloneMock('teamMembership')
  }
}

test('TeamMembership is wrapped', (t) => {
  entityWrappedTest(t, setup, {
    wrapperMethod: wrapTeamMembership
  })
})

test('TeamMembership collection is wrapped', (t) => {
  return entityCollectionWrappedTest(t, setup, {
    wrapperMethod: wrapTeamMembershipCollection
  })
})

test('TeamMembership update', (t) => {
  t.plan(3)
  const { httpMock, entityMock } = setup()
  entityMock.sys.version = 2
  entityMock.sys.team = {sys: {id: 'team1'}}
  const entity = wrapTeamMembership(httpMock, entityMock)
  entity.admin = true
  return entity.update()
    .then((response) => {
      t.ok(response.toPlainObject, 'response is wrapped')
      t.equals(httpMock.put.args[0][0], `teams/team1/team_memberships/${entityMock.sys.id}`, 'url is correct')
      t.equals(httpMock.put.args[0][2].headers['X-Contentful-Version'], 2, 'version header is sent')
      return {httpMock, entityMock, response}
    })
})

test('TeamMembership update fails', (t) => {
  t.plan(1)
  const error = cloneMock('error')
  const { httpMock, entityMock } = setup(Promise.reject(error))
  entityMock.sys.team = {sys: {id: 'team1'}}
  const entity = wrapTeamMembership(httpMock, entityMock)

  return entity['update']()
    .catch((r) => {
      t.equals(r.name, '404 Not Found')
    })
})

test('TeamMembership delete', (t) => {
  t.plan(2)
  const { httpMock, entityMock } = setup()
  entityMock.sys.version = 2
  entityMock.sys.team = {sys: {id: 'team1'}}
  const entity = wrapTeamMembership(httpMock, entityMock)
  return entity.delete()
    .then((response) => {
      t.pass('entity was deleted')
      t.equals(httpMock.delete.args[0][0], `teams/team1/team_memberships/${entityMock.sys.id}`, 'url is correct')
      return {httpMock, entityMock, response}
    })
})

test('TeamMembership delete fails', (t) => {
  t.plan(1)
  const error = cloneMock('error')
  const { httpMock, entityMock } = setup(Promise.reject(error))
  entityMock.sys.team = {sys: {id: 'team1'}}
  const entity = wrapTeamMembership(httpMock, entityMock)

  return entity['delete']()
    .catch((r) => {
      t.equals(r.name, '404 Not Found')
    })
})
