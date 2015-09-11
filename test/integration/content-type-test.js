'use strict';

var wait = util.wait;

buster.testCase('Content Type', {
  prepare: function() {
    this.timeout = 30e3;

    var that = this;
    return client.createSpace({
      name: 'Content Type Integration Test'
    }, process.env.CONTENTFUL_ORGANIZATION_ID).then(function(space) {
      that.space = space;
    });
  },

  conclude: function() {
    return client.deleteSpace(this.space);
  },

  setUp: function() {
    var that = this;
    return this.space.createContentType({
      name: 'Recipe',
      fields: [{
        id: 'title',
        name: 'Title',
        type: 'Text'
      }]
    }).then(function(contentType) {
      that.contentType = contentType;
    });
  },

  'can be created': function() {
    assert.equals(this.contentType.name, 'Recipe');
  },

  'can be created with specific ID': function() {
    return this.space.createContentType({
      sys: {id: 'foobar'}
    }).then(function(contentType) {
      assert.equals(contentType.sys.id, 'foobar');
    });
  },

  'can be updated': function() {
    this.contentType.description = 'Omnom.';
    return this.space.updateContentType(this.contentType).then(function(contentType) {
      assert.equals(contentType.description, 'Omnom.');
    });
  },

  'can be read': function() {
    return this.space.getContentType(this.contentType.sys.id).then(function(contentType) {
      assert.equals(contentType.name, 'Recipe');
    });
  },

  'can be listed': function() {
    var space = this.space;
    return wait().then(function() {
      return space.getContentTypes();
    }).then(function(contentTypes) {
      var contentType = contentTypes[0];
      assert.equals(contentType.name, 'Recipe');
    });
  },

  'can be published': function() {
    return this.space.publishContentType(this.contentType).then(function(contentType) {
      var sys = contentType.sys;
      assert.defined(sys.publishedAt);
      assert.defined(sys.publishedBy);
      assert.equals(sys.publishedVersion, sys.version - 1);
    });
  },

  'can be unpublished': function() {
    var space = this.space;
    return space.publishContentType(this.contentType).then(function(contentType) {
      return space.unpublishContentType(contentType);
    }).then(function(contentType) {
      var sys = contentType.sys;
      refute.defined(sys.publishedAt);
      refute.defined(sys.publishedBy);
      refute.defined(sys.publishedVersion);
    });
  },

  'can be deleted': function() {
    return this.space.deleteContentType(this.contentType).then(function() {
      assert(true);
    });
  }
});
