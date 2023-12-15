"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PasswordField = exports.InputField = exports.SearchField = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var material_1 = require("@mui/material");
var register_1 = __importDefault(require("../data-share/register"));
var react_1 = require("react");
var icons_material_1 = require("@mui/icons-material");
var SearchIconWrapper = (0, material_1.styled)("div")(function (_a) {
    var theme = _a.theme;
    return ({
        padding: theme.spacing(0, 2),
        height: "100%",
        position: "absolute",
        pointerEvents: "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    });
});
var StyledInputBase = (0, material_1.styled)(material_1.InputBase)(function (_a) {
    var _b;
    var theme = _a.theme;
    return ({
        color: "inherit",
        "& .MuiInputBase-input": (_b = {
                padding: theme.spacing(1, 1, 1, 0),
                // vertical padding + font size from searchIcon
                paddingLeft: "calc(1em + ".concat(theme.spacing(4), ")"),
                transition: theme.transitions.create("width"),
                width: "100%"
            },
            _b[theme.breakpoints.up("md")] = {
                width: "20ch",
            },
            _b),
    });
});
var Search = (0, material_1.styled)("div")(function (_a) {
    var _b;
    var theme = _a.theme;
    return (_b = {
            position: "relative",
            borderRadius: theme.shape.borderRadius,
            backgroundColor: (0, material_1.alpha)(theme.palette.common.white, 0.15),
            "&:hover": {
                backgroundColor: (0, material_1.alpha)(theme.palette.common.white, 0.25),
            },
            marginRight: theme.spacing(2),
            marginLeft: 0,
            alignItems: "center",
            width: "100%"
        },
        _b[theme.breakpoints.up("sm")] = {
            marginLeft: theme.spacing(3),
            width: "auto",
        },
        _b);
});
function SearchField(_a) {
    var placeholder = _a.placeholder, onchange = _a.onchange;
    return ((0, jsx_runtime_1.jsxs)(Search, { children: [(0, jsx_runtime_1.jsx)(SearchIconWrapper, { children: (0, jsx_runtime_1.jsx)(icons_material_1.Search, {}) }), (0, jsx_runtime_1.jsx)(StyledInputBase, { placeholder: placeholder || "Search…", inputProps: { "aria-label": "search" }, onChange: function (event) { var _a; return onchange((_a = event.currentTarget) === null || _a === void 0 ? void 0 : _a.value); } })] }));
}
exports.SearchField = SearchField;
function InputField(props) {
    var _a, _b;
    var _c = (0, react_1.useState)({
        error: false,
        value: "",
    }), state = _c[0], setState = _c[1];
    (0, register_1.default)(props.registerkeys
        ? (_a = {},
            _a[props.registerkeys.primary] = (_b = {},
                _b[props.registerkeys.secondary] = {
                    set: setState,
                },
                _b),
            _a) : undefined);
    return (0, jsx_runtime_1.jsx)(material_1.TextField, __assign({}, props, { error: state.error }));
}
exports.InputField = InputField;
exports.PasswordField = (0, react_1.forwardRef)(function (props, ref) {
    var _a = (0, react_1.useState)("password"), password = _a[0], setPassword = _a[1];
    var labelColor = props.error ? "#f44336" : "inherit";
    return ((0, jsx_runtime_1.jsxs)(material_1.FormControl, { sx: { m: 1, width: "25ch" }, variant: "outlined", children: [(0, jsx_runtime_1.jsx)(material_1.InputLabel, { htmlFor: "outlined-adornment-password", sx: { color: labelColor }, children: props.label || "" }), (0, jsx_runtime_1.jsx)(material_1.OutlinedInput, __assign({ sx: { borderColor: "blue", color: "inherit" } }, props, { type: password == "text" ? "text" : "password", endAdornment: (0, jsx_runtime_1.jsx)(material_1.InputAdornment, { position: "end", children: (0, jsx_runtime_1.jsx)(material_1.IconButton, { "aria-label": "toggle password visibility", onClick: function () {
                            return setPassword(password == "text" ? "password" : "text");
                        }, onMouseDown: function (e) { return e.preventDefault(); }, edge: "end", children: password == "password" ? (0, jsx_runtime_1.jsx)(icons_material_1.VisibilityOff, {}) : (0, jsx_runtime_1.jsx)(icons_material_1.Visibility, {}) }) }) }))] }));
});
exports.PasswordField.displayName = "PasswordField";
