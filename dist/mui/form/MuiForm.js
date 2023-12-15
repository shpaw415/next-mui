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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useMuiForm = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var material_1 = require("@mui/material");
var react_1 = require("react");
function MuiForm(_a) {
    var _this = this;
    var children = _a.children, muiformHook = _a.muiformHook, sx = _a.sx;
    var _b = (0, react_1.useState)(false), loading = _b[0], setLoading = _b[1];
    var _c = (0, react_1.useTransition)(), startTransition = _c[1];
    var ruleset = (muiformHook === null || muiformHook === void 0 ? void 0 : muiformHook.ruleset) || {};
    return ((0, jsx_runtime_1.jsxs)(material_1.Box, { component: "form", sx: __assign(__assign({}, sx), { "& .MuiTextField-root": {
                m: 1,
                width: "25ch",
            } }), action: muiformHook && muiformHook.serverAction, onSubmit: function (event) { return __awaiter(_this, void 0, void 0, function () {
            var hasError, form, _a, _b, _c, name_1, value, rule, e_1_1, data;
            var _d;
            var _e, e_1, _f, _g;
            var _h;
            return __generator(this, function (_j) {
                switch (_j.label) {
                    case 0:
                        setLoading(true);
                        event.preventDefault();
                        muiformHook === null || muiformHook === void 0 ? void 0 : muiformHook.reset();
                        hasError = false;
                        form = new FormData(event.currentTarget);
                        _j.label = 1;
                    case 1:
                        _j.trys.push([1, 6, 7, 12]);
                        _a = true, _b = __asyncValues(Object.keys(ruleset));
                        _j.label = 2;
                    case 2: return [4 /*yield*/, _b.next()];
                    case 3:
                        if (!(_c = _j.sent(), _e = _c.done, !_e)) return [3 /*break*/, 5];
                        _g = _c.value;
                        _a = false;
                        name_1 = _g;
                        value = ((_h = form.get(name_1)) === null || _h === void 0 ? void 0 : _h.toString()) || "";
                        rule = ruleset[name_1];
                        if (!rule(value, form, function (value) {
                            muiformHook === null || muiformHook === void 0 ? void 0 : muiformHook.set(formatVals(value));
                            hasError = true;
                        })) {
                            muiformHook === null || muiformHook === void 0 ? void 0 : muiformHook.set((_d = {}, _d[name_1] = true, _d));
                            hasError = true;
                        }
                        _j.label = 4;
                    case 4:
                        _a = true;
                        return [3 /*break*/, 2];
                    case 5: return [3 /*break*/, 12];
                    case 6:
                        e_1_1 = _j.sent();
                        e_1 = { error: e_1_1 };
                        return [3 /*break*/, 12];
                    case 7:
                        _j.trys.push([7, , 10, 11]);
                        if (!(!_a && !_e && (_f = _b.return))) return [3 /*break*/, 9];
                        return [4 /*yield*/, _f.call(_b)];
                    case 8:
                        _j.sent();
                        _j.label = 9;
                    case 9: return [3 /*break*/, 11];
                    case 10:
                        if (e_1) throw e_1.error;
                        return [7 /*endfinally*/];
                    case 11: return [7 /*endfinally*/];
                    case 12:
                        data = {};
                        form.forEach(function (val, key) {
                            data[key] = val.toString();
                        });
                        if (!(!hasError && (muiformHook === null || muiformHook === void 0 ? void 0 : muiformHook.onSuccess))) return [3 /*break*/, 14];
                        return [4 /*yield*/, muiformHook.onSuccess(data, function (names) {
                                muiformHook.set(formatVals(names));
                            })];
                    case 13:
                        _j.sent();
                        _j.label = 14;
                    case 14:
                        if (!hasError) {
                            startTransition(function () {
                                (muiformHook === null || muiformHook === void 0 ? void 0 : muiformHook.serverAction)
                                    ? muiformHook.serverAction({
                                        data: data,
                                        setError: function (names) {
                                            muiformHook.set(formatVals(names));
                                        },
                                    })
                                    : undefined;
                            });
                        }
                        setLoading(false);
                        return [2 /*return*/];
                }
            });
        }); }, children: [children, (0, jsx_runtime_1.jsx)(material_1.Backdrop, { sx: { color: "#fff", zIndex: function (theme) { return theme.zIndex.drawer + 1; } }, open: loading, children: (0, jsx_runtime_1.jsx)(material_1.CircularProgress, { color: "inherit" }) })] }));
}
exports.default = MuiForm;
function formatVals(names) {
    var formated = {};
    for (var _i = 0, names_1 = names; _i < names_1.length; _i++) {
        var val = names_1[_i];
        formated[val] = true;
    }
    return formated;
}
function useMuiForm(_a) {
    var ruleset = _a.ruleset, onSuccess = _a.onSuccess, serverAction = _a.serverAction;
    var _b = (0, react_1.useState)({}), error = _b[0], seterror = _b[1];
    return {
        set: function (name) {
            seterror(function (current) {
                return __assign(__assign({}, current), name);
            });
        },
        reset: function () {
            seterror(function () {
                return {};
            });
        },
        ruleset: ruleset,
        status: function (name) {
            return error[name];
        },
        onSuccess: onSuccess,
        serverAction: serverAction,
    };
}
exports.useMuiForm = useMuiForm;
