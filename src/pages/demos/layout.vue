<style lang="scss">
.page-layout-con {
	.header {
		font-size: 36upx;
		margin: 20upx 0;
		font-weight: bold;
	}
	.text { 
		font-size: 28upx;
	}
	.exp-row {
		> view {
			// width: 30upx;
			// height: 20upx;
			background-color: #eee;
		}
	}
}


</style>

<template>
	<view class="page-layout-con">		
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
			<view style="width: 120upx; padding: 10upx; margin-left: 10upx;">2</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {				
			};
		}
	}
</script>


