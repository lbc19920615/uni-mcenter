<template>
	<view class="container">
		<drag-list-demo></drag-list-demo>
	</view>
</template>

<script>
	import DragListDemo from './components/DragListDemo.vue'

	export default {
		components: {
			DragListDemo
		},
		data() {
			return {}
		},
		onShow() {
			// #ifdef MP-WEIXIN
			this.setTabBarIndex(1)
			// #endif
		},
		methods: {

		}
	}
</script>

<style>
	.container {
		font-size: 14px;
		line-height: 24px;
	}
</style>
