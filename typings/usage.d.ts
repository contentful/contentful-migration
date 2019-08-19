import { MetaSys, MetaSysProps } from "./meta";
import { DefaultElements } from "./defaultElements";
import { Organization } from "./organization";
import { Space } from "./space";

export interface UsageProps {
  organization?: Organization,
  space?: Space
  unitOfMeasure: string,
  interval: string,
  startDate: string,
  endDate: string,
  usage: number[]
}

export interface Usage
  extends UsageProps,
    MetaSys<MetaSysProps> {}