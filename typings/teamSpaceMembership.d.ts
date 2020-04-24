import { MetaLinkProps, MetaSys, MetaSysProps } from './meta'
import { DefaultElements } from './defaultElements'
import { QueryOptions } from './queryOptions'

export interface Options {
  teamId?: string,
  query?: QueryOptions
}

export interface TeamSpaceMembershipProps {
  admin: boolean,
  roles: MetaLinkProps[]
}

export interface TeamSpaceMembership extends MetaSys<MetaSysProps>, TeamSpaceMembershipProps, DefaultElements<MetaSys<MetaSysProps> & TeamSpaceMembershipProps> {
  delete(): Promise<void>,
  update(): Promise<TeamSpaceMembership>,
}
