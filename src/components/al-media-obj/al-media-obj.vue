<template>
	<view class="al-media-obj">
	  <image class="al-media-obj-img" :src="src"></image>
	  <view class="al-media-obj-body">
		<view class="al-media-obj-header"><slot name="header"></slot></view>
		<view class="al-media-obj-content"><slot name="content"></slot></view>
	  </view>
	</view>
</template>

<script>
	/**
	 * @doc https://css-tricks.com/media-object-bunch-ways/
	 */
	export default {
		props: {
			src: String,
		}
	}
</script>

<style lang="scss">
	.al-media-obj {
	  display: flex;
	  align-items: flex-start;
	  &-body {
		 flex: 1;
	  }
	}
</style>
