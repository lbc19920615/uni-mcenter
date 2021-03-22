export default class RouteMatcher {
    private keys;
    regex: any;
    route: any;
    constructor(path: any, route: any);
    match(path: string): {
        route: any;
        params: {};
    };
}
