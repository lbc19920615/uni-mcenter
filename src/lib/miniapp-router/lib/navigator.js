"use strict";
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
        while (_) try {
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.navigator = exports.Navigator = exports.PathType = exports.getTopLib = void 0;
var logger_1 = __importDefault(require("./logger"));
var utils_1 = require("./utils");
var lib = getTopLib();
function getTopLib() {
    if (typeof uni !== 'undefined' && typeof uni === 'object' && uni.canIUse) {
        return uni;
    }
    if (typeof wx !== 'undefined' && typeof wx === 'object' && wx.canIUse) {
        return wx;
    }
    return null;
}
exports.getTopLib = getTopLib;
var paramsParsing = function (commonParams) {
    var path = commonParams.path, _a = commonParams.query, query = _a === void 0 ? {} : _a;
    var routerPath = typeof path === 'string' ? { path: path, type: PathType.NORMAL } : path;
    var urlQuery = utils_1.obj2Params(query);
    var urlQueryStr = urlQuery ? "?" + urlQuery : '';
    var toUrl = "" + routerPath.path + urlQueryStr;
    return {
        routerPath: routerPath,
        toUrl: toUrl,
    };
};
var PathType;
(function (PathType) {
    // 普通页面
    PathType["NORMAL"] = "normal";
    // 微信小程序原生tabBar页面
    PathType["TAB"] = "tab";
})(PathType = exports.PathType || (exports.PathType = {}));
var Navigator = /** @class */ (function () {
    function Navigator() {
        // 锁
        this.isClick = true;
        // 页面栈最大深度
        this.maxDeep = 10;
    }
    Navigator.setLib = function (v) {
        lib = v;
    };
    Navigator.getLib = function () {
        return lib;
    };
    // 智能跳转应用内某页面
    Navigator.prototype.gotoPage = function () {
        var arg = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            arg[_i] = arguments[_i];
        }
        return __awaiter(this, void 0, void 0, function () {
            var path, _a, query, routerPath, pageStack, pageStackLength, curDelta;
            return __generator(this, function (_b) {
                path = arg[0], _a = arg[1], query = _a === void 0 ? {} : _a;
                logger_1.default.debug('call gotoPage', { path: path, query: query });
                routerPath = paramsParsing({ path: path, query: query }).routerPath;
                // 页面为tab页面
                if (routerPath.type === PathType.TAB) {
                    return [2 /*return*/, this.switchTab.apply(this, arg)];
                }
                pageStack = getCurrentPages();
                pageStackLength = pageStack.length;
                curDelta = this.findPageInHistory(routerPath.path);
                if (pageStack.length >= this.maxDeep) {
                    // 当前页面：在页面栈中
                    if (curDelta > -1)
                        return [2 /*return*/, this.navigateBack({ delta: pageStackLength - curDelta })];
                    // 当前页面：不在页面栈中
                    return [2 /*return*/, this.redirectTo.apply(this, arg)];
                }
                return [2 /*return*/, this.navigateTo.apply(this, arg)];
            });
        });
    };
    /**
     * navigateTo
     * @param path 小程序页面真实路径
     * @param query 页面参数
     * @param options.events 页面间通信接口，用于监听被打开页面发送到当前页面的数据。
     */
    Navigator.prototype.navigateTo = function (path, query, options) {
        return __awaiter(this, void 0, void 0, function () {
            var toUrl;
            var _this = this;
            return __generator(this, function (_a) {
                this.checkIsClick();
                this.isClick = false;
                toUrl = paramsParsing({ path: path, query: query }).toUrl;
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        lib.navigateTo({
                            url: toUrl,
                            events: options === null || options === void 0 ? void 0 : options.events,
                            success: function (arg) {
                                logger_1.default.log('navigateTo:success', 'navigateTo成功', { toUrl: toUrl });
                                resolve(arg);
                                _this.isClick = true;
                            },
                            fail: function (arg) {
                                logger_1.default.log('navigateTo:fail', 'navigateTo失败', arg);
                                reject(arg);
                                _this.isClick = true;
                            },
                        });
                    })];
            });
        });
    };
    /**
     * switchTab
     * @param path 小程序页面真实路径
     * @param query 页面参数
     */
    Navigator.prototype.switchTab = function (path, query) {
        if (query === void 0) { query = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var toUrl;
            var _this = this;
            return __generator(this, function (_a) {
                this.checkIsClick();
                this.isClick = false;
                toUrl = paramsParsing({ path: path, query: query }).toUrl;
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        lib.switchTab({
                            url: toUrl,
                            success: function (arg) {
                                logger_1.default.log('switchTab:success', 'switchTab成功', { toUrl: toUrl });
                                resolve(arg);
                                _this.isClick = true;
                            },
                            fail: function (arg) {
                                logger_1.default.log('switchTab:fail', 'switchTab失败', arg);
                                reject(arg);
                                _this.isClick = true;
                            },
                        });
                    })];
            });
        });
    };
    /**
     * redirectTo
     * @param path 小程序页面真实路径
     * @param query 页面参数
     */
    Navigator.prototype.redirectTo = function (path, query) {
        if (query === void 0) { query = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var toUrl;
            var _this = this;
            return __generator(this, function (_a) {
                this.checkIsClick();
                this.isClick = false;
                toUrl = paramsParsing({ path: path, query: query }).toUrl;
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        lib.redirectTo({
                            url: toUrl,
                            success: function (arg) {
                                logger_1.default.log('redirectTo:success', 'redirectTo成功', { toUrl: toUrl });
                                resolve(arg);
                                _this.isClick = true;
                            },
                            fail: function (arg) {
                                logger_1.default.log('redirectTo:fail', 'redirectTo失败', arg);
                                reject(arg);
                                _this.isClick = true;
                            },
                        });
                    })];
            });
        });
    };
    /**
     * navigateBack
     * @param query.delta 返回的页面数，如果 delta 大于现有页面数，则返回到首页。
     * @param option.setData 植入目标页面 data 的数据。
     */
    Navigator.prototype.navigateBack = function (query, option) {
        return __awaiter(this, void 0, void 0, function () {
            var pageStack, backPage;
            var _this = this;
            return __generator(this, function (_a) {
                this.checkIsClick();
                this.isClick = false;
                if (option === null || option === void 0 ? void 0 : option.setData) {
                    pageStack = getCurrentPages();
                    backPage = pageStack[pageStack.length - 1 - (query.delta || 1)];
                    backPage === null || backPage === void 0 ? void 0 : backPage.setData(option === null || option === void 0 ? void 0 : option.setData);
                }
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        lib.navigateBack({
                            delta: query.delta,
                            success: function (arg) {
                                resolve(arg);
                                _this.isClick = true;
                            },
                            fail: function (arg) {
                                logger_1.default.log('navigateBack:fail', 'navigateBack失败', arg);
                                reject(arg);
                                _this.isClick = true;
                            },
                        });
                    })];
            });
        });
    };
    Navigator.prototype.findPageInHistory = function (path) {
        var pageStack = getCurrentPages();
        var reg = /^\//;
        var delta = -1;
        // eslint-disable-next-line functional/no-loop-statement
        for (var i = 0; i < pageStack.length; i++) {
            var myRoute = pageStack[i].route;
            if (myRoute &&
                path &&
                myRoute.replace(reg, '') === path.replace(reg, '')) {
                delta = i + 1; // 目标页在栈中的位置
                break;
            }
        }
        return delta;
    };
    Navigator.prototype.checkIsClick = function () {
        if (this.isClick === false)
            throw new Error('req locked');
    };
    return Navigator;
}());
exports.Navigator = Navigator;
exports.navigator = new Navigator();
exports.default = exports.navigator;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2aWdhdG9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2xpYi9uYXZpZ2F0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0RBQThCO0FBQzlCLGlDQUFxQztBQUlyQyxJQUFJLEdBQUcsR0FBRyxTQUFTLEVBQUUsQ0FBQztBQUV0QixTQUFnQixTQUFTO0lBQ3ZCLElBQUksT0FBTyxHQUFHLEtBQUssV0FBVyxJQUFJLE9BQU8sR0FBRyxLQUFLLFFBQVEsSUFBSSxHQUFHLENBQUMsT0FBTyxFQUFFO1FBQ3hFLE9BQU8sR0FBRyxDQUFDO0tBQ1o7SUFDRCxJQUFJLE9BQU8sRUFBRSxLQUFLLFdBQVcsSUFBSSxPQUFPLEVBQUUsS0FBSyxRQUFRLElBQUksRUFBRSxDQUFDLE9BQU8sRUFBRTtRQUNyRSxPQUFPLEVBQUUsQ0FBQztLQUNYO0lBQ0QsT0FBTyxJQUFJLENBQUM7QUFDZCxDQUFDO0FBUkQsOEJBUUM7QUFPRCxJQUFNLGFBQWEsR0FBRyxVQUFDLFlBQTBCO0lBQ3ZDLElBQUEsSUFBSSxHQUFpQixZQUFZLEtBQTdCLEVBQUUsS0FBZSxZQUFZLE1BQWpCLEVBQVYsS0FBSyxtQkFBRyxFQUFFLEtBQUEsQ0FBa0I7SUFDMUMsSUFBTSxVQUFVLEdBQ2QsT0FBTyxJQUFJLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksTUFBQSxFQUFFLElBQUksRUFBRSxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztJQUVwRSxJQUFNLFFBQVEsR0FBRyxrQkFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ25DLElBQU0sV0FBVyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsTUFBSSxRQUFVLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUNuRCxJQUFNLEtBQUssR0FBRyxLQUFHLFVBQVUsQ0FBQyxJ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