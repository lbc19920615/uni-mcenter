export declare class Route<QueryType> {
    private routeUrl;
    constructor({ routeUrl }: {
        routeUrl: any;
    });
    go(query: QueryType): Promise<any>;
    navigateTo(query: QueryType): Promise<any>;
    redirectTo(query: QueryType): Promise<unknown>;
    switchTab(query: QueryType): Promise<unknown>;
}
export default Route;
