// import { mapGetters } from 'vuex'
import SafeArea from "@/components/safe-area/safe-area";

export let pageMixin = {
	components: {
		SafeArea,
	},
	data() {
		return {
			pageSkin: uni.getSystemInfoSync().theme
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
		 * 设置主题
		 * @param v
		 */
		_pageSetTheme(v = '') {
			this.$store.dispatch('app/SetTheme', v)
		}
	}
}
