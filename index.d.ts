declare module 'ctcc-cmp-des' {
  export function strEnc(data: string, firstKey: string, secondKey: string, thirdKey: string): string;
  export function naturalOrdering (arr: string[]): string;
}
