import LibRouter from "@/lib/router";
let router = new LibRouter({
	homePage: '' // 首页的page路由
});

router.beforeEach((to, from, next) => {
  console.log('to', to)
  next();
})

import { Router, Navigator } from "@/lib/miniapp-router/index"

Navigator.setLib(router);

// console.log(Navigator.getLib())

// 创建路由实例
const aliasRouter = new Router();

// 注册路由
// router.register({
//   path: '/goods/:id', // 虚拟路由
//   route: '/pages/goods/index', // 真实路由
// });

export const routesConfig = [
    { path: '/home', route: '/pages/index/index' },
		{ path: '/mime', route: '/pages/mime/index' },
    // { path: '/pageA', route: '/pages/pageA/index' },
    // { path: '/pageB', route: '/pages/pageB/index' },
    // { path: '/pageC/:name', route: '/pages/pageC/index' },
]

aliasRouter.batchRegister(routesConfig);

// // 跳转到 /pages/goods/index，参数: onLoad(options) 的 options = { id: '123' }
// aliasRouter.gotoPage('/goods/123');

// // 跳转到 /pages/goods/index，参数: onLoad(options) 的 options = { id: '456' }
// aliasRouter.gotoPage('/goods/456');

export {
	router,
	aliasRouter
}
