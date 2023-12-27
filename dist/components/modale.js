import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, ThemeProvider, } from "@mui/material";
import { useContext, useMemo, useState } from "react";
import { MuiForm } from "../form/MuiForm";
import { useRegister } from "../register/register";
import { ThemeContext, createregisterKeys } from "..";
export class ModaleControls {
    setOpen;
    setContent;
    constructor(setOpen, setContent) {
        this.setOpen = setOpen;
        this.setContent = setContent;
    }
    open() {
        this.setOpen(true);
    }
    close() {
        this.setOpen(false);
    }
    create(props) {
        this.setContent(props);
        return this;
    }
}
/**
 *
 * @see ModaleRegister
 */
export function Modale({ registerkeys, }) {
    const [open, setOpen] = useState(false);
    const theme = useContext(ThemeContext);
    const [content, setContent] = useState({
        title: "",
        text: "",
    });
    const dialogObj = useMemo(() => new ModaleControls(setOpen, setContent), []);
    useRegister(createregisterKeys({
        keys: {
            primary: registerkeys?.primary,
            secondary: registerkeys?.secondary,
        },
        registerOptions: dialogObj,
    }));
    if (!content.buttons) {
        content.buttons = [
            _jsx(Button, { type: "submit", variant: "contained", onSubmit: () => {
                    content.onsubmit ? content.onsubmit() : null;
                }, children: "Accept" }, "accept"),
            _jsx(Button, { onClick: () => setOpen(false), variant: "contained", children: "Cancel" }, "cancel"),
        ];
    }
    const componant = (_jsxs(Dialog, { open: open, children: [_jsx(DialogTitle, { children: content.title }), _jsxs(MuiForm, { muiformHook: content.formHook, children: [_jsxs(DialogContent, { children: [content.text && (_jsx(DialogContentText, { children: content.text })), content.inputFields && content.inputFields] }), content.buttons && _jsx(DialogActions, { children: content.buttons })] })] }));
    return theme.theme ? (_jsx(ThemeProvider, { theme: theme.theme, children: componant })) : (componant);
}
