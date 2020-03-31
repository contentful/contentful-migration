import test from 'blue-tape'
import sinon from 'sinon'

import {
  spaceMock,
  setupEntitiesMock,
  organizationMock,
  userMock,
  personalAccessTokenMock,
  usageMock
} from './mocks/entities'
import setupHttpMock from './mocks/http'
import createContentfulApi, {__RewireAPI__ as createContentfulApiRewireApi} from '../../lib/create-contentful-api'
import {makeGetEntityTest, makeGetCollectionTest, makeEntityMethodFailingTest} from './test-creators/static-entity-methods'

function setup (promise) {
  const entitiesMock = setupEntitiesMock(createContentfulApiRewireApi)
  const httpMock = setupHttpMock(promise)
  const api = createContentfulApi({ http: httpMock })
  return {
    api,
    httpMock,
    entitiesMock
  }
}

function teardown () {
  createContentfulApiRewireApi.__ResetDependency__('entities')
}

// Space tests
test('API call getSpaces', (t) => {
  makeGetCollectionTest(t, setup, teardown, {
    entityType: 'space',
    mockToReturn: spaceMock,
    methodToTest: 'getSpaces'
  })
})

test('API call getSpaces fails', (t) => {
  makeEntityMethodFailingTest(t, setup, teardown, {
    methodToTest: 'getSpaces'
  })
})

test('API call getSpace', (t) => {
  makeGetEntityTest(t, setup, teardown, {
    entityType: 'space',
    mockToReturn: spaceMock,
    methodToTest: 'getSpace'
  })
})

test('API call getSpace fails', (t) => {
  makeEntityMethodFailingTest(t, setup, teardown, {
    methodToTest: 'getSpace'
  })
})

test('API call createSpace', (t) => {
  t.plan(3)
  const data = {
    sys: { id: 'id', type: 'Space' },
    name: 'name'
  }
  const {api, httpMock, entitiesMock} = setup(Promise.resolve({ data: data }))
  entitiesMock.space.wrapSpace.returns(data)

  return api.createSpace({name: 'name'}, 'orgid')
    .then((r) => {
      t.looseEqual(r, data, 'space is wrapped')
      t.looseEqual(httpMock.post.args[0][1], {name: 'name'}, 'data is sent')
      t.equals(httpMock.post.args[0][2].headers['X-Contentful-Organization'], 'orgid', 'orgid is specified in headers')
      teardown()
    })
})

test('API call createSpace fails', (t) => {
  makeEntityMethodFailingTest(t, setup, teardown, {
    methodToTest: 'createSpace'
  })
})

// Organization tests
test('API call getOrganization', (t) => {
  const organizationMock2 = Object.assign({}, organizationMock, {sys: {id: 'eid'}})
  const getOrganizationSetup = () => setup(Promise.resolve({data: {items: [organizationMock, organizationMock2]}}))
  makeGetEntityTest(t, getOrganizationSetup, teardown, {
    entityType: 'organization',
    mockToReturn: organizationMock2,
    methodToTest: 'getOrganization'
  })
})

test('API call getOrganization fails because org ID was not found in results', (t) => {
  t.plan(1)
  const {api, entitiesMock} = setup(Promise.resolve({data: {items: [organizationMock]}}))
  entitiesMock.organization.wrapOrganization.returns(organizationMock)
  return api.getOrganization('non-existent-id')
    .catch((r) => {
      t.ok(r, "Throws an error when ID doesn't exist")
      teardown()
    })
})

test('API call getOrganization fails', (t) => {
  makeEntityMethodFailingTest(t, setup, teardown, {
    methodToTest: 'getOrganization'
  })
})

test('API call getOrganizations', (t) => {
  makeGetCollectionTest(t, setup, teardown, {
    entityType: 'organization',
    mockToReturn: organizationMock,
    methodToTest: 'getOrganizations'
  })
})

test('API call getOrganizations fails', (t) => {
  makeEntityMethodFailingTest(t, setup, teardown, {
    methodToTest: 'getOrganizations'
  })
})

// Organization usage tests
test('API call getOrganizationUsage', (t) => {
  makeGetCollectionTest(t, setup, teardown, {
    entityType: 'usage',
    mockToReturn: usageMock,
    methodToTest: 'getOrganizationUsage'
  })
})

test('API call getOrganizationUsage fails', (t) => {
  makeEntityMethodFailingTest(t, setup, teardown, {
    methodToTest: 'getOrganizationUsage'
  })
})

// Space usage tests
test('API call getSpaceUsage', (t) => {
  makeGetCollectionTest(t, setup, teardown, {
    entityType: 'usage',
    mockToReturn: usageMock,
    methodToTest: 'getSpaceUsage'
  })
})

test('API call getSpaceUsage fails', (t) => {
  makeEntityMethodFailingTest(t, setup, teardown, {
    methodToTest: 'getSpaceUsage'
  })
})

// User test
test('API call getCurrentUser', (t) => {
  makeGetEntityTest(t, setup, teardown, {
    entityType: 'user',
    mockToReturn: userMock,
    methodToTest: 'getCurrentUser'
  })
})

test('API call getCurrentUser fails', (t) => {
  makeEntityMethodFailingTest(t, setup, teardown, {
    methodToTest: 'getCurrentUser'
  })
})

// Personal access token tests
test('API call getPersonalAccessToken fails', (t) => {
  makeEntityMethodFailingTest(t, setup, teardown, {
    methodToTest: 'getPersonalAccessToken'
  })
})

test('API call getPersonalAccessToken', (t) => {
  makeGetEntityTest(t, setup, teardown, {
    entityType: 'personalAccessToken',
    mockToReturn: personalAccessTokenMock,
    methodToTest: 'getPersonalAccessToken'
  })
})

test('API call getPersonalAccessTokens fails', (t) => {
  makeEntityMethodFailingTest(t, setup, teardown, {
    methodToTest: 'getPersonalAccessTokens'
  })
})

test('API call getPersonalAccessTokens', (t) => {
  makeGetCollectionTest(t, setup, teardown, {
    entityType: 'personalAccessToken',
    mockToReturn: personalAccessTokenMock,
    methodToTest: 'getPersonalAccessTokens'
  })
})

test('API call createSpace', (t) => {
  t.plan(2)
  const data = {
    sys: { id: 'id', type: 'AccessToken' },
    name: 'name'
  }
  const {api, httpMock, entitiesMock} = setup(Promise.resolve({ data: data }))
  entitiesMock.personalAccessToken.wrapPersonalAccessToken.returns(data)

  return api.createPersonalAccessToken({name: 'name'}, 'orgid')
    .then((r) => {
      t.looseEqual(r, data, 'personal access token is wrapped')
      t.looseEqual(httpMock.post.args[0][1], {name: 'name'}, 'data is sent')
      teardown()
    })
})

// Raw request tests
test('API call rawRequest', (t) => {
  const httpMock = sinon.stub().resolves({
    data: {
      response: true
    }
  })

  const api = createContentfulApi({ http: httpMock })

  return api.rawRequest({ opts: true })
    .then((response) => {
      t.looseEqual(response, {
        response: true
      }, 'returns plain response')
      t.looseEqual(httpMock.args[0][0], {
        opts: true
      }, 'passes opts to http client')
    })
})
