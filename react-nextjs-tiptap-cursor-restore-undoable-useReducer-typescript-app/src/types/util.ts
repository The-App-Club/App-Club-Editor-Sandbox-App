// https://github.com/sindresorhus/type-fest/issues/132#issuecomment-1278045631

export type AllKeys<T> = T extends T ? keyof T : never
export type DistributedOmit<T, K extends AllKeys<T>> = T extends T
  ? Omit<T, K>
  : never
export type DistributedPick<T, K extends AllKeys<T>> = T extends T
  ? Pick<T, K>
  : never
