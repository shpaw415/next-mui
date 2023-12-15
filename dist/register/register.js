import { createContext, useContext, useEffect, useState } from "react";
class Register {
    registers = {};
    States = [];
    add(register) {
        const key = Object.keys(register)[0];
        if (!this.registers[key])
            this.registers[key] = {};
        this.registers[key] = {
            ...this.registers[key],
            ...register[key],
        };
        return this;
    }
    get(key) {
        return this.registers[key];
    }
    showRegisters() {
        console.log(this.registers);
    }
    /**
     * for hook use only ***do not use***
     */
    addState(callback) {
        this.States.push(callback);
    }
    update() {
        this.States.map((el) => el({}));
    }
}
const RegisterContext = createContext(new Register());
export function useRegister(value) {
    const context = useContext(RegisterContext);
    const [, setState] = useState({});
    useEffect(() => {
        if (value) {
            context.add(value);
            context.addState(setState);
        }
    }, [value, context]);
    return context;
}
