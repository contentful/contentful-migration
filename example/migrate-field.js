#!/usr/bin/env node

'use strict';

var yargs = require('yargs')
  .usage('Migrate a Field\'s value in all Entries of a specific Content Type.\n' +
         'Usage: $0')
  .options('help', {alias: 'h'})
  .options('access-token', {
    demand: true,
    description: 'Contentful Management API Access Token'
  })
  .options('space-id', {
    demand: true,
    description: 'ID of Space you want to migrate in'
  })
  .options('content-type-id', {
    demand: true,
    description: 'ID of Content Type of Entries you want to migrate'
  })
  .options('source-field-id', {
    demand: true,
    description: 'ID of field with existing value'
  })
  .options('destination-field-id', {
    demand: true,
    description: 'ID of field which should get the converted existing values'
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
var spaceId = argv['space-id'];
var contentTypeId = argv['content-type-id'];
var sourceFieldId = argv['source-field-id'];
var destinationFieldId = argv['destination-field-id'];

var client = contentful.createClient({
  accessToken: accessToken
});

var transforms = [{
  sourceType: 'Text',
  destinationType: 'Symbol',
  map: _.identity
}];

client.getSpace(spaceId).catch(function(error) {
  console.log('Could not find Space %s using access token %s', spaceId, accessToken);
  return error;
}).then(function(space) {
  space.getContentType(contentTypeId).catch(function(error) {
    console.log('Could not find Content Type with ID=%s in Space %s', contentTypeId, spaceId);
    throw error;
  }).then(function(contentType) {
    var sourceField = _.find(contentType.fields, {id: sourceFieldId});
    var destinationField = _.find(contentType.fields, {id: destinationFieldId});

    if (!sourceField) {
      throw new Error('Could not find source field with ID=' + sourceFieldId);
    }

    if (!destinationField) {
      throw new Error('Could not find destination field with ID=' + sourceFieldId);
    }

    if (sourceField.localized !== destinationField.localized) {
      throw new Error('Source and destination fields need same localization setting');
    }

    var transform = _.find(transforms, {
      sourceType: sourceField.type,
      destinationType: destinationField.type
    });

    if (!transform) {
      throw new Error('Can not transform values from type ' + sourceField.type +
                      ' to type ' + destinationField.type);
    }

    return mapAllEntries(space, contentTypeId, function(entry) {
      entry.fields[destinationField.id] = _.mapValues(
        entry.fields[sourceField.id],
        transform.map);
      return space.updateEntry(entry).then(function(entry) {
        console.log('Updated Entry ID=%s', entry.sys.id);
      });
    });
  });
});

var limit = 5;
function mapAllEntries(space, contentTypeId, map, skip) {
  if (!skip) { skip = 0; }
  return space.getEntries({
    content_type: contentTypeId,
    order: 'sys.createdAt',
    limit: limit,
    skip: skip
  }).then(function(entries) {
    console.log('Updating %d entries at %d/%d', entries.length, entries.skip, entries.total);
    return Promise.map(entries, map).then(function(result) {
      if (entries.length === 0) {
        return;
      } else {
        return result.concat(mapAllEntries(space, contentTypeId, map, skip + entries.length));
      }
    });
  });
}
