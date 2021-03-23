import Vue from 'vue'
import App from './App'

import store from './store/index'

Vue.config.productionTip = false

import utils from '@/plugins/vue/utils.js'
Vue.use(utils)

import wxTabbarMixin from 'utils/mixins/wxTabbar.js'
Vue.mixin(wxTabbarMixin)

import AppPage from '@/components/app-page/app-page';
Vue.component('app-page', AppPage);

App.mpType = 'app'

const app = new Vue({
  ...App,
	store
})
app.$mount()

