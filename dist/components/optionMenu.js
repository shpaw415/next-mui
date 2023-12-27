import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Button, ListItemIcon, ListItemText, Menu, MenuItem, ThemeProvider, Typography, } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useContext, useState } from "react";
import { ThemeContext } from "..";
export function OptionMenu({ items, id, anchorEl, open, handleClose, width, sx, }) {
    const theme = useContext(ThemeContext);
    const component = (_jsx(Menu, { id: id, anchorEl: anchorEl, open: open, onClose: () => handleClose(null), MenuListProps: {
            "aria-labelledby": "basic-button",
        }, anchorOrigin: {
            vertical: "bottom",
            horizontal: "left",
        }, keepMounted: true, transformOrigin: {
            vertical: "top",
            horizontal: "left",
        }, sx: sx, children: items.map((item) => (_jsxs(MenuItem, { sx: { width: width, bgcolor: "inherit" }, onClick: () => {
                item.callback();
                handleClose(null);
            }, children: [item.icon && _jsx(ListItemIcon, { children: item.icon }), _jsx(ListItemText, { children: item.text }), item.racourcis && (_jsxs(Typography, { variant: "body2", sx: { overflowX: "auto", ml: 2 }, children: ["\u2318", item.racourcis] }))] }, item.text))) }));
    return theme.theme ? (_jsx(ThemeProvider, { theme: theme.theme, children: component })) : (component);
}
export function OptionMenuBtn({ sxButton, items, id, menuWidth, btnText, }) {
    const [anchorEl, setanchorEl] = useState(null);
    const theme = useContext(ThemeContext);
    const handleClose = () => setanchorEl(null);
    const open = Boolean(anchorEl);
    const component = (_jsxs(_Fragment, { children: [_jsx(Button, { endIcon: _jsx(KeyboardArrowDownIcon, {}), variant: "contained", sx: { height: "70%", ...sxButton }, "aria-controls": open ? id : undefined, "aria-haspopup": "true", "aria-expanded": open ? "true" : undefined, onClick: (event) => setanchorEl(event.currentTarget), children: btnText }), _jsx(OptionMenu, { items: items, id: id, anchorEl: anchorEl, width: menuWidth, open: open, handleClose: handleClose })] }));
    return theme.theme ? (_jsx(ThemeProvider, { theme: theme.theme, children: component })) : (component);
}
