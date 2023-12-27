import { BackdropProps } from "@mui/material";
import { registerKey } from "..";
export interface BackDropRegister {
    open: (value: boolean) => void;
    setProps: (val: Omit<BackdropProps, "open">) => void;
}
export declare function BackDrop(props: {
    registerkeys?: registerKey;
} & Omit<BackdropProps, "open">): import("react/jsx-runtime").JSX.Element;
