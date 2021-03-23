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
