"use strict";
/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable functional/no-return-void */
/* eslint-disable @typescript-eslint/no-explicit-any */
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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.landTransferDecorator = exports.LandTransfer = void 0;
var logger_1 = __importDefault(require("./logger"));
var navigator_1 = __importDefault(require("./navigator"));
var LandTransfer = /** @class */ (function () {
    function LandTransfer(params) {
        if (params === void 0) { params = {}; }
        if (params.convertSceneParams)
            this.convertSceneParams = params.convertSceneParams;
        if (params.gotoPage)
            this.gotoPage = params.gotoPage;
        if (params.router)
            this.router = params.router;
    }
    /**
     * 跳转引擎
     * @param path
     * @param query
     */
    LandTransfer.prototype.doGotoPage = function (path, query) {
        if (this.gotoPage)
            return this.gotoPage(path, query);
        if (this.router)
            return this.router.gotoPage(path, query);
        return navigator_1.default.gotoPage(path, query);
    };
    /**
     * 启动，跳转到目标页面。
     * 参数优先级：scene > path
     * @param options.scene 短链参数，会用 this.convertSceneParams 解析成 object
     * @param options.path 目标路径，会跳转到目标页面去，例：'/pages/home/index'
     */
    LandTransfer.prototype.run = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            var scene, rest, params, _a, _b, _c, _d, _e, path, query, error_1;
            return __generator(this, function (_f) {
                switch (_f.label) {
                    case 0:
                        _f.trys.push([0, 4, , 5]);
                        scene = options.scene, rest = __rest(options, ["scene"]);
                        params = { query: __assign({}, rest) };
                        if (!scene) return [3 /*break*/, 3];
                        if (!!this.convertSceneParams) return [3 /*break*/, 1];
                        logger_1.default.warn('缺少 convertSceneParams 函数，无法解析 scene =', scene);
                        return [3 /*break*/, 3];
                    case 1:
                        _a = params;
                        _c = (_b = Object).assign;
                        _d = [{},
                            params.query];
                        return [4 /*yield*/, this.convertSceneParams(scene)];
                    case 2:
                        _a.query = _c.apply(_b, _d.concat([_f.sent()]));
                        _f.label = 3;
                    case 3:
                        _e = params === null || params === void 0 ? void 0 : params.query, path = _e.path, query = __rest(_e, ["path"]);
                        if (!path)
                            throw new Error('path invalid');
                        return [2 /*return*/, this.doGotoPage(path, query)];
                    case 4:
                        error_1 = _f.sent();
                        logger_1.default.error('跳转失败', error_1);
                        throw error_1;
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    return LandTransfer;
}());
exports.LandTransfer = LandTransfer;
function landTransferDecorator(landTransferParams) {
    return function transfer(_target, propertyName, descriptor) {
        if (propertyName !== 'onLoad') {
            throw new Error('landTransferDecorator only work on "onLoad"');
        }
        var landTransfer = new LandTransfer(landTransferParams);
        var originMethod = descriptor.value;
        descriptor.value = function onLoad(options) {
            return __awaiter(this, void 0, void 0, function () {
                var error_2;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, landTransfer.run(options)];
                        case 1:
                            _a.sent();
                            return [3 /*break*/, 3];
                        case 2:
                            error_2 = _a.sent();
                            logger_1.default.error(error_2);
                            return [3 /*break*/, 3];
                        case 3: 
                        // 调用原来的方法
                        return [2 /*return*/, originMethod.call(this, options)];
                    }
                });
            });
        };
    };
}
exports.landTransferDecorator = landTransferDecorator;
exports.default = LandTransfer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFuZC10cmFuc2Zlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9saWIvbGFuZC10cmFuc2Zlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsaURBQWlEO0FBQ2pELDhDQUE4QztBQUM5Qyx1REFBdUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdkQsb0RBQThCO0FBQzlCLDBEQUFzRDtBQWlCdEQ7SUFLRSxzQkFBWSxNQUFnQztRQUFoQyx1QkFBQSxFQUFBLFdBQWdDO1FBQzFDLElBQUksTUFBTSxDQUFDLGtCQUFrQjtZQUMzQixJQUFJLENBQUMsa0JBQWtCLEdBQUcsTUFBTSxDQUFDLGtCQUFrQixDQUFDO1FBQ3RELElBQUksTUFBTSxDQUFDLFFBQVE7WUFBRSxJQUFJLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUM7UUFDckQsSUFBSSxNQUFNLENBQUMsTUFBTTtZQUFFLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQztJQUNqRCxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNLLGlDQUFVLEdBQWxCLFVBQW1CLElBQUksRUFBRSxLQUFLO1FBQzVCLElBQUksSUFBSSxDQUFDLFFBQVE7WUFBRSxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ3JELElBQUksSUFBSSxDQUFDLE1BQU07WUFBRSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztRQUMxRCxPQUFPLG1CQUFTLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDVSwwQkFBRyxHQUFoQixVQUFpQixPQUEyQzs7Ozs7Ozt3QkFFaEQsS0FBSyxHQUFjLE9BQU8sTUFBckIsRUFBSyxJQUFJLFVBQUssT0FBTyxFQUE1QixTQUFrQixDQUFGLENBQWE7d0JBQzdCLE1BQU0sR0FBRyxFQUFFLEtBQUssZUFBTyxJQUFJLENBQUUsRUFBRSxDQUFDOzZCQUdsQyxLQUFLLEVBQUwsd0JBQUs7NkJBQ0gsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLEVBQXhCLHdCQUF3Qjt3QkFDMUIsZ0JBQU0sQ0FBQyxJQUFJLENBQUMsdUNBQXVDLEVBQUUsS0FBSyxDQUFDLENBQUM7Ozt3QkFFNUQsS0FBQSxNQUFNLENBQUE7d0JBQVMsS0FBQSxDQUFBLEtBQUEsTUFBTSxDQUFBLENBQUMsTUFBTSxDQUFBOzhCQUMxQixFQUFFOzRCQUNGLE1BQU0sQ0FBQyxLQUFLO3dCQUNaLHFCQUFNLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLENBQUMsRUFBQTs7d0JBSHRDLEdBQU8sS0FBSyxHQUFHLHdCQUdiLFNBQW9DLEdBQ3JDLENBQUM7Ozt3QkFJQSxLQUFxQixNQUFNLGFBQU4sTUFBTSx1QkFBTixNQUFNLENBQUUsS0FBSyxFQUFoQyxJQUFJLFVBQUEsRUFBSyxLQUFLLGNBQWhCLFFBQWtCLENBQUYsQ0FBbUI7d0JBQ3pDLElBQUksQ0FBQyxJQUFJOzRCQUFFLE1BQU0sSUFBSSxLQUFLLENBQUMsY0FBYyxDQUFDLENBQUM7d0JBRTNDLHNCQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxFQUFDOzs7d0JBRXBDLGdCQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxPQUFLLENBQUMsQ0FBQzt3QkFDNUIsTUFBTSxPQUFLLENBQUM7Ozs7O0tBRWY7SUFDSCxtQkFBQztBQUFELENBQUMsQUF4REQsSUF3REM7QUF4RFksb0NBQVk7QUEwRHpCLFNBQWdCLHFCQUFxQixDQUNuQyxrQkFBdUM7SUFFdkMsT0FBTyxTQUFTLFFBQVEsQ0FDdEIsT0FBWSxFQUNaLFlBQW9CLEVBQ3BCLFVBQWU7UUFFZixJQUFJLFlBQVksS0FBSyxRQUFRLEVBQUU7WUFDN0IsTUFBTSxJQUFJLEtBQUssQ0FBQyw2Q0FBNkMsQ0FBQyxDQUFDO1NBQ2hFO1FBRUQsSUFBTSxZQUFZLEdBQUcsSUFBSSxZQUFZLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUUxRCxJQUFNLFlBQVksR0FBRyxVQUFVLENBQUMsS0FBSyxDQUFDO1FBRXRDLFVBQVUsQ0FBQyxLQUFLLEdBQUcsU0FBZSxNQUFNLENBQUMsT0FBWTs7Ozs7Ozs0QkFHakQscUJBQU0sWUFBWSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsRUFBQTs7NEJBQS9CLFNBQStCLENBQUM7Ozs7NEJBRWhDLGdCQUFNLENBQUMsS0FBSyxDQUFDLE9BQUssQ0FBQyxDQUFDOzs7d0JBR3RCLFVBQVU7d0JBQ1Ysc0JBQU8sWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLEVBQUM7Ozs7U0FDekMsQ0FBQztJQUNKLENBQUMsQ0FBQztBQUNKLENBQUM7QUE1QkQsc0RBNEJDO0FBRUQsa0JBQWUsWUFBWSxDQUFDIn0=