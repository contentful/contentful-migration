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
  .options('host', {
    demand: true,
    description: 'Contentful Management API Hostname'
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
var host = argv.host;
var sourceSpaceId = argv['source-space-id'];
var destinationSpaceId = argv['destination-space-id'];
var destinationOrganizationId = argv['destination-organization-id'];

var client = contentful.createClient({
  accessToken: accessToken,
  host: host
});

client.getSpace(sourceSpaceId).catch(function(error) {
  console.log('Could not find source Space %s using access token %s', sourceSpaceId, accessToken);
  throw error;
}).then(function(sourceSpace) {
  var destinationSpacePromise;

  if (destinationSpaceId) {
    destinationSpacePromise = client.getSpace(destinationSpaceId).catch(function(error) {
      console.log('Could not find destination Space %s using access token %s', destinationSpaceId, accessToken);
      throw error;
    });
  } else {
    destinationSpacePromise = client.createSpace({
      name: 'Clone of ' + sourceSpace.name
    }, destinationOrganizationId).delay(5e3);
  }

  return [sourceSpace, destinationSpacePromise];
}).spread(function(sourceSpace, destinationSpace) {
  console.log('Cloning from Space "%s" (%s) to "%s" (%s)',
             sourceSpace.name, sourceSpace.sys.id,
             destinationSpace.name, destinationSpace.sys.id);

  return sourceSpace.getContentTypes({
    limit: 1000
  }).then(function(sourceContentTypes) {
    return Promise.reduce(sourceContentTypes, function(result, contentType) {
      console.log('Creating & publishing Content Type %s', contentType.name);
      return destinationSpace.createContentType(contentType).then(function(contentType) {
        return destinationSpace.publishContentType(contentType);
      });
    }, null);
  }).then(function() {
    return forEachEntry(sourceSpace, function(entry) {
      console.log('Creating entry %s', entry.sys.id);
      return destinationSpace.createEntry(entry.sys.contentType.sys.id, entry).catch(function(error) {
        console.log(error);
        throw error;
      });
    });
  });
});

var limit = 10;
function forEachEntry(space, map, skip) {
  if (!skip) { skip = 0; }
  return space.getEntries({
    order: 'sys.createdAt',
    limit: limit,
    skip: skip
  }).then(function(entries) {
    console.log('Cloning %d entries at %d/%d', entries.length, entries.skip, entries.total);
    return Promise.reduce(entries, function(memo, entry) {
      return map(entry);
    }, null).then(function() {
      if (entries.length === 0) {
        return;
      } else {
        return forEachEntry(space, map, skip + entries.length);
      }
    });
  });
}
