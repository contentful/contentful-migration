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


