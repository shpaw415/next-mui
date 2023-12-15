interface RegisterStruct {
    [key: string]: {
        [key: string]: Function | object;
    };
}
declare class Register {
    private registers;
    private States;
    add(register: RegisterStruct): this;
    get<T>(key: string): T;
    showRegisters(): void;
    /**
     * for hook use only ***do not use***
     */
    addState(callback: Function): void;
    update(): void;
}
export declare function useRegister(value?: RegisterStruct): Register;
export {};
