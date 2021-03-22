"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var ava_1 = __importDefault(require("ava"));
var route_matcher_1 = __importDefault(require("../lib/route-matcher"));
ava_1.default('RouteMatcher', function (t) {
    var testCases = [
        {
            path: '/user/:id',
            route: '/pages/user/index',
            url: '/user/123',
            exceptQuery: { id: '123' },
        },
        {
            path: '/user/:name/:age',
            route: '/pages/user/index',
            url: '/user/jerryc/18',
            exceptQuery: { name: 'jerryc', age: '18' },
        },
    ];
    testCases.forEach(function (testCase) {
        var matcher = new route_matcher_1.default(testCase.path, testCase.route);
        var result = matcher.match(testCase.url);
        t.is(result.route, testCase.route);
        t.deepEqual(result.params, testCase.exceptQuery);
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUtbWF0Y2hlci5zcGVjLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3Rlc3Qvcm91dGUtbWF0Y2hlci5zcGVjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsNENBQXVCO0FBRXZCLHVFQUFnRDtBQUVoRCxhQUFJLENBQUMsY0FBYyxFQUFFLFVBQUMsQ0FBQztJQUNyQixJQUFNLFNBQVMsR0FBRztRQUNoQjtZQUNFLElBQUksRUFBRSxXQUFXO1lBQ2pCLEtBQUssRUFBRSxtQkFBbUI7WUFDMUIsR0FBRyxFQUFFLFdBQVc7WUFDaEIsV0FBVyxFQUFFLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRTtTQUMzQjtRQUNEO1lBQ0UsSUFBSSxFQUFFLGtCQUFrQjtZQUN4QixLQUFLLEVBQUUsbUJBQW1CO1lBQzFCLEdBQUcsRUFBRSxpQkFBaUI7WUFDdEIsV0FBVyxFQUFFLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFO1NBQzNDO0tBQ0YsQ0FBQztJQUVGLFNBQVMsQ0FBQyxPQUFPLENBQUMsVUFBQyxRQUFRO1FBQ3pCLElBQU0sT0FBTyxHQUFHLElBQUksdUJBQVksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNoRSxJQUFNLE1BQU0sR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUMzQyxDQUFDLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ25DLENBQUMsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDbkQsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDLENBQUMsQ0FBQyJ9