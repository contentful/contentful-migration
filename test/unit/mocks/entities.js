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

const appDefinitionMock = {
  sys: Object.assign(cloneDeep(sysMock), {
    type: 'AppDefinition'
  }),
  name: 'AI Image Tagging',
  src: 'https://ai-image-tagging.app-host.com/frontend/',
  locations: [
    {
      location: 'app-config'
    },
    {
      location: 'entry-field',
      fieldTypes: [{ type: 'Symbol' }]
    }
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

const membershipMock = {
  type: 'TeamSpaceMembership',
  id: 'randomId',
  version: 3,
  space: Object.assign(cloneDeep(linkMock), {linkType: 'Space'}),
  team: {sys: Object.assign(cloneDeep(linkMock), {linkType: 'Team'})},
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
}

const webhookMock = {
  sys: Object.assign(cloneDeep(sysMock), {
    type: 'WebhookDefinition'
  })
}

const spaceMemberMock = {
  sys: Object.assign(cloneDeep(sysMock), {
    type: 'SpaceMember'
  })
}

const spaceMembershipMock = {
  sys: Object.assign(cloneDeep(sysMock), {
    type: 'SpaceMembership'
  })
}

const teamSpaceMembershipMock = {
  sys: Object.assign(cloneDeep(membershipMock), {
    type: 'TeamSpaceMembership',
    space: {
      sys: { id: 'space_id', type: 'Link', linkType: 'Space' }
    }
  }),
  roles: [
    {sys: Object.assign(cloneDeep(linkMock), {linkType: 'Role'})}
  ]
}

const organizationMembershipMock = {
  sys: Object.assign(cloneDeep(sysMock), {
    type: 'OrganizationMembership'
  })
}

const teamMock = {
  sys: Object.assign(cloneDeep(sysMock), {
    type: 'Team'
  })
}

const teamMembershipMock = {
  sys: Object.assign(cloneDeep(sysMock), {
    type: 'TeamMembership'
  })
}

const organizationInvitationMock = {
  sys: Object.assign(cloneDeep(sysMock), {
    type: 'organizationInvitation'
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
  }),
  name: 'name'
}

const usageMock = {
  sys: Object.assign(cloneDeep(sysMock), {
    type: 'Usage'
  })
}

const uiExtensionMock = {
  sys: Object.assign(cloneDeep(sysMock), {
    type: 'Extension'
  })
}

const appInstallationMock = {
  sys: Object.assign(cloneDeep(sysMock), {
    type: 'AppInstallation',
    appDefinition: {
      sys: {
        id: '<app_definition_id>'
      }
    }
  })
}

const environmentAliasMock = {
  sys: Object.assign(cloneDeep(sysMock), {
    type: 'EnvironmentAlias'
  }),
  environment: environmentMock
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
  spaceMember: spaceMemberMock,
  spaceMembership: spaceMembershipMock,
  teamSpaceMembership: teamSpaceMembershipMock,
  organizationMembership: organizationMembershipMock,
  team: teamMock,
  teamMembership: teamMembershipMock,
  organizationInvitation: organizationInvitationMock,
  role: roleMock,
  apiKey: apiKeyMock,
  previewApiKey: previewApiKeyMock,
  error: errorMock,
  upload: uploadMock,
  organization: organizationMock,
  uiExtension: uiExtensionMock,
  appInstallation: appInstallationMock,
  user: userMock,
  personalAccessToken: personalAccessTokenMock,
  usage: usageMock,
  environmentAlias: environmentAliasMock
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
    appDefinition: {
      wrapAppDefinition: sinon.stub(),
      wrapAppDefinitionCollection: sinon.stub()
    },
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
    spaceMember: {
      wrapSpaceMember: sinon.stub(),
      wrapSpaceMemberCollection: sinon.stub()
    },
    spaceMembership: {
      wrapSpaceMembership: sinon.stub(),
      wrapSpaceMembershipCollection: sinon.stub()
    },
    teamSpaceMembership: {
      wrapTeamSpaceMembership: sinon.stub(),
      wrapTeamSpaceMembershipCollection: sinon.stub()
    },
    organizationMembership: {
      wrapOrganizationMembership: sinon.stub(),
      wrapOrganizationMembershipCollection: sinon.stub()
    },
    team: {
      wrapTeam: sinon.stub(),
      wrapTeamCollection: sinon.stub()
    },
    teamMembership: {
      wrapTeamMembership: sinon.stub(),
      wrapTeamMembershipCollection: sinon.stub()
    },
    organizationInvitation: {
      wrapOrganizationInvitation: sinon.stub()
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
      wrapOrganization: sinon.stub(),
      wrapOrganizationCollection: sinon.stub()
    },
    uiExtension: {
      wrapUiExtension: sinon.stub(),
      wrapUiExtensionCollection: sinon.stub()
    },
    appInstallation: {
      wrapAppInstallation: sinon.stub(),
      wrapAppInstallationCollection: sinon.stub()
    },
    user: {
      wrapUser: sinon.stub(),
      wrapUserCollection: sinon.stub()
    },
    personalAccessToken: {
      wrapPersonalAccessToken: sinon.stub(),
      wrapPersonalAccessTokenCollection: sinon.stub()
    },
    usage: {
      wrapUsageCollection: sinon.stub()
    },
    environmentAlias: {
      wrapEnvironmentAlias: sinon.stub(),
      wrapEnvironmentAliasCollection: sinon.stub()
    }
  }
  rewiredModuleApi.__Rewire__('entities', entitiesMock)

  return entitiesMock
}

export {
  appDefinitionMock,
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
  spaceMemberMock,
  spaceMembershipMock,
  teamSpaceMembershipMock,
  organizationMembershipMock,
  teamMock,
  teamMembershipMock,
  organizationInvitationMock,
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
  environmentMock,
  usageMock,
  environmentAliasMock
}
