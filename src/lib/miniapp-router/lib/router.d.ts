import { CommonParams } from './navigator';
export interface RegisterOption {
    route: string;
    path?: string;
}
export declare class Router {
    private routes;
    private routeMatchers;
    register<QueryType>(option: RegisterOption): void;
    batchRegister(options: any): void;
    getRoutes(): {};
    private matchRoute;
    gotoPage(pathOrRoute: CommonParams['path'], query: CommonParams['query']): Promise<any>;
    navigateTo(pathOrRoute: CommonParams['path'], query: CommonParams['query']): Promise<any>;
    switchTab(pathOrRoute: CommonParams['path'], query: CommonParams['query']): Promise<unknown>;
    redirectTo(pathOrRoute: CommonParams['path'], query: CommonParams['query']): Promise<unknown>;
    navigateBack(query: {
        delta: number;
    }, option?: {
        setData: Record<string, unknown>;
    }): Promise<unknown>;
}
export default Router;
