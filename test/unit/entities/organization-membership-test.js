import test from 'blue-tape'
import {cloneMock} from '../mocks/entities'
import setupHttpMock from '../mocks/http'
import {wrapOrganizationMembership, wrapOrganizationMembershipCollection} from '../../../lib/entities/organization-membership'
import {
  entityWrappedTest,
  entityCollectionWrappedTest,
  failingActionTest
} from '../test-creators/instance-entity-methods'

function setup (promise) {
  return {
    httpMock: setupHttpMock(promise),
    entityMock: cloneMock('organizationMembership')
  }
}

test('OrganizationMembership is wrapped', (t) => {
  entityWrappedTest(t, setup, {
    wrapperMethod: wrapOrganizationMembership
  })
})

test('OrganizationMembership collection is wrapped', (t) => {
  return entityCollectionWrappedTest(t, setup, {
    wrapperMethod: wrapOrganizationMembershipCollection
  })
})

test('OrganizationMembership update', (t) => {
  t.plan(5)
  const { httpMock, entityMock } = setup()
  entityMock.sys.version = 2
  const entity = wrapOrganizationMembership(httpMock, entityMock, 'org1')
  entity.role = 'member'
  return entity.update()
    .then((response) => {
      t.ok(response.toPlainObject, 'response is wrapped')
      t.equals(httpMock.put.args[0][0], `organization_memberships/${entityMock.sys.id}`, 'url is correct')
      t.looseEquals(httpMock.put.args[0][1], { role: 'member' }, 'data is sent')
      t.equals(httpMock.put.args[0][2].headers['X-Contentful-Version'], 2, 'version header is sent')
      t.match(httpMock.put.args[0][2].baseURL, /\/organizations\/org1/, 'baseURL is correct')
      return {httpMock, entityMock, response}
    })
})

test('OrganizationMembership update fails', (t) => {
  return failingActionTest(t, setup, {
    wrapperMethod: wrapOrganizationMembership,
    actionMethod: 'update'
  })
})

test('OrganizationMembership delete', (t) => {
  t.plan(3)
  const { httpMock, entityMock } = setup()
  entityMock.sys.version = 2
  const entity = wrapOrganizationMembership(httpMock, entityMock, 'org1')
  return entity.delete()
    .then((response) => {
      t.pass('entity was deleted')
      t.equals(httpMock.delete.args[0][0], `organization_memberships/${entityMock.sys.id}`, 'url is correct')
      t.match(httpMock.delete.args[0][1].baseURL, /\/organizations\/org1/, 'baseURL is correct')
      return {httpMock, entityMock, response}
    })
})

test('OrganizationMembership delete fails', (t) => {
  return failingActionTest(t, setup, {
    wrapperMethod: wrapOrganizationMembership,
    actionMethod: 'delete'
  })
})
