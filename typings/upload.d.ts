import { MetaSys, MetaSysProps } from './meta'
import { DefaultElements } from './defaultElements'

export interface Upload extends MetaSys<MetaSysProps>, DefaultElements<MetaSys<MetaSysProps>> {
  delete(): Promise<void>
}
