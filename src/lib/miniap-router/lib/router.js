"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Router = void 0;
var logger_1 = __importDefault(require("./logger"));
var navigator_1 = __importDefault(require("./navigator"));
var route_1 = __importDefault(require("./route"));
var route_matcher_1 = __importDefault(require("./route-matcher"));
var utils_1 = require("./utils");
var Router = /** @class */ (function () {
    function Router() {
        this.routes = {};
        this.routeMatchers = [];
    }
    Router.prototype.register = function (option) {
        var tiers = option.route
            .replace(/^\//, '')
            .replace(/$\//, '')
            .split('/')
            .slice(0, -1)
            .join('.');
        utils_1.setter(this.routes, tiers, new route_1.default({ routeUrl: option.route }));
        if (option.path)
            this.routeMatchers.push(new route_matcher_1.default(option.path, option.route));
    };
    Router.prototype.batchRegister = function (options) {
        var _this = this;
        options.forEach(function (option) { return _this.register(option); });
    };
    Router.prototype.getRoutes = function () {
        return this.routes;
    };
    Router.prototype.matchRoute = function (pathOrRoute) {
        var _a, _b;
        var matchResult = this.routeMatchers
            .map(function (routeMatcher) { return routeMatcher.match(pathOrRoute); })
            .filter(function (result) { return !!result; });
        logger_1.default.debug('route match result:', { matchResult: matchResult, pathOrRoute: pathOrRoute });
        return {
            path: ((_a = matchResult[0]) === null || _a === void 0 ? void 0 : _a.route) || pathOrRoute,
            params: ((_b = matchResult[0]) === null || _b === void 0 ? void 0 : _b.params) || {},
        };
    };
    Router.prototype.gotoPage = function (pathOrRoute, query) {
        var _a = this.matchRoute(pathOrRoute), path = _a.path, params = _a.params;
        return navigator_1.default.gotoPage(path, Object.assign({}, params, query));
    };
    Router.prototype.navigateTo = function (pathOrRoute, query) {
        var _a = this.matchRoute(pathOrRoute), path = _a.path, params = _a.params;
        return navigator_1.default.navigateTo(path, Object.assign({}, params, query));
    };
    Router.prototype.switchTab = function (pathOrRoute, query) {
        var _a = this.matchRoute(pathOrRoute), path = _a.path, params = _a.params;
        return navigator_1.default.switchTab(path, Object.assign({}, params, query));
    };
    Router.prototype.redirectTo = function (pathOrRoute, query) {
        var _a = this.matchRoute(pathOrRoute), path = _a.path, params = _a.params;
        return navigator_1.default.redirectTo(path, Object.assign({}, params, query));
    };
    Router.prototype.navigateBack = function (query, option) {
        return navigator_1.default.navigateBack(query, option);
    };
    return Router;
}());
exports.Router = Router;
exports.default = Router;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2xpYi9yb3V0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsb0RBQThCO0FBQzlCLDBEQUFzRDtBQUN0RCxrREFBNEI7QUFDNUIsa0VBQTJDO0FBQzNDLGlDQUFpQztBQU9qQztJQUFBO1FBQ1UsV0FBTSxHQUFHLEVBQUUsQ0FBQztRQUNaLGtCQUFhLEdBQXdCLEVBQUUsQ0FBQztJQThFbEQsQ0FBQztJQTVFUSx5QkFBUSxHQUFmLFVBQTJCLE1BQXNCO1FBQy9DLElBQU0sS0FBSyxHQUFHLE1BQU0sQ0FBQyxLQUFLO2FBQ3ZCLE9BQU8sQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDO2FBQ2xCLE9BQU8sQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDO2FBQ2xCLEtBQUssQ0FBQyxHQUFHLENBQUM7YUFDVixLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO2FBQ1osSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRWIsY0FBTSxDQUNKLElBQUksQ0FBQyxNQUFNLEVBQ1gsS0FBSyxFQUNMLElBQUksZUFBSyxDQUFZLEVBQUUsUUFBUSxFQUFFLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUNqRCxDQUFDO1FBQ0YsSUFBSSxNQUFNLENBQUMsSUFBSTtZQUNiLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksdUJBQVksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQ3pFLENBQUM7SUFFTSw4QkFBYSxHQUFwQixVQUFxQixPQUFPO1FBQTVCLGlCQUVDO1FBREMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxVQUFDLE1BQU0sSUFBSyxPQUFBLEtBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEVBQXJCLENBQXFCLENBQUMsQ0FBQztJQUNyRCxDQUFDO0lBRU0sMEJBQVMsR0FB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