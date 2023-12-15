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
exports.ScrollableTabs = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var material_1 = require("@mui/material");
var react_1 = require("react");
var register_1 = __importDefault(require("../data-share/register"));
function CustomTabPanel(props) {
    var children = props.children, value = props.value, index = props.index, id = props.id, containerSx = props.containerSx;
    return ((0, jsx_runtime_1.jsx)("div", { role: "tabpanel", hidden: value !== index, id: "".concat(id, "-tabpanel-").concat(index), "aria-labelledby": "".concat(id, "-tab-").concat(index), children: value === index && ((0, jsx_runtime_1.jsx)(material_1.Box, { sx: __assign({ p: 3 }, containerSx), children: (0, jsx_runtime_1.jsx)(material_1.Typography, { children: children }) })) }));
}
function a11yProps(index, id) {
    return {
        id: "".concat(id, "-tab-").concat(index),
        "aria-controls": "".concat(id, "-tabpanel-").concat(index),
    };
}
function ScrollableTabs(_a) {
    var _b, _c;
    var items = _a.items, id = _a.id, color = _a.color, containersx = _a.containersx, tabHeadersx = _a.tabHeadersx, registerkeys = _a.registerkeys;
    var _d = (0, react_1.useState)(0), value = _d[0], setValue = _d[1];
    (0, register_1.default)(registerkeys
        ? (_b = {},
            _b[registerkeys.primary] = (_c = {},
                _c[registerkeys.secondary] = { setTab: setValue },
                _c),
            _b) : undefined);
    var index = 0;
    var index2 = 0;
    return ((0, jsx_runtime_1.jsxs)(material_1.Box, { sx: { width: "100%" }, children: [(0, jsx_runtime_1.jsx)(material_1.Box, { sx: __assign({ maxWidth: { xs: 320, sm: 480 }, bgcolor: "primary.light" }, tabHeadersx), children: (0, jsx_runtime_1.jsx)(material_1.Tabs, { value: value, onChange: function (e, value) {
                        setValue(value);
                        e;
                    }, variant: "scrollable", scrollButtons: "auto", "aria-label": "scrollable auto tabs example", indicatorColor: color || "secondary", textColor: color || "secondary", children: items.map(function (item) {
                        index++;
                        return ((0, jsx_runtime_1.jsx)(material_1.Tab, __assign({ label: item.label }, a11yProps(index - 1, id)), "tab-".concat(id, "-").concat(index)));
                    }) }) }), items.map(function (item) {
                index2++;
                return ((0, jsx_runtime_1.jsx)(CustomTabPanel, { value: value, index: index2 - 1, id: id, containerSx: containersx, children: item.children }, "panel-".concat(id, "-").concat(index2)));
            })] }));
}
exports.ScrollableTabs = ScrollableTabs;
