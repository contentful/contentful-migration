'use strict';

const { expect } = require('chai');
const Bluebird = require('bluebird');
const path = require('path');

const createSteps = require('../../../../src/lib/migration-steps');

const getFileName = (fullFileName) => {
  return path.parse(fullFileName).base;
};

const thisFile = getFileName(__filename);

describe('migration-steps callsites', function () {
  describe('when executing a migration', function () {
    it('includes callsites in the steps', Bluebird.coroutine(function * () {
      const steps = yield createSteps(function up (migration) {
        const person = migration.createContentType('person', {
          description: 'A content type for a person'
        });

        person.name('a person');

        const fullName = person.createField('fullName', {
          name: 'Full Name'
        });

        fullName.required(true);

        const address = migration.editContentType('address', {
          name: 'the new name'
        });

        address.editField('houseNumber').omitted(true);
      });

      const callsites = steps.map((step) => {
        return step.meta.callsite;
      });

      const callsiteWithFiles = callsites.map(({ line, file }) => {
        return {
          line,
          file: getFileName(file)
        };
      });

      expect(callsiteWithFiles).to.eql([
        {
          line: 19,
          file: thisFile
        },
        {
          line: 19,
          file: thisFile
        },
        {
          line: 23,
          file: thisFile
        },
        {
          line: 25,
          file: thisFile
        },
        {
          line: 25,
          file: thisFile
        },
        {
          line: 29,
          file: thisFile
        },
        {
          line: 31,
          file: thisFile
        },
        {
          line: 35,
          file: thisFile
        }
      ]);
    }));
  });
});
