<template>
  <view class="submit-bar">
    <view class="ui-flex ui-items-center submit-bar-inner">
		<view class="submit-bar__content">
			<text style="margin-left: 10rpx;">11212</text>
		</view>
		<view class="ui-flex ui-items-center ui-justify-center submit-bar__action">{{getButtonText}}</view>
	</view>
  </view>
</template>

<script>
export default {
  name: "submit-bar",
  data() {
	  return {
		  getButtonText: ''
	  }
  },
  created() {
	  this.render()
  },
  methods: {
	  render() {
		  this.getButtonText = '立即购买'
	  }
  }
}
</script>

<style lang="scss">
.submit-bar {
  position: fixed;
  width: 100%;
  bottom: 0;
  background-color: var(--color-gray-200);
  color: #fff;
  padding-bottom: var(--safe-area-inset-bottom);
  &-inner {
    height: 100%;
  }
  &__content {
	  flex: 1;
	  box-sizing: border-box;
  }
  &__action {
	  width: 240rpx;
	  height: 100%;
	  line-height: 1;
	  background-color: #6993ff;
  }
}
</style>
