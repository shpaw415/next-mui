import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Box, FormControl, InputLabel, MenuItem, OutlinedInput, Select, ThemeProvider, } from "@mui/material";
import { useContext, useMemo, useState } from "react";
import { useRegister } from "../register/register";
import { ThemeContext, createregisterKeys } from "..";
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
export function Selector({ width, items, labelColor, label, id, onchange, color, name, value, registerkeys, }) {
    const [currentVal, setCurrentVal] = useState(value || "");
    const [error, setError] = useState(false);
    const theme = useContext(ThemeContext);
    useRegister(createregisterKeys({
        keys: {
            primary: registerkeys?.primary,
            secondary: registerkeys?.secondary,
        },
        registerOptions: {
            setValue: setCurrentVal,
            setError: setError,
        },
    }));
    const MenuProps = useMemo(() => {
        return {
            PaperProps: {
                style: {
                    maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
                    width: width || 300,
                },
            },
        };
    }, [width]);
    const component = (_jsx(Box, { children: _jsxs(FormControl, { sx: { m: 1, width: width || 300 }, children: [_jsx(InputLabel, { id: id, sx: { color: labelColor || "white" }, color: color, children: label }), _jsx(Select, { labelId: id, input: _jsx(OutlinedInput, { label: "Page" }), MenuProps: MenuProps, value: currentVal, onChange: (val) => {
                        setCurrentVal(val.target.value);
                        onchange && onchange(val.target.value);
                    }, error: error, name: name, color: color, children: items.map((name) => (_jsx(MenuItem, { value: name, children: name }, name))) })] }) }));
    return theme.theme ? (_jsx(ThemeProvider, { theme: theme.theme, children: component })) : (component);
}
export function RandomString(length) {
    let result = "";
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}
