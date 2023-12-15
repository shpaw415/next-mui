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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Register = void 0;
var react_1 = require("react");
var Register = /** @class */ (function () {
    function Register() {
        this.registers = {};
        this.States = [];
    }
    Register.prototype.add = function (register) {
        var key = Object.keys(register)[0];
        if (!this.registers[key])
            this.registers[key] = {};
        this.registers[key] = __assign(__assign({}, this.registers[key]), register[key]);
        return this;
    };
    Register.prototype.get = function (key) {
        return this.registers[key];
    };
    Register.prototype.showRegisters = function () {
        console.log(this.registers);
    };
    /**
     * for hook use only ***do not use***
     */
    Register.prototype.addState = function (callback) {
        this.States.push(callback);
    };
    Register.prototype.update = function () {
        this.States.map(function (el) { return el({}); });
    };
    return Register;
}());
exports.Register = Register;
var RegisterContext = (0, react_1.createContext)(new Register());
function useRegister(value) {
    var context = (0, react_1.useContext)(RegisterContext);
    var _a = (0, react_1.useState)({}), setState = _a[1];
    (0, react_1.useEffect)(function () {
        if (value) {
            context.add(value);
            context.addState(setState);
        }
    }, [value, context]);
    return context;
}
exports.default = useRegister;
