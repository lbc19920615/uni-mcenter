// import { mapGetters } from 'vuex'
import SafeArea from "@/components/safe-area/safe-area";
import shortUUID from "short-uuid";

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
		if (uni.onThemeChange) {
			uni.onThemeChange(function (res) {
			  // console.log(res.theme);
				self.pageSkin = res.theme
				self._pageSetTheme(res.theme)
			});
		}
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

export let webviewControlMixin = function (webviewUUID = '', callbackMethod = 'handleLinkTalk') {
	function gen(uuid) {
		if (!uuid) {
			return {
				webviewUUID: '',
				webviewCachedKey: '',
				webviewEventName: '',
			}
		} else {
			return {
				webviewUUID: uuid,
				webviewCachedKey: `webview-${uuid}-cached`,
				webviewEventName: 'webview-' + uuid
			}
		}
	}

	return {
		data() {
			return gen(webviewUUID)
		},
		methods: {
			webviewInit(uuid = shortUUID.generate()) {
				let {
					webviewUUID,
					webviewCachedKey,
					webviewEventName,
				} =  gen(uuid)
				this.webviewUUID = webviewUUID
				this.webviewCachedKey = webviewCachedKey
				this.webviewEventName = webviewEventName
			},
			webviewOnEvent() {
				let self = this
				uni.$on(self.webviewEventName, self[callbackMethod])
			},
			webviewOffEvent() {
				let self = this
				uni.$off(self.webviewEventName, self[callbackMethod])
			},
			webviewEmit(uuid, data = {}) {
				let self = this
				// console.log(self.webviewUUID)
				uni.$emit( 'webview-' +  uuid, {
					uuid: self.webviewUUID,
					data: data
				})
			}
		}
	}
}
