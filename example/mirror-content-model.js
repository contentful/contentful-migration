#!/usr/bin/env node

'use strict';

var argv = require('optimist')
  .usage('$0 access_token src_space_id dest_space_id')
  .demand(3)
  .argv;
var Promise = require('bluebird');
var contentful = require('../index');
var accessToken = argv._[0];
var srcSpaceId = argv._[1];
var destSpaceId = argv._[2];

var client = contentful.createClient({
  accessToken: accessToken
});

var log = console.log.bind(log);

Promise.all([
  client.getSpace(srcSpaceId).catch(function(error) {
    console.log('Could not find source Space %s using access token %s', srcSpaceId, accessToken);
    return error;
  }),
  client.getSpace(destSpaceId).catch(function(error) {
    console.log('Could not find destination Space %s using access token %s', destSpaceId, accessToken);
    return error;
  })
]).spread(function(srcSpace, destSpace) {
  srcSpace.getContentTypes().map(function(contentType) {
    destSpace.createContentType(contentType).then(function() {
      console.log('Duplicated Content Type %s from %s to %s',
                  contentType.sys.id, srcSpaceId, destSpaceId);
    }).catch(function(error) {
      var errorType = JSON.parse(error.body).sys.id;
      return errorType === 'VersionMismatch';
    }, function() {
      console.log('Content Type %s already exists in %s', contentType.sys.id, destSpaceId);
    }).catch(function(error) {
      console.log('Could not duplicate Content Type %s from %s to %s',
                  contentType.sys.id, srcSpaceId, destSpaceId);
      return error;
    });
  });
});
