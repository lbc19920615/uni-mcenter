<template>
	<view class="safe-area">
		<slot></slot>
	</view>
</template>

<script>
	export default {
		name:"safe-area",
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">

:host {
	display: block;
	height: 100%;
}
	
.safe-area {
	padding: 100rpx 0;
	box-sizing: border-box;	
}
</style>
