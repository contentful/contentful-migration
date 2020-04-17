import { AppDefinition, AppDefinitionProps } from './appDefinition'
import {OrganizationInvitation, OrganizationInvitationProps} from './organizationInvitation';
import { Collection } from './collection'
import { DefaultElements } from './defaultElements'
import { MetaSys, MetaSysProps } from './meta'
import { Options, TeamMembership, TeamMembershipProps } from './teamMembership'
import { Team, TeamProps } from './team'

export interface OrganizationProp {
  name: string
}

export interface ContentfulOrganizationAPI {
  createAppDefinition(data: AppDefinitionProps): Promise<AppDefinition>,
  getAppDefinition(id: string): Promise<AppDefinition>,
  getAppDefinitions(): Promise<Collection<AppDefinition>>,
  createTeam(data: TeamProps): Promise<Team>,
  getTeam(teamId: string, id: string): Promise<Team>,
  getTeams(teamId: string): Promise<Collection<Team>>,
  createTeamMembership(data: TeamMembershipProps): Promise<TeamMembership>,
  getTeamMembership(teamId: string, id: string): Promise<TeamMembership>,
  getTeamMemberships(opts?: Options): Promise<Collection<TeamMembership>>,
  getOrganizationInvitation(id: string): Promise<OrganizationInvitation>,
  createOrganizationInvitation(
    data: OrganizationInvitationProps
  ): Promise<OrganizationInvitation>,
}

export interface Organization extends DefaultElements<OrganizationProp>, OrganizationProp, MetaSys<MetaSysProps>, ContentfulOrganizationAPI {}
