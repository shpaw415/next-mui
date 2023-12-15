/// <reference types="react" />
import { SxProps, Theme } from "@mui/material";
interface scrollTabsProps {
    items: Array<tabStruct>;
    id: string;
    color?: "primary" | "secondary";
    containersx?: SxProps<Theme>;
    tabHeadersx?: SxProps<Theme>;
    registerkeys?: {
        primary: string;
        secondary: string;
    };
}
interface tabStruct {
    label: string;
    children: JSX.Element;
}
export interface ScrollableTabsRegister {
    [key: string]: {
        setTab: (value: number) => void;
    };
}
export declare function ScrollableTabs({ items, id, color, containersx, tabHeadersx, registerkeys, }: scrollTabsProps): import("react/jsx-runtime").JSX.Element;
export {};
