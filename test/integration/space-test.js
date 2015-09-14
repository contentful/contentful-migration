'use strict';

buster.testCase('Space', {
  prepare: function() {
    this.timeout = 30e3;

    var that = this;
    return client.createSpace({
      name: 'Space Integration Test'
    }, process.env.CONTENTFUL_ORGANIZATION_ID).then(function(space) {
      that.space = space;
    });
  },

  conclude: function() {
    return client.deleteSpace(this.space);
  },

  'can be created': function() {
    assert.match(this.space.name, 'Space Integration Test');
  },

  'can be updated': function() {
    var space = {
      sys: this.space.sys,
      name: 'Space Fascination Test'
    };
    return client.updateSpace(space).then(function(space) {
      assert.equals(space.sys.version, 2);
    });
  },

  'can be read': function() {
    return client.getSpace(this.space.sys.id).then(function(space) {
      assert.match(space.name, /Space .+ Test/);
    });
  },

  'can be listed': function() {
    var knownSpace = this.space;
    return client.getSpaces().then(function(spaces) {
      var space = _.find(spaces, function(space) {
        return space.sys.id === knownSpace.sys.id;
      });
      assert.defined(space);
    });
  },

  'can be deleted': function() {
    return client.createSpace({
      name: 'Space Integration Test'
    }, process.env.CONTENTFUL_ORGANIZATION_ID).then(function(space) {
      assert(true);
      return client.deleteSpace(space);
    });
  }
});
