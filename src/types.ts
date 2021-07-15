export type Fn = (...args: any) => any
export type Debounce = (fn: Fn, ms: number) => (...args: any) => ReturnType<typeof setTimeout>