export declare type Rules<T> = {
    [Key in keyof Partial<T>]: (val: T[Key]) => boolean;
};

export declare type UpdateQueryData<T> = {
    [Key in keyof Partial<T>]: T[Key];
};

declare const useQuerySyncData: <T extends Record<string, any>, K extends keyof T>(defaultQueryData: T, rules: Rules<T>, options?: {
    queryChangeCallback?: ((queryData: T) => void) | undefined;
    initCallback?: ((queryData: T) => void) | undefined;
    mountedCallback?: ((queryData: T) => void) | undefined;
}) => {
    queryData: globalThis.Ref<T>;
    updateQueryData: (val: UpdateQueryData<T>) => void;
};
export default useQuerySyncData;

export { }
