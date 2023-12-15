import { AlertColor } from "@mui/material";
export declare class snackOpt {
    setOpen: Function;
    setData: Function;
    constructor({ setOpen, setData }: {
        setOpen: Function;
        setData: Function;
    });
    open(): this;
    close(): this;
    data({ message, type }: {
        message: string;
        type: AlertColor;
    }): this;
}
export interface SnackBarRegister {
    [key: string]: snackOpt;
}
/**
 *
 * @see
 * @returns
 */
export declare function SnackBar({ registerkeys, }: {
    registerkeys?: {
        primary: string;
        secondary: string;
    };
}): import("react/jsx-runtime").JSX.Element;
