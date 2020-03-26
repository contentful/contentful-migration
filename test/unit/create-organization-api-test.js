import test from 'blue-tape'

import createOrganizationApi, {__RewireAPI__ as createOrganizationApiRewireApi} from '../../lib/create-organization-api'
import {
  organizationMembershipMock,
  setupEntitiesMock
} from './mocks/entities'
import setupHttpMock from './mocks/http'
import {
  makeGetEntityTest,
  makeGetCollectionTest,
  makeEntityMethodFailingTest
} from './test-creators/static-entity-methods'

function setup (promise) {
  const entitiesMock = setupEntitiesMock(createOrganizationApiRewireApi)
  const httpMock = setupHttpMock(promise)
  const httpUploadMock = setupHttpMock(promise)
  const api = createOrganizationApi({ http: httpMock, httpUpload: httpUploadMock })
  return {
    api,
    httpMock,
    httpUploadMock,
    entitiesMock
  }
}

function teardown () {
  createOrganizationApiRewireApi.__ResetDependency__('entities')
}

test('API call getOrganizationMembership', (t) => {
  makeGetEntityTest(t, setup, teardown, {
    entityType: 'organizationMembership',
    mockToReturn: organizationMembershipMock,
    methodToTest: 'getOrganizationMembership'
  })
})

test('API call getOrganizationMembership fails', (t) => {
  makeEntityMethodFailingTest(t, setup, teardown, {
    methodToTest: 'getOrganizationMembership'
  })
})

test('API call getOrganizationMemberships', (t) => {
  makeGetCollectionTest(t, setup, teardown, {
    entityType: 'organizationMembership',
    mockToReturn: organizationMembershipMock,
    methodToTest: 'getOrganizationMemberships'
  })
})

test('API call getOrganizationMemberships fails', (t) => {
  makeEntityMethodFailingTest(t, setup, teardown, {
    methodToTest: 'getOrganizationMemberships'
  })
})
