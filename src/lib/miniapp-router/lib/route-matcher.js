"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var path_to_regexp_1 = require("path-to-regexp");
var RouteMatcher = /** @class */ (function () {
    function RouteMatcher(path, route) {
        this.keys = [];
        // 匹配正则
        this.regex = null;
        // 真实路径
        this.route = null;
        this.regex = path_to_regexp_1.pathToRegexp(path, this.keys);
        this.route = route;
    }
    RouteMatcher.prototype.match = function (path) {
        var result = path.match(this.regex);
        if (!result)
            return undefined;
        var route = this.route;
        var params = {};
        // 若存在路由参数，解释
        if (this.keys[0]) {
            this.keys.forEach(function (key, index) {
                params[key.name] = result[index + 1];
            });
        }
        return {
            route: route,
            params: params,
        };
    };
    return RouteMatcher;
}());
exports.default = RouteMatcher;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUtbWF0Y2hlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9saWIvcm91dGUtbWF0Y2hlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLGlEQUE4QztBQUU5QztJQVNFLHNCQUFZLElBQUksRUFBRSxLQUFLO1FBUmYsU0FBSSxHQUFHLEVBQUUsQ0FBQztRQUVsQixPQUFPO1FBQ0EsVUFBSyxHQUFHLElBQUksQ0FBQztRQUVwQixPQUFPO1FBQ0EsVUFBSyxHQUFHLElBQUksQ0FBQztRQUdsQixJQUFJLENBQUMsS0FBSyxHQUFHLDZCQUFZLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMzQyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztJQUNyQixDQUFDO0lBRUQsNEJBQUssR0FBTCxVQUFNLElBQVk7UUFDaEIsSUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDdEMsSUFBSSxDQUFDLE1BQU07WUFBRSxPQUFPLFNBQVMsQ0FBQztRQUU5QixJQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ3pCLElBQU0sTUFBTSxHQUFHLEVBQUUsQ0FBQztRQUVsQixhQUFhO1FBQ2IsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQ2hCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQUMsR0FBRyxFQUFFLEtBQUs7Z0JBQzNCLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsTUFBTSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQztZQUN2QyxDQUFDLENBQUMsQ0FBQztTQUNKO1FBRUQsT0FBTztZQUNMLEtBQUssT0FBQTtZQUNMLE1BQU0sUUFBQTtTQUNQLENBQUM7SUFDSixDQUFDO0lBQ0gsbUJBQUM7QUFBRCxDQUFDLEFBakNELElBaUNDIn0=