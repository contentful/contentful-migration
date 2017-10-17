const HttpsProxyAgent = require('https-proxy-agent');
const _ = require('lodash');
const url = require('url');

function parseAuth (authString) {
  // authString may be a falsy value like `null`
  const [username, password] = (authString || '').split(':');
  return { username, password };
}

function proxyStringToObject (proxyString) {
  if (!proxyString.startsWith('http')) {
    return proxyStringToObject(`http://${proxyString}`);
  }

  const {
    hostname: host,
    port: portString,
    auth: authString,
    protocol
  } = url.parse(proxyString);

  const auth = parseAuth(authString);
  const port = _.toInteger(portString);
  const isHttps = protocol === 'https:';

  if (!auth.username) {
    return { host, port, isHttps };
  }

  return {
    host,
    port,
    auth,
    isHttps
  };
}

function loadProxyFromEnv (env) {
  const proxyString = env['https_proxy'] ||
    env['HTTPS_PROXY'] ||
    env['http_proxy'] ||
    env['HTTP_PROXY'] ||
    env['CONTENTFUL_PROXY'];

  // Delete all potential proxy keys `axios` might use
  delete env['http_proxy'];
  delete env['HTTP_PROXY'];
  delete env['https_proxy'];
  delete env['HTTPS_PROXY'];

  if (!proxyString) {
    return;
  }

  env['CONTENTFUL_PROXY'] = proxyString;

  return proxyStringToObject(proxyString);
}

function agentFromProxy (proxy) {
  if (!proxy) {
    return {};
  }

  const { host, port, auth: { username, password } } = proxy;
  const auth = `${username}:${password}`;
  const agent = new HttpsProxyAgent({ host, port, auth });
  return { httpsAgent: agent };
}

module.exports = {
  loadProxyFromEnv,
  agentFromProxy
};
