import test from 'blue-tape'
import {cloneMock} from '../mocks/entities'
import setupHttpMock from '../mocks/http'
import {wrapTeam, wrapTeamCollection} from '../../../lib/entities/team'
import {
  entityWrappedTest,
  entityCollectionWrappedTest,
  failingActionTest
} from '../test-creators/instance-entity-methods'

function setup (promise) {
  return {
    httpMock: setupHttpMock(promise),
    entityMock: cloneMock('team')
  }
}

test('Team is wrapped', (t) => {
  entityWrappedTest(t, setup, {
    wrapperMethod: wrapTeam
  })
})

test('Team collection is wrapped', (t) => {
  return entityCollectionWrappedTest(t, setup, {
    wrapperMethod: wrapTeamCollection
  })
})

test('Team update', (t) => {
  t.plan(3)
  const { httpMock, entityMock } = setup()
  entityMock.sys.version = 2
  const entity = wrapTeam(httpMock, entityMock)
  entity.description = 'new description'
  return entity.update()
    .then((response) => {
      t.ok(response.toPlainObject, 'response is wrapped')
      t.equals(httpMock.put.args[0][0], `teams/${entityMock.sys.id}`, 'url is correct')
      t.equals(httpMock.put.args[0][2].headers['X-Contentful-Version'], 2, 'version header is sent')
      return {httpMock, entityMock, response}
    })
})

test('Team update fails', (t) => {
  return failingActionTest(t, setup, {
    wrapperMethod: wrapTeam,
    actionMethod: 'update'
  })
})

test('Team delete', (t) => {
  t.plan(2)
  const { httpMock, entityMock } = setup()
  entityMock.sys.version = 2
  const entity = wrapTeam(httpMock, entityMock)
  return entity.delete()
    .then((response) => {
      t.pass('entity was deleted')
      t.equals(httpMock.delete.args[0][0], `teams/${entityMock.sys.id}`, 'url is correct')
      return {httpMock, entityMock, response}
    })
})

test('Team delete fails', (t) => {
  return failingActionTest(t, setup, {
    wrapperMethod: wrapTeam,
    actionMethod: 'delete'
  })
})
