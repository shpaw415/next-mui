import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { ListItem, ListItemButton, ListItemIcon, ListItemText, Box, Drawer as Drawer_, Divider, ThemeProvider, } from "@mui/material";
import { ThemeContext, createregisterKeys, useRegister } from "..";
import { useContext, useState } from "react";
export function Drawer({ registerKeys, list, }) {
    const [open, setOpen] = useState(false);
    const theme = useContext(ThemeContext);
    useRegister(createregisterKeys({
        keys: {
            primary: registerKeys?.primary,
            secondary: registerKeys?.secondary,
        },
        registerOptions: {
            setOpen: setOpen,
        },
    }));
    const listFormated = list.map((ul) => {
        return (_jsxs(Box, { children: [_jsx(ListItem, { disablePadding: true, onClick: () => {
                        setOpen(false);
                        ul.callback && ul.callback(ul.data);
                    }, children: _jsxs(ListItemButton, { children: [ul.icon && _jsx(ListItemIcon, { children: ul.icon }), _jsx(ListItemText, { primary: ul.text })] }) }), ul.divider && _jsx(Divider, {})] }, ul.text));
    });
    const component = (_jsx("div", { children: _jsx(_Fragment, { children: _jsx(Drawer_, { anchor: "left", open: open, onClose: () => {
                    setOpen(false);
                }, children: _jsx(Box, { role: "presentation", sx: { width: 250 }, onClick: () => {
                        setOpen(false);
                    }, onKeyDown: () => {
                        setOpen(false);
                    }, children: listFormated }) }) }) }));
    return theme.theme ? (_jsx(ThemeProvider, { theme: theme.theme, children: component })) : (component);
}
