import test from 'blue-tape'
import delay from 'delay'
import sinon from 'sinon'
import {localeTests} from './locale-integration'
import {contentTypeReadOnlyTests, contentTypeWriteTests} from './content-type-integration'
import {entryReadOnlyTests, entryWriteTests} from './entry-integration'
import {assetReadOnlyTests, assetWriteTests} from './asset-integration'
import webhookTests from './webhook-integration'
import spaceMembersTests from './space-members-integration'
import spaceMembershipTests from './space-membership-integration'
import teamSpaceMembershipTests from './team-space-membership-integration'
import teamTests from './team-integration'
import teamMembershipTests from './team-membership-integration'
import organizationMembershipTests from './organization-membership-integration'
import organizationSpaceMembershipTests from './organization-space-membership-integration'
import organizationInvitationTests from './organization-invitation-test'
import roleTests from './role-integration'
import spaceUserTests from './space-user-integration'
import userTests from './user-integration'
import apiKeyTests from './api-key-integration'
import uiExtensionTests from './ui-extension-integration'
import generateRandomId from './generate-random-id'
import { createClient } from '../../'
import { environmentTests } from './environment-integration'
import { environmentAliasReadOnlyTests } from './environment-alias-integration'

const params = {
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
}

const organization = process.env.CONTENTFUL_ORGANIZATION
const v2Organization = process.env.CONTENTFUL_V2_ORGANIZATION
const v2AccessToken = process.env.CONTENTFUL_V2_ACCESS_TOKEN

if (process.env.API_INTEGRATION_TESTS) {
  params.host = '127.0.0.1:5000'
  params.insecure = true
}

const client = createClient(params)

const v2Client = createClient({
  accessToken: v2AccessToken
})

test('Gets spaces', (t) => {
  t.plan(2)
  return client.getSpaces()
    .then((response) => {
      t.ok(response.items, 'items')
      t.ok(response.total > 0, 'items have spaces')
    })
})

test('Gets organizations', (t) => {
  t.plan(1)
  return client.getOrganizations()
    .then((response) => {
      t.ok(response.items.length >= 1, 'user must belong to at least one organization')
    })
})

const usageResponse = (t, usageResponse, sysType) => {
  const resource = usageResponse.items[0]
  t.ok(usageResponse.items.length >= 1)
  t.ok(resource.sys.type === sysType)
  t.ok(resource.usage >= 0)
  t.ok(resource.unitOfMeasure)
  t.ok(resource.usagePerDay)
}

test('Get organization usage', (t) => {
  t.plan(5)
  return v2Client.getOrganizationUsage(v2Organization, {
    'dateRange.startAt': '2010-01-01'
  })
    .then(response => usageResponse(t, response, 'OrganizationPeriodicUsage'))
})

test('Get space usage', (t) => {
  t.plan(5)
  return v2Client.getSpaceUsage(v2Organization, {
    'dateRange.startAt': '2020-01-01'
  })
    .then(response => usageResponse(t, response, 'SpacePeriodicUsage'))
})

test('Fails getting org usage for invalid dateRange', (t) => {
  t.plan(1)
  t.shouldFail(v2Client.getOrganizationUsage(v2Organization, {
    'dateRange.startAt': '2020-01-01',
    'dateRange.endAt': '2019-01-01'
  }))
})

test('Fails getting space usage for invalid dateRange', (t) => {
  t.plan(1)
  t.shouldFail(v2Client.getSpaceUsage(v2Organization, {
    'dateRange.startAt': '2020-01-01',
    'dateRange.endAt': '2019-01-01'
  }))
})

test('Fails getting space usage for unsupported dateRange', (t) => {
  t.plan(1)
  t.shouldFail(v2Client.getSpaceUsage(v2Organization, {
    'dateRange.startAt': '2019-12-01',
    'dateRange.endAt': '2020-02-01'
  }))
})

test('Gets personal access tokens', (t) => {
  t.plan(2)
  return client.getPersonalAccessTokens()
    .then((response) => {
      t.ok(response.items, 'items')
      t.ok(response.sys, 'sys')
    })
})

test('Create and revoke a personal access token', (t) => {
  t.plan(3)
  return client.createPersonalAccessToken({
    'name': 'My Token',
    'scopes': [
      'content_management_manage'
    ]
  })
    .then((token) => {
      t.ok(token.sys, 'sys')
      t.equals(token.name, 'My Token')
      return token.revoke()
        .then((revoked) => {
          t.ok(revoked.sys, 'sys')
        })
    })
})

test('Gets User', (t) => {
  t.plan(2)
  return client.getCurrentUser()
    .then((user) => {
      t.ok(user, 'user')
      t.ok(user.sys, 'user.sys')
    })
})

test('Gets space', (t) => {
  t.plan(2)
  return client.getSpace('ezs1swce23xe')
    .then((response) => {
      t.ok(response.sys, 'sys')
      t.ok(response.name, 'name')
    })
})

test('Fails to get space', (t) => {
  t.plan(2)
  return client.getSpace(generateRandomId('weirdrandomid'))
    .then(() => {}, (error) => {
      t.equals(error.name, 'NotFound', 'error name')
      const errorData = JSON.parse(error.message)
      t.equals(errorData.status, 404, 'http status code from parsed error data')
    })
})

test('Creates, updates and deletes a space', (t) => {
  t.plan(2)
  return client.createSpace({
    name: 'spacename'
  }, organization)
    .then((space) => {
      t.equals(space.name, 'spacename')
      space.name = 'updatedspacename'
      return space.update()
        .then((updatedSpace) => {
          t.equals(updatedSpace.name, 'updatedspacename')
          return updatedSpace.delete()
        })
    })
})

test('Gets space for read only tests', (t) => {
  return client.getSpace('ezs1swce23xe')
    .then((space) => {
      contentTypeReadOnlyTests(t, space)
      entryReadOnlyTests(t, space)
      assetReadOnlyTests(t, space)
    })
})
test('Gets v2 space for read only tests', (t) => {
  return v2Client.getSpace('w6xueg32zr68')
    .then(space => {
      spaceUserTests(t, space)
      spaceMembersTests(t, space)
    })
})

test('Gets v2 space for read only tests', (t) => {
  return v2Client.getSpace('w6xueg32zr68')
    .then(space => {
      test.onFinish(() => {
        // clean up and re-point alias to starting env
        space.getEnvironmentAlias('master').then(alias => {
          alias.environment.sys.id = 'previously-master'
          return alias.update()
        })
      })
      environmentAliasReadOnlyTests(t, space) // v2 space with alias feature enabled and opted-in
    })
})

test('Gets organization for tests which change and delete data', (t) => {
  return client.getOrganizations()
    .then((response) => {
      const organization = response.items[0]
      return Promise.all([
        userTests(t, organization),
        organizationMembershipTests(t, organization),
        organizationSpaceMembershipTests(t, organization),
        teamTests(t, organization),
        teamMembershipTests(t, organization),
        organizationInvitationTests(t, organization)
      ])
    })
})

test('Get existing space and test team space memberships', (t) => {
  return client.getSpace('ezs1swce23xe')
    .then(space => {
      teamSpaceMembershipTests(t, space)
    })
})

test('Create space for tests which create, change and delete data', (t) => {
  return client.createSpace({
    name: 'CMA JS SDK tests'
  }, organization)
  // When running these tests locally, create a specific space, uncomment and
  // use the line below to avoid running into the 10 space per hour creation limit.
  // Also comment the test.onFinish line below to avoid removing the space.
  // The below line also uses double quotes on purpose so it breaks the linter
  // in case someone forgets to comment this line again.
  // client.getSpace('a3f19zbn5ldg')
    .then((space) => {
      return space.createLocale({
        name: 'German (Germany)',
        code: 'de-DE'
      })
        .then(() => {
          return space
        })
    })
    .then((space) => {
      test.onFinish(() => space.delete())
      return Promise.all([
        localeTests(t, space),
        contentTypeWriteTests(t, space),
        entryWriteTests(t, space),
        assetWriteTests(t, space),
        webhookTests(t, space),
        spaceMembershipTests(t, space),
        roleTests(t, space),
        apiKeyTests(t, space),
        uiExtensionTests(t, space),
        environmentTests(t, space, waitForEnvironmentToBeReady)
      ])
    })
})

function waitForEnvironmentToBeReady (space, environment) {
  return space.getEnvironment(environment.sys.id)
    .then((env) => {
      if (env.sys.status.sys.id !== 'ready') {
        console.log(`Environment ${environment.sys.id} is not ready yet. Waiting 1000ms...`)
        return delay(1000)
          .then(() => waitForEnvironmentToBeReady(space, env))
      }
      return env
    })
}

test('Create space with an environment for tests which create, change and delete data', (t) => {
  return client.createSpace({
    name: 'CMA JS SDK tests'
  }, organization)
  // When running these tests locally, create a specific space, uncomment and
  // use the line below to avoid running into the 10 space per hour creation limit.
  // Also comment the test.onFinish line below to avoid removing the space.
  // The below line also uses double quotes on purpose so it breaks the linter
  // in case someone forgets to comment this line again.
  // client.getSpace('gauywn1xskhq')
    .then((space) => {
      return space.createLocale({
        name: 'German (Germany)',
        code: 'de-DE'
      })
        .then(() => {
          return space.createEnvironment({
            name: 'Testing Environment'
          })
        })
        .then((environment) => {
          return waitForEnvironmentToBeReady(space, environment)
        })
        .then((environment) => ({
          environment,
          space
        }))
        .catch((err) => {
          console.error(err)
          t.fail('Environment creation failed.')
        })
    })
    .then(({environment, space}) => {
      localeTests(t, environment)
      contentTypeWriteTests(t, environment)
      entryWriteTests(t, environment)
      assetWriteTests(t, environment)
      uiExtensionTests(t, environment)
      // test.onFinish(() => environment.delete())
      test.onFinish(() => space.delete())
    })
})

test('Logs request and response with custom loggers', (t) => {
  t.plan(3)
  const responseLoggerStub = sinon.stub()
  const requestLoggerStub = sinon.stub()

  const client = createClient({
    ...params,
    responseLogger: responseLoggerStub,
    requestLogger: requestLoggerStub
  })
  return client.getSpace('ezs1swce23xe')
    .then((response) => {
      t.equal(responseLoggerStub.callCount, 1, 'responseLogger is called')
      t.equal(requestLoggerStub.callCount, 1, 'requestLogger is called')
      const {baseURL, url} = requestLoggerStub.args[0][0]
      t.equal(`${baseURL}${url}`, 'https://api.contentful.com:443/spaces/ezs1swce23xe', 'requestLogger is called with correct url')
    })
})
