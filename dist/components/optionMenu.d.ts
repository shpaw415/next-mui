import { SxProps, Theme } from "@mui/material";
interface OptionMenuPros {
    items: Array<OptionMenuItem>;
    id: string;
    anchorEl: Element;
    width?: string | number;
    open: boolean;
    handleClose: (value: unknown) => void;
}
interface OptionMenuItem {
    icon: any;
    text: string;
    racourcis?: string;
    callback: Function;
}
export declare function OptionMenu({ items, id, anchorEl, open, handleClose, width, }: OptionMenuPros): import("react/jsx-runtime").JSX.Element;
interface OptionMenuBtnStruct {
    sxButton?: SxProps<Theme>;
    items: Array<OptionMenuItem>;
    id: string;
    menuWidth?: number | string;
    btnText: string;
}
export declare function OptionMenuBtn({ sxButton, items, id, menuWidth, btnText, }: OptionMenuBtnStruct): import("react/jsx-runtime").JSX.Element;
export {};
