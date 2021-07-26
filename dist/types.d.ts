export declare type Debounce = <T extends any[]>(fn: (...args: T) => void, ms: number) => (...args: T) => ReturnType<typeof setTimeout>;
