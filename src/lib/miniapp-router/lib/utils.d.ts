export declare const setter: <ValueType>(obj: any, key: any, value: ValueType) => any;
export declare const obj2Params: (obj?: {}, encode?: boolean) => string;
/**
 * 将url后的参数string转成object
 * @param str - query部分参数，如：abc=foo&def=%5Basf%5D&xyz=5
 */
export declare const urlStrToObj: (str: string, urlDeocde?: boolean) => any;
