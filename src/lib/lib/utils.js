"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.urlStrToObj = exports.obj2Params = exports.setter = void 0;
var setter = function (obj, key, value) {
    var keys = key.split('.');
    var pres = keys.slice(0, -1);
    var last = keys[keys.length - 1];
    var deepObj = keys.length === 1
        ? obj
        : pres.reduce(function (curObj, curKey) {
            if (!curObj[curKey])
                curObj[curKey] = {};
            return curObj[curKey];
        }, obj);
    deepObj[last] = value;
    return obj;
};
exports.setter = setter;
var obj2Params = function (obj, encode) {
    if (obj === void 0) { obj = {}; }
    if (encode === void 0) { encode = false; }
    var result = [];
    Object.keys(obj).forEach(function (key) {
        return result.push(key + "=" + (encode ? encodeURIComponent(obj[key]) : obj[key]));
    });
    return result.join('&');
};
exports.obj2Params = obj2Params;
/**
 * 将url后的参数string转成object
 * @param str - query部分参数，如：abc=foo&def=%5Basf%5D&xyz=5
 */
var urlStrToObj = function (str, urlDeocde) {
    if (urlDeocde === void 0) { urlDeocde = false; }
    var cookedStr = urlDeocde ? decodeURIComponent(str) : str;
    cookedStr =
        '{"' +
            cookedStr.replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') +
            '"}';
    return JSON.parse(cookedStr);
};
exports.urlStrToObj = urlStrToObj;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbGliL3V0aWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFPLElBQU0sTUFBTSxHQUFHLFVBQVksR0FBRyxFQUFFLEdBQUcsRUFBRSxLQUFnQjtJQUMxRCxJQUFNLElBQUksR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzVCLElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDL0IsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDbkMsSUFBTSxPQUFPLEdBQ1gsSUFBSSxDQUFDLE1BQU0sS0FBSyxDQUFDO1FBQ2YsQ0FBQyxDQUFDLEdBQUc7UUFDTCxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFDLE1BQU0sRUFBRSxNQUFNO1lBQ3pCLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDO2dCQUFFLE1BQU0sQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLENBQUM7WUFDekMsT0FBTyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDeEIsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ2QsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLEtBQUssQ0FBQztJQUN0QixPQUFPLEdBQUcsQ0FBQztBQUNiLENBQUMsQ0FBQztBQWJXLFFBQUEsTUFBTSxVQWFqQjtBQUVLLElBQU0sVUFBVSxHQUFHLFVBQUMsR0FBUSxFQUFFLE1BQWM7SUFBeEIsb0JBQUEsRUFBQSxRQUFRO0lBQUUsdUJBQUEsRUFBQSxjQUFjO0lBQ2pELElBQU0sTUFBTSxHQUFhLEVBQUUsQ0FBQztJQUM1QixNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFDLEdBQUc7UUFDM0IsT0FBQSxNQUFNLENBQUMsSUFBSSxDQUFJLEdBQUcsVUFBSSxNQUFNLENBQUMsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUUsQ0FBQztJQUF6RSxDQUF5RSxDQUMxRSxDQUFDO0lBRUYsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQzFCLENBQUMsQ0FBQztBQVBXLFFBQUEsVUFBVSxjQU9yQjtBQUVGOzs7R0FHRztBQUNJLElBQU0sV0FBVyxHQUFHLFVBQUMsR0FBVyxFQUFFLFNBQWlCO0lBQWpCLDBCQUFBLEVBQUEsaUJBQWlCO0lBQ3hELElBQUksU0FBUyxHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUMsa0JBQWtCLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQztJQUUxRCxTQUFTO1FBQ1AsSUFBSTtZQUNKLFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxLQUFLLENBQUM7WUFDeEUsSUFBSSxDQUFDO0lBQ1AsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQy9CLENBQUMsQ0FBQztBQVJXLFFBQUEsV0FBVyxlQVF0QiJ9