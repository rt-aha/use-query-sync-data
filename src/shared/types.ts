export type Rules<T> = {
  [Key in keyof Partial<T>]: (val: T[Key]) => boolean
};
