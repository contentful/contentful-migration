import sinon from 'sinon'

export default function setupEntitiesMock (rewiredModuleApi) {
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

  return entitiesMock
}
