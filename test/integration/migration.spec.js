const _ = require('lodash');
const Bluebird = require('bluebird');
const { makeRequest, createDevEnvironment, deleteDevEnvironment } = require('../helpers/client');
const { expect } = require('chai');
const { flatten } = require('lodash');
const createDog = require('../../examples/01-angry-dog');
const modifyDog = require('../../examples/02-friendly-dog');
const longExample = require('../../examples/03-long-example');
const invalidScript = require('../../examples/05-plan-errors');
const idChange = require('../../examples/change-field-id');
const deleteContentType = require('../../examples/delete-content-type');
const fieldValidation = require('../../examples/09-validate-validations');
const displayField = require('../../examples/07-display-field');
const fieldMove = require('../../examples/08-move-field');
const changeEditorInterface = require('../../examples/16-change-field-control');
const changeEditorInterfaceWithExistingContentType = require('../../examples/17-change-field-control-for-existing-content-type');
const changeEditorInterfaceWithExistingContentTypeAddingHelpText = require('../../examples/18-change-field-control-for-existing-content-type-adding-help-text');
const addSidebarWidgets = require('../../examples/24-add-sidebar-widgets-to-new-content-type');
const addSidebarWidgetsToExisting = require('../../examples/27-add-sidebar-widgets-to-existing-content-type');
const createTag = require('../../examples/28-create-tag');
const modifyTag = require('../../examples/29-modify-tag');
const deleteTag = require('../../examples/30-delete-tag');
const setTagsForEntries = require('../../examples/31-set-tags-for-entries');

const { createMigrationParser } = require('../../built/lib/migration-parser');
const co = Bluebird.coroutine;

const record = require('../record');

const recorder = record('contentful-migration-integration');

before(recorder.before);
after(recorder.after);

const ENVIRONMENT_ID = 'env-integration';

const SOURCE_TEST_SPACE = process.env.CONTENTFUL_INTEGRATION_SOURCE_SPACE;

describe('the migration', function () {
  this.timeout(30000);
  let migrationParser;
  let migrator;
  let request;

  before(co(function * () {
    this.timeout(30000);
    yield createDevEnvironment(SOURCE_TEST_SPACE, ENVIRONMENT_ID);
    request = makeRequest.bind(null, SOURCE_TEST_SPACE, ENVIRONMENT_ID);
    migrationParser = createMigrationParser(request, {});
    migrator = co(function * (migration) {
      const parseResult = yield migrationParser(migration);
      const batches = parseResult.batches;
      const requests = flatten(batches.map((batch) => batch.requests));
      for (const req of requests) {
        yield request(req);
      }
    });
  }));

  after(co(function * () {
    yield deleteDevEnvironment(SOURCE_TEST_SPACE, ENVIRONMENT_ID);
  }));

  it('creates a content type', co(function * () {
    yield migrator(createDog);

    const dogResult = yield request({
      method: 'GET',
      url: '/content_types/dog',
      headers: {
        'X-Contentful-Beta-Dev-Spaces': 1
      }
    });

    expect(dogResult.name).to.eql('angry dog');
    expect(dogResult.description).to.eql('super angry');

    expect(dogResult.fields).to.eql([
      {
        id: 'woofs',
        name: 'woof woof',
        type: 'Number',
        required: true,
        disabled: false,
        localized: false,
        omitted: false,
        validations: []
      }
    ]);
  }));

  it('deletes a field', co(function * () {
    yield Bluebird.delay(5000);

    yield migrator(function (migration) {
      const dog = migration.editContentType('dog');
      dog.deleteField('woofs');
    });

    const dogResultAfterDelete = yield request({
      method: 'GET',
      url: '/content_types/dog',
      headers: {
        'X-Contentful-Beta-Dev-Spaces': 1
      }
    });

    expect(dogResultAfterDelete.fields.length).to.eql(0);
  }));

  it('modifies an existing field', co(function * () {
    yield migrator(modifyDog);

    const resultAfterModify = yield request({
      method: 'GET',
      url: '/content_types/dog',
      headers: {
        'X-Contentful-Beta-Dev-Spaces': 1
      }
    });

    expect(resultAfterModify.name).to.eql('Friendly dog');
    expect(resultAfterModify.description).to.eql('Who\'s a good boy? He is!');
    expect(resultAfterModify.fields).to.eql([
      {
        id: 'goodboys',
        name: 'number of times he has been called a good boy',
        type: 'Number',
        required: false,
        disabled: false,
        localized: false,
        omitted: false,
        validations: []
      }
    ]);
  }));

  it('changes field IDs', co(function * () {
    yield migrator(idChange);

    const resultAfterModify = yield request({
      method: 'GET',
      url: '/content_types/dog',
      headers: {
        'X-Contentful-Beta-Dev-Spaces': 1
      }
    });

    expect(resultAfterModify.fields).to.eql([
      {
        id: 'aDifferentId',
        name: 'ID switching is fun!',
        type: 'Number',
        required: false,
        disabled: false,
        localized: false,
        omitted: false,
        validations: []
      }
    ]);
  }));

  it('deletes a contentType', co(function * () {
    let result;
    yield migrator(deleteContentType);

    try {
      yield request({
        method: 'GET',
        url: `/content_types/dog`,
        headers: {
          'X-Contentful-Beta-Dev-Spaces': 1
        }
      });
    } catch (err) {
      expect(err.name).to.eql('NotFound');
    }

    expect(result).to.be.undefined();
  }));

  it('allows valid field validation', co(function * () {
    yield migrator(fieldValidation);

    const resultAfterModify = yield request({
      method: 'GET',
      url: '/content_types/dieatary-food',
      headers: {
        'X-Contentful-Beta-Dev-Spaces': 1
      }
    });

    expect(resultAfterModify.fields).to.eql([
      {
        id: 'name',
        name: 'name of the food',
        type: 'Symbol',
        required: false,
        disabled: false,
        localized: false,
        omitted: false,
        validations: [{
          unique: true
        },
        {
          prohibitRegexp: {
            pattern: 'foo',
            flags: null
          },
          message: 'asdf'
        }]
      },
      {
        id: 'calories',
        name: 'amount of calories the food contains',
        type: 'Link',
        linkType: 'Asset',
        required: false,
        disabled: false,
        localized: false,
        omitted: false,
        validations: [
          {
            assetImageDimensions:
              {
                width: { min: 1199, max: null },
                height: { min: 1343 }
              }
          }
        ]
      }
    ]);
  }));

  it('allows moving fields', co(function * () {
    yield migrator(displayField);
    yield migrator(fieldMove);

    const resultAfterModify = yield request({
      method: 'GET',
      url: '/content_types/food',
      headers: {
        'X-Contentful-Beta-Dev-Spaces': 1
      }
    });

    expect(resultAfterModify.fields).to.eql([
      {
        id: 'calories',
        name: 'How many calories does it have?',
        type: 'Number',
        required: false,
        disabled: false,
        localized: false,
        omitted: false,
        validations: []
      },
      {
        id: 'taste',
        name: 'what it tastes like',
        type: 'Symbol',
        required: false,
        disabled: false,
        localized: false,
        omitted: false,
        validations: []
      },
      {
        id: 'producer',
        name: 'Food producer',
        type: 'Symbol',
        required: false,
        disabled: false,
        localized: false,
        omitted: false,
        validations: []
      },
      {
        id: 'vegan',
        name: 'Vegan friendly',
        type: 'Boolean',
        required: false,
        disabled: false,
        localized: false,
        omitted: false,
        validations: []
      },
      {
        id: 'gmo',
        name: 'Genetically modified food',
        type: 'Boolean',
        required: false,
        disabled: false,
        localized: false,
        omitted: false,
        validations: []
      },
      {
        id: 'sugar',
        name: 'Amount of sugar',
        type: 'Number',
        required: false,
        disabled: false,
        localized: false,
        omitted: false,
        validations: []
      }
    ]);
  }));

  it('works when creating and modifying lots of things', co(function * () {
    yield migrator(longExample);

    const person = yield request({
      method: 'GET',
      url: '/content_types/person',
      headers: {
        'X-Contentful-Beta-Dev-Spaces': 1
      }
    });
    const animal = yield request({
      method: 'GET',
      url: '/content_types/animal',
      headers: {
        'X-Contentful-Beta-Dev-Spaces': 1
      }
    });

    const tag = yield request({
      method: 'GET',
      url: '/tags/longexampletag',
      headers: {
        'X-Contentful-Beta-Dev-Spaces': 1
      }
    });

    expect(person.name).to.eql('Person');
    expect(person.description).to.eql('A content type for a person');
    expect(person.fields).to.eql([
      {
        id: 'age',
        name: 'Age',
        type: 'Number',
        required: true,
        disabled: false,
        localized: false,
        omitted: false,
        validations: []
      },
      {
        id: 'fullName',
        name: 'Full name',
        type: 'Symbol',
        required: true,
        disabled: false,
        localized: true,
        omitted: false,
        validations: []
      },
      {
        id: 'pet',
        name: 'Their pet',
        type: 'Link',
        linkType: 'Entry',
        required: false,
        disabled: false,
        localized: false,
        omitted: false,
        validations: []
      }
    ]);

    expect(animal.name).to.eql('Animal');
    expect(animal.description).to.eql('An animal');
    expect(animal.fields).to.eql([
      {
        id: 'species',
        name: 'The species of the animal',
        type: 'Symbol',
        required: true,
        disabled: false,
        localized: false,
        omitted: false,
        validations: []
      },
      {
        id: 'isFurry',
        name: 'Is this a furry animal',
        type: 'Boolean',
        required: false,
        disabled: false,
        localized: false,
        omitted: false,
        validations: []
      },
      {
        id: 'name',
        name: 'The name of the animal',
        type: 'Symbol',
        required: true,
        localized: true,
        disabled: false,
        omitted: false,
        validations: []
      }
    ]);

    expect(tag.name).to.eql('long example marketing');
  }));

  it('returns an error when the script is invalid', co(function * () {
    const parseResult = yield migrationParser(invalidScript);

    expect(parseResult.payloadValidationErrors).to.have.lengthOf.above(0);
  }));

  it('does a simple content transformation ', co(function * () {
    yield request({
      method: 'PUT',
      url: '/content_types/blogpost',
      headers: {
        'X-Contentful-Beta-Dev-Spaces': 1
      },
      data: {
        name: 'blog post',
        fields: [
          {
            name: 'title',
            id: 'title',
            type: 'Symbol'
          },
          {
            name: 'category',
            id: 'category',
            type: 'Symbol'
          }
        ]
      }
    });
    yield request({
      method: 'PUT',
      url: '/content_types/blogpost/published',
      headers: {
        'X-Contentful-Beta-Dev-Spaces': 1,
        'X-Contentful-Version': 1
      }
    });

    yield request({
      method: 'POST',
      url: '/entries',
      headers: {
        'X-Contentful-Beta-Dev-Spaces': 1,
        'X-Contentful-Content-Type': 'blogpost'
      },
      data: {
        fields: { title: { 'en-US': 'hello!' } }
      }
    });

    yield request({
      method: 'POST',
      url: '/entries',
      headers: {
        'X-Contentful-Beta-Dev-Spaces': 1,
        'X-Contentful-Content-Type': 'blogpost'
      },
      data: {
        fields: { title: { 'en-US': 'hello!' } }
      }
    });

    yield migrator(function (migration) {
      migration.transformEntries({
        contentType: 'blogpost',
        from: ['title'],
        to: ['category'],
        transformEntryForLocale: (fields, locale) => {
          return { category: fields.title[locale] };
        }
      });
    });

    const blogEntries = yield request({
      method: 'GET',
      url: '/entries?content_type=blogpost',
      headers: {
        'X-Contentful-Beta-Dev-Spaces': 1
      }
    });

    const blogEntriesWithoutSysAndMetadata = blogEntries.items.map(i => _.omit(i, ['sys', 'metadata']));

    const entries = [
      {
        fields: {
          title: { 'en-US': 'hello!' },
          category: { 'en-US': 'hello!' }
        }
      }, {
        fields: {
          title: { 'en-US': 'hello!' },
          category: { 'en-US': 'hello!' }
        }
      }
    ];

    expect(blogEntriesWithoutSysAndMetadata).to.eql(entries);
  }));

  it('changes the editor interface', co(function * () {
    yield migrator(changeEditorInterface);

    const editorInterfaces = yield request({
      method: 'GET',
      url: '/content_types/blogPost/editor_interface'
    });

    expect(editorInterfaces.controls[0]).to.eql({
      fieldId: 'slug',
      widgetId: 'slugEditor',
      widgetNamespace: 'builtin',
      settings: { setting: 'value' }
    });
  }));

  it('changes the editor interface with an existing contentType', co(function * () {
    yield migrator(changeEditorInterfaceWithExistingContentType);

    const editorInterfaces = yield request({
      method: 'GET',
      url: '/content_types/blogPost/editor_interface'
    });
    expect(editorInterfaces.controls).to.eql([
      {
        fieldId: 'slug',
        widgetId: 'singleLine',
        widgetNamespace: 'builtin'
      }
    ]);
  }));

  it('changes the editor interface with an existing contentType adding help text', co(function * () {
    yield migrator(changeEditorInterfaceWithExistingContentTypeAddingHelpText);

    const editorInterfaces = yield request({
      method: 'GET',
      url: '/content_types/blogPost/editor_interface'
    });
    expect(editorInterfaces.controls).to.eql([
      {
        fieldId: 'slug',
        widgetId: 'slugEditor',
        widgetNamespace: 'builtin',
        settings: {
          helpText: 'This is the slug for the entry, it will be used for the URL'
        }
      }
    ]);
  }));

  it('adds sidebar widgets to the editor interface of a content type', co(function * () {
    yield migrator(addSidebarWidgets);

    const editorInterfaces = yield request({
      method: 'GET',
      url: '/content_types/customSidebar/editor_interface'
    });

    expect(editorInterfaces.sidebar).to.eql([
      {
        'disabled': false,
        'settings': {},
        'widgetId': 'publication-widget',
        'widgetNamespace': 'sidebar-builtin'
      },
      {
        'disabled': false,
        'settings': {
          'tagField': 'tags',
          'imageField': 'image'
        },
        'widgetId': 'imageTaggingExtensionId',
        'widgetNamespace': 'extension'
      }
    ]);
  }));

  it('adds sidebar widgets to the editor interface of an existing content type', co(function * () {
    yield migrator(addSidebarWidgetsToExisting);

    const editorInterfaces = yield request({
      method: 'GET',
      url: '/content_types/richTextTest/editor_interface'
    });

    expect(editorInterfaces.sidebar).to.eql([
      {
        'disabled': false,
        'settings': {},
        'widgetId': 'publication-widget',
        'widgetNamespace': 'sidebar-builtin'
      },
      {
        'disabled': false,
        'settings': {
          'tagField': 'tags',
          'imageField': 'image'
        },
        'widgetId': 'imageTaggingExtensionId',
        'widgetNamespace': 'extension'
      }
    ]);
  }));

  it('creates a tag', async function () {
    await migrator(createTag);

    const tag = await request({
      method: 'GET',
      url: '/tags/sampletag'
    });
    expect(tag.name).to.eql('marketing');
    expect(tag.sys.id).to.eql('sampletag');
  });

  it('modifies the name of an existing tag', async function () {
    // TODO: As with the content type tests, the tag tests depend on
    // each other to pass. Is this okay?
    await migrator(modifyTag);
    const tag = await request({
      method: 'GET',
      url: '/tags/sampletag'
    });
    expect(tag.name).to.eql('better marketing');
    expect(tag.sys.id).to.eql('sampletag');
  });

  it('deletes a tag', async function () {
    let result;
    await migrator(deleteTag);

    try {
      result = await request({
        method: 'GET',
        url: `/tags/sampletag`
      });
    } catch (err) {
      expect(err.name).to.eql('NotFound');
    }
    expect(result).to.be.undefined();
  });

  it('adds tags to entry', async function () {
    await request({
      method: 'PUT',
      url: '/content_types/article',
      headers: {
        'X-Contentful-Beta-Dev-Spaces': 1
      },
      data: {
        name: 'blog post',
        fields: [
          {
            name: 'title',
            id: 'title',
            type: 'Symbol'
          }
        ]
      }
    });

    await request({
      method: 'PUT',
      url: '/content_types/article/published',
      headers: {
        'X-Contentful-Beta-Dev-Spaces': 1,
        'X-Contentful-Version': 1
      }
    });

    await request({
      method: 'PUT',
      url: '/tags/new',
      headers: {
        'X-Contentful-Beta-Dev-Spaces': 1
      },
      data: {
        name: 'new',
        sys: { id: 'new' }
      }
    });

    await request({
      method: 'PUT',
      url: '/tags/old',
      headers: {
        'X-Contentful-Beta-Dev-Spaces': 1
      },
      data: {
        name: 'old',
        sys: { id: 'old' }
      }
    });

    await request({
      method: 'POST',
      url: '/entries',
      headers: {
        'X-Contentful-Beta-Dev-Spaces': 1,
        'X-Contentful-Content-Type': 'article'
      },
      data: {
        fields: { title: { 'en-US': 'hello!' } },
        metadata: {
          tags: [
            {
              sys: {
                id: 'old',
                type: 'Link',
                linkType: 'Tag'
              }
            }
          ]
        }
      }
    });

    await migrator(setTagsForEntries);

    const blogEntries = await request({
      method: 'GET',
      url: '/entries?content_type=article',
      headers: {
        'X-Contentful-Beta-Dev-Spaces': 1
      }
    });

    const blogEntriesWithoutSysAndFields = blogEntries.items.map(i => _.omit(i, ['sys', 'fields']));

    expect(blogEntriesWithoutSysAndFields[0].metadata.tags.length).to.eql(2);
    expect(blogEntriesWithoutSysAndFields[0].metadata.tags.some((tag) => tag.sys.id === 'new')).to.eql(true);
    expect(blogEntriesWithoutSysAndFields[0].metadata.tags.some((tag) => tag.sys.id === 'old')).to.eql(true);
  });

  it('removes all tags from entry ', async function () {
    await migrator(function (migration) {
      migration.setTagsForEntries({
        contentType: 'article',
        from: ['title'],
        setTagsForEntry: () => {
          return [];
        } });
    });

    const blogEntries = await request({
      method: 'GET',
      url: '/entries?content_type=article',
      headers: {
        'X-Contentful-Beta-Dev-Spaces': 1
      }
    });

    expect(blogEntries.items[0].metadata.tags).to.eql([]);
  });
});
