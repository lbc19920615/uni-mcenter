"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
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
Object.defineProperty(exports, "__esModule", { value: true });
var ava_1 = __importStar(require("ava"));
var land_transfer_1 = require("../lib/land-transfer");
var router_1 = require("../lib/router");
var wx_page_mock_1 = require("./wx-page-mock");
var wx_route_mock_1 = require("./wx-route-mock");
var pages = [new wx_page_mock_1.Page({ route: '/pages/home/index' }), new wx_page_mock_1.Page()];
ava_1.before(function () {
    global.wx = wx_route_mock_1.callAsSuccess;
    global.getCurrentPages = function () { return pages; };
});
ava_1.after(function () {
    global.getCurrentPages = undefined;
    global.wx = undefined;
});
ava_1.default.serial('LandTransfer quick usage', function (t) { return __awaiter(void 0, void 0, void 0, function () {
    var landTransfer, options, result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                landTransfer = new land_transfer_1.LandTransfer();
                options = { path: pages[0].route, name: 'jc' };
                return [4 /*yield*/, landTransfer.run(options)];
            case 1:
                result = _a.sent();
                t.is(result === null || result === void 0 ? void 0 : result.url, options.path + "?name=" + options.name);
                return [2 /*return*/];
        }
    });
}); });
ava_1.default.serial('LandTransfer set Router instance', function (t) { return __awaiter(void 0, void 0, void 0, function () {
    var router, landTransfer, routeStr, options, result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                router = new router_1.Router();
                landTransfer = new land_transfer_1.LandTransfer({ router: router });
                routeStr = pages[0].route;
                router.register({
                    route: routeStr,
                    path: '/home',
                });
                options = { path: '/home', name: 'jc' };
                return [4 /*yield*/, landTransfer.run(options)];
            case 1:
                result = _a.sent();
                t.is(result === null || result === void 0 ? void 0 : result.url, routeStr + "?name=" + options.name);
                return [2 /*return*/];
        }
    });
}); });
ava_1.default.serial('LandTransfer set gotoPage', function (t) { return __awaiter(void 0, void 0, void 0, function () {
    var options, landTransfer;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                options = { path: '/home', name: 'jc' };
                landTransfer = new land_transfer_1.LandTransfer({
                    gotoPage: function (path, query) {
                        t.is(path, options.path);
                        t.deepEqual(query, { name: options.name });
                        return Promise.resolve();
                    },
                });
                return [4 /*yield*/, landTransfer.run(options)];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
ava_1.default.serial('LandTransfer on short params mode as fail', function (t) { return __awaiter(void 0, void 0, void 0, function () {
    var scene, contentObj, routeUrl, landTransfer, page, error;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                scene = 'ABCDEFG';
                contentObj = { name: 'jc', age: 18 };
                routeUrl = '/pages/home/index';
                landTransfer = new land_transfer_1.LandTransfer({
                    convertSceneParams: function (sceneSp) { return __awaiter(void 0, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            t.is(sceneSp, scene);
                            return [2 /*return*/, contentObj];
                        });
                    }); },
                });
                page = new wx_page_mock_1.Page({
                    route: routeUrl,
                    onLoad: function (options) {
                        return landTransfer.run(options).then(function (data) {
                            t.deepEqual(data, contentObj);
                        });
                    },
                });
                return [4 /*yield*/, t.throwsAsync(page.onLoad({ scene: scene }))];
            case 1:
                error = _a.sent();
                t.is(error.message, 'path invalid');
                return [2 /*return*/];
        }
    });
}); });
ava_1.default.serial('LandTransfer on short params mode as warn', function (t) { return __awaiter(void 0, void 0, void 0, function () {
    var routeUrl, scene, landTransfer, page, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                routeUrl = '/pages/home/index';
                scene = 'ABCDEFG';
                landTransfer = new land_transfer_1.LandTransfer();
                page = new wx_page_mock_1.Page({
                    route: routeUrl,
                    onLoad: function (options) { return landTransfer.run(options); },
                });
                return [4 /*yield*/, page.onLoad({ scene: scene, path: routeUrl })];
            case 1:
                data = _a.sent();
                t.deepEqual(data, {
                    url: routeUrl,
                    whoami: 'navigateTo',
                });
                return [2 /*return*/];
        }
    });
}); });
ava_1.default.serial('LandTransfer on short params mode as success', function (t) { return __awaiter(void 0, void 0, void 0, function () {
    var routeUrl, scene, contentObj, landTransfer, page, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                routeUrl = '/pages/home/index';
                scene = 'ABCDEFG';
                contentObj = { name: 'jc', age: 18, path: routeUrl };
                landTransfer = new land_transfer_1.LandTransfer({
                    convertSceneParams: function (sceneSp) { return __awaiter(void 0, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            t.is(sceneSp, scene);
                            return [2 /*return*/, contentObj];
                        });
                    }); },
                });
                page = new wx_page_mock_1.Page({
                    route: routeUrl,
                    onLoad: function (options) { return landTransfer.run(options); },
                });
                return [4 /*yield*/, page.onLoad({ scene: scene })];
            case 1:
                data = _a.sent();
                t.deepEqual(data, {
                    url: routeUrl + "?name=" + contentObj.name + "&age=" + contentObj.age,
                    whoami: 'navigateTo',
                });
                return [2 /*return*/];
        }
    });
}); });
ava_1.default.serial('LandTransfer on short params mode with decorator', function (t) { return __awaiter(void 0, void 0, void 0, function () {
    var routeUrl, scene, contentObj, MyPage, myPage, page, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                routeUrl = '/pages/home/index';
                scene = 'ABCDEFG';
                contentObj = { name: 'jc', age: 18, path: routeUrl };
                MyPage = /** @class */ (function () {
                    function MyPage() {
                    }
                    MyPage.prototype.onLoad = function (options) {
                        return Promise.resolve(options);
                    };
                    __decorate([
                        land_transfer_1.landTransferDecorator({
                            convertSceneParams: function (sceneSp) { return __awaiter(void 0, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    t.is(sceneSp, scene);
                                    return [2 /*return*/, contentObj];
                                });
                            }); },
                        })
                    ], MyPage.prototype, "onLoad", null);
                    return MyPage;
                }());
                myPage = new MyPage();
                page = new wx_page_mock_1.Page({
                    route: routeUrl,
                    onLoad: function (options) { return myPage.onLoad(options); },
                });
                return [4 /*yield*/, page.onLoad({ scene: scene })];
            case 1:
                data = _a.sent();
                t.deepEqual(data, { scene: scene });
                return [2 /*return*/];
        }
    });
}); });
ava_1.default.serial('LandTransfer on short params mode with decorator on fail with not onLoad', function (t) { return __awaiter(void 0, void 0, void 0, function () {
    var routeUrl, scene, contentObj, MyPage;
    return __generator(this, function (_a) {
        routeUrl = '/pages/home/index';
        scene = 'ABCDEFG';
        contentObj = { name: 'jc', age: 18, path: routeUrl };
        try {
            MyPage = /** @class */ (function () {
                function MyPage() {
                }
                MyPage.prototype.onShow = function (options) {
                    return Promise.resolve(options);
                };
                __decorate([
                    land_transfer_1.landTransferDecorator({
                        convertSceneParams: function (sceneSp) { return __awaiter(void 0, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                t.is(sceneSp, scene);
                                return [2 /*return*/, contentObj];
                            });
                        }); },
                    })
                ], MyPage.prototype, "onShow", null);
                return MyPage;
            }());
            new MyPage();
        }
        catch (error) {
            t.is(error.message, 'landTransferDecorator only work on "onLoad"');
        }
        return [2 /*return*/];
    });
}); });
ava_1.default.serial('LandTransfer on short params mode with decorator, go ahead while navigator error', function (t) { return __awaiter(void 0, void 0, void 0, function () {
    var originWx, routeUrl, scene, contentObj, MyPage, myPage, page, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                originWx = global.wx;
                global.wx = wx_route_mock_1.callAsFail;
                routeUrl = '/pages/home/index';
                scene = 'ABCDEFG';
                contentObj = { name: 'jc', age: 18, path: routeUrl };
                MyPage = /** @class */ (function () {
                    function MyPage() {
                    }
                    MyPage.prototype.onLoad = function (options) {
                        return Promise.resolve(options);
                    };
                    __decorate([
                        land_transfer_1.landTransferDecorator({
                            convertSceneParams: function (sceneSp) { return __awaiter(void 0, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    t.is(sceneSp, scene);
                                    return [2 /*return*/, contentObj];
                                });
                            }); },
                        })
                    ], MyPage.prototype, "onLoad", null);
                    return MyPage;
                }());
                myPage = new MyPage();
                page = new wx_page_mock_1.Page({
                    route: routeUrl,
                    onLoad: function (options) { return myPage.onLoad(options); },
                });
                return [4 /*yield*/, page.onLoad({ scene: scene })];
            case 1:
                data = _a.sent();
                t.deepEqual(data, { scene: scene });
                global.wx = originWx;
                return [2 /*return*/];
        }
    });
}); });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFuZC10cmFuc2Zlci5zcGVjLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3Rlc3QvbGFuZC10cmFuc2Zlci5zcGVjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHlDQUEwQztBQUUxQyxzREFBMkU7QUFDM0Usd0NBQXVDO0FBRXZDLCtDQUFzQztBQUN0QyxpREFBNEQ7QUFFNUQsSUFBTSxLQUFLLEdBQUcsQ0FBQyxJQUFJLG1CQUFJLENBQUMsRUFBRSxLQUFLLEVBQUUsbUJBQW1CLEVBQUUsQ0FBQyxFQUFFLElBQUksbUJBQUksRUFBRSxDQUFDLENBQUM7QUFFckUsWUFBTSxDQUFDO0lBQ0wsTUFBTSxDQUFDLEVBQUUsR0FBRyw2QkFBYSxDQUFDO0lBQzFCLE1BQU0sQ0FBQyxlQUFlLEdBQUcsY0FBTSxPQUFBLEtBQUssRUFBTCxDQUFLLENBQUM7QUFDdkMsQ0FBQyxDQUFDLENBQUM7QUFFSCxXQUFLLENBQUM7SUFDSixNQUFNLENBQUMsZUFBZSxHQUFHLFNBQVMsQ0FBQztJQUNuQyxNQUFNLENBQUMsRUFBRSxHQUFHLFNBQVMsQ0FBQztBQUN4QixDQUFDLENBQUMsQ0FBQztBQUVILGFBQUksQ0FBQyxNQUFNLENBQUMsMEJBQTBCLEVBQUUsVUFBTyxDQUFDOzs7OztnQkFDeEMsWUFBWSxHQUFHLElBQUksNEJBQVksRUFBRSxDQUFDO2dCQUNsQyxPQUFPLEdBQUcsRUFBRSxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLENBQUM7Z0JBQ2pDLHFCQUFNLFlBQVksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLEVBQUE7O2dCQUE3QyxNQUFNLEdBQVEsU0FBK0I7Z0JBRW5ELENBQUMsQ0FBQyxFQUFFLENBQUMsTUFBTSxhQUFOLE1BQU0s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