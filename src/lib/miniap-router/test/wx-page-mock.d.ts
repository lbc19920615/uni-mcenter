export declare class Page {
    route: string;
    onLoad: (options: any) => any;
    data: {};
    setData(data: any): void;
    constructor({ route, onLoad }?: any);
}
