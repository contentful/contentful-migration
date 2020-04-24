import test from 'blue-tape'
import createOrganizationApi, {__RewireAPI__ as createOrganizationApiRewireApi} from '../../lib/create-organization-api'
import {
  cloneMock,
  appDefinitionMock,
  organizationMembershipMock,
  spaceMembershipMock,
  teamMembershipMock,
  teamSpaceMembershipMock,
  setupEntitiesMock,
  organizationInvitationMock,
  teamMock,
  userMock
} from './mocks/entities'
import setupHttpMock from './mocks/http'
import {
  makeGetEntityTest,
  makeGetCollectionTest,
  makeCreateEntityTest,
  makeEntityMethodFailingTest
} from './test-creators/static-entity-methods'

function setup (promise) {
  const entitiesMock = setupEntitiesMock(createOrganizationApiRewireApi)
  const httpMock = setupHttpMock(promise)
  const api = createOrganizationApi({ http: httpMock })
  return {
    api,
    httpMock,
    entitiesMock
  }
}

function teardown () {
  createOrganizationApiRewireApi.__ResetDependency__('entities')
}

test('API call getAppDefinition', (t) => {
  makeGetEntityTest(t, setup, teardown, {
    entityType: 'appDefinition',
    mockToReturn: appDefinitionMock,
    methodToTest: 'getAppDefinition'
  })
})

test('API call getAppDefinition fails', (t) => {
  makeEntityMethodFailingTest(t, setup, teardown, {
    methodToTest: 'getAppDefinition'
  })
})

test('API call getAppDefinitions', (t) => {
  makeGetCollectionTest(t, setup, teardown, {
    entityType: 'appDefinition',
    mockToReturn: appDefinitionMock,
    methodToTest: 'getAppDefinitions'
  })
})

test('API call getAppDefinitions fails', (t) => {
  makeEntityMethodFailingTest(t, setup, teardown, {
    methodToTest: 'getAppDefinitions'
  })
})

test('API call getUser', (t) => {
  makeGetEntityTest(t, setup, teardown, {
    entityType: 'user',
    mockToReturn: userMock,
    methodToTest: 'getUser'
  })
})

test('API call getUser fails', (t) => {
  makeEntityMethodFailingTest(t, setup, teardown, {
    methodToTest: 'getUser'
  })
})

test('API call getUsers', (t) => {
  makeGetCollectionTest(t, setup, teardown, {
    entityType: 'user',
    mockToReturn: userMock,
    methodToTest: 'getUsers'
  })
})

test('API call getUsers fails', (t) => {
  makeEntityMethodFailingTest(t, setup, teardown, {
    methodToTest: 'getUsers'
  })
})

test('API call createAppDefinition', (t) => {
  makeCreateEntityTest(t, setup, teardown, {
    entityType: 'appDefinition',
    mockToReturn: appDefinitionMock,
    methodToTest: 'createAppDefinition'
  })
})

test('API call createAppDefinition fails', (t) => {
  makeEntityMethodFailingTest(t, setup, teardown, {
    methodToTest: 'createAppDefinition'
  })
})

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

test('API call getOrganizationSpaceMembership', (t) => {
  makeGetEntityTest(t, setup, teardown, {
    entityType: 'spaceMembership',
    mockToReturn: spaceMembershipMock,
    methodToTest: 'getOrganizationSpaceMembership'
  })
})

test('API call getOrganizationSpaceMembership fails', (t) => {
  makeEntityMethodFailingTest(t, setup, teardown, {
    methodToTest: 'getOrganizationSpaceMembership'
  })
})

test('API call getOrganizationInvitation', (t) => {
  makeGetEntityTest(t, setup, teardown, {
    entityType: 'organizationInvitation',
    mockToReturn: organizationInvitationMock,
    methodToTest: 'getOrganizationInvitation'
  })
})

test('API call getOrganizationInvitation fails', (t) => {
  makeEntityMethodFailingTest(t, setup, teardown, {
    methodToTest: 'getOrganizationInvitation'
  })
})

test('API call createOrganizationInvitation', (t) => {
  makeCreateEntityTest(t, setup, teardown, {
    entityType: 'organizationInvitation',
    mockToReturn: organizationInvitationMock,
    methodToTest: 'createOrganizationInvitation'
  })
})

test('API call createOrganizationInvitation fails', (t) => {
  makeEntityMethodFailingTest(t, setup, teardown, {
    methodToTest: 'createOrganizationInvitation'
  })
})

test('API call getSpaceOrganizationMemberships', (t) => {
  makeGetCollectionTest(t, setup, teardown, {
    entityType: 'spaceMembership',
    mockToReturn: spaceMembershipMock,
    methodToTest: 'getOrganizationSpaceMemberships'
  })
})

test('API call getOrganizationSpaceMemberships fails', (t) => {
  makeEntityMethodFailingTest(t, setup, teardown, {
    methodToTest: 'getOrganizationSpaceMemberships'
  })
})

test('API call createTeam', (t) => {
  makeCreateEntityTest(t, setup, teardown, {
    entityType: 'team',
    mockToReturn: teamMock,
    methodToTest: 'createTeam'
  })
})

test('API call createTeam fails', (t) => {
  makeEntityMethodFailingTest(t, setup, teardown, {
    methodToTest: 'createTeam'
  })
})

test('API call getTeam', (t) => {
  makeGetEntityTest(t, setup, teardown, {
    entityType: 'team',
    mockToReturn: teamMock,
    methodToTest: 'getTeam'
  })
})

test('API call getTeam fails', (t) => {
  makeEntityMethodFailingTest(t, setup, teardown, {
    methodToTest: 'getTeam'
  })
})

test('API call getTeams', (t) => {
  makeGetCollectionTest(t, setup, teardown, {
    entityType: 'team',
    mockToReturn: teamMock,
    methodToTest: 'getTeams'
  })
})

test('API call getTeams fails', (t) => {
  makeEntityMethodFailingTest(t, setup, teardown, {
    methodToTest: 'getTeams'
  })
})

test('API call createTeamMembership', (t) => {
  t.plan(1)
  const {api, entitiesMock} = setup(Promise.resolve({}))
  entitiesMock['teamMembership'][`wrapTeamMembership`]
    .returns(teamMembershipMock)

  return api['createTeamMembership']({admin: true, organizationMembershipId: 'id'})
    .then((r) => {
      t.looseEqual(r, teamMembershipMock)
      teardown()
    })
})

test('API call getTeamMembership', (t) => {
  t.plan(1)
  const {api, entitiesMock} = setup(Promise.resolve({}))
  entitiesMock['teamMembership'][`wrapTeamMembership`]
    .returns(teamMembershipMock)
  return api['getTeamMembership']('teamid', 'eid')
    .then((r) => {
      t.looseEqual(r, teamMembershipMock)
      teardown()
    })
})

test('API call getTeamMembership fails', (t) => {
  t.plan(1)
  const error = cloneMock('error')
  const {api} = setup(Promise.reject(error))

  return api['getTeamMembership']('teamid', 'eid')
    .then(() => {}, (r) => {
      t.equals(r.name, '404 Not Found')
      teardown()
    })
})

test('API call getTeamMemberships', (t) => {
  t.plan(1)
  const {api, entitiesMock} = setup(Promise.resolve({}))
  entitiesMock['teamMembership'][`wrapTeamMembershipCollection`]
    .returns({
      total: 100,
      skip: 0,
      limit: 10,
      items: [teamMembershipMock]
    })
  return api['getTeamMemberships']({teamId: 'teamid'})
    .then((r) => {
      t.looseEqual(r, {
        total: 100,
        skip: 0,
        limit: 10,
        items: [teamMembershipMock]
      })
      teardown()
    })
})

test('API call getTeamMemberships fails', (t) => {
  t.plan(1)
  const error = cloneMock('error')
  const {api} = setup(Promise.reject(error))

  return api['getTeamMembership']({teamId: 'teamid'})
    .then(() => {}, (r) => {
      t.equals(r.name, '404 Not Found')
      teardown()
    })
})

test('API call getTeamMemberships for all teams', (t) => {
  t.plan(1)
  const {api, entitiesMock} = setup(Promise.resolve({}))
  entitiesMock['teamMembership'][`wrapTeamMembershipCollection`]
    .returns({
      total: 100,
      skip: 0,
      limit: 10,
      items: [teamMembershipMock]
    })
  return api['getTeamMemberships']()
    .then((r) => {
      t.looseEqual(r, {
        total: 100,
        skip: 0,
        limit: 10,
        items: [teamMembershipMock]
      })
      teardown()
    })
})

test('API call getTeamSpaceMembership', (t) => {
  t.plan(1)
  const {api, entitiesMock} = setup(Promise.resolve({}))
  entitiesMock['teamSpaceMembership'][`wrapTeamSpaceMembership`]
    .returns(teamSpaceMembershipMock)
  return api['getTeamSpaceMembership']('eid')
    .then((r) => {
      t.looseEqual(r, teamSpaceMembershipMock)
      teardown()
    })
})

test('API call getTeamSpaceMembership fails', (t) => {
  t.plan(1)
  const error = cloneMock('error')
  const {api} = setup(Promise.reject(error))

  return api['getTeamSpaceMembership']('eid')
    .then(() => {}, (r) => {
      t.equals(r.name, '404 Not Found')
      teardown()
    })
})

test('API call getTeamSpaceMemberships', (t) => {
  t.plan(1)
  const {api, entitiesMock} = setup(Promise.resolve({}))
  entitiesMock['teamSpaceMembership'][`wrapTeamSpaceMembershipCollection`]
    .returns({
      total: 100,
      skip: 0,
      limit: 10,
      items: [teamSpaceMembershipMock]
    })
  return api['getTeamSpaceMemberships']({teamId: 'teamid'})
    .then((r) => {
      t.looseEqual(r, {
        total: 100,
        skip: 0,
        limit: 10,
        items: [teamSpaceMembershipMock]
      })
      teardown()
    })
})

test('API call getTeamMemberships fails', (t) => {
  t.plan(1)
  const error = cloneMock('error')
  const {api} = setup(Promise.reject(error))

  return api['getTeamSpaceMemberships']({teamId: 'teamid'})
    .then(() => {}, (r) => {
      t.equals(r.name, '404 Not Found')
      teardown()
    })
})

test('API call getTeamMemberships for all teams', (t) => {
  t.plan(1)
  const {api, entitiesMock} = setup(Promise.resolve({}))
  entitiesMock['teamSpaceMembership'][`wrapTeamSpaceMembershipCollection`]
    .returns({
      total: 100,
      skip: 0,
      limit: 10,
      items: [teamSpaceMembershipMock]
    })
  return api['getTeamSpaceMemberships']()
    .then((r) => {
      t.looseEqual(r, {
        total: 100,
        skip: 0,
        limit: 10,
        items: [teamSpaceMembershipMock]
      })
      teardown()
    })
})
