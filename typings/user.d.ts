import { MetaSys, MetaSysProps } from './meta'

export interface User extends MetaSys<MetaSysProps> {
  firstName: string,
  lastName: string,
  avatarUrl: string,
  email: string,
  activated: boolean,
  signInCount: number,
  confirmed: boolean,
}
