'use strict';

var _ = require('underscore-contrib');
var Promise = require('pacta').Promise;
var questor = require('questor');
var redefine = require('redefine');
var querystring = require('querystring');

// Identifiable
// Object{sys: {id: Id}} -> Id
// String -> Id
function getId(identifiable) {
  if (_.isString(identifiable)) {
    return identifiable;
  }
  if (!_.hasPath(identifiable, ['sys', 'id'])) {
    throw new TypeError('Expected resource to have an ID in sys.id');
  }
  return _.getPath(identifiable, ['sys', 'id']);
}

// Versioned
// {sys: {version: Version}} -> Version
function getVersion(resource) {
  if (!_.hasPath(resource, ['sys', 'version'])) {
    throw new TypeError('Expected resource to have a version in sys.version');
  }
  return _.getPath(resource, ['sys', 'version']);
}

// {sys: Object, ...} -> {...}
function getData(resource) {
  return _.omit(resource, 'sys');
}

var Client = redefine.Class({
  constructor: function Client(options) {
    enforcep(options, 'accessToken');

    this.options = _.defaults({}, options, {
      host: 'api.contentful.com',
      secure: true
    });
  },

  request: function(path, options) {
    if (!options) options = {};
    if (!options.headers) options.headers = {};
    if (!options.query) options.query = {};
    _.extend(options.headers, {
      'Authorization': 'Bearer ' + this.options.accessToken,
      'Content-Type': 'application/vnd.contentful.v1+json'
    });

    var uri = [
      this.options.secure ? 'https' : 'http',
      '://',
      _.first(this.options.host.split(':')),
      ':',
      this.options.secure ? '443' : '80',
      path,
      !_.isEmpty(options.query) ? '?' + querystring.stringify(options.query) : ''
    ].join('');

    var parseResponseBody = options.ignoreResponseBody ? function() {} : parseJSONBody;

    var promise = new Promise();
    var request = questor(uri, options);
    request.onRejected(function(reason) {
      if (reason instanceof Error) return reason;
      // 1. Parse proper error here
      // 2. If json parsing fails, create new Error(plaintext)
      var apiError = parseJSONBody(reason);
      var message = apiError.sys.id;
      if (apiError.details) {
        message += ': ' + JSON.stringify(apiError.details);
      }
      return new Error(message);
    }).map(_.bound(promise, 'reject'));
    request.map(parseResponseBody).map(_.bound(promise, 'resolve'));
    return promise;
  },

  createSpace: function(space) {
    var promise = new Promise();
    var request = this.request('/spaces', {
      method: 'POST',
      body: JSON.stringify(space)
    });
    request
      .map(_.partial(Space.parse, this))
      .map(_.bound(promise, 'resolve'));
    request.onRejected(_.bound(promise, 'reject'));
    return promise;
  },

  getSpace: function(identifiable) {
    var id = getId(identifiable);
    var promise = new Promise();
    var request = this.request('/spaces/' + id);
    request
      .map(_.partial(Space.parse, this))
      .map(_.bound(promise, 'resolve'));
    request.onRejected(_.bound(promise, 'reject'));
    return promise;
  },

  getSpaces: function() {
    var promise = new Promise();
    var request = this.request('/spaces');
    request
      .map(_.partial(SearchResult.parse, this))
      .map(_.bound(promise, 'resolve'));
    request.onRejected(_.bound(promise, 'reject'));
    return promise;
  },

  updateSpace: function(space) {
    var promise = new Promise();
    var id = getId(space);
    var version = getVersion(space);
    var request = this.request('/spaces/' + id, {
      method: 'PUT',
      headers: {
        'X-Contentful-Version': version
      },
      body: JSON.stringify(getData(space))
    });
    request
      .map(_.partial(Space.parse, this.client))
      .map(_.bound(promise, 'resolve'));
    request.onRejected(_.bound(promise, 'reject'));
    return promise;
  },

  deleteSpace: function(identifiable) {
    var id = getId(identifiable);
    var promise = new Promise();
    var request = this.request('/spaces/' + id, {
      method: 'DELETE',
      ignoreResponseBody: true
    });
    request.map(_.bound(promise, 'resolve'));
    request.onRejected(_.bound(promise, 'reject'));
    return promise;
  }
});

var Space = redefine.Class({
  constructor: function Space() {},

  statics: {
    parse: function(client, object) {
      return redefine(_.extend(new Space(), object), {client: client});
    }
  },

  //
  // Content Type functions
  //

  createContentType: function(contentType) {
    var promise = new Promise();
    // TODO: Allow creation by ID
    var request = this.client.request('/spaces/' + this.sys.id + '/content_types', {
      method: 'POST',
      body: JSON.stringify(contentType)
    });
    request
      .map(_.partial(ContentType.parse, this.client))
      .map(_.bound(promise, 'resolve'));
    request.onRejected(_.bound(promise, 'reject'));
    return promise;
  },

  getContentType: function(id) {
    var promise = new Promise();
    var request = this.client.request('/spaces/' + this.sys.id + '/content_types/' + id);
    request
      .map(_.partial(ContentType.parse, this.client))
      .map(_.bound(promise, 'resolve'));
    request.onRejected(_.bound(promise, 'reject'));
    return promise;
  },

  getContentTypes: function(object) {
    var query = Query.parse(object);
    var promise = new Promise();
    var request = this.client.request('/spaces/' + this.sys.id + '/content_types', {query: query});
    request.map(_.partial(SearchResult.parse, this.client))
           .map(_.bound(promise, 'resolve'));
    request.onRejected(_.bound(promise, 'reject'));
    return promise;
  },

  updateContentType: function(contentType) {
    var spaceId = getId(this);
    var id = getId(contentType);
    var version = getVersion(contentType);
    var promise = new Promise();
    var request = this.client.request('/spaces/' + spaceId + '/content_types/' + id, {
      method: 'PUT',
      headers: {
        'X-Contentful-Version': version
      },
      body: JSON.stringify(getData(contentType))
    });
    request
      .map(_.partial(ContentType.parse, this.client))
      .map(_.bound(promise, 'resolve'));
    request.onRejected(_.bound(promise, 'reject'));
    return promise;
  },

  deleteContentType: function(contentType) {
    var spaceId = getId(this);
    var id = getId(contentType);
    var promise = new Promise();
    var request = this.client.request('/spaces/' + spaceId + '/content_types/' + id, {
      method: 'DELETE',
      ignoreResponseBody: true
    });
    request.map(_.bound(promise, 'resolve'));
    request.onRejected(_.bound(promise, 'reject'));
    return promise;
  },

  publishContentType: function(contentType, publishVersion) {
    var spaceId = getId(this);
    var id = getId(contentType);
    var version = publishVersion || getVersion(contentType);
    var promise = new Promise();
    var request = this.client.request('/spaces/' + spaceId + '/content_types/' + id + '/published', {
      method: 'PUT',
      headers: {
        'X-Contentful-Version': version
      }
    });
    request
      .map(_.partial(ContentType.parse, this.client))
      .map(_.bound(promise, 'resolve'));
    request.onRejected(_.bound(promise, 'reject'));
    return promise;
  },

  unpublishContentType: function(contentType) {
    var spaceId = getId(this);
    var id = getId(contentType);
    var promise = new Promise();
    var request = this.client.request('/spaces/' + spaceId + '/content_types/' + id + '/published', {
      method: 'DELETE'
    });
    request
      .map(_.partial(ContentType.parse, this.client))
      .map(_.bound(promise, 'resolve'));
    request.onRejected(_.bound(promise, 'reject'));
    return promise;
  },

  //
  // Entry functions
  //

  createEntry: function(contentType, entry) {
    var spaceId = getId(this);
    var contentTypeId = getId(contentType);
    var promise = new Promise();
    // TODO: Allow creation by ID
    var request = this.client.request('/spaces/' + spaceId + '/entries', {
      method: 'POST',
      headers: {
        'X-Contentful-Content-Type': contentTypeId
      },
      body: JSON.stringify(getData(entry))
    });
    request
      .map(_.partial(Entry.parse, this.client))
      .map(_.bound(promise, 'resolve'));
    request.onRejected(_.bound(promise, 'reject'));
    return promise;
  },

  getEntry: function(id) {
    var promise = new Promise();
    var request = this.client.request('/spaces/' + this.sys.id + '/entries/' + id);
    request
      .map(_.partial(Entry.parse, this.client))
      .map(_.bound(promise, 'resolve'));
    request.onRejected(_.bound(promise, 'reject'));
    return promise;
  },

  getEntries: function(object) {
    var query = Query.parse(object);
    var promise = new Promise();
    var request = this.client.request('/spaces/' + this.sys.id + '/entries', {query: query});
    request.map(_.partial(SearchResult.parse, this.client))
           .map(_.bound(promise, 'resolve'));
    request.onRejected(_.bound(promise, 'reject'));
    return promise;
  },

  updateEntry: function(entry) {
    var spaceId = getId(this);
    var id = getId(entry);
    var version = getVersion(entry);
    var promise = new Promise();
    var request = this.client.request('/spaces/' + spaceId + '/entries/' + id, {
      method: 'PUT',
      headers: {
        'X-Contentful-Version': version
      },
      body: JSON.stringify(getData(entry))
    });
    request
      .map(_.partial(Entry.parse, this.client))
      .map(_.bound(promise, 'resolve'));
    request.onRejected(_.bound(promise, 'reject'));
    return promise;
  },

  publishEntry: function(entry, publishVersion) {
    var spaceId = getId(this);
    var id = getId(entry);
    var version = publishVersion || getVersion(entry);
    var promise = new Promise();
    var request = this.client.request('/spaces/' + spaceId + '/entries/' + id + '/published', {
      method: 'PUT',
      headers: {
        'X-Contentful-Version': version
      }
    });
    request
      .map(_.partial(Entry.parse, this.client))
      .map(_.bound(promise, 'resolve'));
    request.onRejected(_.bound(promise, 'reject'));
    return promise;
  },

  unpublishEntry: function(entry) {
    var spaceId = getId(this);
    var id = getId(entry);
    var promise = new Promise();
    var request = this.client.request('/spaces/' + spaceId + '/entries/' + id + '/published', {
      method: 'DELETE'
    });
    request
      .map(_.partial(Entry.parse, this.client))
      .map(_.bound(promise, 'resolve'));
    request.onRejected(_.bound(promise, 'reject'));
    return promise;
  },

  deleteEntry: function(identifiable) {
    var spaceId = getId(this);
    var id = getId(identifiable);
    var promise = new Promise();
    var request = this.client.request('/spaces/' + spaceId + '/entries/' + id, {
      method: 'DELETE',
      ignoreResponseBody: true
    });
    request.map(_.bound(promise, 'resolve'));
    request.onRejected(_.bound(promise, 'reject'));
    return promise;
  },

  archiveEntry: function(entry) {
    var spaceId = getId(this);
    var id = getId(entry);
    var promise = new Promise();
    var request = this.client.request('/spaces/' + spaceId + '/entries/' + id + '/archived', {
      method: 'PUT'
    });
    request
      .map(_.partial(Entry.parse, this.client))
      .map(_.bound(promise, 'resolve'));
    request.onRejected(_.bound(promise, 'reject'));
    return promise;
  },

  unarchiveEntry: function(entry) {
    var spaceId = getId(this);
    var id = getId(entry);
    var promise = new Promise();
    var request = this.client.request('/spaces/' + spaceId + '/entries/' + id + '/archived', {
      method: 'DELETE'
    });
    request
      .map(_.partial(Entry.parse, this.client))
      .map(_.bound(promise, 'resolve'));
    request.onRejected(_.bound(promise, 'reject'));
    return promise;
  },

  //
  // Asset functions
  //

  createAsset: function(asset) {
    var promise = new Promise();
    // TODO: Allow creation by ID
    var request = this.client.request('/spaces/' + this.sys.id + '/assets', {
      method: 'POST',
      body: JSON.stringify(asset)
    });
    request
      .map(_.partial(Asset.parse, this.client))
      .map(_.bound(promise, 'resolve'));
    request.onRejected(_.bound(promise, 'reject'));
    return promise;
  },

  getAsset: function(identifiable) {
    var id = getId(identifiable);
    var promise = new Promise();
    var request = this.client.request('/spaces/' + this.sys.id + '/assets/' + id);
    request
      .map(_.partial(Asset.parse, this.client))
      .map(_.bound(promise, 'resolve'));
    request.onRejected(_.bound(promise, 'reject'));
    return promise;
  },

  getAssets: function(object) {
    var query = Query.parse(object);
    var promise = new Promise();
    var request = this.client.request('/spaces/' + this.sys.id + '/assets', {query: query});
    request.map(_.partial(SearchResult.parse, this.client))
           .map(_.bound(promise, 'resolve'));
    request.onRejected(_.bound(promise, 'reject'));
    return promise;
  },

  updateAsset: function(asset) {
    var spaceId = getId(this);
    var id = getId(asset);
    var version = getVersion(asset);
    var promise = new Promise();
    var request = this.client.request('/spaces/' + spaceId + '/assets/' + id, {
      method: 'PUT',
      headers: {
        'X-Contentful-Version': version
      },
      body: JSON.stringify(getData(asset))
    });
    request
      .map(_.partial(Asset.parse, this.client))
      .map(_.bound(promise, 'resolve'));
    request.onRejected(_.bound(promise, 'reject'));
    return promise;
  },

  processAssetFile: function(asset, fileId, processVersion) {
    var spaceId = getId(this);
    var id = getId(asset);
    var version = processVersion || getVersion(asset);
    var promise = new Promise();
    var request = this.client.request('/spaces/' + spaceId + '/assets/' + id + '/files/' + fileId + '/process', {
      method: 'PUT',
      headers: {
        'X-Contentful-Version': version
      },
      ignoreResponseBody: true
    });
    request
      .map(_.bind(promise.resolve, promise, this));
    request.onRejected(_.bound(promise, 'reject'));
    return promise;
  },

  publishAsset: function(asset, publishVersion) {
    var spaceId = getId(this);
    var id = getId(asset);
    var version = publishVersion || getVersion(asset);
    var promise = new Promise();
    var request = this.client.request('/spaces/' + spaceId + '/assets/' + id + '/published', {
      method: 'PUT',
      headers: {
        'X-Contentful-Version': version
      }
    });
    request
      .map(_.partial(Asset.parse, this.client))
      .map(_.bound(promise, 'resolve'));
    request.onRejected(_.bound(promise, 'reject'));
    return promise;
  },

  unpublishAsset: function(asset) {
    var spaceId = getId(this);
    var id = getId(asset);
    var promise = new Promise();
    var request = this.client.request('/spaces/' + spaceId + '/assets/' + id + '/published', {
      method: 'DELETE'
    });
    request
      .map(_.partial(Asset.parse, this.client))
      .map(_.bound(promise, 'resolve'));
    request.onRejected(_.bound(promise, 'reject'));
    return promise;
  },

  deleteAsset: function(identifiable) {
    var spaceId = getId(this);
    var id = getId(identifiable);
    var promise = new Promise();
    var request = this.client.request('/spaces/' + spaceId + '/assets/' + id, {
      method: 'DELETE',
      ignoreResponseBody: true
    });
    request.map(_.bound(promise, 'resolve'));
    request.onRejected(_.bound(promise, 'reject'));
    return promise;
  },

  archiveAsset: function(asset) {
    var spaceId = getId(this);
    var id = getId(asset);
    var promise = new Promise();
    var request = this.client.request('/spaces/' + spaceId + '/assets/' + id + '/archived', {
      method: 'PUT'
    });
    request
      .map(_.partial(Asset.parse, this.client))
      .map(_.bound(promise, 'resolve'));
    request.onRejected(_.bound(promise, 'reject'));
    return promise;
  },

  unarchiveAsset: function(asset) {
    var spaceId = getId(this);
    var id = getId(asset);
    var promise = new Promise();
    var request = this.client.request('/spaces/' + spaceId + '/assets/' + id + '/archived', {
      method: 'DELETE'
    });
    request
      .map(_.partial(Entry.parse, this.client))
      .map(_.bound(promise, 'resolve'));
    request.onRejected(_.bound(promise, 'reject'));
    return promise;
  }
});

var Asset = redefine.Class({
  constructor: function Asset() {},

  statics: {
    parse: function(client, object) {
      return redefine(_.extend(new Asset(), {
        sys: Sys.parse(object.sys),
        fields: object.fields
      }), {
        client: client
      });
    }
  }
});

var Entry = redefine.Class({
  constructor: function Entry() {},

  statics: {
    parse: function(client, object) {
      return redefine(_.extend(new Entry(), {
        sys: Sys.parse(object.sys),
        fields: object.fields
      }), {
        client: client
      });
    }
  }
});

var ContentType = redefine.Class({
  constructor: function ContentType() {},

  statics: {
    parse: function(client, object) {
      return redefine(_.extend(new ContentType(), {
        sys: Sys.parse(object.sys),
        fields: _.map(object.fields, Field.parse),
      }, _.pick(object, 'name', 'description', 'displayField')), {
        client: client
      });
    }
  }
});

var Field = redefine.Class({
  constructor: function Field() {},

  statics: {
    parse: function(object) {
      return _.extend(new Field(), object);
    }
  }
});

var SearchResult = redefine.Class({
  constructor: function SearchResult() {},

  statics: {
    parse: function(client, object) {
      walkMutate(object, isParseableResource, _.partial(parseResource, client));
      var items = resolveLinks(object);
      return redefine(
        items, {
          limit: object.limit,
          skip: object.skip,
          total: object.total
        }
      );
    }
  }
});

var Query = redefine.Class({
  constructor: function Query() {},

  toQueryString: function() {
    return querystring.stringify(this);
  },

  statics: {
    parse: function(object) {
      return _.extend(new Query(), stringifyArrayValues(object));
    },
  }
});

var Sys = redefine.Class({
  constructor: function Sys() {},

  statics: {
    parse: function(object) {
      return _.extend(
        new Sys(),
        _.pick(object, 'id', 'version', 'type', 'locale', 'archivedVersion', 'publishedVersion'),
        compacto({
          archivedAt: object.archivedAt && new Date(object.archivedAt),
          archivedBy: object.archivedBy && Link.parse(object.archivedBy),
          contentType: object.contentType && Link.parse(object.contentType),
          createdAt: object.createdAt && new Date(object.createdAt),
          createdBy: object.createdBy && Link.parse(object.createdBy),
          linkType: object.linkType,
          publishedAt: object.publishedAt && new Date(object.publishedAt),
          publishedBy: object.publishedBy && Link.parse(object.publishedBy),
          updatedAt: object.updatedAt && new Date(object.updatedAt),
          updatedBy: object.updatedBy && Link.parse(object.updatedBy),
          space: object.space && Link.parse(object.space)
        })
      );
    }
  }
});

var Link = redefine.Class({
  constructor: function Link() {},

  statics: {
    parse: function(object) {
      return _.extend(new Link(), {
        sys: Sys.parse(object.sys)
      });
    }
  }
});

exports.createClient = _.fnull(function(options) {
  return new Client(options);
}, {});

function compacto(object) {
  return _.reduce(object, function(compacted, value, key) {
    if (_.truthy(value)) compacted[key] = value;
    return compacted;
  }, {});
}

function enforcep(object, property) {
  if (!_.exists(object[property]))
    throw new TypeError('Expected property ' + property);
}

var parseableResourceTypes =  {
  Asset: Asset,
  ContentType: ContentType,
  Entry: Entry,
  Space: Space
};

function isParseableResource(object) {
  return _.getPath(object, ['sys', 'type']) in parseableResourceTypes;
}

function parseResource(client) {
  var resource, Type;
  if (arguments.length === 2) {
    resource = arguments[1];
    Type = parseableResourceTypes[resource.sys.type];
    return Type.parse(client, resource);
  } else if (arguments.length === 3) {
    var space = arguments[1];
    resource = arguments[2];
    Type = parseableResourceTypes[resource.sys.type];
    return Type.parse(client, space, resource);
  }
}

function parseJSONBody(response) {
  return JSON.parse(response.responseText);
}

function stringifyArrayValues(object) {
  return _.reduce(object, function(object, value, key) {
    object[key] = _.isArray(value) ? value.join(',') : value;
    return object;
  }, {});
}

function resolveLinks(response) {
  walkMutate(response, isLink, function(link) {
    return getLink(response, link) || link;
  });
  return response.items;
}

function isLink(object) {
  return _.getPath(object, ['sys', 'type']) === 'Link';
}

function getLink(response, link) {
  var type = link.sys.linkType;
  var id = link.sys.id;
  var pred = function(resource) {
    return resource.sys.type === type && resource.sys.id === id;
  };
  return _.find(response.items, pred) ||
    response.includes && _.find(response.includes[type], pred);
}

function walkMutate(input, pred, mutator) {
  if (pred(input))
    return mutator(input);

  if (_.isArray(input) || _.isObject(input)) {
    _.each(input, function(item, key) {
      input[key] = walkMutate(item, pred, mutator);
    });
    return input;
  }

  return input;
}
