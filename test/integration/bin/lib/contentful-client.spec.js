const fs = require('fs');
const path = require('path');
const { expect } = require('chai');
const { HttpsProxyAgent } = require('https-proxy-agent');

const rewire = require('rewire');
const { getConfig } = rewire('../../../../built/bin/lib/config');
const contentfulClient = rewire('../../../../built/bin/lib/contentful-client');
const { createManagementClient } = contentfulClient;

// Ensure that when both tokens are defined, we first take the integration one
// This is mostly useful for local testing where both may be defined
delete process.env.CONTENTFUL_MANAGEMENT_ACCESS_TOKEN;
const SOURCE_TEST_SPACE = process.env.CONTENTFUL_SPACE_ID;

const fileConfig = {
  cmaToken: process.env.CONTENTFUL_INTEGRATION_TEST_CMA_TOKEN
};

describe('contentful-client', function () {
  beforeEach(function () {
    fs.writeFileSync(path.resolve('/tmp', '.contentfulrc.json'), JSON.stringify(fileConfig));
  });

  it('can read the space', function () {
    const spaceName = 'contentful-migration';
    const clientConfig = Object.assign({
      application: `contentful.migration-cli/0.0.0`
    }, getConfig());
    const client = createManagementClient(clientConfig);
    return client.space.get({ spaceId: SOURCE_TEST_SPACE }).then((space) => {
      expect(space.name).to.eql(spaceName);
    });
  });

  it('creates an https agent for proxies', function () {
    process.env.https_proxy = 'https://user:pass@myproxy.com:1337';

    contentfulClient.__set__('createClient', (params) => {
      expect(params.httpsAgent).to.be.instanceof(HttpsProxyAgent);
      expect(params.httpsAgent.proxy.host).to.eql('myproxy.com');
      expect(params.httpsAgent.proxy.port).to.eql(1337);
      expect(params.httpsAgent.proxy.auth).to.eql('user:pass');
    });

    createManagementClient({ application: 'contentful.migration-cli.integration-test/0.0.0' });
  });

  it('prefers command line option access token over env', function () {
    process.env.CONTENTFUL_MANAGEMENT_ACCESS_TOKEN = 'foomybar';
    const expected = 'config-access-token';

    contentfulClient.__set__('createClient', (params) => {
      expect(params.accessToken).to.eql(expected);
    });

    createManagementClient({
      application: 'contentful.migration-cli.integration-test/0.0.0',
      accessToken: expected
    });
  });

  it('requires application param to be set', function () {
    const invocation = () => createManagementClient({ accessToken: 'something-random' });
    expect(invocation).to.throw('specify the application name');
  });
});
