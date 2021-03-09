import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

import utils from '@/plugins/vue/utils.js'
Vue.use(utils)

import wxTabbarMixin from 'utils/mixins/wxTabbar.js'
Vue.mixin(wxTabbarMixin)

App.mpType = 'app'

const app = new Vue({
  ...App
})
app.$mount()
