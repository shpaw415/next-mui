import { SxProps, Theme } from "@mui/material";
interface OptionMenuPros {
    items: Array<OptionMenuItem>;
    id: string;
    anchorEl: Element | null;
    width?: string | number;
    open: boolean;
    handleClose: (value: unknown) => void;
    sx?: SxProps<Theme>;
}
interface OptionMenuItem {
    icon: any;
    text: string;
    racourcis?: string;
    callback: Function;
}
export declare function OptionMenu({ items, id, anchorEl, open, handleClose, width, sx, }: OptionMenuPros): import("react/jsx-runtime").JSX.Element;
interface OptionMenuBtnStruct {
    sxButton?: SxProps<Theme>;
    items: Array<OptionMenuItem>;
    id: string;
    menuWidth?: number | string;
    btnText: string;
}
export declare function OptionMenuBtn({ sxButton, items, id, menuWidth, btnText, }: OptionMenuBtnStruct): import("react/jsx-runtime").JSX.Element;
export {};
