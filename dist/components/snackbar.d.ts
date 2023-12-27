import { AlertColor } from "@mui/material";
import { registerKey } from "../register";
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
export type SnackBarRegister = snackOpt;
/**
 *
 * @see
 * @returns
 */
export declare function SnackBar({ registerkeys }: {
    registerkeys?: registerKey;
}): import("react/jsx-runtime").JSX.Element;
