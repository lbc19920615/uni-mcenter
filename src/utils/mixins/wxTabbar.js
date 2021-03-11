

/**
 * 全局tabbar的mixin 小程序用
 * @module utils/mixins
 */

export default {
	/**
	 * @mixin
	 */
	methods:{
		/**
		 * 设置tabbar的index
		 * @param { Number } index - index
		 */
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
