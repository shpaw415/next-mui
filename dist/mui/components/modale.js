"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Modale = exports.ModaleControls = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var material_1 = require("@mui/material");
var react_1 = require("react");
var MuiForm_1 = __importDefault(require("../form/MuiForm"));
var register_1 = __importDefault(require("../data-share/register"));
var ModaleControls = /** @class */ (function () {
    function ModaleControls(setOpen, setContent) {
        this.setOpen = setOpen;
        this.setContent = setContent;
    }
    ModaleControls.prototype.open = function () {
        this.setOpen(true);
    };
    ModaleControls.prototype.close = function () {
        this.setOpen(false);
    };
    ModaleControls.prototype.create = function (props) {
        this.setContent(props);
        return this;
    };
    return ModaleControls;
}());
exports.ModaleControls = ModaleControls;
/**
 *
 * @see ModaleRegister
 */
function Modale(_a) {
    var _b, _c;
    var registerkeys = _a.registerkeys;
    var _d = (0, react_1.useState)(false), open = _d[0], setOpen = _d[1];
    var _e = (0, react_1.useState)({
        title: "",
        text: "",
    }), content = _e[0], setContent = _e[1];
    var dialogObj = (0, react_1.useMemo)(function () { return new ModaleControls(setOpen, setContent); }, []);
    (0, register_1.default)(registerkeys
        ? (_b = {},
            _b[registerkeys.primary] = (_c = {},
                _c[registerkeys.secondary] = dialogObj,
                _c),
            _b) : undefined);
    if (!content.buttons) {
        content.buttons = [
            (0, jsx_runtime_1.jsx)(material_1.Button, { type: "submit", onSubmit: function () {
                    content.onsubmit ? content.onsubmit() : null;
                }, children: "Accept" }, "accept"),
            (0, jsx_runtime_1.jsx)(material_1.Button, { onClick: function () { return setOpen(false); }, children: "Cancel" }, "cancel"),
        ];
    }
    return ((0, jsx_runtime_1.jsxs)(material_1.Dialog, { open: open, children: [(0, jsx_runtime_1.jsx)(material_1.DialogTitle, { children: content.title }), (0, jsx_runtime_1.jsxs)(MuiForm_1.default, { muiformHook: content.formHook, children: [(0, jsx_runtime_1.jsxs)(material_1.DialogContent, { children: [content.text && ((0, jsx_runtime_1.jsx)(material_1.DialogContentText, { children: content.text })), content.inputFields && content.inputFields] }), content.buttons && (0, jsx_runtime_1.jsx)(material_1.DialogActions, { children: content.buttons })] })] }));
}
exports.Modale = Modale;
