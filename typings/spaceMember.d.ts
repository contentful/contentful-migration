import { MetaLinkProps, MetaSys, MetaSysProps } from './meta'
import { DefaultElements } from './defaultElements'

export interface SpaceMemberProps {
  admin: boolean,
  roles: MetaLinkProps[]
}

export interface SpaceMember extends MetaSys<MetaSysProps>, SpaceMemberProps, DefaultElements<MetaSys<MetaSysProps> & SpaceMemberProps> {}
