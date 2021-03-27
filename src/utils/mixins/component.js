export let commonHooksMixin = {
	created() {
		// #ifdef H5
		if (this.comReady) {
			this.comReady()
		}
		// #endif
	},
	onReady() {
		// #ifndef H5
		if (this.comReady) {
			this.comReady()
		}
		// #endif
	},
}
