import { jsx as _jsx } from "react/jsx-runtime";
import { Backdrop as Bd, CircularProgress } from "@mui/material";
import { useState } from "react";
import { createregisterKeys, useRegister } from "..";
export function BackDrop(props) {
    const [data, setData] = useState({
        open: false,
        props: {},
    });
    useRegister(createregisterKeys({
        keys: {
            primary: props.registerkeys?.primary,
            secondary: props.registerkeys?.secondary,
        },
        registerOptions: {
            open: (val) => {
                setData((current) => {
                    return {
                        ...current,
                        open: val,
                    };
                });
            },
            setProps: (val) => {
                setData((current) => {
                    return {
                        ...current,
                        props: val,
                    };
                });
            },
        },
    }));
    return (_jsx(Bd, { open: data.open, ...props, ...data.props, children: _jsx(CircularProgress, { color: "inherit" }) }));
}
