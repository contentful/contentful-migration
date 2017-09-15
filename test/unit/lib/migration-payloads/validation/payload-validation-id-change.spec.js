'use strict';

const { expect } = require('chai');
const Bluebird = require('bluebird');

const validateMigration = require('./validate-payloads');

describe('payload validation', function () {
  describe('when setting a new id but it does not fit the requirements', function () {
    it('returns an error if too short', Bluebird.coroutine(function * () {
      const migration = function (migration) {
        migration
          .editContentType('book')
          .changeFieldId('title', '');
      };

      const existingCts = [
        {
          sys: {
            version: 1,
            id: 'book'
          },
          name: 'Book',
          fields: [{
            id: 'title',
            name: 'Title',
            type: 'Symbol'
          }, {
            id: 'pages',
            name: 'Pages',
            type: 'Number'
          }]
        }
      ];

      const errors = yield validateMigration(migration, existingCts);

      expect(errors).to.eql([
        [
          {
            type: 'InvalidPayload',
            message: `The new ID "" for the field "title" does not match the requirements. IDs must be between 1 and 64 characters long, start with a letter, and contain only alphanumeric characters as well as underscores.`
          }
        ]
      ]);
    }));

    it('returns an error if too long', Bluebird.coroutine(function * () {
      const longId = Array(65).fill('a').join('');
      const migration = function (migration) {
        migration
          .editContentType('book')
          .changeFieldId('title', longId);
      };

      const existingCts = [
        {
          sys: {
            version: 1,
            id: 'book'
          },
          name: 'Book',
          fields: [{
            id: 'title',
            name: 'Title',
            type: 'Symbol'
          }, {
            id: 'pages',
            name: 'Pages',
            type: 'Number'
          }]
        }
      ];

      const errors = yield validateMigration(migration, existingCts);

      expect(errors).to.eql([
        [
          {
            type: 'InvalidPayload',
            message: `The new ID "${longId}" for the field "title" does not match the requirements. IDs must be between 1 and 64 characters long, start with a letter, and contain only alphanumeric characters as well as underscores.`
          }
        ]
      ]);
    }));

    it('returns an error for wrong characters', Bluebird.coroutine(function * () {
      const migration = function (migration) {
        migration
          .editContentType('book')
          .changeFieldId('title', '12#hello');
      };

      const existingCts = [
        {
          sys: {
            version: 1,
            id: 'book'
          },
          name: 'Book',
          fields: [{
            id: 'title',
            name: 'Title',
            type: 'Symbol'
          }, {
            id: 'pages',
            name: 'Pages',
            type: 'Number'
          }]
        }
      ];

      const errors = yield validateMigration(migration, existingCts);

      expect(errors).to.eql([
        [
          {
            type: 'InvalidPayload',
            message: `The new ID "12#hello" for the field "title" does not match the requirements. IDs must be between 1 and 64 characters long, start with a letter, and contain only alphanumeric characters as well as underscores.`
          }
        ]
      ]);
    }));
  });

  it('does not return errors when referring to a field by its new id in the same migration', Bluebird.coroutine(function * () {
    const migration = function (migration) {
      const book = migration.editContentType('book');
      book.changeFieldId('title', 'newTitle');
      book.editField('newTitle').name('new Title');
    };

    const existingCts = [
      {
        sys: {
          version: 1,
          id: 'book'
        },
        name: 'Book',
        fields: [{
          id: 'title',
          name: 'Title',
          type: 'Symbol'
        }, {
          id: 'pages',
          name: 'Pages',
          type: 'Number'
        }]
      }
    ];

    const errors = yield validateMigration(migration, existingCts);
    expect(errors).to.eql([[], []]);
  }));
});
