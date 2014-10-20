#!/usr/bin/env node

'use strict';

var yargs = require('yargs')
  .usage('Clone all Content Types and Entries of a Space to another Space.\n' +
         'Usage: $0')
  .options('help', {alias: 'h'})
  .options('access-token', {
    demand: true,
    description: 'Contentful Management API Access Token'
  })

  .options('destination-access-token', {
    description:
    'Access token of destination Space if different from source. ' +
      'Defaults to value of `access-token.`'
  })
  .options('host', {
    default: 'api.contentful.com',
    description: 'Contentful Management API Hostname'
  })
  .options('destination-host', {
    description: 'Host of destinated API. Defaults to value of `host`.'
  })
  .options('source-space-id', {
    demand: true,
    description: 'ID of Space you want to clone from'
  })
  .options('destination-space-id', {
    description: 'ID of Space you want to clone to. Space will be created if not specified.'
  })
  .options('destination-organization-id', {
    description: 'ID of Organization destinaiton Space should be created in. Only required if destination Spacen to specified and your user is in multiple organizations.'
  })
  .options('only-content-types', {
    description: 'Only copy the Content Types from the source to the destination space'
  });

var argv = yargs.argv;

if (argv.help) {
  yargs.showHelp();
  process.exit(0);
}

var Promise = require('bluebird');
var _ = require('lodash');
var contentful = require('../index');

var accessToken = argv['access-token'];
var destinationAccessToken = argv['destination-access-token'] || accessToken;
var host = argv.host;
var destinationHost = argv['destination-host'] || host;
var sourceSpaceId = argv['source-space-id'];
var destinationSpaceId = argv['destination-space-id'];
var destinationOrganizationId = argv['destination-organization-id'];
var onlyContentTypes = argv['only-content-types'];

var client = contentful.createClient({
  accessToken: accessToken,
  host: host
});

var destinationClient = contentful.createClient({
  accessToken: destinationAccessToken,
  host: destinationHost
});

client.getSpace(sourceSpaceId)
      .catch(reportInvalidSpace)
      .then(getDestinationSpace)
      .tap(logSummary)
      .spread(clone)
      .done();

function reportInvalidSpace (error) {
  console.log('Could not find source Space %s using access token %s', sourceSpaceId, accessToken);
  throw error;
}

function getDestinationSpace (sourceSpace) {
  var destinationSpacePromise;

  if (destinationSpaceId) {
    destinationSpacePromise = destinationClient.getSpace(destinationSpaceId).catch(function(error) {
      console.log('Could not find destination Space %s using access token %s', destinationSpaceId, accessToken);
      throw error;
    });
  } else {
    destinationSpacePromise = destinationClient.createSpace({
      name: 'Clone of ' + sourceSpace.name
    }, destinationOrganizationId).delay(5e3);
  }

  return [sourceSpace, destinationSpacePromise];
}

function logSummary (spaces) {
  console.log('Cloning from Space "%s" (%s) to "%s" (%s)',
             spaces[0].name, spaces[0].sys.id,
             spaces[1].name, spaces[1].sys.id);
}

function clone (sourceSpace, destinationSpace) {
  return sourceSpace.getContentTypes({
    limit: 1000
  }).then(function(sourceContentTypes) {
    return Promise.reduce(sourceContentTypes, function(result, sourceContentType) {
      console.log('Creating Content Type %s', sourceContentType.name);
      return destinationSpace.createContentType(sourceContentType).then(function(destinationContentType) {
        if (!('publishedVersion' in sourceContentType.sys)) {
          return;
        }

        console.log('Publishing Content Type %s', destinationContentType.name);
        return destinationSpace.publishContentType(destinationContentType);
      });
    }, null);
  }).then(function() {
    if (onlyContentTypes) {
      return;
    }

    return forEachAsset(sourceSpace, function(asset) {
      console.log('Creating Asset %s', asset.sys.id);

      var destinationAsset = _.pick(asset, 'sys');

      if (asset.fields) {
        destinationAsset.fields = _.pick(asset.fields, 'title', 'description');
      }

      if (asset.fields && asset.fields.file) {
        var localeCode = _.first(_.keys(asset.fields.file));

        if (localeCode && asset.fields.file[localeCode]) {
          var sourceFile = asset.fields.file[localeCode];
          var sourceFileUrl = sourceFile.url || sourceFile.upload;

          if (/^\/\//.test(sourceFileUrl)) {
            sourceFileUrl = 'http:' + sourceFileUrl;
          }

          destinationAsset.fields.file = _.zipObject([[localeCode, {
            contentType: sourceFile.contentType,
            fileName: sourceFile.fileName,
            upload: sourceFileUrl
          }]]);
        }
      }

      return destinationSpace.createAsset(destinationAsset).catch(function(error) {
        console.log('Error creating Asset\n%s', error.toString());
        throw error;
      }).then(function(asset) {
        console.log('Processing Asset %s', asset.sys.id);
        if (!asset.fields || !asset.fields.file) { return; }
        var localeCode = _.first(_.keys(asset.fields.file));
        if (!localeCode) { return; }
        return destinationSpace.processAssetFile(asset, localeCode);
      }).catch(function(error) {
        console.log('Error processing Asset\n%s', error.toString());
        throw error;
      });
    });
  }).then(function() {
    if (onlyContentTypes) {
      return;
    }

    var sourceEntries = [];
    return forEachEntry(sourceSpace, function(entry) {
      sourceEntries.push(entry);
      console.log('Creating Entry %s', entry.sys.id);
      return destinationSpace.createEntry(entry.sys.contentType.sys.id, entry).catch(function(error) {
        console.log('Error creating Entry %s\n%s', entry.sys.id, error.toString());
        throw error;
      });
    }).delay(5e3).then(function() {
      return Promise.map(sourceEntries, function(sourceEntry) {
        if (!('publishedVersion' in sourceEntry.sys)) {
          return;
        }

        console.log('Publishing Entry %s', sourceEntry.sys.id);
        return destinationSpace.publishEntry(sourceEntry, 1).catch(function(error) {
          console.log('Error publishing Entry %s\n%s', sourceEntry.sys.id, error.toString());
          throw error;
        });
      }, {concurrency: 1});
    });
  });
}

var limit = 10;
function forEach(methodName, space, map, skip) {
  if (!skip) { skip = 0; }
  if (!_.isFunction(space[methodName])) {
    throw new Error('Invalid Space method name: ' + methodName);
  }
  var fn = space[methodName].bind(space);
  return fn({
    order: 'sys.createdAt',
    limit: limit,
    skip: skip
  }).then(function(items) {
    console.log('Cloning %d items at %d/%d', items.length, items.skip, items.total);
    return Promise.reduce(items, function(memo, item) {
      return map(item);
    }, null).then(function() {
      if (items.length === 0) {
        return;
      } else {
        return forEach(methodName, space, map, skip + items.length);
      }
    });
  });
}

var forEachEntry = _.partial(forEach, 'getEntries');
var forEachAsset = _.partial(forEach, 'getAssets');
