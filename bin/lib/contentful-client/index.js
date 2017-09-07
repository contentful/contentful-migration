const path = require('path');
const os = require('os');
const { loadProxyFromEnv, agentFromProxy } = require('./proxy');
// One cannot rewire const's
// eslint-disable-next-line
let { createClient } = require('contentful-management');

// TODO: I'm ugly, maybe change me
const homedir = process.env.NODE_ENV === 'test' ? '/tmp' : os.homedir();
const configPath = path.resolve(homedir, '.contentfulrc.json');

function getFileConfig () {
  try {
    return require(configPath);
  } catch (e) {
    return {};
  }
}

function loadTokenFromEnv (env) {
  const envKey = 'CONTENTFUL_MANAGEMENT_ACCESS_TOKEN';
  return env[envKey];
}

function createManagementClient (params) {
  const proxyConfig = loadProxyFromEnv(process.env);
  const envToken = loadTokenFromEnv(process.env);
  const fileConfig = getFileConfig();
  const { httpsAgent } = agentFromProxy(proxyConfig);
  const config = Object.assign({ httpsAgent }, fileConfig, params);

  if (!config.accessToken && config.cmaToken) {
    config.accessToken = config.cmaToken;
    delete config.cmaToken;
  }

  // access token as environment variable *always* takes precedence
  if (envToken) {
    config.accessToken = envToken;
  }

  if (!config.application) {
    throw new Error('Please specify the application name that uses this client instance');
  }

  return createClient(config);
}

module.exports = {
  createManagementClient
};
