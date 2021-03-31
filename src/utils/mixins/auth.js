import { AUTH_STEP } from "@/components/al-auth/var";

export let authLoginMixin = {
	data() {
		return {
			AUTH_STEP
		}
	},
	methods: {
		onGetPhoneSuccess(e) {
			console.log('onGetPhoneSuccess', e);
		}
	}
}

export let authSettingMixin = {
	methods: {
		isAuthorizeSetting(scope, cb) {
			let self = this;
			let scopeName = 'scope.' + scope
			wx.getSetting({
				success(res) {
					if (!res.authSetting[scopeName]) {
						wx.authorize({
							scope: scopeName,
							success() {
								if (typeof cb == "function") {
									cb(res)
								}
							},
							fail(e) {
								if (typeof cb == "function") {
									cb(e)
								}
							}
						})
					} else {
						if (typeof cb == "function") {
							cb()
						}
					}
				}
			})
		}
	}
}
