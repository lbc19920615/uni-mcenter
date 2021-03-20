import { mapGetters } from 'vuex'
import SafeArea from "@/components/safe-area/safe-area";

export let pageMixin = {
	components: {
		SafeArea,
	},
	data() {
		return {
			PAGE_THEME_LIGHT: 'light',
			PAGE_THEME_DARK: 'dark',
		}
	},
	computed: {
		...mapGetters([
			'appTheme',
		])
	},
	methods: {
		/**
		 * 设置主题
		 * @param v
		 */
		pageSetTheme(v = '') {
			if (v === this.PAGE_THEME_LIGHT || v  === this.PAGE_THEME_DARK) {
				this.$store.dispatch('app/SetTheme', v)
				console.log('set theme')
			}
		}
	}
}
