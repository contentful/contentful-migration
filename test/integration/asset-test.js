'use strict';

var wait = util.wait;

var UPLOAD_URI = 'https://www.filepicker.io/api/file/ufhWaldSTVqZIkyCidIb';

buster.testCase('Asset', {
  prepare: function() {
    this.timeout = 30e3;

    var that = this;
    return client.createSpace({
      name: 'Asset Integration Test'
    }).then(function(space) {
      that.space = space;
    });
  },

  conclude: function() {
    return client.deleteSpace(this.space);
  },

  setUp: function() {
    var that = this;
    return this.space.createAsset({
      fields: {
        title: {'en-US': 'Lemongrab'},
        file: {'en-US': {
          contentType: 'image/jpeg',
          fileName: 'example.jpg',
          upload: UPLOAD_URI
        }}
      }
    }).then(function(asset) {
      that.asset = asset;
    });
  },

  'can be created': function() {
    assert.equals(this.asset.fields.title['en-US'], 'Lemongrab');
  },

  'can be created with specific ID': function() {
    return this.space.createAsset({
      sys: {id: 'foobar'}
    }).then(function(asset) {
      assert.equals(asset.sys.id, 'foobar');
    });
  },

  'can be updated': function() {
    this.asset.fields.description = {'en-US': 'ACCEPTABLE'};
    return this.space.updateAsset(this.asset).then(function(asset) {
      assert.equals(asset.fields.description['en-US'], 'ACCEPTABLE');
    });
  },

  'can be read': function() {
    return this.space.getAsset(this.asset.sys.id).then(function(asset) {
      assert.equals(asset.fields.title['en-US'], 'Lemongrab');
    });
  },

  'can be listed': function() {
    var space = this.space;
    return wait().then(function() {
      return space.getAssets();
    }).then(function(assets) {
      var asset = assets[0];
      assert.equals(asset.fields.title['en-US'], 'Lemongrab');
    });
  },

  'can be processed': function() {
    return this.space.processAssetFile(this.asset, 'en-US').then(function() {
      assert(true);
    });
  },

  'can be published': function() {
    var asset = this.asset;
    var space = this.space;
    return space.processAssetFile(asset, 'en-US').then(function() {
      return wait();
    }).then(function() {
      return space.getAsset(asset.sys.id);
    }).then(function(asset) {
      return space.publishAsset(asset);
    }).then(function(asset) {
      var sys = asset.sys;
      assert.defined(sys.publishedAt);
      assert.defined(sys.publishedBy);
      assert.equals(sys.publishedVersion, sys.version - 1);
    });
  },

  'can be unpublished': function() {
    var asset = this.asset;
    var space = this.space;
    return space.processAssetFile(asset, 'en-US').then(function() {
      return wait();
    }).then(function() {
      return space.getAsset(asset.sys.id);
    }).then(function(asset) {
      return space.publishAsset(asset);
    }).then(function(asset) {
      return space.unpublishAsset(asset);
    }).then(function(asset) {
      var sys = asset.sys;
      refute.defined(sys.publishedAt);
      refute.defined(sys.publishedBy);
      refute.defined(sys.publishedVersion);
    });
  },

  'can be archived': function() {
    return this.space.archiveAsset(this.asset).then(function(asset) {
      var sys = asset.sys;
      assert.defined(sys.archivedAt);
      assert.defined(sys.archivedBy);
      assert.equals(sys.archivedVersion, sys.version - 1);
    });
  },

  'can be unarchived': function() {
    var space = this.space;
    return space.archiveAsset(this.asset).then(function(asset) {
      return space.unarchiveAsset(asset);
    }).then(function(asset) {
      var sys = asset.sys;
      refute.defined(sys.archivedAt);
      refute.defined(sys.archivedBy);
      refute.defined(sys.archivedVersion);
    });
  },

  'can be deleted': function() {
    return this.space.deleteAsset(this.asset).then(function() {
      assert(true);
    });
  }
});
