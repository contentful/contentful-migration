'use strict';

import { expect } from 'chai';

import EntrySetTagsIntentValidator from '../../../../src/lib/intent-validator/entry-set-tags';
import createValidator from './validate-steps';
const validateSteps = createValidator([EntrySetTagsIntentValidator]);

describe('Entry tag update', function () {
  describe('when providing the required properties', function () {
    it('returns no validation errors', async function () {
      const validationErrors = await validateSteps(function up (migration) {
        migration.setTagsForEntries({
          contentType: 'dog',
          from: ['owner'],
          setTagsForEntry: async (entryFields, entryTags, apiTags) => {
            return [...entryTags, ...apiTags];
          }
        });
      });
      expect(validationErrors).to.eql([]);
    });

    describe('when using the wrong type for the properties', function () {
      it('returns all validation errors', async function () {
        const properties = {
          contentType: 'person',
          from: 'information',
          to: 'address',
          setTagsForEntry: {}
        };
        const validationErrors = await validateSteps(function up (migration) {
          migration.setTagsForEntries(properties);
        });

        expect(validationErrors).to.eql([
          {
            details: {
              step: {
                meta: {
                  contentTypeInstanceId: 'contentType/person/0'
                },
                payload: {
                  contentTypeId: 'person',
                  entryTransformationForTags: {
                    setTagsForEntry: {},
                    from: 'information',
                    to: 'address'
                  }
                },
                type: 'contentType/setTagsForEntries'
              }
            },
            message: '"string" is not a valid type for the tags update for entry property "from". Expected "array".',
            type: 'InvalidType'
          },
          {
            details: {
              step: {
                meta: {
                  contentTypeInstanceId: 'contentType/person/0'
                },
                payload: {
                  contentTypeId: 'person',
                  entryTransformationForTags: {
                    setTagsForEntry: {},
                    from: 'information',
                    to: 'address'
                  }
                },
                type: 'contentType/setTagsForEntries'
              }
            },
            message: '"to" is not a valid property name for a tags update for entry.',
            type: 'InvalidProperty'
          },
          {
            details: {
              step: {
                meta: {
                  contentTypeInstanceId: 'contentType/person/0'
                },
                payload: {
                  contentTypeId: 'person',
                  entryTransformationForTags: {
                    from: 'information',
                    to: 'address',
                    setTagsForEntry: {}
                  }
                },
                type: 'contentType/setTagsForEntries'
              }
            },
            message: '"object" is not a valid type for the tags update for entry property "setTagsForEntry". Expected "function".',
            type: 'InvalidType'
          }
        ]);
      });
    });
  });
});
