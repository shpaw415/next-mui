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
exports.OptionMenuBtn = exports.OptionMenu = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var material_1 = require("@mui/material");
var KeyboardArrowDown_1 = __importDefault(require("@mui/icons-material/KeyboardArrowDown"));
var react_1 = require("react");
function OptionMenu(_a) {
    var items = _a.items, id = _a.id, anchorEl = _a.anchorEl, open = _a.open, handleClose = _a.handleClose, width = _a.width;
    return ((0, jsx_runtime_1.jsx)(material_1.Menu, { id: id, anchorEl: anchorEl, open: open, onClose: function () { return handleClose(null); }, MenuListProps: {
            "aria-labelledby": "basic-button",
        }, anchorOrigin: {
            vertical: "bottom",
            horizontal: "left",
        }, keepMounted: true, transformOrigin: {
            vertical: "top",
            horizontal: "left",
        }, children: items.map(function (item) { return ((0, jsx_runtime_1.jsxs)(material_1.MenuItem, { sx: { width: width }, onClick: function () {
                item.callback();
                handleClose(null);
            }, children: [(0, jsx_runtime_1.jsx)(material_1.ListItemIcon, { children: item.icon }), (0, jsx_runtime_1.jsx)(material_1.ListItemText, { children: item.text }), item.racourcis && ((0, jsx_runtime_1.jsxs)(material_1.Typography, { variant: "body2", color: "text.secondary", sx: { overflowX: "auto", ml: 2 }, children: ["\u2318", item.racourcis] }))] }, item.text)); }) }));
}
exports.OptionMenu = OptionMenu;
function OptionMenuBtn(_a) {
    var sxButton = _a.sxButton, items = _a.items, id = _a.id, menuWidth = _a.menuWidth, btnText = _a.btnText;
    var _b = (0, react_1.useState)(null), anchorEl = _b[0], setanchorEl = _b[1];
    var handleClose = function () { return setanchorEl(null); };
    var open = Boolean(anchorEl);
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(material_1.Button, { endIcon: (0, jsx_runtime_1.jsx)(KeyboardArrowDown_1.default, {}), variant: "contained", sx: __assign({ height: "70%", bgcolor: "primary.light" }, sxButton), "aria-controls": open ? id : undefined, "aria-haspopup": "true", "aria-expanded": open ? "true" : undefined, onClick: function (event) { return setanchorEl(event.currentTarget); }, children: btnText }), (0, jsx_runtime_1.jsx)(OptionMenu, { items: items, id: id, anchorEl: anchorEl, width: menuWidth, open: open, handleClose: handleClose })] }));
}
exports.OptionMenuBtn = OptionMenuBtn;
