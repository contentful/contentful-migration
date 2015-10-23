'use strict';

var Promise = require('es6-promise').Promise;

var _ = require('underscore-contrib');
var questor = require('questor');
var redefine = require('redefine');
var querystring = require('querystring');

var APIError = require('./lib/api-error');
var createBackoff = require('./lib/backoff');
var rateLimit = require('./lib/rate-limit');

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

function creationMethodForResource(resource) {
  var hasId = _.hasPath(resource, ['sys', 'id']);
  return hasId ? 'PUT' : 'POST';
}

function creationPathForResource(space, type, resource) {
  var hasId = _.hasPath(resource, ['sys', 'id']);
  var resourceName = {
    Asset: 'assets',
    ContentType: 'content_types',
    Entry: 'entries'
  }[type];
  var path = '/spaces/' + space.sys.id + '/' + resourceName;
  if (hasId) {
    var id = _.getPath(resource, ['sys', 'id']);
    path += '/' + id;
  }
  return path;
}

var Client = redefine.Class({
  constructor: function Client(options) {
    enforcep(options, 'accessToken');

    this.options = _.defaults({}, options, {
      host: 'api.contentful.com',
      secure: true,
      rateLimit: 6,
      retryOnTooManyRequests: true,
      maxRetries: 5
    });

    // decorate this.request with a rate limiter
    this.request = rateLimit(this.options.rateLimit, 1000, this.request);
  },

  request: function(path, options, backoff) {
    if (!options) options = {};
    if (!options.method) options.method = 'GET';
    if (!options.headers) options.headers = {};
    if (!options.query) options.query = {};
    options.headers['Content-Type'] = 'application/vnd.contentful.management.v1+json';
    options.query.access_token = this.options.accessToken;

    if (!backoff && this.options.retryOnTooManyRequests) {
      backoff = createBackoff(this.options.maxRetries);
    }

    var uri = [
      this.options.secure ? 'https' : 'http',
      '://',
      _.first(this.options.host.split(':')),
      ':',
      this.options.host.split(':')[1] || (this.options.secure ? '443' : '80'),
      path,
      '?',
      querystring.stringify(options.query)
    ].join('');

    var self = this;
    var response = questor(uri, options).then(parseJSONBody);

    if (backoff) {
      response = response.catch(function(error) {
        // Rate-limited by the server, maybe backoff and retry
        if (error.status === 429) {
          return backoff(error, function () {
            return self.request(path, options, backoff);
          });
        }
        throw error;
      });
    }

    return response.catch(function (error) {
      if (!('body' in error)) {
        // Attach request info to errors that don't have a response body
        error.request = {
          method: options.method,
          uri: uri,
          body: options.body
        };
        throw error;
      }

      // Otherwise parse, wrap, and rethrow the error
      error = parseJSONBody(error);
      throw new APIError(error, {
        method: options.method,
        uri: uri,
        body: options.body
      });
    });
  },

  createSpace: function(space, organizationId) {
    var headers = {};
    if (organizationId) {
      headers['X-Contentful-Organization'] = organizationId;
    }
    return this.request('/spaces', {
      method: 'POST',
      body: JSON.stringify(space),
      headers: headers
    }).then(_.partial(Space.parse, this));
  },

  getSpace: function(identifiable) {
    var id = getId(identifiable);
    return this.request('/spaces/' + id).then(_.partial(Space.parse, this));
  },

  getSpaces: function() {
    return this.request('/spaces').then(_.partial(SearchResult.parse, this));
  },

  updateSpace: function(space) {
    var id = getId(space);
    var version = getVersion(space);
    return this.request('/spaces/' + id, {
      method: 'PUT',
      headers: {
        'X-Contentful-Version': version
      },
      body: JSON.stringify(getData(space))
    }).then(_.partial(Space.parse, this.client));
  },

  deleteSpace: function(identifiable) {
    var id = getId(identifiable);
    return this.request('/spaces/' + id, {
      method: 'DELETE',
      ignoreResponseBody: true
    });
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
    var path = creationPathForResource(this, 'ContentType', contentType);
    return this.client.request(path, {
      method: creationMethodForResource(contentType),
      body: JSON.stringify(contentType)
    }).then(_.partial(ContentType.parse, this.client));
  },

  getContentType: function(id) {
    return this.client.request('/spaces/' + this.sys.id + '/content_types/' + id)
      .then(_.partial(ContentType.parse, this.client));
  },

  getContentTypes: function(object) {
    var query = Query.parse(object);
    return this.client.request('/spaces/' + this.sys.id + '/content_types', {query: query})
      .then(_.partial(SearchResult.parse, this.client));
  },

  getPublishedContentTypes: function(object) {
    var query = Query.parse(object);
    return this.client.request('/spaces/' + this.sys.id + '/public/content_types', {query: query})
      .then(_.partial(SearchResult.parse, this.client));
  },

  updateContentType: function(contentType) {
    var spaceId = getId(this);
    var id = getId(contentType);
    var version = getVersion(contentType);
    return this.client.request('/spaces/' + spaceId + '/content_types/' + id, {
      method: 'PUT',
      headers: {
        'X-Contentful-Version': version
      },
      body: JSON.stringify(getData(contentType))
    }).then(_.partial(ContentType.parse, this.client));
  },

  deleteContentType: function(contentType) {
    var spaceId = getId(this);
    var id = getId(contentType);
    return this.client.request('/spaces/' + spaceId + '/content_types/' + id, {
      method: 'DELETE',
      ignoreResponseBody: true
    });
  },

  publishContentType: function(contentType, publishVersion) {
    var spaceId = getId(this);
    var id = getId(contentType);
    var version = publishVersion || getVersion(contentType);
    return this.client.request('/spaces/' + spaceId + '/content_types/' + id + '/published', {
      method: 'PUT',
      headers: {
        'X-Contentful-Version': version
      }
    }).then(_.partial(ContentType.parse, this.client));
  },

  unpublishContentType: function(contentType) {
    var spaceId = getId(this);
    var id = getId(contentType);
    return this.client.request('/spaces/' + spaceId + '/content_types/' + id + '/published', {
      method: 'DELETE'
    }).then(_.partial(ContentType.parse, this.client));
  },

  //
  // Entry functions
  //

  createEntry: function(contentType, entry) {
    var contentTypeId = getId(contentType);
    var path = creationPathForResource(this, 'Entry', entry);
    return this.client.request(path, {
      method: creationMethodForResource(entry),
      headers: {
        'X-Contentful-Content-Type': contentTypeId
      },
      body: JSON.stringify(getData(entry))
    }).then(_.partial(Entry.parse, this.client));
  },

  getEntry: function(id) {
    return this.client.request('/spaces/' + this.sys.id + '/entries/' + id)
      .then(_.partial(Entry.parse, this.client));
  },

  getEntries: function(object) {
    var query = Query.parse(object);
    return this.client.request('/spaces/' + this.sys.id + '/entries', {query: query})
      .then(_.partial(SearchResult.parse, this.client));
  },

  getPublishedEntries: function(object) {
    var query = Query.parse(object);
    return this.client.request('/spaces/' + this.sys.id + '/public/entries', {query: query})
      .then(_.partial(SearchResult.parse, this.client));
  },

  updateEntry: function(entry) {
    var spaceId = getId(this);
    var id = getId(entry);
    var version = getVersion(entry);
    return this.client.request('/spaces/' + spaceId + '/entries/' + id, {
      method: 'PUT',
      headers: {
        'X-Contentful-Version': version
      },
      body: JSON.stringify(getData(entry))
    }).then(_.partial(Entry.parse, this.client));
  },

  publishEntry: function(entry, publishVersion) {
    var spaceId = getId(this);
    var id = getId(entry);
    var version = publishVersion || getVersion(entry);
    return this.client.request('/spaces/' + spaceId + '/entries/' + id + '/published', {
      method: 'PUT',
      headers: {
        'X-Contentful-Version': version
      }
    }).then(_.partial(Entry.parse, this.client));
  },

  unpublishEntry: function(entry) {
    var spaceId = getId(this);
    var id = getId(entry);
    return this.client.request('/spaces/' + spaceId + '/entries/' + id + '/published', {
      method: 'DELETE'
    }).then(_.partial(Entry.parse, this.client));
  },

  deleteEntry: function(identifiable) {
    var spaceId = getId(this);
    var id = getId(identifiable);
    return this.client.request('/spaces/' + spaceId + '/entries/' + id, {
      method: 'DELETE',
      ignoreResponseBody: true
    });
  },

  archiveEntry: function(entry) {
    var spaceId = getId(this);
    var id = getId(entry);
    return this.client.request('/spaces/' + spaceId + '/entries/' + id + '/archived', {
      method: 'PUT'
    }).then(_.partial(Entry.parse, this.client));
  },

  unarchiveEntry: function(entry) {
    var spaceId = getId(this);
    var id = getId(entry);
    return this.client.request('/spaces/' + spaceId + '/entries/' + id + '/archived', {
      method: 'DELETE'
    }).then(_.partial(Entry.parse, this.client));
  },

  //
  // Asset functions
  //

  createAsset: function(asset) {
    var path = creationPathForResource(this, 'Asset', asset);
    return this.client.request(path, {
      method: creationMethodForResource(asset),
      body: JSON.stringify(asset)
    }).then(_.partial(Asset.parse, this.client));
  },

  getAsset: function(identifiable) {
    var id = getId(identifiable);
    return this.client.request('/spaces/' + this.sys.id + '/assets/' + id)
      .then(_.partial(Asset.parse, this.client));
  },

  getAssets: function(object) {
    var query = Query.parse(object);
    return this.client.request('/spaces/' + this.sys.id + '/assets', {query: query})
     .then(_.partial(SearchResult.parse, this.client));
  },

  getPublishedAssets: function(object) {
    var query = Query.parse(object);
    return this.client.request('/spaces/' + this.sys.id + '/public/assets', {query: query})
     .then(_.partial(SearchResult.parse, this.client));
  },

  updateAsset: function(asset) {
    var spaceId = getId(this);
    var id = getId(asset);
    var version = getVersion(asset);
    return this.client.request('/spaces/' + spaceId + '/assets/' + id, {
      method: 'PUT',
      headers: {
        'X-Contentful-Version': version
      },
      body: JSON.stringify(getData(asset))
    }).then(_.partial(Asset.parse, this.client));
  },

  processAssetFile: function(asset, fileId, processVersion) {
    var spaceId = getId(this);
    var id = getId(asset);
    var version = processVersion || getVersion(asset);
    return this.client.request('/spaces/' + spaceId + '/assets/' + id + '/files/' + fileId + '/process', {
      method: 'PUT',
      headers: {
        'X-Contentful-Version': version
      },
      ignoreResponseBody: true
    });
  },

  publishAsset: function(asset, publishVersion) {
    var spaceId = getId(this);
    var id = getId(asset);
    var version = publishVersion || getVersion(asset);
    return this.client.request('/spaces/' + spaceId + '/assets/' + id + '/published', {
      method: 'PUT',
      headers: {
        'X-Contentful-Version': version
      }
    }).then(_.partial(Asset.parse, this.client));
  },

  unpublishAsset: function(asset) {
    var spaceId = getId(this);
    var id = getId(asset);
    return this.client.request('/spaces/' + spaceId + '/assets/' + id + '/published', {
      method: 'DELETE'
    }).then(_.partial(Asset.parse, this.client));
  },

  deleteAsset: function(identifiable) {
    var spaceId = getId(this);
    var id = getId(identifiable);
    return this.client.request('/spaces/' + spaceId + '/assets/' + id, {
      method: 'DELETE',
      ignoreResponseBody: true
    });
  },

  archiveAsset: function(asset) {
    var spaceId = getId(this);
    var id = getId(asset);
    return this.client.request('/spaces/' + spaceId + '/assets/' + id + '/archived', {
      method: 'PUT'
    }).then(_.partial(Asset.parse, this.client));
  },

  unarchiveAsset: function(asset) {
    var spaceId = getId(this);
    var id = getId(asset);
    return this.client.request('/spaces/' + spaceId + '/assets/' + id + '/archived', {
      method: 'DELETE'
    }).then(_.partial(Entry.parse, this.client));
  },

  getLocales: function() {
    return this.client.request('/spaces/' + this.sys.id + '/locales')
      .then(_.partial(SearchResult.parse, this.client));
  },

  createLocale: function(locale) {
    return this.client.request('/spaces/' + this.sys.id + '/locales', {
      method: 'POST',
      body: JSON.stringify(locale)
    }).then(_.partial(Locale.parse, this.client));
  },

  updateLocale: function(locale) {
    var id = getId(locale);
    var version = getVersion(locale);
    return this.client.request('/spaces/' + this.sys.id + '/locales/' + id, {
      method: 'PUT',
      headers: {
        'X-Contentful-Version': version
      },
      body: JSON.stringify(locale)
    }).then(_.partial(Locale.parse, this.client));
  },

  deleteLocale: function(identifiable) {
    var id = getId(identifiable);
    return this.client.request('/spaces/' + this.sys.id + '/locales/' + id, {
      method: 'DELETE'
    });
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

var Locale = redefine.Class({
  constructor: function Locale() {},

  statics: {
    parse: function(client, object) {
      return redefine(_.extend(new Locale(), {
        sys: Sys.parse(object.sys),
        code: object.code,
        name: object.name,
        contentDeliveryApi: object.contentDeliveryApi,
        contentManagementApi: object.contentManagementApi
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
      return redefine(
        object.items, {
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

exports.APIError = APIError

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
  Space: Space,
  Locale: Locale
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

function stringifyArrayValues(object) {
  return _.reduce(object, function(object, value, key) {
    object[key] = _.isArray(value) ? value.join(',') : value;
    return object;
  }, {});
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

function parseJSONBody(response) {
  if (!response.body) return;
  return JSON.parse(response.body);
}
