import { MetaSys, MetaSysProps } from './meta'
import { DefaultElements } from './defaultElements'
import { QueryOptions } from './queryOptions'

export interface Options {
  teamId?: string,
  query?: QueryOptions
}
export interface TeamMembershipProps {
  admin: boolean;
  organizationMembershipId: string;
}

export interface TeamMembership
  extends MetaSys<MetaSysProps>,
    TeamMembershipProps,
    DefaultElements<MetaSys<MetaSysProps> & TeamMembershipProps> {
  delete(): Promise<void>;
  update(): Promise<TeamMembership>;
}
