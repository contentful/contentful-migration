import sinon from 'sinon'

import cloneDeep from 'lodash/cloneDeep'

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
  sys: Object.assign(cloneDeep(sysMock), {
    type: 'Space'
  }),
  name: 'name',
  locales: [ 'en-US' ]
}

const environmentMock = {
  sys: Object.assign(cloneDeep(sysMock), {
    type: 'Environment',
    space: spaceMock
  }),
  name: 'name'
}

const userMock = {
  sys: Object.assign(cloneDeep(sysMock), {
    type: 'User'
  }),
  firstName: 'Dwight',
  lastName: 'Schrute',
  avatarUrl: 'https://images.contentful.com/abcd1234',
  email: 'dwight@dundermifflin.com',
  activated: true,
  signInCount: 1,
  confirmed: true
}

const personalAccessTokenMock = {
  sys: Object.assign(cloneDeep(sysMock), {
    type: 'PersonalAccessToken'
  }),
  name: 'My Token',
  revokeAt: null,
  scopes: [
    'content_management_manage'
  ]
}

const contentTypeMock = {
  sys: Object.assign(cloneDeep(sysMock), {
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
const snapShotMock = {
  sys: Object.assign(cloneDeep(sysMock), {
    type: 'Snapshot'
  }),
  fields: {
    field1: 'str'
  }
}
const entryMock = {
  sys: Object.assign(cloneDeep(sysMock), {
    type: 'Entry',
    contentType: Object.assign(cloneDeep(linkMock), {linkType: 'ContentType'}),
    locale: 'locale'
  }),
  fields: {
    field1: 'str'
  }
}
const editorInterfaceMock = {
  sys: Object.assign(cloneDeep(sysMock), {
    type: 'EditorInterface',
    contentType: {sys: Object.assign(cloneDeep(linkMock), {linkType: 'ContentType'})},
    space: Object.assign(cloneDeep(linkMock), {linkType: 'Space'})
  }),
  controls: [
    {
      'fieldId': 'fieldId',
      'widgetId': 'singleLine'
    }
  ]
}
const assetMock = {
  sys: Object.assign(cloneDeep(sysMock), {
    type: 'Asset',
    locale: 'locale'
  }),
  fields: {
    field1: 'str'
  }
}

const assetWithFilesMock = {
  sys: Object.assign(cloneDeep(sysMock), {
    type: 'Asset',
    locale: 'locale'
  }),
  fields: {
    files: {
      locale: {
        contentType: 'image/svg',
        fileName: 'filename.svg',
        uploadFrom: {
          sys: {
            type: 'Link',
            linkType: 'Upload',
            id: 'some_random_id'
          }
        }
      },
      locale2: {
        contentType: 'image/svg',
        fileName: 'filename.svg',
        uploadFrom: {
          sys: {
            type: 'Link',
            linkType: 'Upload',
            id: 'some_random_id'
          }
        }
      }
    }
  }
}

const uploadMock = {
  sys: Object.assign(cloneDeep(sysMock), {
    type: 'Upload',
    id: 'some_random_id'
  })
}

const localeMock = {
  sys: Object.assign(cloneDeep(sysMock), {
    type: 'Locale'
  }),
  name: 'English',
  code: 'en',
  contentDeliveryApi: true,
  contentManagementApi: true,
  default: true
}

const webhookMock = {
  sys: Object.assign(cloneDeep(sysMock), {
    type: 'WebhookDefinition'
  })
}

const spaceMembershipMock = {
  sys: Object.assign(cloneDeep(sysMock), {
    type: 'SpaceMembership'
  })
}

const roleMock = {
  sys: Object.assign(cloneDeep(sysMock), {
    type: 'Role'
  })
}

const apiKeyMock = {
  sys: Object.assign(cloneDeep(sysMock), {
    type: 'ApiKey'
  })
}

const previewApiKeyMock = {
  sys: Object.assign(cloneDeep(sysMock), {
    type: 'ApiKey'
  })
}

const organizationMock = {
  sys: Object.assign(cloneDeep(sysMock), {
    type: 'Organization'
  })
}

const uiExtensionMock = {
  sys: Object.assign(cloneDeep(sysMock), {
    type: 'Extension'
  })
}

const errorMock = {
  config: {
    url: 'requesturl',
    headers: {}
  },
  data: {},
  response: {
    status: 404,
    statusText: 'Not Found'
  }
}

const mocks = {
  link: linkMock,
  sys: sysMock,
  contentType: contentTypeMock,
  editorInterface: editorInterfaceMock,
  entry: entryMock,
  snapshot: snapShotMock,
  asset: assetMock,
  locale: localeMock,
  webhook: webhookMock,
  spaceMembership: spaceMembershipMock,
  role: roleMock,
  apiKey: apiKeyMock,
  previewApiKey: previewApiKeyMock,
  error: errorMock,
  upload: uploadMock,
  organization: organizationMock,
  uiExtension: uiExtensionMock,
  user: userMock,
  personalAccessToken: personalAccessTokenMock
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
    environment: {
      wrapEnvironment: sinon.stub(),
      wrapEnvironmentCollection: sinon.stub()
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
    },
    previewApiKey: {
      wrapPreviewApiKey: sinon.stub(),
      wrapPreviewApiKeyCollection: sinon.stub()
    },
    editorInterface: {
      wrapEditorInterface: sinon.stub()
    },
    upload: {
      wrapUpload: sinon.stub()
    },
    snapshot: {
      wrapSnapshot: sinon.stub(),
      wrapSnapshotCollection: sinon.stub()
    },
    organization: {
      wrapOrganizationCollection: sinon.stub()
    },
    uiExtension: {
      wrapUiExtension: sinon.stub(),
      wrapUiExtensionCollection: sinon.stub()
    },
    user: {
      wrapUser: sinon.stub()
    },
    personalAccessToken: {
      wrapPersonalAccessToken: sinon.stub(),
      wrapPersonalAccessTokenCollection: sinon.stub()
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
  editorInterfaceMock,
  entryMock,
  assetMock,
  assetWithFilesMock,
  localeMock,
  webhookMock,
  spaceMembershipMock,
  roleMock,
  apiKeyMock,
  previewApiKeyMock,
  errorMock,
  cloneMock,
  mockCollection,
  setupEntitiesMock,
  uploadMock,
  organizationMock,
  uiExtensionMock,
  snapShotMock,
  userMock,
  personalAccessTokenMock,
  environmentMock
}
