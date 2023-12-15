import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { FormControl, IconButton, InputAdornment, InputBase, InputLabel, OutlinedInput, TextField, alpha, styled, } from "@mui/material";
import { useRegister } from "../register/register";
import { forwardRef, useState } from "react";
import { Visibility, VisibilityOff, Search as SearchIcon, } from "@mui/icons-material";
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
    const [state, setState] = useState({
        error: false,
        value: "",
    });
    useRegister(props.registerkeys
        ? {
            [props.registerkeys.primary]: {
                [props.registerkeys.secondary]: {
                    set: setState,
                },
            },
        }
        : undefined);
    return _jsx(TextField, { ...props, error: state.error });
}
export const PasswordField = forwardRef((props, ref) => {
    const [password, setPassword] = useState("password");
    const labelColor = props.error ? "#f44336" : "inherit";
    return (_jsxs(FormControl, { sx: { m: 1, width: "25ch" }, variant: "outlined", children: [_jsx(InputLabel, { htmlFor: "outlined-adornment-password", sx: { color: labelColor }, children: props.label || "" }), _jsx(OutlinedInput, { sx: { borderColor: "blue", color: "inherit" }, ...props, type: password == "text" ? "text" : "password", endAdornment: _jsx(InputAdornment, { position: "end", children: _jsx(IconButton, { "aria-label": "toggle password visibility", onClick: () => setPassword(password == "text" ? "password" : "text"), onMouseDown: (e) => e.preventDefault(), edge: "end", children: password == "password" ? _jsx(VisibilityOff, {}) : _jsx(Visibility, {}) }) }) })] }));
});
PasswordField.displayName = "PasswordField";
