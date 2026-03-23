import _ from 'lodash'
import { describe, it, beforeAll, afterAll, expect } from 'vitest'
import { makeRequest, createDevEnvironment, deleteDevEnvironment } from '../helpers/client'
import { flatten } from 'lodash'
import createDog from '../../examples/01-angry-dog'
import modifyDog from '../../examples/02-friendly-dog'
import longExample from '../../examples/03-long-example'
import invalidScript from '../../examples/05-plan-errors'
import idChange from '../../examples/change-field-id'
import deleteContentType from '../../examples/delete-content-type'
import fieldValidation from '../../examples/09-validate-validations'
import displayField from '../../examples/07-display-field'
import fieldMove from '../../examples/08-move-field'
import changeEditorInterface from '../../examples/16-change-field-control'
import changeEditorInterfaceWithExistingContentType from '../../examples/17-change-field-control-for-existing-content-type'
import changeEditorInterfaceWithExistingContentTypeAddingHelpText from '../../examples/18-change-field-control-for-existing-content-type-adding-help-text'
import addSidebarWidgets from '../../examples/24-add-sidebar-widgets-to-new-content-type'
import addSidebarWidgetsToExisting from '../../examples/27-add-sidebar-widgets-to-existing-content-type'
import createTag from '../../examples/28-create-tag'
import createPublicTag from '../../examples/32-create-public-tag'
import createWithDefaultValue from '../../examples/33-create-fields-with-default-values'
import createWithLinkToNonExistingContentType from '../../examples/34-create-with-link-to-non-existing-content-type.js'
import modifyTag from '../../examples/29-modify-tag'
import deleteTag from '../../examples/30-delete-tag'
import setTagsForEntries from '../../examples/31-set-tags-for-entries'
import createEditorLayout from '../../examples/35-create-editor-layout'
import moveFieldInExistingEditorLayout from '../../examples/41-move-field-in-existing-editor-layout'
import moveFieldInNewEditorLayout from '../../examples/40-move-field-in-editor-layout'
import deleteEditorLayoutFieldSet from '../../examples/37-delete-editor-layout-field-set'
import changeFieldGroupId from '../../examples/38-change-field-group-id-editor-layout'
import deleteEditorLayout from '../../examples/39-delete-editor-layout'
import deleteEditorLayoutTab from '../../examples/36-delete-editor-layout-tab'
import assignContentTypeAnnotations from '../../examples/42-assign-content-type-annotations'
import assignFieldAnnotations from '../../examples/43-assign-field-annotations'
import clearFieldAnnotations from '../../examples/44-clear-field-annotations'
import clearContentTypeAnnotations from '../../examples/45-clear-content-type-annotations'
import canSetDisplayFieldBeforeAnnotations from '../../examples/46-can-set-display-field-before-annotations'
import createResourceLinkFields from '../../examples/47-create-resource-link-fields'
import changeFieldControlOnEditorInterfaceWithEditorLayout from '../../examples/50-change-field-control-on-editor-interface-with-editor-layout'
import moveFieldOnContentTypeWithEditorLayout from '../../examples/51-move-field-on-content-type-with-editor-layout'
import deleteFieldOnContentTypeWithEditorLayout from '../../examples/52-delete-field-in-content-type-with-editor-layout'
import renameFieldOnContentTypeWithEditorLayout from '../../examples/53-rename-field-in-content-type-with-editor-layout'
import createRichTextFieldWithValidation from '../../examples/22-create-rich-text-field-with-validation'
import createExperienceType from '../../examples/54-create-experience-type'
import { createMigrationParser } from '../../built/lib/migration-parser'
import { DEFAULT_SIDEBAR_LIST } from '../../built/lib/action/sidebarwidget'
import * as taxonomyHelpers from '../helpers/taxonomy-helpers'
import record from '../record'

const recorder = record('contentful-migration-integration')

beforeAll(recorder.before)
afterAll(() => {
  recorder.after()
})

const ENVIRONMENT_ID = 'env-integration' + Date.now()

const SOURCE_TEST_SPACE = process.env.CONTENTFUL_SPACE_ID
const TEST_ORGANIZATION = process.env.CONTENTFUL_ORGANIZATION_ID

describe('the migration', () => {
  let migrationParser
  let migrator
  let request

  let createConceptScheme
  let createConcept
  let deleteConceptScheme
  let deleteConcept

  beforeAll(async () => {
    await createDevEnvironment(SOURCE_TEST_SPACE!, ENVIRONMENT_ID)
    request = makeRequest.bind(null, SOURCE_TEST_SPACE, ENVIRONMENT_ID, TEST_ORGANIZATION)

    createConceptScheme = taxonomyHelpers.createConceptScheme(request)
    createConcept = taxonomyHelpers.createConcept(request)
    deleteConceptScheme = taxonomyHelpers.deleteConceptScheme(request)
    deleteConcept = taxonomyHelpers.deleteConcept(request)

    migrationParser = createMigrationParser(request, {})
    migrator = async (migration: any) => {
      const parseResult = await migrationParser(migration)
      const batches = parseResult.batches
      const requests = flatten(batches.map((batch) => batch.requests))
      for (const req of requests) {
        await request(req)
      }
    }
  })

  afterAll(async () => {
    await deleteDevEnvironment(SOURCE_TEST_SPACE!, ENVIRONMENT_ID)
  })

  it('creates a content type', async () => {
    await migrator(createDog)

    const dogResult = await request({
      method: 'GET',
      url: '/content_types/dog',
      headers: {
        'X-Contentful-Beta-Dev-Spaces': 1
      }
    })

    expect(dogResult.name).toEqual('angry dog')
    expect(dogResult.description).toEqual('super angry')

    expect(dogResult.fields).toEqual([
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
    ])
  })

  it('deletes a field', async () => {
    await new Promise((resolve) => setTimeout(resolve, 5000))

    await migrator(function (migration) {
      const dog = migration.editContentType('dog')
      dog.deleteField('woofs')
    })

    const dogResultAfterDelete = await request({
      method: 'GET',
      url: '/content_types/dog',
      headers: {
        'X-Contentful-Beta-Dev-Spaces': 1
      }
    })

    expect(dogResultAfterDelete.fields.length).toEqual(0)
  })

  it('modifies an existing field', async () => {
    await migrator(modifyDog)

    const resultAfterModify = await request({
      method: 'GET',
      url: '/content_types/dog',
      headers: {
        'X-Contentful-Beta-Dev-Spaces': 1
      }
    })

    expect(resultAfterModify.name).toEqual('Friendly dog')
    expect(resultAfterModify.description).toEqual("Who's a good boy? He is!")
    expect(resultAfterModify.fields).toEqual([
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
    ])
  })

  it('changes field IDs', async () => {
    await migrator(idChange)

    const resultAfterModify = await request({
      method: 'GET',
      url: '/content_types/dog',
      headers: {
        'X-Contentful-Beta-Dev-Spaces': 1
      }
    })

    expect(resultAfterModify.fields).toEqual([
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
    ])
  })

  it('deletes a contentType', async () => {
    let result
    await migrator(deleteContentType)

    try {
      await request({
        method: 'GET',
        url: `/content_types/dog`,
        headers: {
          'X-Contentful-Beta-Dev-Spaces': 1
        }
      })
    } catch (err) {
      expect(err.name).toEqual('NotFound')
    }

    expect(result).toBeUndefined()
  })

  it('allows valid field validation', async () => {
    await migrator(fieldValidation)

    const resultAfterModify = await request({
      method: 'GET',
      url: '/content_types/dieatary-food',
      headers: {
        'X-Contentful-Beta-Dev-Spaces': 1
      }
    })

    expect(resultAfterModify.fields).toEqual([
      {
        id: 'name',
        name: 'name of the food',
        type: 'Symbol',
        required: false,
        disabled: false,
        localized: false,
        omitted: false,
        validations: [
          {
            unique: true
          },
          {
            prohibitRegexp: {
              pattern: 'foo',
              flags: null
            },
            message: 'asdf'
          }
        ]
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
            assetImageDimensions: {
              width: { min: 1199, max: null },
              height: { min: 1343 }
            }
          }
        ]
      }
    ])
  })

  it('allows moving fields', async () => {
    await migrator(displayField)
    await migrator(fieldMove)

    const resultAfterModify = await request({
      method: 'GET',
      url: '/content_types/food',
      headers: {
        'X-Contentful-Beta-Dev-Spaces': 1
      }
    })

    expect(resultAfterModify.fields).toEqual([
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
    ])
  })

  it('works when creating and modifying lots of things', async () => {
    await migrator(longExample)

    const person = await request({
      method: 'GET',
      url: '/content_types/person',
      headers: {
        'X-Contentful-Beta-Dev-Spaces': 1
      }
    })
    const animal = await request({
      method: 'GET',
      url: '/content_types/animal',
      headers: {
        'X-Contentful-Beta-Dev-Spaces': 1
      }
    })

    const tag = await request({
      method: 'GET',
      url: '/tags/longexampletag',
      headers: {
        'X-Contentful-Beta-Dev-Spaces': 1
      }
    })

    expect(person.name).toEqual('Person')
    expect(person.description).toEqual('A content type for a person')
    expect(person.fields).toEqual([
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
    ])

    expect(animal.name).toEqual('Animal')
    expect(animal.description).toEqual('An animal')
    expect(animal.fields).toEqual([
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
    ])

    expect(tag.name).toEqual('long example marketing')
  })

  it('returns an error when the script is invalid', async () => {
    const parseResult = await migrationParser(invalidScript)

    expect(parseResult.payloadValidationErrors.length).toBeGreaterThan(0)
  })

  it('does a simple content transformation ', async () => {
    await request({
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
    })
    await request({
      method: 'PUT',
      url: '/content_types/blogpost/published',
      headers: {
        'X-Contentful-Beta-Dev-Spaces': 1,
        'X-Contentful-Version': 1
      }
    })

    await request({
      method: 'POST',
      url: '/entries',
      headers: {
        'X-Contentful-Beta-Dev-Spaces': 1,
        'X-Contentful-Content-Type': 'blogpost'
      },
      data: {
        fields: { title: { 'en-US': 'hello!' } }
      }
    })

    await request({
      method: 'POST',
      url: '/entries',
      headers: {
        'X-Contentful-Beta-Dev-Spaces': 1,
        'X-Contentful-Content-Type': 'blogpost'
      },
      data: {
        fields: { title: { 'en-US': 'hello!' } }
      }
    })

    await migrator(function (migration) {
      migration.transformEntries({
        contentType: 'blogpost',
        from: ['title'],
        to: ['category'],
        transformEntryForLocale: (fields, locale) => {
          return { category: fields.title[locale] }
        }
      })
    })

    const blogEntries = await request({
      method: 'GET',
      url: '/entries?content_type=blogpost',
      headers: {
        'X-Contentful-Beta-Dev-Spaces': 1
      }
    })

    const blogEntriesWithoutSysAndMetadata = blogEntries.items.map((i) =>
      _.omit(i, ['sys', 'metadata'])
    )

    const entries = [
      {
        fields: {
          title: { 'en-US': 'hello!' },
          category: { 'en-US': 'hello!' }
        }
      },
      {
        fields: {
          title: { 'en-US': 'hello!' },
          category: { 'en-US': 'hello!' }
        }
      }
    ]

    expect(blogEntriesWithoutSysAndMetadata).toEqual(entries)
  })

  it('changes the editor interface', async () => {
    await migrator(changeEditorInterface)

    const editorInterfaces = await request({
      method: 'GET',
      url: '/content_types/blogPost/editor_interface'
    })

    expect(editorInterfaces.controls[0]).toEqual({
      fieldId: 'slug',
      widgetId: 'slugEditor',
      widgetNamespace: 'builtin',
      settings: { setting: 'value' }
    })
  })

  it('changes the editor interface with an existing contentType', async () => {
    await migrator(changeEditorInterfaceWithExistingContentType)

    const editorInterfaces = await request({
      method: 'GET',
      url: '/content_types/blogPost/editor_interface'
    })
    expect(editorInterfaces.controls).toEqual([
      {
        fieldId: 'slug',
        widgetId: 'singleLine',
        widgetNamespace: 'builtin'
      }
    ])
  })

  it('changes the editor interface with an existing contentType adding help text', async () => {
    await migrator(changeEditorInterfaceWithExistingContentTypeAddingHelpText)

    const editorInterfaces = await request({
      method: 'GET',
      url: '/content_types/blogPost/editor_interface'
    })
    expect(editorInterfaces.controls).toEqual([
      {
        fieldId: 'slug',
        widgetId: 'slugEditor',
        widgetNamespace: 'builtin',
        settings: {
          helpText: 'This is the slug for the entry, it will be used for the URL'
        }
      }
    ])
  })

  it('adds sidebar widgets to the editor interface of a content type', async () => {
    await migrator(addSidebarWidgets)

    const editorInterfaces = await request({
      method: 'GET',
      url: '/content_types/customSidebar/editor_interface'
    })

    expect(editorInterfaces.sidebar).toEqual([
      ...DEFAULT_SIDEBAR_LIST,
      {
        disabled: false,
        settings: {
          tagField: 'tags',
          imageField: 'image'
        },
        widgetId: 'imageTaggingExtensionId',
        widgetNamespace: 'extension'
      }
    ])
  })

  it('adds sidebar widgets to the editor interface of an existing content type', async () => {
    await migrator(addSidebarWidgetsToExisting)

    const editorInterfaces = await request({
      method: 'GET',
      url: '/content_types/richTextTest/editor_interface'
    })

    expect(editorInterfaces.sidebar).toEqual([
      ...DEFAULT_SIDEBAR_LIST,
      {
        disabled: false,
        settings: {
          tagField: 'tags',
          imageField: 'image'
        },
        widgetId: 'imageTaggingExtensionId',
        widgetNamespace: 'extension'
      }
    ])
  })

  it('creates a private tag by default', async () => {
    await migrator(createTag)

    const tag = await request({
      method: 'GET',
      url: '/tags/sampletag'
    })
    expect(tag.name).toEqual('marketing')
    expect(tag.sys.id).toEqual('sampletag')
    expect(tag.sys.visibility).toEqual('private')
  })

  it('creates a public tag', async () => {
    await migrator(createPublicTag)

    const tag = await request({
      method: 'GET',
      url: '/tags/publicsampletag'
    })

    expect(tag.name).toEqual('public-marketing')
    expect(tag.sys.id).toEqual('publicsampletag')
    expect(tag.sys.visibility).toEqual('public')
  })

  it('modifies the name of an existing tag', async () => {
    // TODO: As with the content type tests, the tag tests depend on
    // each other to pass. Is this okay?
    await migrator(modifyTag)
    const tag = await request({
      method: 'GET',
      url: '/tags/sampletag'
    })
    expect(tag.name).toEqual('better marketing')
    expect(tag.sys.id).toEqual('sampletag')
  })

  it('deletes a tag', async () => {
    let result
    await migrator(deleteTag)

    try {
      result = await request({
        method: 'GET',
        url: `/tags/sampletag`
      })
    } catch (err) {
      expect(err.name).toEqual('NotFound')
    }
    expect(result).toBeUndefined()
  })

  it('adds tags to entry', async () => {
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
    })

    await request({
      method: 'PUT',
      url: '/content_types/article/published',
      headers: {
        'X-Contentful-Beta-Dev-Spaces': 1,
        'X-Contentful-Version': 1
      }
    })

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
    })

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
    })

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
    })

    await migrator(setTagsForEntries)

    const blogEntries = await request({
      method: 'GET',
      url: '/entries?content_type=article',
      headers: {
        'X-Contentful-Beta-Dev-Spaces': 1
      }
    })

    const blogEntriesWithoutSysAndFields = blogEntries.items.map((i) =>
      _.omit(i, ['sys', 'fields'])
    )

    expect(blogEntriesWithoutSysAndFields[0].metadata.tags.length).toEqual(2)
    expect(
      blogEntriesWithoutSysAndFields[0].metadata.tags.some((tag) => tag.sys.id === 'new')
    ).toEqual(true)
    expect(
      blogEntriesWithoutSysAndFields[0].metadata.tags.some((tag) => tag.sys.id === 'old')
    ).toEqual(true)
  })

  it('removes all tags from entry ', async () => {
    await migrator(function (migration) {
      migration.setTagsForEntries({
        contentType: 'article',
        from: ['title'],
        setTagsForEntry: () => {
          return []
        }
      })
    })

    const blogEntries = await request({
      method: 'GET',
      url: '/entries?content_type=article',
      headers: {
        'X-Contentful-Beta-Dev-Spaces': 1
      }
    })

    expect(blogEntries.items[0].metadata.tags).toEqual([])
  })

  it('creates with default value', async () => {
    await migrator(createWithDefaultValue)
    const contentType = await request({
      method: 'GET',
      url: '/content_types/event'
    })

    expect(contentType.name).toEqual('Event')
    expect(contentType.fields.find((f) => f.name === 'Advertised').defaultValue).toEqual({
      'en-US': true
    })

    const refContentType = await request({
      method: 'GET',
      url: '/content_types/refWithDefault'
    })

    expect(refContentType.name).toEqual('RefWithDefault')
    expect(refContentType.fields[0].type).toEqual('Link')
    expect(refContentType.fields[0].validations).toEqual([{ linkContentType: ['event'] }])
  })

  it('creates content type with link to non-existing content type', async () => {
    // FIXME This is not desired behavior, as ideally we would only
    // allow migrations which link to existing content types.
    await migrator(createWithLinkToNonExistingContentType)
    const contentType = await request({
      method: 'GET',
      url: '/content_types/contentTypeWithLink'
    })
    expect(contentType.fields[0].id).toEqual('linkToNonExistingContentType')
  })

  it('creates an editor layout', async () => {
    await migrator(createEditorLayout)

    const editorInterfaces = await request({
      method: 'GET',
      url: '/content_types/page/editor_interface'
    })

    expect(editorInterfaces?.editorLayout).toEqual([
      {
        groupId: 'content',
        name: 'Content',
        items: [{ fieldId: 'name' }, { fieldId: 'title' }]
      },
      {
        groupId: 'settings',
        name: 'Settings',
        items: [{ groupId: 'seo', name: 'SEO', items: [] }]
      },
      {
        groupId: 'metadata',
        name: 'Metadata',
        items: []
      }
    ])

    expect(editorInterfaces?.groupControls).toEqual([
      {
        groupId: 'content',
        widgetId: 'topLevelTab',
        widgetNamespace: 'builtin',
        settings: {
          helpText: 'Main content'
        }
      },
      {
        groupId: 'settings',
        widgetId: 'topLevelTab',
        widgetNamespace: 'builtin'
      },
      {
        groupId: 'seo',
        widgetId: 'fieldset',
        widgetNamespace: 'builtin',
        settings: {
          helpText: 'Search related fields',
          collapsedByDefault: false
        }
      },
      {
        groupId: 'metadata',
        widgetId: 'topLevelTab',
        widgetNamespace: 'builtin'
      }
    ])
  })

  it('deletes an editor layout tab', async () => {
    await migrator(deleteEditorLayoutTab)

    const editorInterface = await request({
      method: 'GET',
      url: '/content_types/page/editor_interface'
    })

    expect(editorInterface.editorLayout).toEqual([
      {
        groupId: 'content',
        name: 'Content',
        items: [
          { fieldId: 'name' },
          { fieldId: 'title' },
          { groupId: 'seo', name: 'SEO', items: [] }
        ]
      },
      {
        groupId: 'metadata',
        name: 'Metadata',
        items: []
      }
    ])
  })

  it('deletes an editor layout field set', async () => {
    await migrator(deleteEditorLayoutFieldSet)

    const editorInterface = await request({
      method: 'GET',
      url: '/content_types/page/editor_interface'
    })

    expect(editorInterface.editorLayout).toEqual([
      {
        groupId: 'content',
        name: 'Content',
        items: [{ fieldId: 'name' }, { fieldId: 'title' }]
      },
      {
        groupId: 'metadata',
        name: 'Metadata',
        items: []
      }
    ])
  })

  it('changes field group id', async () => {
    await migrator(changeFieldGroupId)

    const editorInterface = await request({
      method: 'GET',
      url: '/content_types/page/editor_interface'
    })

    expect(editorInterface.editorLayout).toEqual([
      {
        groupId: 'content',
        name: 'Content',
        items: [{ fieldId: 'name' }, { fieldId: 'title' }]
      },
      {
        groupId: 'info',
        name: 'Metadata',
        items: []
      }
    ])
  })

  it('adds new field and immediately change field control', async () => {
    await migrator(changeFieldControlOnEditorInterfaceWithEditorLayout)

    const editorInterface = await request({
      method: 'GET',
      url: '/content_types/page/editor_interface'
    })

    // We expect the newly created field to be present in the controls group
    expect(
      editorInterface.controls.some(({ fieldId }) => {
        return fieldId === 'additionalField'
      })
    ).toEqual(true)
  })

  it('adds new field and immediately can move it on editorLayout', async () => {
    await migrator(moveFieldOnContentTypeWithEditorLayout)

    const contentType = await request({
      method: 'GET',
      url: '/content_types/page'
    })

    const editorInterface = await request({
      method: 'GET',
      url: '/content_types/page/editor_interface'
    })

    // We expect that the newly created field is present on the Content Type
    expect(
      !!contentType.fields.find((field) => {
        return field.id === 'anotherAdditionalField'
      })
    ).toEqual(true)

    // We expect the newly created field to be present in the EditorLayout first group
    expect(
      editorInterface.editorLayout[0].items.some(({ fieldId }) => {
        return fieldId === 'anotherAdditionalField'
      })
    ).toEqual(true)

    // anotherAdditionalField should be second last, right before 'additionalField'
    // In the Editor Layout Content fieldGroup list
    expect(editorInterface.editorLayout[0].items[2].fieldId).toEqual('anotherAdditionalField')
  })

  it('deletes field and immediately can do any action on editorLayout', async () => {
    await migrator(deleteFieldOnContentTypeWithEditorLayout)

    const contentType = await request({
      method: 'GET',
      url: '/content_types/page'
    })

    // anotherAdditionalField should be second last in the list, right before 'additionalField'
    expect(contentType.fields.length).toEqual(3)
    expect(
      !contentType.fields.find((field) => {
        return field.id === 'anotherAdditionalField'
      })
    ).toEqual(true)
  })

  it('renames field and immediately can move it on editorLayout', async () => {
    await migrator(renameFieldOnContentTypeWithEditorLayout)

    const contentType = await request({
      method: 'GET',
      url: '/content_types/page'
    })

    const editorInterface = await request({
      method: 'GET',
      url: '/content_types/page/editor_interface'
    })

    // additionalField should have the new id 'renamedField'
    expect(contentType.fields.find((field) => field.id === 'additionalField')).toEqual(undefined)
    expect(!!contentType.fields.find((field) => field.id === 'renamedField')).toEqual(true)

    // renamedField is now present before the field title which is the second position
    expect(editorInterface.editorLayout[0].items[1].fieldId).toEqual('renamedField')
  })

  it('deletes editor layout and group controls', async () => {
    await migrator(deleteEditorLayout)

    const editorInterface = await request({
      method: 'GET',
      url: '/content_types/page/editor_interface'
    })

    expect(editorInterface.editorLayout).toBeUndefined()
    expect(editorInterface.groupControls).toBeUndefined()
  })

  it('moves fields in newly created editor layout', async () => {
    await migrator(moveFieldInNewEditorLayout)

    const editorInterface = await request({
      method: 'GET',
      url: '/content_types/mytype/editor_interface'
    })

    expect(editorInterface.editorLayout).toEqual([
      {
        name: 'First Tab',
        items: [{ fieldId: 'fieldD' }],
        groupId: 'firsttab'
      },
      {
        name: 'Second Tab',
        items: [
          { fieldId: 'fieldB' },
          {
            name: 'Field Set',
            items: [{ fieldId: 'fieldA' }, { fieldId: 'fieldC' }, { fieldId: 'fieldE' }],
            groupId: 'fieldset'
          }
        ],
        groupId: 'secondtab'
      }
    ])
  })

  it('moves fields in existing editor layout', async () => {
    await migrator(moveFieldInExistingEditorLayout)

    const editorInterface = await request({
      method: 'GET',
      url: '/content_types/mytype/editor_interface'
    })

    expect(editorInterface.editorLayout).toEqual([
      {
        name: 'First Tab',
        items: [{ fieldId: 'fieldA' }, { fieldId: 'fieldD' }],
        groupId: 'firsttab'
      },
      {
        name: 'Second Tab',
        items: [
          {
            name: 'Field Set',
            items: [],
            groupId: 'fieldset'
          },
          { fieldId: 'fieldB' },
          { fieldId: 'fieldC' },
          { fieldId: 'fieldE' }
        ],
        groupId: 'secondtab'
      }
    ])
  })

  it('assigns content type annotations', async () => {
    await migrator(assignContentTypeAnnotations)
    const ct = await request({
      method: 'GET',
      url: '/content_types/annotated'
    })

    expect(ct.metadata).toEqual({
      annotations: {
        ContentType: [
          {
            sys: {
              id: 'Contentful:AggregateRoot',
              type: 'Link',
              linkType: 'Annotation'
            }
          }
        ]
      }
    })
  })

  it('assigns field annotations', async () => {
    await migrator(assignFieldAnnotations)
    const ct = await request({
      method: 'GET',
      url: '/content_types/annotated'
    })

    expect(ct.metadata).toEqual({
      annotations: {
        ContentType: [
          {
            sys: {
              id: 'Contentful:AggregateRoot',
              type: 'Link',
              linkType: 'Annotation'
            }
          }
        ],
        ContentTypeField: {
          sources: [
            {
              sys: {
                id: 'Contentful:AggregateComponent',
                type: 'Link',
                linkType: 'Annotation'
              }
            }
          ],
          title: [
            {
              sys: {
                type: 'Link',
                linkType: 'Annotation',
                id: 'Contentful:GraphQLFieldResolver'
              },
              parameters: {
                appFunctionId: '123',
                appDefinitionId: '456'
              }
            }
          ]
        }
      }
    })
  })

  it('clears field annotations', async () => {
    await migrator(clearFieldAnnotations)
    const ct = await request({
      method: 'GET',
      url: '/content_types/annotated'
    })

    expect(ct.metadata).toEqual({
      annotations: {
        ContentType: [
          {
            sys: {
              id: 'Contentful:AggregateRoot',
              type: 'Link',
              linkType: 'Annotation'
            }
          }
        ]
      }
    })
  })

  it('clears field annotations', async () => {
    await migrator(clearContentTypeAnnotations)
    const ct = await request({
      method: 'GET',
      url: '/content_types/annotated'
    })

    expect(ct.metadata).toBeUndefined()
  })

  it('can set displayField before annotations', async () => {
    await migrator(canSetDisplayFieldBeforeAnnotations)
    const ct = await request({
      method: 'GET',
      url: '/content_types/annotatedWithDisplayField'
    })

    expect(ct.displayField).toEqual('name')
    expect(ct.metadata).toEqual({
      annotations: {
        ContentType: [
          {
            sys: {
              id: 'Contentful:AggregateRoot',
              type: 'Link',
              linkType: 'Annotation'
            }
          }
        ]
      }
    })
  })

  it('creates resource links', async () => {
    const allowedResources = [
      {
        type: 'Contentful:Entry',
        source: 'crn:contentful:::content:spaces/another-space',
        contentTypes: ['contentType1', 'contentType2', 'contentType3']
      }
    ]

    await migrator(createResourceLinkFields)
    const ct = await request({
      method: 'GET',
      url: '/content_types/contentTypeWithResourceLinks'
    })

    expect(ct.fields[0].type).toEqual('ResourceLink')
    expect(ct.fields[0].allowedResources).toEqual(allowedResources)
    expect(ct.fields[1].items.type).toEqual('ResourceLink')
    expect(ct.fields[1].allowedResources).toEqual(allowedResources)
  })

  it('creates RichText field', async () => {
    await migrator(createRichTextFieldWithValidation)
    const ct = await request({
      method: 'GET',
      url: '/content_types/myContentTypeWithRichText'
    })

    expect(ct.fields[0].type).toEqual('RichText')
    expect(ct.fields[0].validations[2].enabledNodeTypes).toEqual([
      'heading-1',
      'heading-2',
      'heading-3',
      'heading-4',
      'heading-5',
      'heading-6',
      'ordered-list',
      'unordered-list',
      'hr',
      'blockquote',
      'embedded-entry-block',
      'embedded-asset-block',
      'table',
      'hyperlink',
      'entry-hyperlink',
      'asset-hyperlink',
      'embedded-entry-inline',
      'embedded-resource-block'
    ])
    expect(ct.fields[0].validations[2].message).toEqual(
      'Only heading 1, heading 2, heading 3, heading 4, heading 5, heading 6, ordered list, unordered list, horizontal rule, quote, block entry, asset, table, block embedded resource, asset, link to Url, link to entry, link to asset, and inline entry nodes are allowed'
    )
    expect(ct.fields[0].validations[0].nodes['embedded-entry-block']).toEqual([
      {
        size: {
          min: 1,
          max: 4
        }
      },
      {
        linkContentType: ['markdownContentType']
      }
    ])
    expect(ct.fields[0].validations[0].nodes['embedded-entry-inline']).toEqual([
      {
        size: {
          min: 10,
          max: 20
        },
        message: 'this is a custom error for number of embedded inline entries'
      },
      {
        linkContentType: ['parent'],
        message: 'we only accept parent'
      }
    ])
    expect(ct.fields[0].validations[0].nodes['embedded-resource-block']).toEqual({
      validations: [],
      allowedResources: [
        {
          type: 'Contentful:Entry',
          source: 'crn:contentful:::content:spaces/another-space',
          contentTypes: ['contentType1', 'contentType2', 'contentType3']
        }
      ]
    })
  })

  // Note: Requires space to be enabled for Studio Experiences via org settings
  it('assigns experience type annotation', async () => {
    await migrator(createExperienceType)
    const ct = await request({
      method: 'GET',
      url: '/content_types/experienceType'
    })

    expect(ct.metadata).toEqual({
      annotations: {
        ContentType: [
          {
            sys: {
              id: 'Contentful:ExperienceType',
              type: 'Link',
              linkType: 'Annotation'
            }
          }
        ]
      }
    })
  })

  it('assigns taxonomy validations on a content type using setTaxonomyValidations', async () => {
    const conceptSchemeId = 'test-concept-scheme-' + Date.now()
    const testContentTypeId = 'test-content-type-' + Date.now()
    let createdConceptScheme

    try {
      createdConceptScheme = await createConceptScheme(
        conceptSchemeId,
        'Test Concept Scheme',
        'A test concept scheme for integration testing'
      )

      expect(createdConceptScheme.sys.id).toEqual(conceptSchemeId)

      const migrationWithActualId = function (migration) {
        const contentType = migration
          .createContentType(testContentTypeId)
          .name('Taxonomy Test Content Type')
          .description('A content type for testing taxonomy validation')

        contentType.createField('title').name('Title').type('Symbol').required(true)

        contentType.createField('description').name('Description').type('Text')

        contentType.setTaxonomyValidations([
          {
            sys: {
              type: 'Link',
              linkType: 'TaxonomyConceptScheme',
              id: conceptSchemeId
            },
            required: true
          }
        ])
      }

      await migrator(migrationWithActualId)

      const createdContentType = await request({
        method: 'GET',
        url: `/content_types/${testContentTypeId}`
      })

      // Validate that the content type has the taxonomy validation assigned
      expect(createdContentType.name).toEqual('Taxonomy Test Content Type')
      expect(createdContentType.metadata).toHaveProperty('taxonomy')
      expect(createdContentType.metadata.taxonomy).toEqual([
        {
          sys: {
            type: 'Link',
            linkType: 'TaxonomyConceptScheme',
            id: conceptSchemeId
          },
          required: true
        }
      ])
    } finally {
      if (createdConceptScheme) {
        await deleteConceptScheme(conceptSchemeId, createdConceptScheme.sys.version)
      }
    }
  })

  it('adds taxonomy validations incrementally using addTaxonomyValidation', async () => {
    const conceptSchemeId = 'test-concept-scheme-1-' + Date.now()
    const conceptId = 'test-concept-1-' + Date.now()
    const testContentTypeId = 'test-add-taxonomy-' + Date.now()
    let createdConceptScheme, createdConcept

    try {
      createdConceptScheme = await createConceptScheme(
        conceptSchemeId,
        'Test Concept Scheme 1',
        'First concept scheme for testing'
      )

      createdConcept = await createConcept(conceptId, 'Test Concept', 'Concept for testing')

      const migrationWithIncrementalAdds = function (migration) {
        const contentType = migration
          .createContentType(testContentTypeId)
          .name('Incremental Taxonomy Test')
          .description('Testing incremental taxonomy validation adds')

        contentType.createField('title').name('Title').type('Symbol').required(true)

        contentType.addTaxonomyValidation(conceptSchemeId, 'TaxonomyConceptScheme', {
          required: true
        })
        contentType.addTaxonomyValidation(conceptId, 'TaxonomyConcept', { required: false })
      }

      await migrator(migrationWithIncrementalAdds)

      const createdContentType = await request({
        method: 'GET',
        url: `/content_types/${testContentTypeId}`
      })

      // Validate that both taxonomy validations are present
      expect(createdContentType.metadata).toHaveProperty('taxonomy')
      expect(createdContentType.metadata.taxonomy).toHaveLength(2)

      const validation1 = createdContentType.metadata.taxonomy.find(
        (v) => v.sys.id === conceptSchemeId
      )
      const validation2 = createdContentType.metadata.taxonomy.find((v) => v.sys.id === conceptId)

      expect(validation1).toBeDefined()
      expect(validation1.required).toEqual(true)
      expect(validation1.sys.linkType).toEqual('TaxonomyConceptScheme')

      expect(validation2).toBeDefined()
      expect(validation2.required).toEqual(false)
      expect(validation2.sys.linkType).toEqual('TaxonomyConcept')
    } finally {
      if (createdConceptScheme) {
        await deleteConceptScheme(conceptSchemeId, createdConceptScheme.sys.version)
      }
      if (createdConcept) {
        await deleteConcept(conceptId, createdConcept.sys.version)
      }
    }
  })

  it('overwrites existing taxonomy validation when adding same concept ID', async () => {
    const conceptSchemeId = 'test-overwrite-scheme-' + Date.now()
    const testContentTypeId = 'test-overwrite-taxonomy-' + Date.now()
    let createdConceptScheme

    try {
      createdConceptScheme = await createConceptScheme(
        conceptSchemeId,
        'Test Overwrite Scheme',
        'Concept scheme for testing overwrite behavior'
      )

      const migrationWithOverwrite = function (migration) {
        const contentType = migration
          .createContentType(testContentTypeId)
          .name('Overwrite Taxonomy Test')
          .description('Testing taxonomy validation overwrite behavior')

        contentType.createField('title').name('Title').type('Symbol').required(true)

        contentType.addTaxonomyValidation(conceptSchemeId, 'TaxonomyConceptScheme', {
          required: true
        })

        contentType.addTaxonomyValidation(conceptSchemeId, 'TaxonomyConceptScheme', {
          required: false
        })
      }

      await migrator(migrationWithOverwrite)

      // Validate that only one validation exists with the updated values
      const createdContentType = await request({
        method: 'GET',
        url: `/content_types/${testContentTypeId}`
      })

      expect(createdContentType.metadata).toHaveProperty('taxonomy')
      expect(createdContentType.metadata.taxonomy).toHaveLength(1)

      const validation = createdContentType.metadata.taxonomy[0]
      expect(validation.sys.id).toEqual(conceptSchemeId)
      expect(validation.required).toEqual(false) // Should be the updated value
      expect(validation.sys.linkType).toEqual('TaxonomyConceptScheme')
    } finally {
      // Clean up concept scheme
      if (createdConceptScheme) {
        await deleteConceptScheme(conceptSchemeId, createdConceptScheme.sys.version)
      }
    }
  })

  it('clears all taxonomy validations from content type', async () => {
    const conceptSchemeId1 = 'test-clear-scheme-1-' + Date.now()
    const conceptSchemeId2 = 'test-clear-scheme-2-' + Date.now()
    const testContentTypeId = 'test-clear-taxonomy-' + Date.now()
    let createdConceptScheme1, createdConceptScheme2

    try {
      createdConceptScheme1 = await createConceptScheme(
        conceptSchemeId1,
        'Test Clear Scheme 1',
        'First scheme for testing clear behavior'
      )

      createdConceptScheme2 = await createConceptScheme(
        conceptSchemeId2,
        'Test Clear Scheme 2',
        'Second scheme for testing clear behavior'
      )

      const migrationWithClear = function (migration) {
        const contentType = migration
          .createContentType(testContentTypeId)
          .name('Clear Taxonomy Test')
          .description('Testing taxonomy validation clear behavior')

        contentType.createField('title').name('Title').type('Symbol').required(true)

        contentType.addTaxonomyValidation(conceptSchemeId1, 'TaxonomyConceptScheme', {
          required: true
        })
        contentType.addTaxonomyValidation(conceptSchemeId2, 'TaxonomyConceptScheme', {
          required: false
        })

        contentType.clearTaxonomyValidations()
      }

      await migrator(migrationWithClear)

      const createdContentType = await request({
        method: 'GET',
        url: `/content_types/${testContentTypeId}`
      })

      // Validate that no taxonomy validations exist
      expect(createdContentType.metadata?.taxonomy).toEqual([])
    } finally {
      // Clean up concept schemes
      if (createdConceptScheme1) {
        await deleteConceptScheme(conceptSchemeId1, createdConceptScheme1.sys.version)
      }
      if (createdConceptScheme2) {
        await deleteConceptScheme(conceptSchemeId2, createdConceptScheme2.sys.version)
      }
    }
  })
})
