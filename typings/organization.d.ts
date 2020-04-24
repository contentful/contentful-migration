import { AppDefinition, AppDefinitionProps } from './appDefinition'
import {OrganizationInvitation, OrganizationInvitationProps} from './organizationInvitation';
import { Collection } from './collection'
import { DefaultElements } from './defaultElements'
import { MetaSys, MetaSysProps } from './meta'
import { Options as TeamMembershipOptions, TeamMembership, TeamMembershipProps } from './teamMembership'
import { Options as TeamSpaceMembershipOptions, TeamSpaceMembership, TeamSpaceMembershipProps } from './teamSpaceMembership'
import { Team, TeamProps } from './team'
import {User} from './user'

export interface OrganizationProp {
  name: string
}

export interface ContentfulOrganizationAPI {
  createAppDefinition(data: AppDefinitionProps): Promise<AppDefinition>,
  getAppDefinition(id: string): Promise<AppDefinition>,
  getAppDefinitions(): Promise<Collection<AppDefinition>>,
  getUser(userId: string): Promise<User>,
  getUsers(): Promise<Collection<User>>,
  createTeam(data: TeamProps): Promise<Team>,
  getTeam(teamId: string, id: string): Promise<Team>,
  getTeams(teamId: string): Promise<Collection<Team>>,
  createTeamMembership(data: TeamMembershipProps): Promise<TeamMembership>,
  getTeamMembership(teamId: string, id: string): Promise<TeamMembership>,
  getTeamMemberships(opts?: TeamMembershipOptions): Promise<Collection<TeamMembership>>,
  getTeamSpaceMembership(id: string): Promise<TeamSpaceMembership>,
  getTeamSpaceMemberships(opts?: TeamSpaceMembershipOptions): Promise<Collection<TeamSpaceMembership>>,
  getOrganizationInvitation(id: string): Promise<OrganizationInvitation>,
  createOrganizationInvitation(
    data: OrganizationInvitationProps
  ): Promise<OrganizationInvitation>,
}

export interface Organization extends DefaultElements<OrganizationProp>, OrganizationProp, MetaSys<MetaSysProps>, ContentfulOrganizationAPI {}
