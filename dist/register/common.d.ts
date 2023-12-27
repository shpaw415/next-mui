export interface registerKey {
    primary?: string;
    secondary?: string;
}
export declare function createregisterKeys<Register>({ keys, registerOptions, }: {
    keys: registerKey;
    registerOptions: Register;
}): {
    [x: string]: {
        [x: string]: Register;
    };
} | undefined;
