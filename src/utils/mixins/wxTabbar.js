export default {
	methods:{
		setTabBarIndex(index){
			// #ifdef MP-WEIXIN
			if (typeof this.$mp.page.getTabBar === 'function' &&
				this.$mp.page.getTabBar()) {
				this.$mp.page.getTabBar().setData({
					selected:index
				})
			}
			// #endif
		}
	}
}