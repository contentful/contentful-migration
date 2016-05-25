import sinon from 'sinon'
import {assign} from 'lodash/object'
import {cloneDeep} from 'lodash/lang'

const linkMock = {
  id: 'linkid',
  type: 'Link',
  linkType: 'linkType'
}

const sysMock = {
  type: 'Type',
  id: 'id',
  space: cloneDeep(linkMock),
  createdAt: 'createdatdate',
  updatedAt: 'updatedatdate'
}

const spaceMock = {
  sys: assign(cloneDeep(sysMock), {
    type: 'Space'
  }),
  name: 'name',
  locales: [ 'en-US' ]
}

const contentTypeMock = {
  sys: assign(cloneDeep(sysMock), {
    type: 'ContentType'
  }),
  name: 'name',
  description: 'desc',
  displayField: 'displayfield',
  fields: [
    {
      id: 'fieldid',
      name: 'fieldname',
      type: 'Text',
      localized: true,
      required: false
    }
  ]
}

const entryMock = {
  sys: assign(cloneDeep(sysMock), {
    type: 'Entry',
    contentType: assign(cloneDeep(linkMock), {linkType: 'ContentType'}),
    locale: 'locale'
  }),
  fields: {
    field1: 'str'
  }
}

const assetMock = {
  sys: assign(cloneDeep(sysMock), {
    type: 'Asset',
    locale: 'locale'
  }),
  fields: {
    field1: 'str'
  }
}

const localeMock = {
  sys: assign(cloneDeep(sysMock), {
    type: 'Locale'
  }),
  name: 'English',
  code: 'en',
  contentDeliveryApi: true,
  contentManagementApi: true,
  default: true
}

const webhookMock = {
  sys: assign(cloneDeep(sysMock), {
    type: 'WebhookDefinition'
  })
}

const spaceMembershipMock = {
  sys: assign(cloneDeep(sysMock), {
    type: 'SpaceMembership'
  })
}

const roleMock = {
  sys: assign(cloneDeep(sysMock), {
    type: 'Role'
  })
}

const apiKeyMock = {
  sys: assign(cloneDeep(sysMock), {
    type: 'ApiKey'
  })
}

const errorMock = {
  config: {
    url: 'requesturl',
    headers: {}
  },
  data: {},
  status: 404,
  statusText: 'Not Found'
}

const mocks = {
  link: linkMock,
  sys: sysMock,
  contentType: contentTypeMock,
  entry: entryMock,
  asset: assetMock,
  locale: localeMock,
  webhook: webhookMock,
  spaceMembership: spaceMembershipMock,
  role: roleMock,
  apiKey: apiKeyMock,
  error: errorMock
}

function cloneMock (name) {
  return cloneDeep(mocks[name])
}

function mockCollection (entityMock) {
  return {
    total: 1,
    skip: 0,
    limit: 100,
    items: [entityMock]
  }
}

function setupEntitiesMock (rewiredModuleApi) {
  const entitiesMock = {
    space: {
      wrapSpace: sinon.stub(),
      wrapSpaceCollection: sinon.stub()
    },
    contentType: {
      wrapContentType: sinon.stub(),
      wrapContentTypeCollection: sinon.stub()
    },
    entry: {
      wrapEntry: sinon.stub(),
      wrapEntryCollection: sinon.stub()
    },
    asset: {
      wrapAsset: sinon.stub(),
      wrapAssetCollection: sinon.stub()
    },
    locale: {
      wrapLocale: sinon.stub(),
      wrapLocaleCollection: sinon.stub()
    },
    webhook: {
      wrapWebhook: sinon.stub(),
      wrapWebhookCollection: sinon.stub()
    },
    spaceMembership: {
      wrapSpaceMembership: sinon.stub(),
      wrapSpaceMembershipCollection: sinon.stub()
    },
    role: {
      wrapRole: sinon.stub(),
      wrapRoleCollection: sinon.stub()
    },
    apiKey: {
      wrapApiKey: sinon.stub(),
      wrapApiKeyCollection: sinon.stub()
    }
  }
  rewiredModuleApi.__Rewire__('entities', entitiesMock)

  return entitiesMock
}

export {
  linkMock,
  sysMock,
  spaceMock,
  contentTypeMock,
  entryMock,
  assetMock,
  localeMock,
  webhookMock,
  spaceMembershipMock,
  roleMock,
  apiKeyMock,
  errorMock,
  cloneMock,
  mockCollection,
  setupEntitiesMock
}
