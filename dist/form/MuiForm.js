import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Backdrop, Box, CircularProgress, } from "@mui/material";
import { useState, useTransition, useRef } from "react";
export function MuiForm({ children, muiformHook, sx, formProps, }) {
    const [loading, setLoading] = useState(false);
    const [, startTransition] = useTransition();
    const ruleset = muiformHook?.ruleset || {};
    const submitRef = useRef();
    if (muiformHook)
        muiformHook.submit = muiformHook
            ? () => {
                submitRef.current?.click();
            }
            : () => { };
    return (_jsxs(Box, { ...formProps, component: "form", sx: {
            ...sx,
            "& .MuiTextField-root": {
                m: 1,
                width: "25ch",
            },
        }, action: muiformHook && muiformHook.serverAction, onSubmit: async (event) => {
            if (loading) {
                event.preventDefault();
                event.stopPropagation();
                return;
            }
            setLoading(true);
            event.preventDefault();
            muiformHook?.reset();
            let hasError = false;
            const form = new FormData(event.currentTarget);
            for await (const name of Object.keys(ruleset)) {
                const value = form.get(name)?.toString() || "";
                const rule = ruleset[name];
                if (!rule(value, form, (value) => {
                    muiformHook?.set(formatVals(value));
                    hasError = true;
                })) {
                    muiformHook?.set({ [name]: true });
                    hasError = true;
                }
            }
            let data = {};
            form.forEach((val, key) => {
                data[key] = val.toString();
            });
            if (!hasError && muiformHook?.onSuccess) {
                await muiformHook.onSuccess(data, (names) => {
                    muiformHook.set(formatVals(names));
                });
            }
            if (!hasError) {
                startTransition(() => {
                    const res = muiformHook?.serverAction
                        ? muiformHook.serverAction({
                            data: data,
                            setError: (names) => {
                                muiformHook.set(formatVals(names));
                            },
                        })
                        : undefined;
                    res?.then(() => setLoading(false));
                });
            }
            else
                setLoading(false);
        }, children: [children, _jsx(Backdrop, { sx: { color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }, open: loading, children: _jsx(CircularProgress, { color: "inherit" }) }), _jsx("input", { type: "submit", hidden: true, ref: submitRef })] }));
}
function formatVals(names) {
    let formated = {};
    for (const val of names) {
        formated[val] = true;
    }
    return formated;
}
export function useMuiForm({ ruleset, onSuccess, serverAction, }) {
    const [error, seterror] = useState({});
    return {
        set: (name) => {
            seterror((current) => {
                return {
                    ...current,
                    ...name,
                };
            });
        },
        reset: () => {
            seterror(() => {
                return {};
            });
        },
        ruleset: ruleset,
        status: (name) => {
            return error[name];
        },
        onSuccess: onSuccess,
        serverAction: serverAction,
    };
}
