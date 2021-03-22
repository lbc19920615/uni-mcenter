"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Route = void 0;
var navigator_1 = __importDefault(require("./navigator"));
var Route = /** @class */ (function () {
    function Route(_a) {
        var routeUrl = _a.routeUrl;
        this.routeUrl = routeUrl;
    }
    Route.prototype.go = function (query) {
        return navigator_1.default.gotoPage(this.routeUrl, query);
    };
    Route.prototype.navigateTo = function (query) {
        return navigator_1.default.navigateTo(this.routeUrl, query);
    };
    Route.prototype.redirectTo = function (query) {
        return navigator_1.default.redirectTo(this.routeUrl, query);
    };
    Route.prototype.switchTab = function (query) {
        return navigator_1.default.switchTab(this.routeUrl, query);
    };
    return Route;
}());
exports.Route = Route;
exports.default = Route;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbGliL3JvdXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLDBEQUFvQztBQUVwQztJQUdFLGVBQVksRUFBWTtZQUFWLFFBQVEsY0FBQTtRQUNwQixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztJQUMzQixDQUFDO0lBRU0sa0JBQUUsR0FBVCxVQUFVLEtBQWdCO1FBQ3hCLE9BQU8sbUJBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBRU0sMEJBQVUsR0FBakIsVUFBa0IsS0FBZ0I7UUFDaEMsT0FBTyxtQkFBUyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ3BELENBQUM7SUFFTSwwQkFBVSxHQUFqQixVQUFrQixLQUFnQjtRQUNoQyxPQUFPLG1CQUFTLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDcEQsQ0FBQztJQUVNLHlCQUFTLEdBQWhCLFVBQWlCLEtBQWdCO1FBQy9CLE9BQU8sbUJBQVMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUNuRCxDQUFDO0lBQ0gsWUFBQztBQUFELENBQUMsQUF0QkQsSUFzQkM7QUF0Qlksc0JBQUs7QUF3QmxCLGtCQUFlLEtBQUssQ0FBQyJ9