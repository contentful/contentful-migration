import test from 'tape'
import {cloneMock} from '../mocks/entities'
import setupHttpMock from '../mocks/http'
import {wrapWebhook, wrapWebhookCollection} from '../../../lib/entities/webhook'
import {
  entityWrappedTest,
  entityCollectionWrappedTest,
  entityUpdateTest,
  entityDeleteTest,
  failingActionTest,
  failingVersionActionTest
} from '../test-creators/instance-entity-methods'

function setup (promise) {
  return {
    httpMock: setupHttpMock(promise),
    entityMock: cloneMock('webhook')
  }
}

test('Webhook is wrapped', (t) => {
  entityWrappedTest(t, setup, {
    wrapperMethod: wrapWebhook
  })
})

test('Webhook collection is wrapped', (t) => {
  return entityCollectionWrappedTest(t, setup, {
    wrapperMethod: wrapWebhookCollection
  })
})

test('Webhook update', (t) => {
  return entityUpdateTest(t, setup, {
    wrapperMethod: wrapWebhook
  })
})

test('Webhook update fails', (t) => {
  return failingVersionActionTest(t, setup, {
    wrapperMethod: wrapWebhook,
    actionMethod: 'update'
  })
})

test('Webhook delete', (t) => {
  return entityDeleteTest(t, setup, {
    wrapperMethod: wrapWebhook
  })
})

test('Webhook delete fails', (t) => {
  return failingActionTest(t, setup, {
    wrapperMethod: wrapWebhook,
    actionMethod: 'delete'
  })
})

test('Webhook list of calls', (t) => {
  t.plan(1)
  const {httpMock, entityMock} = setup()
  const entity = wrapWebhook(httpMock, entityMock)
  return entity.getCalls()
  .then((response) => {
    t.equals(httpMock.get.args[0][0], 'webhooks/id/calls', 'id is sent')
  })
})

test('Webhook specific call', (t) => {
  t.plan(1)
  const {httpMock, entityMock} = setup()
  const entity = wrapWebhook(httpMock, entityMock)
  return entity.getCall('callid')
  .then((response) => {
    t.equals(httpMock.get.args[0][0], 'webhooks/id/calls/callid', 'id is sent')
  })
})

test('Webhook health', (t) => {
  t.plan(1)
  const {httpMock, entityMock} = setup()
  const entity = wrapWebhook(httpMock, entityMock)
  return entity.getHealth()
  .then((response) => {
    t.equals(httpMock.get.args[0][0], 'webhooks/id/health', 'id is sent')
  })
})
