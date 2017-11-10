export default interface ContentTransform {
  from: string[],
  to: string[],
  transform (inputFields: any[]): any[]
}
