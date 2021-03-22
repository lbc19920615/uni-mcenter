export declare const callAsSuccess: {
    navigateTo: ({ url, success }: {
        url: any;
        success: any;
    }) => number;
    switchTab: ({ url, success }: {
        url: any;
        success: any;
    }) => number;
    redirectTo: ({ url, success }: {
        url: any;
        success: any;
    }) => number;
    navigateBack: ({ delta, success }: {
        delta: any;
        success: any;
    }) => number;
};
export declare const callAsFail: {
    navigateTo: ({ url, fail }: {
        url: any;
        fail: any;
    }) => number;
    switchTab: ({ url, fail }: {
        url: any;
        fail: any;
    }) => number;
    redirectTo: ({ url, fail }: {
        url: any;
        fail: any;
    }) => number;
    navigateBack: ({ delta, fail }: {
        delta: any;
        fail: any;
    }) => number;
};
