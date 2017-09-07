'use strict';

const { expect } = require('chai');
const Bluebird = require('bluebird');

const sliceById = require('../../../../../lib/migration-chunks/slicers/content-type-id');

describe('slice by contentTypeId', function () {
  describe('when slicing steps', function () {
    it('groups them by id', Bluebird.coroutine(function * () {
      const steps = [
        {
          'type': 'contentType/create',
          'meta': {
            'contentTypeInstanceId': 'contentType/person/0'
          },
          'payload': {
            'contentTypeId': 'person'
          }
        },
        {
          'type': 'contentType/update',
          'meta': {
            'contentTypeInstanceId': 'contentType/person/0'
          },
          'payload': {
            'contentTypeId': 'person',
            'props': {
              'name': 'foo'
            }
          }
        },
        {
          'type': 'contentType/update',
          'meta': {
            'contentTypeInstanceId': 'contentType/person/0'
          },
          'payload': {
            'contentTypeId': 'person',
            'props': {
              'description': 'A content type for a person'
            }
          }
        },
        {
          'type': 'field/create',
          'meta': {
            'contentTypeInstanceId': 'contentType/person/0',
            'fieldInstanceId': 'fields/fullName/0'
          },
          'payload': {
            'contentTypeId': 'person',
            'fieldId': 'fullName'
          }
        },
        {
          'type': 'field/update',
          'meta': {
            'contentTypeInstanceId': 'contentType/person/0',
            'fieldInstanceId': 'fields/fullName/0'
          },
          'payload': {
            'contentTypeId': 'person',
            'fieldId': 'fullName',
            'props': {
              'name': 'Full Name'
            }
          }
        },
        {
          'type': 'field/update',
          'meta': {
            'contentTypeInstanceId': 'contentType/person/0',
            'fieldInstanceId': 'fields/fullName/0'
          },
          'payload': {
            'contentTypeId': 'person',
            'fieldId': 'fullName',
            'props': {
              'type': 'Symbol'
            }
          }
        },
        {
          'type': 'contentType/update',
          'meta': {
            'contentTypeInstanceId': 'contentType/address/0'
          },
          'payload': {
            'contentTypeId': 'address',
            'props': {
              'name': 'the new name'
            }
          }
        },
        {
          'type': 'contentType/update',
          'meta': {
            'contentTypeInstanceId': 'contentType/person/0'
          },
          'payload': {
            'contentTypeId': 'person',
            'props': {
              'name': 'a person'
            }
          }
        },
        {
          'type': 'field/update',
          'meta': {
            'contentTypeInstanceId': 'contentType/address/0',
            'fieldInstanceId': 'fields/houseNumber/0'
          },
          'payload': {
            'contentTypeId': 'address',
            'fieldId': 'houseNumber',
            'props': {
              'omitted': true
            }
          }
        },
        {
          'type': 'field/create',
          'meta': {
            'contentTypeInstanceId': 'contentType/address/0',
            'fieldInstanceId': 'fields/houseExtension/0'
          },
          'payload': {
            'contentTypeId': 'address',
            'fieldId': 'houseExtension'
          }
        },
        {
          'type': 'field/update',
          'meta': {
            'contentTypeInstanceId': 'contentType/address/0',
            'fieldInstanceId': 'fields/houseExtension/0'
          },
          'payload': {
            'contentTypeId': 'address',
            'fieldId': 'houseExtension',
            'props': {
              'type': 'Symbol'
            }
          }
        }
      ];

      const sliced = sliceById(steps);

      expect(sliced).to.eql([
        [
          {
            'type': 'contentType/create',
            'meta': {
              'contentTypeInstanceId': 'contentType/person/0'
            },
            'payload': {
              'contentTypeId': 'person'
            }
          },
          {
            'type': 'contentType/update',
            'meta': {
              'contentTypeInstanceId': 'contentType/person/0'
            },
            'payload': {
              'contentTypeId': 'person',
              'props': {
                'name': 'foo'
              }
            }
          },
          {
            'type': 'contentType/update',
            'meta': {
              'contentTypeInstanceId': 'contentType/person/0'
            },
            'payload': {
              'contentTypeId': 'person',
              'props': {
                'description': 'A content type for a person'
              }
            }
          },
          {
            'type': 'field/create',
            'meta': {
              'contentTypeInstanceId': 'contentType/person/0',
              'fieldInstanceId': 'fields/fullName/0'
            },
            'payload': {
              'contentTypeId': 'person',
              'fieldId': 'fullName'
            }
          },
          {
            'type': 'field/update',
            'meta': {
              'contentTypeInstanceId': 'contentType/person/0',
              'fieldInstanceId': 'fields/fullName/0'
            },
            'payload': {
              'contentTypeId': 'person',
              'fieldId': 'fullName',
              'props': {
                'name': 'Full Name'
              }
            }
          },
          {
            'type': 'field/update',
            'meta': {
              'contentTypeInstanceId': 'contentType/person/0',
              'fieldInstanceId': 'fields/fullName/0'
            },
            'payload': {
              'contentTypeId': 'person',
              'fieldId': 'fullName',
              'props': {
                'type': 'Symbol'
              }
            }
          }
        ], [
          {
            'type': 'contentType/update',
            'meta': {
              'contentTypeInstanceId': 'contentType/address/0'
            },
            'payload': {
              'contentTypeId': 'address',
              'props': {
                'name': 'the new name'
              }
            }
          }
        ], [
          {
            'type': 'contentType/update',
            'meta': {
              'contentTypeInstanceId': 'contentType/person/0'
            },
            'payload': {
              'contentTypeId': 'person',
              'props': {
                'name': 'a person'
              }
            }
          }
        ], [
          {
            'type': 'field/update',
            'meta': {
              'contentTypeInstanceId': 'contentType/address/0',
              'fieldInstanceId': 'fields/houseNumber/0'
            },
            'payload': {
              'contentTypeId': 'address',
              'fieldId': 'houseNumber',
              'props': {
                'omitted': true
              }
            }
          },
          {
            'type': 'field/create',
            'meta': {
              'contentTypeInstanceId': 'contentType/address/0',
              'fieldInstanceId': 'fields/houseExtension/0'
            },
            'payload': {
              'contentTypeId': 'address',
              'fieldId': 'houseExtension'
            }
          },
          {
            'type': 'field/update',
            'meta': {
              'contentTypeInstanceId': 'contentType/address/0',
              'fieldInstanceId': 'fields/houseExtension/0'
            },
            'payload': {
              'contentTypeId': 'address',
              'fieldId': 'houseExtension',
              'props': {
                'type': 'Symbol'
              }
            }
          }
        ]
      ]);
    }));
  });
});
