/// <reference types="react" />
import { SxProps, Theme } from "@mui/material";
import { registerKey } from "..";
interface scrollTabsProps {
    items: Array<tabStruct>;
    id: string;
    color?: "primary" | "secondary";
    containersx?: SxProps<Theme>;
    tabHeadersx?: SxProps<Theme>;
    registerkeys?: registerKey;
}
interface tabStruct {
    label: string;
    children: JSX.Element;
}
export interface ScrollableTabsRegister {
    setTab: (value: number) => void;
}
export declare function ScrollableTabs({ items, id, color, containersx, tabHeadersx, registerkeys, }: scrollTabsProps): import("react/jsx-runtime").JSX.Element;
export interface _GroupTable {
    header: Array<Column>;
    columns: Array<{
        [key: string]: string;
    }>;
    tableCell?: Array<{
        value: string;
        colspan: number;
        align?: "center" | "left" | "right";
    }>;
}
interface Column {
    id: string;
    label: string;
    minWidth?: number;
    align?: "right";
    format?: (value: number) => string;
}
export declare function GroupingTable(data: _GroupTable): import("react/jsx-runtime").JSX.Element;
export {};
