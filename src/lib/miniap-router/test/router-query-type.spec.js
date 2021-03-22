"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var ava_1 = __importDefault(require("ava"));
var route_1 = require("../lib/route");
ava_1.default.skip('QueryType', function () {
    var route = new route_1.Route({ routeUrl: '/pages/home/index' });
    route.go({ name: 'david' });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGVyLXF1ZXJ5LXR5cGUuc3BlYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90ZXN0L3JvdXRlci1xdWVyeS10eXBlLnNwZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSw0Q0FBdUI7QUFFdkIsc0NBQXFDO0FBRXJDLGFBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFO0lBS3JCLElBQU0sS0FBSyxHQUFHLElBQUksYUFBSyxDQUFZLEVBQUUsUUFBUSxFQUFFLG1CQUFtQixFQUFFLENBQUMsQ0FBQztJQUV0RSxLQUFLLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUM7QUFDOUIsQ0FBQyxDQUFDLENBQUMifQ==