
export interface Movement {
  toTheTop()
  toTheBottom()
  beforeField(field: string)
  afterField(field: string)
}

type FieldType = 'Symbol' | 'Text' | 'Integer' | 'Number' | 'Date' | 'Boolean' | 'Object' | 'Location' | 'Array' | 'Link'

export interface IFieldOptions {
  id?: string

  newId?: string

  /** (required) – Field name. */
  name: string
  /** (required) – Field type */
  type: FieldType

  /** Object (required for type 'Array') – Defines the items of an Array field. */
  items?: any

  /** (required for type 'Link') – Type of the referenced entry. Can take the same values as the ones listed for type above. */
  linkType?: 'Asset' | 'Entry'
  /** Sets the field as required. */
  required?: boolean
  /** Validations for the field. */
  validations?: Array<any>

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

  name(name: string): Field
  type(type: FieldType): Field
  items(items: any): Field
  linkType(type: FieldType): Field
  validations(validations: Array<any>): Field

  required(required: boolean): Field
  localized(localized: boolean): Field
  disabled(disabled: boolean): Field
  omitted(omitted: boolean): Field
  deleted(deleted: boolean): Field

}

export interface ContentType {
  id: string
  instanceId: string

  name(name: string): ContentType
  description(description: string): ContentType
  displayField(displayField: string): ContentType

  createField (id: string, init?: IFieldOptions): Field

  editField (id: string, init?: IFieldOptions): Field

  moveField (id: string): Movement

  deleteField (id: string): void

  changeFieldId (oldId: string, newId: string): void
}

export interface IContentTypeOptions {
  name: string,
  description?: string,
  displayField?: string
}

export interface ITransformEntriesConfig {
  contentType: string,
  from: string[],
  to: string[],
  transformEntryForLocale: (fromFields, currentLocale: string) => any
}

export interface IDeriveLinkedEntriesConfig {
  contentType: string,
  derivedContentType: string,
  from: string[],
  toReferenceField: string,
  derivedFields: string[],
  identityKey: (fromFields) => any,
  shouldPublish?: boolean,
  deriveEntryForLocale: (inputFields, locale) => any
}

export default interface Migration {
  createContentType (id: string, init?: IContentTypeOptions): ContentType

  editContentType (id: string, changes?: IContentTypeOptions): ContentType

  deleteContentType (id: string): void

  transformEntries (transformation: ITransformEntriesConfig): void

  deriveLinkedEntries (transformation: IDeriveLinkedEntriesConfig): void
}
