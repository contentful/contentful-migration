import sinon from 'sinon'

export default function setupHttpEntitiesMocks (rewiredModuleApi, promise) {
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
    }
  }
  rewiredModuleApi.__Rewire__('entities', entitiesMock)

  const httpMock = {
    get: sinon.stub().returns(promise),
    post: sinon.stub().returns(promise),
    put: sinon.stub().returns(promise),
    delete: sinon.stub().returns(promise)
  }
  return {
    entitiesMock,
    httpMock
  }
}
