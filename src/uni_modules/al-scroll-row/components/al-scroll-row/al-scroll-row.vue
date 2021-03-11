<style>
	
	

	.scroll-bar {
	  background: #ffffff;
	}
	.scroll-bar__bg {
	  position: relative;
	  width: 86rpx;
	  height: 6rpx;
	  background: #d4d8dd;
	  border-radius: 5px;
	  margin: 0 auto;
	  overflow: hidden;
	}
	.scroll-bar__slide {
	  position: absolute;
	  top: 0;
	  left: 0;
	  height: 100%;
	  background: rgba(233, 89, 14, 1);
	  border-radius: 5px;
	}
</style>

<template>
	<view>
		<scroll-view
		class="al-scroll-row" 
		scroll-x="true" 
		scroll-with-animation="true" 
		:scroll-left="scrollLeft"
		@scroll="spikeScroll" 
		:show-scrollbar="false"
	
		>
			<view   
			:style="{width: getConStyle + 'rpx'}">
				<slot></slot>
			</view>
		</scroll-view>
		<!-- 滚动条区域 -->
		<view class="scroll-bar">
		    <view class="scroll-bar__bg">
		    <view class="scroll-bar__slide" 
			:style="{width: barW + 'rpx', left: percent + 'rpx'}"></view>
		    </view>
		</view>
	</view>
</template>

<script>
	function getRpx(v){ 
	       var winWidth = wx.getSystemInfoSync().windowWidth;
	        return winWidth * v / 750;
	 }
	
	
	const SCROLL_BAR_WIDTH = 86
	let WINDOW_WIDTH = 0
	
	export default {
		props: {
			itemWidth: {
				type: Number
			},
			items: {
				type: Array,
				default() {
					return []
				}
			}
		},
		data() {
			return {
				scrollLeft: 0,
				percent: 0,       //滚动条距离左边的距离
				barW: 0,          //滚动条的宽度
			}
		},
		computed: {
			getConStyle() {
				let w = this.itemWidth * this.items.length
				return w
			},
		},
		mounted() {
			
			WINDOW_WIDTH = uni.getSystemInfoSync().windowWidth
			this.countCatWidth()
		},
		methods: {
		/* 计算滚动区域的宽度 */
		  countCatWidth () {
			  //选择id
			  var that = this;
				// let sw = (that.itemWidth+5)*that.items.length+5
				let sw = getRpx(this.getConStyle)
				// console.log(sw)
				that.barW = (SCROLL_BAR_WIDTH /sw) * WINDOW_WIDTH
				// console.log(sw, that.barW)
		  },
		  //bindscroll事件
		  spikeScroll(e) {
			  // console.log(e.detail.scrollWidth)
			  let barW = (SCROLL_BAR_WIDTH /e.detail.scrollWidth) * WINDOW_WIDTH
			  this.barW = barW
			  let percent = (SCROLL_BAR_WIDTH /e.detail.scrollWidth)*e.detail.scrollLeft
			  if (percent > 90) {
				  percent = 100
			  }
			  this.percent = percent
		  },
			
		}
	}
</script>

