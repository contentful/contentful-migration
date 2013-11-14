'use strict';

var buster = require('buster');
var assert = buster.assert;
var refute = buster.refute;

var util = require('../util');
var client = util.client;
var wait = util.wait;

buster.testCase('Entry', {
  prepare: function() {
    this.timeout = 30e3;

    var that = this;
    return client.createSpace({
      name: 'Entry Integration Test'
    }).then(function(space) {
      that.space = space;
      return space.createContentType({
        name: 'Recipe',
        fields: [{
          id: 'title',
          name: 'Title',
          type: 'Text'
        }, {
          id: 'difficulty',
          name: 'Difficulty',
          type: 'Number'
        }]
      }).then(function(contentType) {
        return space.publishContentType(contentType);
      }).then(function(contentType) {
        that.contentType = contentType;
        return wait();
      });
    });
  },

  conclude: function() {
    return client.deleteSpace(this.space);
  },

  setUp: function() {
    var that = this;
    return this.space.createEntry(this.contentType, {
      fields: {
        title: {'en-US': 'Bacon Pancakes'}
      }
    }).then(function(entry) {
      that.entry = entry;
    });
  },

  'can be created': function() {
    assert.equals(this.entry.fields.title['en-US'], 'Bacon Pancakes');
  },

  'can be created with specific ID': function() {
    return this.space.createEntry(this.contentType, {
      sys: {id: 'foobar'}
    }).then(function(entry) {
      assert.equals(entry.sys.id, 'foobar');
    });
  },

  'can be updated': function() {
    this.entry.fields.difficulty = {'en-US': 4.2};
    return this.space.updateEntry(this.entry).then(function(entry) {
      assert.equals(entry.fields.difficulty['en-US'], 4.2);
    });
  },

  'can not be updated with invalid data ': function() {
    this.entry.fields.foo = {'en-US': 'bar'};
    return this.space.updateEntry(this.entry).catch(function(error) {
      assert.defined(error);
    });

  },

  'can be read': function() {
    return this.space.getEntry(this.entry.sys.id).then(function(entry) {
      assert.equals(entry.fields.title['en-US'], 'Bacon Pancakes');
    });
  },

  'can be listed': function() {
    var space = this.space;
    return wait().then(function() {
      return space.getEntries();
    }).then(function(entries) {
      var entry = entries[0];
      assert.equals(entry.fields.title['en-US'], 'Bacon Pancakes');
    });
  },

  'can be published': function() {
    return this.space.publishEntry(this.entry).then(function(entry) {
      var sys = entry.sys;
      assert.defined(sys.publishedAt);
      assert.defined(sys.publishedBy);
      assert.equals(sys.publishedVersion, sys.version - 1);
    });
  },

  'can be unpublished': function() {
    var space = this.space;
    return space.publishEntry(this.entry).then(function(entry) {
      return space.unpublishEntry(entry);
    }).then(function(entry) {
      var sys = entry.sys;
      refute.defined(sys.publishedAt);
      refute.defined(sys.publishedBy);
      refute.defined(sys.publishedVersion);
    });
  },

  'can be archived': function() {
    return this.space.archiveEntry(this.entry).then(function(entry) {
      var sys = entry.sys;
      assert.defined(sys.archivedAt);
      assert.defined(sys.archivedBy);
      assert.equals(sys.archivedVersion, sys.version - 1);
    });
  },

  'can be unarchived': function() {
    var space = this.space;
    return space.archiveEntry(this.entry).then(function(entry) {
      return space.unarchiveEntry(entry);
    }).then(function(entry) {
      var sys = entry.sys;
      refute.defined(sys.archivedAt);
      refute.defined(sys.archivedBy);
      refute.defined(sys.archivedVersion);
    });
  },

  'can be deleted': function() {
    return this.space.deleteEntry(this.entry).then(function() {
      assert(true);
    });
  }
});
