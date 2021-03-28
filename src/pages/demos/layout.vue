<style lang="scss">
.page-layout-con {
	.header {
		font-size: 36rpx;
		margin: 20rpx 0;
		font-weight: bold;
	}
	.text {
		font-size: 28rpx;
	}
	.exp-row {
		> view {
			// width: 30rpx;
			// height: 20rpx;
			background-color: #eee;
		}
	}
  .gr-layout {
    display: grid;
    grid-template-columns: repeat(2,1fr);
    grid-auto-rows: 120rpx;
    grid-gap: 20rpx;
  }

  .gr-layout--first-big {
    .gr-layout__item:first-child {
      grid-row-start: 1;
      grid-row-end: 3;
    }
  }
}


</style>

<template>
	<app-page class="page-layout-con">
		<view class="header" >uni grid</view>
		<!-- 一般用法 -->
		<uni-grid :column="3">
		    <uni-grid-item>
		        <text class="text">文本</text>
		    </uni-grid-item>
		    <uni-grid-item>
		        <text class="text">文本</text>
		    </uni-grid-item>
		    <uni-grid-item>
		        <text class="text">文本</text>
		    </uni-grid-item>
			<uni-grid-item>
			    <text class="text">文本</text>
			</uni-grid-item>
			<uni-grid-item>
			    <text class="text">文本</text>
			</uni-grid-item>
			<uni-grid-item>
			    <text class="text">文本</text>
			</uni-grid-item>
		</uni-grid>

		<view class="header" >css grid</view>

		<div class="css-ib-grid css-ib-grid--column-3">
			<div class="css-ib-grid-item">
			   <text class="text">文本</text>
			</div>
			<div class="css-ib-grid-item">
			   <text class="text">文本</text>
			</div>
			<div class="css-ib-grid-item">
			   <text class="text">文本</text>
			</div>
			<div class="css-ib-grid-item">
			   <text class="text">文本</text>
			</div>
			<div class="css-ib-grid-item">
			   <text class="text">文本</text>
			</div>
			<div class="css-ib-grid-item">
			   <text class="text">文本</text>
			</div>
		</div>

		<view class="header" >flexbox</view>
		<view class="ui-vcenter-row exp-row">
			<view>1</view>
			<view style="width: 120rpx; padding: 10rpx; margin-left: 10rpx;">2</view>
		</view>

    <view class="header">grid layout</view>
    <div class="gr-layout gr-layout--first-big">
      <div class="gr-layout__item">1</div>
      <div class="gr-layout__item">2</div>
      <div class="gr-layout__item">3</div>
      <div class="gr-layout__item">4</div>
      <div class="gr-layout__item">5</div>
      <div class="gr-layout__item">6</div>
      <div class="gr-layout__item">7</div>
    </div>
	</app-page>
</template>

<script>
	export default {
		data() {
			return {
			};
		}
	}
</script>


