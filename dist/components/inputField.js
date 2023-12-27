import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { FormControl, IconButton, InputAdornment, InputBase, InputLabel, OutlinedInput, TextField, ThemeProvider, alpha, styled, } from "@mui/material";
import { useRegister } from "../register/register";
import { useContext, useState } from "react";
import { Visibility, VisibilityOff, Search as SearchIcon, } from "@mui/icons-material";
import { createregisterKeys } from "..";
import { ThemeContext } from "../theme";
const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
}));
const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create("width"),
        width: "100%",
        [theme.breakpoints.up("md")]: {
            width: "20ch",
        },
    },
}));
const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    alignItems: "center",
    width: "100%",
    [theme.breakpoints.up("sm")]: {
        marginLeft: theme.spacing(3),
        width: "auto",
    },
}));
export function SearchField({ placeholder, onchange }) {
    return (_jsxs(Search, { children: [_jsx(SearchIconWrapper, { children: _jsx(SearchIcon, {}) }), _jsx(StyledInputBase, { placeholder: placeholder || "Search…", inputProps: { "aria-label": "search" }, onInput: (event) => onchange(event.currentTarget?.value) })] }));
}
export function InputField(props) {
    const theme = useContext(ThemeContext);
    const [state, setState] = useState({
        error: false,
        value: undefined,
    });
    useRegister(createregisterKeys({
        keys: {
            primary: props.registerkeys?.primary,
            secondary: props.registerkeys?.secondary,
        },
        registerOptions: {
            set: setState,
            reset: () => {
                setState((current) => {
                    return { ...current, value: "" };
                });
                setTimeout(() => {
                    setState((current) => {
                        return {
                            ...current,
                            value: undefined,
                        };
                    });
                }, 100);
            },
        },
    }));
    return theme.theme ? (_jsx(ThemeProvider, { theme: theme.theme, children: _jsx(TextField, { ...state, ...props }) })) : (_jsx(TextField, { ...state, ...props }));
}
export function PasswordField({ label, labelProps, inputProps, registerkeys, }) {
    const [value, setValue] = useState(undefined);
    useRegister(createregisterKeys({
        keys: {
            primary: registerkeys?.primary,
            secondary: registerkeys?.secondary,
        },
        registerOptions: {
            clearValue: () => {
                setValue("");
                setTimeout(() => setValue(undefined), 100);
            },
        },
    }));
    const [password, setPassword] = useState("password");
    const theme = useContext(ThemeContext);
    const component = (_jsxs(FormControl, { sx: { m: 1, width: "25ch" }, variant: "outlined", children: [_jsx(InputLabel, { htmlFor: "outlined-adornment-password", ...labelProps, children: label || "" }), _jsx(OutlinedInput, { value: value, ...inputProps, type: password == "text" ? "text" : "password", endAdornment: _jsx(InputAdornment, { position: "end", children: _jsx(IconButton, { "aria-label": "toggle password visibility", onClick: () => setPassword(password == "text" ? "password" : "text"), onMouseDown: (e) => e.preventDefault(), edge: "end", children: password == "password" ? _jsx(VisibilityOff, {}) : _jsx(Visibility, {}) }) }) })] }));
    return theme.theme ? (_jsx(ThemeProvider, { theme: theme.theme, children: component })) : (component);
}
