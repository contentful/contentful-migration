import { AppDefinition, AppDefinitionProps } from './appDefinition'
import { Collection } from './collection'
import { DefaultElements } from './defaultElements'
import { MetaSys, MetaSysProps } from './meta'

export interface OrganizationProp {
  name: string
}

export interface ContentfulOrganizationAPI {
  createAppDefinition(data: AppDefinitionProps): Promise<AppDefinition>,
  getAppDefinition(id: string): Promise<AppDefinition>,
  getAppDefinitions(): Promise<Collection<AppDefinition>>
}

export interface Organization extends DefaultElements<OrganizationProp>, OrganizationProp, MetaSys<MetaSysProps>, ContentfulOrganizationAPI {}
