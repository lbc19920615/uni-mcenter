// import { mapGetters } from 'vuex'
import SafeArea from "@/components/safe-area/safe-area";

function initTheme() {
	let v = uni.getSystemInfoSync().theme
	if (!v) {
		v = 'light'
	}
	return v
}

export let pageMixin = {
	components: {
		SafeArea,
	},
	data() {
		return {
			pageSkin: initTheme()
		}
	},
	onLoad() {

	},
	mounted() {
		let self = this
		uni.onThemeChange(function (res) {
		  // console.log(res.theme);
			self.pageSkin = res.theme
			self._pageSetTheme(res.theme)
		});
	},
	computed: {
		// ...mapGetters([
		// 	'appTheme',
		// ])
	},
	methods: {
		/**
		 * 获取主题
		 * @return {*}
		 * @private
		 */
		_pageGetTheme() {
			return initTheme()
		},
		/**
		 * 设置主题
		 * @param v
		 */
		_pageSetTheme(v = '') {
			this.$store.dispatch('app/SetTheme', v)
		}
	}
}
