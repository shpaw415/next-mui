import { createContext, useContext, useEffect, useState } from "react";

interface RegisterStruct {
  [key: string]: { [key: string]: Function | object };
}

class Register {
  private registers: RegisterStruct = {};
  private States: Array<Function> = [];

  add(register: RegisterStruct) {
    const key = Object.keys(register)[0];
    if (!this.registers[key]) this.registers[key] = {};
    this.registers[key] = {
      ...this.registers[key],
      ...register[key],
    };
    return this;
  }
  get<T>(key: string) {
    return this.registers[key] as { [key: string]: T };
  }
  showRegisters() {
    console.log(this.registers);
  }
  /**
   * for hook use only ***do not use***
   */
  addState(callback: Function) {
    this.States.push(callback);
  }
  update() {
    this.States.map((el) => el({}));
  }
}

const RegisterContext = createContext(new Register());

export function useRegister(value?: RegisterStruct) {
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
