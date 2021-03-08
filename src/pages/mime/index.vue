<template>
	<view class="container">
		我的
	</view>
</template>

<script>	
	export default {
		data() {
			return {
				userInfo: {
					name: 'hello'
				}
			}
		},
		onShow() {
			// #ifdef MP-WEIXIN
			this.setTabBarIndex(1)
			// #endif
		}
	}
</script>

<style>
</style>
