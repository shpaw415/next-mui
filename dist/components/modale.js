import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, } from "@mui/material";
import { useMemo, useState } from "react";
import { MuiForm } from "../form/MuiForm";
import { useRegister } from "../register/register";
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
    const [content, setContent] = useState({
        title: "",
        text: "",
    });
    const dialogObj = useMemo(() => new ModaleControls(setOpen, setContent), []);
    useRegister(registerkeys
        ? {
            [registerkeys.primary]: {
                [registerkeys.secondary]: dialogObj,
            },
        }
        : undefined);
    if (!content.buttons) {
        content.buttons = [
            _jsx(Button, { type: "submit", onSubmit: () => {
                    content.onsubmit ? content.onsubmit() : null;
                }, children: "Accept" }, "accept"),
            _jsx(Button, { onClick: () => setOpen(false), children: "Cancel" }, "cancel"),
        ];
    }
    return (_jsxs(Dialog, { open: open, children: [_jsx(DialogTitle, { children: content.title }), _jsxs(MuiForm, { muiformHook: content.formHook, children: [_jsxs(DialogContent, { children: [content.text && (_jsx(DialogContentText, { children: content.text })), content.inputFields && content.inputFields] }), content.buttons && _jsx(DialogActions, { children: content.buttons })] })] }));
}
