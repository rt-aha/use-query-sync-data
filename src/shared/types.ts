export type Rules<T> = {
  [Key in keyof Partial<T>]: (val: T[Key]) => boolean
};

export type UpdateQueryData<T> = {
  [Key in keyof Partial<T>]: T[Key]
};
