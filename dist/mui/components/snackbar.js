"use strict";
"use client";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.snackOpt = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var material_1 = require("@mui/material");
var react_1 = require("react");
var register_1 = __importDefault(require("../data-share/register"));
var snackOpt = /** @class */ (function () {
    function snackOpt(_a) {
        var setOpen = _a.setOpen, setData = _a.setData;
        this.setOpen = setOpen;
        this.setData = setData;
    }
    snackOpt.prototype.open = function () {
        this.setOpen(true);
        return this;
    };
    snackOpt.prototype.close = function () {
        this.setOpen(false);
        return this;
    };
    snackOpt.prototype.data = function (_a) {
        var message = _a.message, type = _a.type;
        this.setData({ message: message, type: type });
        return this;
    };
    return snackOpt;
}());
exports.snackOpt = snackOpt;
/**
 *
 * @see
 * @returns
 */
function SnackBar(_a) {
    var _b, _c;
    var registerkeys = _a.registerkeys;
    var _d = (0, react_1.useState)(false), open = _d[0], setOpen = _d[1];
    var _e = (0, react_1.useState)({ message: "", type: "info" }), data = _e[0], setdata = _e[1];
    (0, register_1.default)(registerkeys
        ? (_b = {},
            _b[registerkeys.primary] = (_c = {},
                _c[registerkeys.secondary] = new snackOpt({
                    setOpen: setOpen,
                    setData: setdata,
                }),
                _c),
            _b) : undefined);
    var handleClose = function (event, reason) {
        event;
        if (reason === "clickaway") {
            return;
        }
        setOpen(false);
    };
    return ((0, jsx_runtime_1.jsx)(material_1.Snackbar, { open: open, autoHideDuration: 6000, onClose: handleClose, children: (0, jsx_runtime_1.jsx)(material_1.Alert, { onClose: handleClose, severity: data.type, children: data.message }) }));
}
exports.default = SnackBar;
