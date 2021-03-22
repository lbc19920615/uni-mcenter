"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.callAsFail = exports.callAsSuccess = void 0;
exports.callAsSuccess = {
    navigateTo: function (_a) {
        var url = _a.url, success = _a.success;
        return setTimeout(function () {
            success({ url: url, whoami: 'navigateTo' });
        }, 500);
    },
    switchTab: function (_a) {
        var url = _a.url, success = _a.success;
        return setTimeout(function () {
            success({ url: url, whoami: 'switchTab' });
        }, 500);
    },
    redirectTo: function (_a) {
        var url = _a.url, success = _a.success;
        return setTimeout(function () {
            success({ url: url, whoami: 'redirectTo' });
        }, 500);
    },
    navigateBack: function (_a) {
        var delta = _a.delta, success = _a.success;
        return setTimeout(function () {
            success({ delta: delta, whoami: 'navigateBack' });
        }, 500);
    },
};
exports.callAsFail = {
    navigateTo: function (_a) {
        var url = _a.url, fail = _a.fail;
        return setTimeout(function () {
            fail({ url: url, whoami: 'navigateTo' });
        }, 500);
    },
    switchTab: function (_a) {
        var url = _a.url, fail = _a.fail;
        return setTimeout(function () {
            fail({ url: url, whoami: 'switchTab' });
        }, 500);
    },
    redirectTo: function (_a) {
        var url = _a.url, fail = _a.fail;
        return setTimeout(function () {
            fail({ url: url, whoami: 'redirectTo' });
        }, 500);
    },
    navigateBack: function (_a) {
        var delta = _a.delta, fail = _a.fail;
        return setTimeout(function () {
            fail({ delta: delta, whoami: 'navigateBack' });
        }, 500);
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid3gtcm91dGUtbW9jay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90ZXN0L3d4LXJvdXRlLW1vY2sudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQWEsUUFBQSxhQUFhLEdBQUc7SUFDM0IsVUFBVSxFQUFFLFVBQUMsRUFBZ0I7WUFBZCxHQUFHLFNBQUEsRUFBRSxPQUFPLGFBQUE7UUFDekIsT0FBQSxVQUFVLENBQUM7WUFDVCxPQUFPLENBQUMsRUFBRSxHQUFHLEtBQUEsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLENBQUMsQ0FBQztRQUN6QyxDQUFDLEVBQUUsR0FBRyxDQUFDO0lBRlAsQ0FFTztJQUNULFNBQVMsRUFBRSxVQUFDLEVBQWdCO1lBQWQsR0FBRyxTQUFBLEVBQUUsT0FBTyxhQUFBO1FBQ3hCLE9BQUEsVUFBVSxDQUFDO1lBQ1QsT0FBTyxDQUFDLEVBQUUsR0FBRyxLQUFBLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxDQUFDLENBQUM7UUFDeEMsQ0FBQyxFQUFFLEdBQUcsQ0FBQztJQUZQLENBRU87SUFDVCxVQUFVLEVBQUUsVUFBQyxFQUFnQjtZQUFkLEdBQUcsU0FBQSxFQUFFLE9BQU8sYUFBQTtRQUN6QixPQUFBLFVBQVUsQ0FBQztZQUNULE9BQU8sQ0FBQyxFQUFFLEdBQUcsS0FBQSxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsQ0FBQyxDQUFDO1FBQ3pDLENBQUMsRUFBRSxHQUFHLENBQUM7SUFGUCxDQUVPO0lBQ1QsWUFBWSxFQUFFLFVBQUMsRUFBa0I7WUFBaEIsS0FBSyxXQUFBLEVBQUUsT0FBTyxhQUFBO1FBQzdCLE9BQUEsVUFBVSxDQUFDO1lBQ1QsT0FBTyxDQUFDLEVBQUUsS0FBSyxPQUFBLEVBQUUsTUFBTSxFQUFFLGNBQWMsRUFBRSxDQUFDLENBQUM7UUFDN0MsQ0FBQyxFQUFFLEdBQUcsQ0FBQztJQUZQLENBRU87Q0FDVixDQUFDO0FBRVcsUUFBQSxVQUFVLEdBQUc7SUFDeEIsVUFBVSxFQUFFLFVBQUMsRUFBYTtZQUFYLEdBQUcsU0FBQSxFQUFFLElBQUksVUFBQTtRQUN0QixPQUFBLFVBQVUsQ0FBQztZQUNULElBQUksQ0FBQyxFQUFFLEdBQUcsS0FBQSxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsQ0FBQyxDQUFDO1FBQ3RDLENBQUMsRUFBRSxHQUFHLENBQUM7SUFGUCxDQUVPO0lBQ1QsU0FBUyxFQUFFLFVBQUMsRUFBYTtZQUFYLEdBQUcsU0FBQSxFQUFFLElBQUksVUFBQTtRQUNyQixPQUFBLFVBQVUsQ0FBQztZQUNULElBQUksQ0FBQyxFQUFFLEdBQUcsS0FBQSxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsQ0FBQyxDQUFDO1FBQ3JDLENBQUMsRUFBRSxHQUFHLENBQUM7SUFGUCxDQUVPO0lBQ1QsVUFBVSxFQUFFLFVBQUMsRUFBYTtZQUFYLEdBQUcsU0FBQSxFQUFFLElBQUksVUFBQTtRQUN0QixPQUFBLFVBQVUsQ0FBQztZQUNULElBQUksQ0FBQyxFQUFFLEdBQUcsS0FBQSxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsQ0FBQyxDQUFDO1FBQ3RDLENBQUMsRUFBRSxHQUFHLENBQUM7SUFGUCxDQUVPO0lBQ1QsWUFBWSxFQUFFLFVBQUMsRUFBZTtZQUFiLEtBQUssV0FBQSxFQUFFLElBQUksVUFBQTtRQUMxQixPQUFBLFVBQVUsQ0FBQztZQUNULElBQUksQ0FBQyxFQUFFLEtBQUssT0FBQSxFQUFFLE1BQU0sRUFBRSxjQUFjLEVBQUUsQ0FBQyxDQUFDO1FBQzFDLENBQUMsRUFBRSxHQUFHLENBQUM7SUFGUCxDQUVPO0NBQ1YsQ0FBQyJ9