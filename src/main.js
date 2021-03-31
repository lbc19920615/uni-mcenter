import Vue from 'vue'
import App from './App'
import {router,RouterMount} from './router.js'  //路径换成自己的

Vue.use(router)

import store from './store/index'

Vue.config.productionTip = false

import utils from '@/plugins/vue/utils.js'
Vue.use(utils)

import AppPage from '@/components/app-page/app-page';
Vue.component('app-page', AppPage);

App.mpType = 'app'

const app = new Vue({
  ...App,
	store
})
// app.$mount()

//v1.3.5起 H5端 你应该去除原有的app.$mount();使用路由自带的渲染方式
// #ifdef H5
	RouterMount(app, router, '#app')
// #endif

// #ifndef H5
	app.$mount(); //为了兼容小程序及app端必须这样写才有效果
// #endif

