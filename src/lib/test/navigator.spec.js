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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var ava_1 = __importDefault(require("ava"));
var navigator_1 = __importStar(require("../lib/navigator"));
var wx_page_mock_1 = require("./wx-page-mock");
var wx_route_mock_1 = require("./wx-route-mock");
ava_1.default.serial('gotoPage', function (t) { return __awaiter(void 0, void 0, void 0, function () {
    var pages, url, query, expectUrl, result, result, result, myUrl, myExpectUrl, result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                global.wx = wx_route_mock_1.callAsSuccess;
                pages = [new wx_page_mock_1.Page(), new wx_page_mock_1.Page()];
                global.getCurrentPages = function () { return pages; };
                url = '/pages/user/index';
                query = { name: 'jc' };
                expectUrl = url + "?name=" + query.name;
                return [4 /*yield*/, navigator_1.default.gotoPage({ path: url, type: navigator_1.PathType.TAB }, query)];
            case 1:
                result = _a.sent();
                t.is(result === null || result === void 0 ? void 0 : result.url, expectUrl);
                t.is(result === null || result === void 0 ? void 0 : result.whoami, 'switchTab');
                return [4 /*yield*/, navigator_1.default.gotoPage(url, query)];
            case 2:
                result = _a.sent();
                t.is(result === null || result === void 0 ? void 0 : result.url, expectUrl);
                t.is(result === null || result === void 0 ? void 0 : result.whoami, 'navigateTo');
                pages.push(new wx_page_mock_1.Page({ route: url }));
                Array(7)
                    .fill('')
                    .forEach(function () { return pages.push(new wx_page_mock_1.Page()); });
                return [4 /*yield*/, navigator_1.default.gotoPage(url, query)];
            case 3:
                result = _a.sent();
                t.is(result === null || result === void 0 ? void 0 : result.delta, 7);
                t.is(result === null || result === void 0 ? void 0 : result.whoami, 'navigateBack');
                myUrl = '/pages/goods/index';
                myExpectUrl = myUrl + "?name=" + query.name;
                return [4 /*yield*/, navigator_1.default.gotoPage(myUrl, query)];
            case 4:
                result = _a.sent();
                t.is(result === null || result === void 0 ? void 0 : result.url, myExpectUrl);
                t.is(result === null || result === void 0 ? void 0 : result.whoami, 'redirectTo');
                global.wx = undefined;
                global.getCurrentPages = undefined;
                return [2 /*return*/];
        }
    });
}); });
ava_1.default.serial('wx api as success', function (t) { return __awaiter(void 0, void 0, void 0, function () {
    var url, query, expectUrl, result, result, result, pages_1, delta, setData, result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                global.wx = wx_route_mock_1.callAsSuccess;
                url = '/pages/user/index';
                query = { name: 'jc' };
                expectUrl = url + "?name=" + query.name;
                return [4 /*yield*/, navigator_1.default.navigateTo(url, query)];
            case 1:
                result = _a.sent();
                t.is(result === null || result === void 0 ? void 0 : result.url, expectUrl);
                return [4 /*yield*/, navigator_1.default.redirectTo(url, query)];
            case 2:
                result = _a.sent();
                t.is(result === null || result === void 0 ? void 0 : result.url, expectUrl);
                return [4 /*yield*/, navigator_1.default.switchTab(url, query)];
            case 3:
                result = _a.sent();
                t.is(result === null || result === void 0 ? void 0 : result.url, expectUrl);
                pages_1 = [new wx_page_mock_1.Page(), new wx_page_mock_1.Page()];
                global.getCurrentPages = function () { return pages_1; };
                delta = 1;
                setData = { name: 'jc' };
                return [4 /*yield*/, navigator_1.default.navigateBack({ delta: delta }, { setData: setData })];
            case 4:
                result = _a.sent();
                t.is(result === null || result === void 0 ? void 0 : result.delta, delta);
                t.is(pages_1[0].data, setData);
                global.getCurrentPages = undefined;
                global.wx = undefined;
                return [2 /*return*/];
        }
    });
}); });
ava_1.default.serial('wx api as fail', function (t) { return __awaiter(void 0, void 0, void 0, function () {
    var url, query, expectUrl, pages_2, delta_1, setData_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                global.wx = wx_route_mock_1.callAsFail;
                url = '/pages/user/index';
                query = { name: 'jc' };
                expectUrl = url + "?name=" + query.name;
                return [4 /*yield*/, navigator_1.default
                        .navigateTo(url, query)
                        .catch(function (error) { return t.is(error === null || error === void 0 ? void 0 : error.url, expectUrl); })];
            case 1:
                _a.sent();
                return [4 /*yield*/, navigator_1.default
                        .redirectTo(url, query)
                        .catch(function (error) { return t.is(error === null || error === void 0 ? void 0 : error.url, expectUrl); })];
            case 2:
                _a.sent();
                return [4 /*yield*/, navigator_1.default
                        .switchTab(url, query)
                        .catch(function (error) { return t.is(error === null || error === void 0 ? void 0 : error.url, expectUrl); })];
            case 3:
                _a.sent();
                pages_2 = [new wx_page_mock_1.Page(), new wx_page_mock_1.Page()];
                global.getCurrentPages = function () { return pages_2; };
                delta_1 = 1;
                setData_1 = { name: 'jc' };
                return [4 /*yield*/, navigator_1.default.navigateBack({ delta: delta_1 }, { setData: setData_1 }).catch(function (error) {
                        t.is(error === null || error === void 0 ? void 0 : error.delta, delta_1);
                        t.is(pages_2[0].data, setData_1);
                    })];
            case 4:
                _a.sent();
                global.getCurrentPages = undefined;
                global.wx = undefined;
                return [2 /*return*/];
        }
    });
}); });
ava_1.default('locked while concurrent', function (t) { return __awaiter(void 0, void 0, void 0, function () {
    var url, error;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                global.wx = wx_route_mock_1.callAsSuccess;
                url = '/pages/user/index';
                navigator_1.default.navigateTo(url);
                return [4 /*yield*/, t.throwsAsync(navigator_1.default.navigateTo(url))];
            case 1:
                error = _a.sent();
                t.is(error.message, 'req locked');
                global.wx = undefined;
                return [2 /*return*/];
        }
    });
}); });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2aWdhdG9yLnNwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvdGVzdC9uYXZpZ2F0b3Iuc3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw0Q0FBdUI7QUFFdkIsNERBQXVEO0FBRXZELCtDQUFzQztBQUN0QyxpREFBNEQ7QUFFNUQsYUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUUsVUFBTyxDQUFDOzs7OztnQkFDOUIsTUFBTSxDQUFDLEVBQUUsR0FBRyw2QkFBYSxDQUFDO2dCQUVwQixLQUFLLEdBQUcsQ0FBQyxJQUFJLG1CQUFJLEVBQUUsRUFBRSxJQUFJLG1CQUFJLEVBQUUsQ0FBQyxDQUFDO2dCQUN2QyxNQUFNLENBQUMsZUFBZSxHQUFHLGNBQU0sT0FBQSxLQUFLLEVBQUwsQ0FBSyxDQUFDO2dCQUUvQixHQUFHLEdBQUcsbUJBQW1CLENBQUM7Z0JBQzFCLEtBQUssR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQztnQkFDdkIsU0FBUyxHQUFNLEdBQUcsY0FBUyxLQUFLLENBQUMsSUFBTSxDQUFDO2dCQUd4QixxQkFBTSxtQkFBUyxDQUFDLFFBQVEsQ0FDMUMsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxvQkFBUSxDQUFDLEdBQUcsRUFBRSxFQUNqQyxLQUFLLENBQ04sRUFBQTs7Z0JBSEssTUFBTSxHQUFRLFNBR25CO2dCQUNELENBQUMsQ0FBQyxFQUFFLENBQUMsTUFBTSxhQUFOLE1BQU0sdUJBQU4sTUFBTSxDQUFFLEdBQUcsRUFBRSxTQUFTLENBQUMsQ0FBQztnQkFDN0IsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxNQUFNLGFBQU4sTUFBTSx1QkFBTixNQUFNLENBQUUsTUFBTSxFQUFFLFdBQVcsQ0FBQyxDQUFDO2dCQUlkLHFCQUFNLG1CQUFTLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsRUFBQTs7Z0JBQWxELE1BQU0sR0FBUSxTQUFvQztnQkFDeEQsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxNQUFNLGFBQU4sTUFBTSx1QkFBTixNQUFNLENBQUUsR0FBRyxFQUFFLFNBQVMsQ0FBQyxDQUFDO2dCQUM3QixDQUFDLENBQUMsRUFBRSxDQUFDLE1BQU0sYUFBTixNQUFNLHVCQUFOLE1BQU0sQ0FBRSxNQUFNLEVBQUUsWUFBWSxDQUFDLENBQUM7Z0JBSW5DLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxtQkFBSSxDQUFDLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDckMsS0FBSyxDQUFDLENBQUMsQ0FBQztxQkFDTCxJQUFJLENBQUMsRUFBRSxDQUFDO3FCQUNSLE9BQU8sQ0FBQyxjQUFNLE9BQUEsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLG1CQUFJLEVBQUUsQ0FBQyxFQUF0QixDQUFzQixDQUFDLENBQUM7Z0JBQ3JCLHFCQUFNLG1CQUFTLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsRUFBQTs7Z0JBQWxELE1BQU0sR0FBUSxTQUFvQztnQkFDeEQsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxNQUFNLGFBQU4sTUFBTSx1QkFBTixNQUFNLENBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUN2QixDQUFDLENBQUMsRUFBRSxDQUFDLE1BQU0sYUFBTixNQUFNLHVCQUFOLE1BQU0sQ0FBRSxNQUFNLEVBQUUsY0FBYyxDQUFDLENBQUM7Z0JBSS9CLEtBQUssR0FBRyxvQkFBb0IsQ0FBQztnQkFDN0IsV0FBVyxHQUFNLEtBQUssY0FBUyxLQUFLLENBQUMsSUFBTSxDQUFDO2dCQUU5QixxQkFBTSxtQkFBUyxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLEVBQUE7O2dCQUFwRCxNQUFNLEdBQVEsU0FBc0M7Z0JBQzFELENBQUMsQ0FBQyxFQUFFLENBQUMsTUFBTSxhQUFOLE1BQU0sdUJBQU4sTUFBTSxDQUFFLEdBQUcsRUFBRSxXQUFXLENBQUMsQ0FBQztnQkFDL0IsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxNQUFNLGFBQU4sTUFBTSx1QkFBTixNQUFNLENBQUUsTUFBTSxFQUFFLFlBQVksQ0FBQyxDQUFDO2dCQUdyQyxNQUFNLENBQUMsRUFBRSxHQUFHLFNBQVMsQ0FBQztnQkFDdEIsTUFBTSxDQUFDLGVBQWUsR0FBRyxTQUFTLENBQUM7Ozs7S0FDcEMsQ0FBQyxDQUFDO0FBRUgsYUFBSSxDQUFDLE1BQU0sQ0FBQyxtQkFBbUIsRUFBRSxVQUFPLENBQUM7Ozs7O2dCQUN2QyxNQUFNLENBQUMsRUFBRSxHQUFHLDZCQUFhLENBQUM7Z0JBRXBCLEdBQUcsR0FBRyxtQkFBbUIsQ0FBQztnQkFDMUIsS0FBSyxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxDQUFDO2dCQUN2QixTQUFTLEdBQU0sR0FBRyxjQUFTLEtBQUssQ0FBQyxJQUFNLENBQUM7Z0JBR3hCLHFCQUFNLG1CQUFTLENBQUMsVUFBVSxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsRUFBQTs7Z0JBQXBELE1BQU0sR0FBUSxTQUFzQztnQkFDMUQsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxNQUFNLGFBQU4sTUFBTSx1QkFBTixNQUFNLENBQUUsR0FBRyxFQUFFLFNBQVMsQ0FBQyxDQUFDO2dCQUlULHFCQUFNLG1CQUFTLENBQUMsVUFBVSxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsRUFBQTs7Z0JBQXBELE1BQU0sR0FBUSxTQUFzQztnQkFDMUQsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxNQUFNLGFBQU4sTUFBTSx1QkFBTixNQUFNLENBQUUsR0FBRyxFQUFFLFNBQVMsQ0FBQyxDQUFDO2dCQUlULHFCQUFNLG1CQUFTLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsRUFBQTs7Z0JBQW5ELE1BQU0sR0FBUSxTQUFxQztnQkFDekQsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxNQUFNLGFBQU4sTUFBTSx1QkFBTixNQUFNLENBQUUsR0FBRyxFQUFFLFNBQVMsQ0FBQyxDQUFDO2dCQUl2QixVQUFRLENBQUMsSUFBSSxtQkFBSSxFQUFFLEVBQUUsSUFBSSxtQkFBSSxFQUFFLENBQUMsQ0FBQztnQkFDdkMsTUFBTSxDQUFDLGVBQWUsR0FBRyxjQUFNLE9BQUEsT0FBSyxFQUFMLENBQUssQ0FBQztnQkFFL0IsS0FBSyxHQUFHLENBQUMsQ0FBQztnQkFDVixPQUFPLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLENBQUM7Z0JBQ1gscUJBQU0sbUJBQVMsQ0FBQyxZQUFZLENBQUMsRUFBRSxLQUFLLE9BQUEsRUFBRSxFQUFFLEVBQUUsT0FBTyxTQUFBLEVBQUUsQ0FBQyxFQUFBOztnQkFBbEUsTUFBTSxHQUFRLFNBQW9EO2dCQUV4RSxDQUFDLENBQUMsRUFBRSxDQUFDLE1BQU0sYUFBTixNQUFNLHVCQUFOLE1BQU0sQ0FBRSxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7Z0JBQzNCLENBQUMsQ0FBQyxFQUFFLENBQUMsT0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQztnQkFFN0IsTUFBTSxDQUFDLGVBQWUsR0FBRyxTQUFTLENBQUM7Z0JBR3JDLE1BQU0sQ0FBQyxFQUFFLEdBQUcsU0FBUyxDQUFDOzs7O0tBQ3ZCLENBQUMsQ0FBQztBQUVILGFBQUksQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLEVBQUUsVUFBTyxDQUFDOzs7OztnQkFDcEMsTUFBTSxDQUFDLEVBQUUsR0FBRywwQkFBVSxDQUFDO2dCQUVqQixHQUFHLEdBQUcsbUJBQW1CLENBQUM7Z0JBQzFCLEtBQUssR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQztnQkFDdkIsU0FBUyxHQUFNLEdBQUcsY0FBUyxLQUFLLENBQUMsSUFBTSxDQUFDO2dCQUc1QyxxQkFBTSxtQkFBUzt5QkFDWixVQUFVLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQzt5QkFDdEIsS0FBSyxDQUFDLFVBQUMsS0FBSyxJQUFLLE9BQUEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLGFBQUwsS0FBSyx1QkFBTCxLQUFLLENBQUUsR0FBRyxFQUFFLFNBQVMsQ0FBQyxFQUEzQixDQUEyQixDQUFDLEVBQUE7O2dCQUZoRCxTQUVnRCxDQUFDO2dCQUlqRCxxQkFBTSxtQkFBUzt5QkFDWixVQUFVLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQzt5QkFDdEIsS0FBSyxDQUFDLFVBQUMsS0FBSyxJQUFLLE9BQUEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLGFBQUwsS0FBSyx1QkFBTCxLQUFLLENBQUUsR0FBRyxFQUFFLFNBQVMsQ0FBQyxFQUEzQixDQUEyQixDQUFDLEVBQUE7O2dCQUZoRCxTQUVnRCxDQUFDO2dCQUlqRCxxQkFBTSxtQkFBUzt5QkFDWixTQUFTLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQzt5QkFDckIsS0FBSyxDQUFDLFVBQUMsS0FBSyxJQUFLLE9BQUEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLGFBQUwsS0FBSyx1QkFBTCxLQUFLLENBQUUsR0FBRyxFQUFFLFNBQVMsQ0FBQyxFQUEzQixDQUEyQixDQUFDLEVBQUE7O2dCQUZoRCxTQUVnRCxDQUFDO2dCQUkzQyxVQUFRLENBQUMsSUFBSSxtQkFBSSxFQUFFLEVBQUUsSUFBSSxtQkFBSSxFQUFFLENBQUMsQ0FBQztnQkFDdkMsTUFBTSxDQUFDLGVBQWUsR0FBRyxjQUFNLE9BQUEsT0FBSyxFQUFMLENBQUssQ0FBQztnQkFFL0IsVUFBUSxDQUFDLENBQUM7Z0JBQ1YsWUFBVSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQztnQkFDL0IscUJBQU0sbUJBQVMsQ0FBQyxZQUFZLENBQUMsRUFBRSxLQUFLLFNBQUEsRUFBRSxFQUFFLEVBQUUsT0FBTyxXQUFBLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFDLEtBQUs7d0JBQy9ELENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxhQUFMLEtBQUssdUJBQUwsS0FBSyxDQUFFLEtBQUssRUFBRSxPQUFLLENBQUMsQ0FBQzt3QkFDMUIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxPQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLFNBQU8sQ0FBQyxDQUFDO29CQUMvQixDQUFDLENBQUMsRUFBQTs7Z0JBSEYsU0FHRSxDQUFDO2dCQUVILE1BQU0sQ0FBQyxlQUFlLEdBQUcsU0FBUyxDQUFDO2dCQUdyQyxNQUFNLENBQUMsRUFBRSxHQUFHLFNBQVMsQ0FBQzs7OztLQUN2QixDQUFDLENBQUM7QUFFSCxhQUFJLENBQUMseUJBQXlCLEVBQUUsVUFBTyxDQUFDOzs7OztnQkFDdEMsTUFBTSxDQUFDLEVBQUUsR0FBRyw2QkFBYSxDQUFDO2dCQUNwQixHQUFHLEdBQUcsbUJBQW1CLENBQUM7Z0JBRzlCLG1CQUFTLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNaLHFCQUFNLENBQUMsQ0FBQyxXQUFXLENBQUMsbUJBQVMsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBQTs7Z0JBQXRELEtBQUssR0FBRyxTQUE4QztnQkFDNUQsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLFlBQVksQ0FBQyxDQUFDO2dCQUdwQyxNQUFNLENBQUMsRUFBRSxHQUFHLFNBQVMsQ0FBQzs7OztLQUN2QixDQUFDLENBQUMifQ==