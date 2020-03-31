import { DefaultElements } from './defaultElements'
import { MetaSys, MetaSysProps, MetaLinkProps } from './meta'

export interface AppInstallationProps {
  parameters: {
    [key: string]: string
  }
}

interface AppInstallationMetaSysProps extends MetaSysProps {
  appDefinition: { sys: MetaLinkProps }
}

export interface AppInstallation
  extends AppInstallationProps,
    DefaultElements<AppInstallationProps & MetaSys<MetaSysProps>>,
    MetaSys<AppInstallationMetaSysProps> {
  update(): Promise<AppInstallation>,
  delete(): Promise<void>,
}
