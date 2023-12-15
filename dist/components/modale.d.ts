/// <reference types="react" />
import { muiformhook } from "../form/MuiForm";
interface dialogContent {
    title: string;
    text?: string;
    inputFields?: JSX.Element;
    formHook?: muiformhook;
    buttons?: Array<JSX.Element>;
    onsubmit?: Function;
}
export declare class ModaleControls {
    private setOpen;
    private setContent;
    constructor(setOpen: Function, setContent: Function);
    open(): void;
    close(): void;
    create(props: dialogContent): this;
}
export interface ModaleRegister {
    [key: string]: ModaleControls;
}
/**
 *
 * @see ModaleRegister
 */
export declare function Modale({ registerkeys, }: {
    registerkeys?: {
        primary: string;
        secondary: string;
    };
}): import("react/jsx-runtime").JSX.Element;
export {};
