import { DefaultElements } from './defaultElements'
import { MetaSys, MetaSysProps } from './meta'

export interface OrganizationProp {
  name: string
}

export interface Organization extends DefaultElements<OrganizationProp>, OrganizationProp, MetaSys<MetaSysProps> {}
