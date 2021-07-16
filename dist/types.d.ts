export declare type Fn = (...args: any) => any;
export declare type ReturnedFn = (...args: any) => ReturnType<typeof setTimeout>;
export declare type Debounce = (fn: Fn, ms: number) => ReturnedFn;
