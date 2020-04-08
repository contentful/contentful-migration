import test from 'blue-tape'
import {cloneMock} from '../mocks/entities'
import setupHttpMock from '../mocks/http'
import {
  entityWrappedTest
} from '../test-creators/instance-entity-methods'
import { wrapOrganizationInvitation } from '../../../lib/entities/organization-invitation'

function setup (promise) {
  return {
    httpMock: setupHttpMock(promise),
    entityMock: cloneMock('organizationInvitation')
  }
}

test('Organization invitation is wrapped', (t) => {
  entityWrappedTest(t, setup, {
    wrapperMethod: wrapOrganizationInvitation
  })
})
