import { MetaSys, MetaSysProps } from "./meta";
import { DefaultElements } from "./defaultElements";

export interface UsagePeriodProps {
    startDate: string,
    endDate: string
}

export interface UsagePeriod
  extends UsagePeriodProps,
    MetaSys<MetaSysProps> {}