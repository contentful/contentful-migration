import { MetaLinkProps, MetaSys, MetaSysProps } from './meta'
import { DefaultElements } from './defaultElements'

export interface SpaceMembershipProps {
  name: string,
  admin: boolean,
  roles: MetaLinkProps[]
}

export interface SpaceMembership extends MetaSys<MetaSysProps>, SpaceMembershipProps, DefaultElements<MetaSys<MetaSysProps> & SpaceMembershipProps> {
  delete(): Promise<void>,
  update(): Promise<SpaceMembership>,
}
