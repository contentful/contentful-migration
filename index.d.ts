import * as axios from '@contentful/axios'

export interface Movement {
  toTheTop(): void
  toTheBottom(): void
  beforeField(field: string): void
  afterField(field: string): void
}

type FieldType = 'Symbol' | 'Text' | 'Integer' | 'Number' | 'Date' | 'Boolean' | 'Object' | 'Location' | 'RichText' | 'Array' | 'Link'

export interface IFieldOptions {
  newId?: string

  /** (required) – Field name. */
  name?: string
  /** (required) – Field type */
  type: FieldType

  /** Object (required for type 'Array') – Defines the items of an Array field. */
  items?: IFieldOptions

  /** (required for type 'Link') – Type of the referenced entry. Can take the same values as the ones listed for type above. */
  linkType?: 'Asset' | 'Entry'
  /** Sets the field as required. */
  required?: boolean
  /** Validations for the field. */
  validations?: Array<IValidation>

  /** Sets the field as localized. */
  localized?: boolean
  /** Sets the field as disabled, hence not editable by authors. */
  disabled?: boolean
  /** Sets the field as omitted, hence not sent in response. */
  omitted?: boolean
  /** Sets the field as deleted. Requires to have been omitted first. You may prefer using the deleteField method. */
  deleted?: boolean
}

export interface Field {
  id: string
  newId(id: string): Field

  /** (required) – Field name. */
  name(name: string): Field
  /** (required) – Field type */
  type(type: FieldType): Field
  /** Object (required for type 'Array') – Defines the items of an Array field. */
  items(items: IFieldOptions): Field
  /** (required for type 'Link') – Type of the referenced entry. Can take the same values as the ones listed for type above. */
  linkType(type: 'Asset' | 'Entry'): Field
  /** Validations for the field. */
  validations(validations: Array<IValidation>): Field

  /** Sets the field as required. */
  required(required: boolean): Field
  /** Sets the field as localized. */
  localized(localized: boolean): Field
  /** Sets the field as disabled, hence not editable by authors. */
  disabled(disabled: boolean): Field
  /** Sets the field as omitted, hence not sent in response. */
  omitted(omitted: boolean): Field
  /** Sets the field as deleted. Requires to have been omitted first. You may prefer using the deleteField method. */
  deleted(deleted: boolean): Field

}

type LinkMimetype = 'attachment' | 'plaintext' | 'image' | 'audio' | 'video' | 'richtext' | 
  'presentation' | 'spreadsheet' | 'pdfdocument' | 'archive' | 'code' | 'markup'

export interface IValidation {
  /** Takes an array of content type ids and validates that the link points to an entry of that content type. */
  linkContentType?: string[],
  /** Takes an array of values and validates that the field value is in this array. */
  in?: string[] | number[],
  /** Takes a MIME type group name and validates that the link points to an asset of this group. */
  linkMimetypeGroup?: LinkMimetype[],
  /** Takes min and/or max parameters and validates the size of the array (number of objects in it). */
  size?: { max?: number, min?: number },
  /** Takes min and/or max parameters and validates the range of a value. */
  range?: { max?: number, min?: number},
  /** Takes a string that reflects a JS regex and flags, validates against a string. See JS reference for the parameters. */
  regexp?: { pattern: string, flags?: string },
  /** Validates that there are no other entries that have the same field value at the time of publication. */
  unique?: true,
  /** Validates that a value falls within a certain range of dates. */
  dateRange?: { min?: string, max?: string },
  /** Validates that an image asset is of a certain image dimension. */
  assetImageDimensions?: { width: { min?: number, max?: number }, height: { min?: number, max?: number } }
  /** Validates that an asset is of a certain file size. */
  assetFileSize?: { max?: number, min?: number },

  message?: string

  /** Other validations */
  [validation: string]: any
}

export interface IEditorInterfaceOptions {

  /** This help text will show up below the field. */
  helpText?: string
  /** (only for fields of type boolean) Shows this text next to the radio button that sets this value to true. Defaults to “Yes”. */
  trueLabel?: string
  /** (only for fields of type boolean) Shows this text next to the radio button that sets this value to false. Defaults to “No”. */
  falseLabel?: string 
  /** (only for fields of type rating) Number of stars to select from. Defaults to 5. */
  stars?: number
  /** (only for fields of type datePicker) – One of "dateonly", "time", "timeZ" (default). Specifies whether to show the clock and/or timezone inputs. */
  format?: 'dateonly' | 'time' | 'timeZ'
  /** string (only for fields of type datePicker) – Specifies which type of clock to use. Must be one of the strings "12" or "24" (default). */
  ampm?: '12' | '24'
  /** (only for References, many) Select whether to enable Bulk Editing mode */
  bulkEditing?: boolean
}

export interface ContentType {
  id: string
  instanceId: string

  /** Name of the content type. */
  name(name: string): ContentType
  /** Description of the content type. */
  description(description: string): ContentType
  /** ID of the field to use as the display field for the content type. */
  displayField(displayField: string): ContentType

  /** Creates a field with provided id. */
  createField (id: string, init?: IFieldOptions): Field

  /** Edits the field of provided id. */
  editField (id: string, init?: IFieldOptions): Field

  moveField (id: string): Movement

  /** Shorthand method to omit a field, publish its content type, and then delete the field. This implies that associated content for the field will be lost. */
  deleteField (id: string): void

  /** Changes the field's ID. */
  changeFieldId (oldId: string, newId: string): void

  /**
   * Changes the editor interface of given field's ID.
   * 
   * @param fieldId The ID of the field.
   * @param widgetId The new widget ID for the field.
   * @param settings Widget settings
   */
  changeEditorInterface (fieldId: string, widgetId: string, settings?: IEditorInterfaceOptions): void

  /**
   * Resets the editor interface of given field's ID.
   * 
   * @param fieldId The ID of the field.
   */
  resetEditorInterface (fieldId: string): void

  /**
   * copies the editor interface setting from a field to another field in the same content type.
   * 
   * @param sourceFieldId The ID of the field to copy the editorinterface setting from.
   * @param destinationFieldId The ID of the field to apply the copied editorinterface setting to.
   */
  copyEditorInterface (sourceFieldId: string, destinationFieldId: string): void

}

export interface IContentTypeOptions {
  /** Name of the content type. */
  name: string,
  /** Description of the content type. */
  description?: string,
  /** ID of the field to use as the display field for the content type. */
  displayField?: string
}

type ContentFields = { [field: string]: { [locale: string]: any } }

export interface ITransformEntriesConfig {
  /** (required) – Content type ID */
  contentType: string,
  /** (required) – Array of the source field IDs */
  from: string[],
  /** (required) – Array of the target field IDs */
  to: string[],
  /**
   * (required) – Transformation function to be applied.
   *
   * fields is an object containing each of the from fields. Each field will contain their current localized values (i.e. from == {myField: {'en-US': 'my field value'}})
   * locale one of the locales in the space being transformed
   *
   * The return value must be an object with the same keys as specified in to. Their values will be written to the respective entry fields for the current locale (i.e. {nameField: 'myNewValue'}). If it returns undefined, this the values for this locale on the entry will be left untouched.
  */
  transformEntryForLocale: (fromFields: ContentFields, currentLocale: string) => any,
  /** (optional) – If true, the transformed entries will be published. If false, they will remain in draft state. When the value is set to "preserve" items will be published only if the original entry was published as well (default true) */
  shouldPublish?: boolean|"preserve"
}

export interface ITransformEntriesToTypeConfig {
  /** (required) – Content type ID */
  contentType: string,
  /** (required) – Array of the source field IDs */
  from: string[],
  /**
   * (required) – Transformation function to be applied.
   *
   * fields is an object containing each of the from fields. Each field will contain their current localized values (i.e. from == {myField: {'en-US': 'my field value'}})
   * locale one of the locales in the space being transformed
   *
   * The return value must be an object with the same keys as specified in to. Their values will be written to the respective entry fields for the current locale (i.e. {nameField: 'myNewValue'}). If it returns undefined, this the values for this locale on the entry will be left untouched.
  */
  transformEntryForLocale: (fromFields: ContentFields, currentLocale: string) => any,
  /** (optional) – If true, the transformed entries will be published. If false, they will remain in draft state. When the value is set to "preserve" items will be published only if the original entry was published as well (default true) */
  shouldPublish?: boolean|"preserve",
  /** (optional) – If true, references to the old entry are replaced with references to the new entry (default true) */
  updateReferences?: boolean,
  /** (optional) – If true, the original entry is removed after the new entry was created (default true) */
  removeOldEntries?: boolean
}

export interface IDeriveLinkedEntriesConfig {
  /** 
   * (required) – Source content type ID 
   * 
   * This is the content type which has the 'from' fields
  */
  contentType: string,
  /** 
   * (required) – Target content type ID
   * 
   * This is the content type that the link points to
   */
  derivedContentType: string,
  /** 
   * (required) – Array of the source field IDs
   * 
   * The values in these fields on the source content type
   * will be given to "deriveEntryForLocale"
   */
  from: string[],
  /** (required) – ID of the field on the source content type in which to insert the reference */
  toReferenceField: string,
  /** 
   * (required) – Array of the field IDs on the target content type
   * 
   * The fields returned from "deriveEntryForLocale" will be written to these fields
   * on the new instance of the derived content type.
   */
  derivedFields: string[],
  /**
   * (required) - Called once per source entry. Returns the ID used for the derived entry, which is also used for de-duplication so that multiple source entries can link to the same derived entry.
   *   fields is an object containing each of the from fields. Each field will contain their current localized values (i.e. fields == {myField: {'en-US': 'my field value'}})
   */
  identityKey: (fromFields: ContentFields) => string,
  /** (optional) – If true, both the source and the derived entries will be published. If false, both will remain in draft state (default true) */
  shouldPublish?: boolean,
  /**
   * (required) – Function that generates the field values for the derived entry.
   *  fields is an object containing each of the from fields. Each field will contain their current localized values (i.e. fields == {myField: {'en-US': 'my field value'}})
   *  locale one of the locales in the space being transformed
   * 
   * The return value must be an object with the same keys as specified in derivedFields. Their values will be written to the respective new entry fields for the current locale (i.e. {nameField: 'myNewValue'})
  */
  deriveEntryForLocale: (inputFields: ContentFields, locale: string) => { [field: string]: any }
}

/** 
 * The main interface for creating and editing content types.
 */
export default interface Migration {
  /**
   * Creates a content type with provided id and returns a reference to the newly created content type.
   *
   * id : string – The ID of the content type.
   * 
   * opts : Object – Content type definition, with the following options:
   * 
   *  * name : string – Name of the content type.
   *  * description : string – Description of the content type.
   *  * displayField : string – ID of the field to use as the display field for the content type.
   * 
   * @param id string – The ID of the content type.
   * @param init Object – Content type definition
   */
  createContentType (id: string, init?: IContentTypeOptions): ContentType

  /**
   * Edits an existing content type of provided id and returns a reference to the content type. Uses the same options as createContentType.
   * @param id string – The ID of the content type.
   * @param changes Object – Content type definition
   */
  editContentType (id: string, changes?: IContentTypeOptions): ContentType

  /**
   * Deletes the content type with the provided id and returns undefined. Note that the content type must not have any entries.
   * @param id string – The ID of the content type.
   */
  deleteContentType (id: string): void

  /**
   * For the given content type, transforms all its entries according to the user-provided transformEntryForLocale function. For each entry, the CLI will call this function once per locale in the space, passing in the from fields and the locale as arguments. The transform function is expected to return an object with the desired target fields. If it returns undefined, this entry locale will be left untouched.
   * @param transformation 
   */
  transformEntries (transformation: ITransformEntriesConfig): void

  /**
   * For the given content type, transforms all its entries according to the user-provided transformEntryForLocale function into a new content type. For each entry, the CLI will call this function once per locale in the space, passing in the from fields and the locale as arguments. The transform function is expected to return an object with the desired target fields. If it returns undefined, this entry locale will be left untouched
   * @param transformation 
   */
  transformEntriesToType (transformation: ITransformEntriesToTypeConfig): void

  /**
   * For each entry of the given content type (source entry), derives a new entry and sets up a reference to it on the source entry. The content of the new entry is generated by the user-provided deriveEntryForLocale function. For each source entry, this function will be called as many times as there are locales in the space. Each time, it will be called with the from fields and one of the locales as arguments. The derive function is expected to return an object with the desired target fields. If it returns undefined, the new entry will have no values for the current locale.
   * @param transformation 
   */
  deriveLinkedEntries (transformation: IDeriveLinkedEntriesConfig): void
}

export interface ClientConfig {
  accessToken?: string
  spaceId?: string
  environmentId?: string
}

export type MakeRequest = (requestConfig: axios.AxiosRequestConfig) => axios.AxiosResponse['data']

export type MigrationContext = ClientConfig & {
  /**
   * Makes a raw request to the API using Axios.
   * The URL should be relative, `spaceId` and `environment` will be automatically prepended.
   */
  makeRequest: MakeRequest
}

/**
 * The shape of the migration function that should be exported.
 */
export type MigrationFunction = (migration: Migration, context?: MigrationContext) => void
