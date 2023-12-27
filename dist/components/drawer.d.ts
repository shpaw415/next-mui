/// <reference types="react" />
import { registerKey } from "..";
interface _list {
    text: string;
    icon?: JSX.Element;
    data?: unknown;
    divider?: boolean;
    callback?: (data: unknown) => void;
}
export interface DrawerRegister {
    setOpen: (value: boolean) => void;
}
export declare function Drawer({ registerKeys, list, }: {
    registerKeys?: registerKey;
    list: Array<_list>;
}): import("react/jsx-runtime").JSX.Element;
export {};
