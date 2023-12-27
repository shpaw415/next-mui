import { jsx as _jsx } from "react/jsx-runtime";
import { Alert, Snackbar } from "@mui/material";
import { useState } from "react";
import { createregisterKeys, useRegister } from "../register";
export class snackOpt {
    setOpen;
    setData;
    constructor({ setOpen, setData }) {
        this.setOpen = setOpen;
        this.setData = setData;
    }
    open() {
        this.setOpen(true);
        return this;
    }
    close() {
        this.setOpen(false);
        return this;
    }
    data({ message, type }) {
        this.setData({ message: message, type: type });
        return this;
    }
}
/**
 *
 * @see
 * @returns
 */
export function SnackBar({ registerkeys }) {
    const [open, setOpen] = useState(false);
    const [data, setdata] = useState({ message: "", type: "info" });
    useRegister(registerkeys
        ? createregisterKeys({
            keys: {
                primary: registerkeys.primary,
                secondary: registerkeys.secondary,
            },
            registerOptions: new snackOpt({
                setOpen: setOpen,
                setData: setdata,
            }),
        })
        : undefined);
    const handleClose = (event, reason) => {
        event;
        if (reason === "clickaway") {
            return;
        }
        setOpen(false);
    };
    return (_jsx(Snackbar, { open: open, autoHideDuration: 6000, onClose: handleClose, children: _jsx(Alert, { onClose: handleClose, severity: data.type, children: data.message }) }));
}
