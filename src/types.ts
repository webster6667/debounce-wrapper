export type Fn = (...args: any) => any
export type ReturnedFn = (...args: any) => ReturnType<typeof setTimeout>
export type Debounce = (fn: Fn, ms: number) => ReturnedFn