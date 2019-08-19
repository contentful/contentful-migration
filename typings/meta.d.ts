export interface MetaSysProps {
  type: string,
  id: string,
  space?: { sys: MetaLinkProps },
  status?: { sys: MetaLinkProps },
  version: number,
  createdBy?: { sys: MetaLinkProps },
  createdAt: string,
  updatedBy?: { sys: MetaLinkProps },
  updatedAt: string,
}

export interface MetaSys<TType extends MetaSysProps | MetaLinkProps = MetaSysProps | MetaLinkProps> {
  sys: TType,
}

export interface MetaLinkProps {
  type: string,
  linkType: string,
  id: string,
}
