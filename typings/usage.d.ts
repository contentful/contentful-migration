import { MetaSys, MetaSysProps, MetaLinkProps } from './meta'
import { QueryOptions } from './queryOptions'

export type UsageMetricEnum = 'cda' | 'cma' | 'cpa' | 'gql'

export interface UsageQuery extends QueryOptions {
  'metric[in]'?: string,
  'dateRange.startAt'?: string,
  'dateRange.endAt'?: string
}

interface UsageSysProps extends MetaSysProps {
  organization?: { sys: MetaLinkProps }
}

export interface Usage extends MetaSys<UsageSysProps> {
  metric: UsageMetricEnum,
  unitOfMeasure: string,
  dateRange: {
    startAt: string,
    endAt: string
  },
  usage: number,
  usagePerDay: {} // { 'yyyy-mm-dd': number, ... }
}
