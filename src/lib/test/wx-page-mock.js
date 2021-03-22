"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Page = void 0;
var Page = /** @class */ (function () {
    function Page(_a) {
        var _b = _a === void 0 ? {} : _a, route = _b.route, onLoad = _b.onLoad;
        this.data = {};
        if (route)
            this.route = route;
        if (onLoad)
            this.onLoad = onLoad;
    }
    Page.prototype.setData = function (data) {
        this.data = data;
    };
    return Page;
}());
exports.Page = Page;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid3gtcGFnZS1tb2NrLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3Rlc3Qvd3gtcGFnZS1tb2NrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBO0lBT0UsY0FBWSxFQUEyQjtZQUEzQixxQkFBeUIsRUFBRSxLQUFBLEVBQXpCLEtBQUssV0FBQSxFQUFFLE1BQU0sWUFBQTtRQUozQixTQUFJLEdBQUcsRUFBRSxDQUFDO1FBS1IsSUFBSSxLQUFLO1lBQUUsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDOUIsSUFBSSxNQUFNO1lBQUUsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7SUFDbkMsQ0FBQztJQU5ELHNCQUFPLEdBQVAsVUFBUSxJQUFJO1FBQ1YsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7SUFDbkIsQ0FBQztJQUtILFdBQUM7QUFBRCxDQUFDLEFBWEQsSUFXQztBQVhZLG9CQUFJIn0=