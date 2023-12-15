"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RandomString = exports.Selector = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var material_1 = require("@mui/material");
var react_1 = require("react");
var register_1 = __importDefault(require("../data-share/register"));
var ITEM_HEIGHT = 48;
var ITEM_PADDING_TOP = 8;
function Selector(_a) {
    var _b, _c;
    var width = _a.width, items = _a.items, labelColor = _a.labelColor, label = _a.label, id = _a.id, onchange = _a.onchange, color = _a.color, name = _a.name, value = _a.value, registerkeys = _a.registerkeys;
    var _d = (0, react_1.useState)(value || ""), currentVal = _d[0], setCurrentVal = _d[1];
    var _e = (0, react_1.useState)(false), error = _e[0], setError = _e[1];
    var register = (0, register_1.default)(registerkeys
        ? (_b = {},
            _b[registerkeys.primary] = (_c = {},
                _c[registerkeys.secondary] = {
                    setValue: setCurrentVal,
                    setError: setError,
                },
                _c),
            _b) : undefined);
    var MenuProps = (0, react_1.useMemo)(function () {
        return {
            PaperProps: {
                style: {
                    maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
                    width: width || 300,
                },
            },
        };
    }, [width]);
    return ((0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsxs)(material_1.FormControl, { sx: { m: 1, width: width || 300 }, children: [(0, jsx_runtime_1.jsx)(material_1.InputLabel, { id: id, sx: { color: labelColor || "white" }, color: color, children: label }), (0, jsx_runtime_1.jsx)(material_1.Select, { labelId: id, input: (0, jsx_runtime_1.jsx)(material_1.OutlinedInput, { label: "Page" }), MenuProps: MenuProps, value: currentVal, onChange: function (val) {
                        setCurrentVal(val.target.value);
                        onchange && onchange(val.target.value);
                    }, error: error, name: name, color: color, children: items.map(function (name) { return ((0, jsx_runtime_1.jsx)(material_1.MenuItem, { value: name, children: name }, name)); }) })] }) }));
}
exports.Selector = Selector;
function RandomString(length) {
    var result = "";
    var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}
exports.RandomString = RandomString;
