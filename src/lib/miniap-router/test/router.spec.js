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
var ava_1 = __importDefault(require("ava"));
var rewiremock_1 = __importDefault(require("rewiremock"));
var Router = rewiremock_1.default.proxy('../lib/router', {
    navigator: {
        gotoPage: function (pathOrRoute, query) { return ({ pathOrRoute: pathOrRoute, query: query }); },
    },
}).Router;
ava_1.default.before(function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        global.getCurrentPages = function () { return []; };
        rewiremock_1.default.enable();
        return [2 /*return*/];
    });
}); });
ava_1.default('Router', function (t) {
    var router = new Router();
    var routesOption = [
        { path: '/home', route: '/pages/home/index' },
        { path: '/user/:id', route: '/pages/user/index' },
        { path: '/:type/:id', route: '/pages/common/index' },
    ];
    router.batchRegister(routesOption);
    var result1 = router.gotoPage('/home', { name: 'jc' });
    t.is(result1.pathOrRoute, routesOption[0].route);
    t.deepEqual(result1.query, { name: 'jc' });
    var result2 = router.gotoPage('/user/123', { name: 'jc' });
    t.is(result2.pathOrRoute, routesOption[1].route);
    t.deepEqual(result2.query, { name: 'jc', id: '123' });
    var result3 = router.gotoPage('/goods/123', { name: 'jc' });
    t.is(result3.pathOrRoute, routesOption[2].route);
    t.deepEqual(result3.query, { name: 'jc', id: '123', type: 'goods' });
    var routes = router.getRoutes();
    t.truthy(routes.pages.home);
    var result4 = routes.pages.home.go({ name: 'jc' });
    t.is(result4.pathOrRoute, routesOption[0].route);
    t.deepEqual(result4.query, { name: 'jc' });
});
ava_1.default.after(function () {
    rewiremock_1.default.disable();
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGVyLnNwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvdGVzdC9yb3V0ZXIuc3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDRDQUF1QjtBQUN2QiwwREFBb0M7QUFFNUIsSUFBQSxNQUFNLEdBQUssb0JBQVUsQ0FBQyxLQUFLLENBQUMsZUFBZSxFQUFFO0lBQ25ELFNBQVMsRUFBRTtRQUNULFFBQVEsRUFBRSxVQUFDLFdBQVcsRUFBRSxLQUFLLElBQUssT0FBQSxDQUFDLEVBQUUsV0FBVyxhQUFBLEVBQUUsS0FBSyxPQUFBLEVBQUUsQ0FBQyxFQUF4QixDQUF3QjtLQUMzRDtDQUNGLENBQUMsT0FKWSxDQUlYO0FBRUgsYUFBSSxDQUFDLE1BQU0sQ0FBQzs7UUFDVixNQUFNLENBQUMsZUFBZSxHQUFHLGNBQU0sT0FBQSxFQUFFLEVBQUYsQ0FBRSxDQUFDO1FBQ2xDLG9CQUFVLENBQUMsTUFBTSxFQUFFLENBQUM7OztLQUNyQixDQUFDLENBQUM7QUFFSCxhQUFJLENBQUMsUUFBUSxFQUFFLFVBQUMsQ0FBQztJQUNmLElBQU0sTUFBTSxHQUFHLElBQUksTUFBTSxFQUFFLENBQUM7SUFFNUIsSUFBTSxZQUFZLEdBQUc7UUFDbkIsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxtQkFBbUIsRUFBRTtRQUM3QyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLG1CQUFtQixFQUFFO1FBQ2pELEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUscUJBQXFCLEVBQUU7S0FDckQsQ0FBQztJQUVGLE1BQU0sQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLENBQUM7SUFFbkMsSUFBTSxPQUFPLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztJQUN6RCxDQUFDLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2pELENBQUMsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBRTNDLElBQU0sT0FBTyxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsV0FBVyxFQUFFLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7SUFDN0QsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNqRCxDQUFDLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO0lBRXRELElBQU0sT0FBTyxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsWUFBWSxFQUFFLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7SUFDOUQsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNqRCxDQUFDLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUM7SUFFckUsSUFBTSxNQUFNLEdBQUcsTUFBTSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBRWxDLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUU1QixJQUFNLE9BQU8sR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztJQUVyRCxDQUFDLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2pELENBQUMsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0FBQzdDLENBQUMsQ0FBQyxDQUFDO0FBRUgsYUFBSSxDQUFDLEtBQUssQ0FBQztJQUNULG9CQUFVLENBQUMsT0FBTyxFQUFFLENBQUM7QUFDdkIsQ0FBQyxDQUFDLENBQUMifQ==