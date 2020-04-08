import { MetaSys, MetaSysProps, MetaLinkProps } from './meta'

export interface OrganizationInvitationProps {
  firstName: string,
  lastName: string,
  email: string,
  role: string,
}

export interface OrganizationInvitation extends MetaSys<MetaSysProps> {
  organizationMembership: { sys: MetaLinkProps },
  user: Object | null,
  invitationUrl: string,
}
