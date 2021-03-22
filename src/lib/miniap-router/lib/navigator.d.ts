/// <reference types="wechat-miniprogram" />
export declare function getTopLib(): WechatMiniprogram.Wx;
export interface CommonParams {
    path: string | {
        path: string;
        type: PathType;
    };
    query?: any;
}
export declare enum PathType {
    NORMAL = "normal",
    TAB = "tab"
}
export declare class Navigator {
    private isClick;
    private maxDeep;
    gotoPage(...arg: [CommonParams['path'], CommonParams['query']]): Promise<any>;
    /**
     * navigateTo
     * @param path 小程序页面真实路径
     * @param query 页面参数
     * @param options.events 页面间通信接口，用于监听被打开页面发送到当前页面的数据。
     */
    navigateTo(path: CommonParams['path'], query?: CommonParams['query'], options?: {
        events: any;
    }): Promise<any>;
    /**
     * switchTab
     * @param path 小程序页面真实路径
     * @param query 页面参数
     */
    switchTab(path: CommonParams['path'], query?: CommonParams['query']): Promise<unknown>;
    /**
     * redirectTo
     * @param path 小程序页面真实路径
     * @param query 页面参数
     */
    redirectTo(path: CommonParams['path'], query?: CommonParams['query']): Promise<unknown>;
    /**
     * navigateBack
     * @param query.delta 返回的页面数，如果 delta 大于现有页面数，则返回到首页。
     * @param option.setData 植入目标页面 data 的数据。
     */
    navigateBack(query: {
        delta: number;
    }, option?: {
        setData: Record<string, unknown>;
    }): Promise<unknown>;
    private findPageInHistory;
    private checkIsClick;
}
export declare const navigator: Navigator;
export default navigator;
