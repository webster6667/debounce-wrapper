export declare type Fn = (...args: any) => any;
export declare type Debounce = (fn: Fn, ms: number) => (...args: any) => ReturnType<typeof setTimeout>;
