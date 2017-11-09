declare module 'didyoumean2' {
  function didYouMean (str: string, list:string[]): string | null
  function didYouMean (str: string, list:object[], key:string): string | null
  namespace didYouMean {}
  
  export = didYouMean
}