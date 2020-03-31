import { MetaSys, MetaSysProps } from './meta'
import { DefaultElements } from './defaultElements'

// Fields
type Field = 'Symbol' | 'Text' | 'RichText' | 'Integer' | 'Number' | 'Date' | 'Location' | 'Boolean' | 'Object'

type LinkType = 'Asset' | 'Entry'

// Fields Types
interface SingleFieldType {
  type: Field
}

interface LinkFieldType {
  type: 'Link',
  linkType: LinkType
}

interface ArrayFieldType {
  type: 'Array',
  items: SingleFieldType | LinkFieldType
}

type FieldType = SingleFieldType | LinkFieldType | ArrayFieldType

// Locations
type AppLocation = 'app-config' | 'entry-sidebar' | 'entry-editor' | 'dialog'

interface SingleLocationDefinition {
  location: AppLocation
}

interface EntryFieldLocationDefinition {
  location: 'entry-field',
  fieldTypes: FieldType[]
}

type LocationDefinition = SingleLocationDefinition | EntryFieldLocationDefinition

export interface AppDefinitionProps {
  name: string,
  src: string,
  locations: LocationDefinition[]
}

export interface AppDefinition
  extends AppDefinitionProps,
    MetaSys<MetaSysProps>,
    DefaultElements<AppDefinitionProps & MetaSysProps> {
  delete(): Promise<void>,
  update(): Promise<AppDefinition>
}
