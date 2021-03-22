import { CommonParams } from './navigator';
import Router from './router';
export interface LandTransferOptions {
    convertSceneParams?: (sceneSp: string) => Promise<object>;
    gotoPage?: (path: CommonParams['path'], query: CommonParams['query']) => Promise<any>;
    router?: Router;
}
export declare class LandTransfer {
    private convertSceneParams;
    private router;
    private gotoPage;
    constructor(params?: LandTransferOptions);
    /**
     * 跳转引擎
     * @param path
     * @param query
     */
    private doGotoPage;
    /**
     * 启动，跳转到目标页面。
     * 参数优先级：scene > path
     * @param options.scene 短链参数，会用 this.convertSceneParams 解析成 object
     * @param options.path 目标路径，会跳转到目标页面去，例：'/pages/home/index'
     */
    run(options: Record<string, string | undefined>): Promise<any>;
}
export declare function landTransferDecorator(landTransferParams: LandTransferOptions): any;
export default LandTransfer;
