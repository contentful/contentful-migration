import { MetaSys, MetaSysProps } from './meta'
import { DefaultElements } from './defaultElements'

export interface RoleProps {
  name: string,
  permissions: {
    ContentDelivery: string,
    ContentModel: string[],
    Settings: any[]
  },
  policies: {
    effect: string,
    actions: string,
    constraint: any
  }[]
}

export interface Role extends MetaSys<MetaSysProps>, RoleProps, DefaultElements<MetaSys<MetaSysProps> & RoleProps> {
  delete(): Promise<void>,
  update(): Promise<Role>
}
