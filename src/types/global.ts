export type DeepPartial<T> = { [P in keyof T]?: DeepPartial<T[P]> | undefined; }

export type InferableProp<T> = () => T
