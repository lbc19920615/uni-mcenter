<template>
<!-- 	<view id="container" style="height: 250px; background-color: #E0E0E0;">
		<view style="height: 100px; background-color: #FFFF99;"></view>
		<uni-sticky :container="container" offset-top="64">
			<button size="mini" type="primary" style="margin-left: 215px; background-color: #ff976a">指定容器</button>
		</uni-sticky>
	</view> -->
	<view class="page container" id="container">
		<view class="placeholder" id="placeholder">
			<button @click="goToBack" style="width: 150upx; margin: 0; margin-top: 60upx;">返回</button>
		</view>
		<scroll-view id="scrollView" scroll-y="true"
		:refresher-triggered="triggered"
		 :refresher-threshold="100"
		 refresher-background="lightgreen"
		 @scroll="onScroll"
		 @refresherrefresh="onRefresh"
		 @refresherrestore="onRestore"
		 @scrolltolower="onScrollToLower"
		refresher-enabled="true" >
			<view style="height: 3000upx; background-color: #E0E0E0;">
				<div style=" background-color: #FFFF99;">
					<view id="upHeight"  style="height: 300upx;"></view>
<liuyuno-tabs
		 class="tab"
		 :tabData="tabs" :defaultIndex="0"  />
				</div>
			</view>
		</scroll-view>
		<view class="fixed-tabbar" v-show="showFixed">
			<button size="mini" type="primary"
			style="background-color: #ff976a">指定容器在tab消失时出现</button>
		</view>
	</view>
</template>

<script>
	import XaberUniSticky from '@/components/xaber-uni-sticky/xaber-uni-sticky.vue'

	let fixedTabbarMixin = {
		data() {
			return {
				showFixed: false,
				showHeight: null,
				showLater: 10,
			}
		},
		mounted() {
			let upHeight = uni.createSelectorQuery().select('#upHeight')
			this.getContainerRect(upHeight).then((rect) => {
				this.showHeight = rect.height
			})
		},
		methods: {
			getContainerRect(nodesRef) {
			    return new Promise(((resolve) => nodesRef.boundingClientRect(resolve).exec()));
			},
			detectScrollViewScroll(e) {
				const {scrollLeft, scrollTop, scrollHeight, scrollWidth, deltaX, deltaY} = e.detail
				// console.log(scrollTop)
				if (this.showHeight !== null) {
					let pointh = this.showHeight + this.showLater
					if (scrollTop > pointh) {
						this.showFixed = true
					} else {
						this.showFixed = false
					}
				}
			}
		}
	}

	let tabsMixin = {
		data() {
			return {
				tabs: [
					{
						name: '首页'
					},
					{
						name: '测试1'
					},
					{
						name: '测试2'
					},
					{
						name: '测试3'
					},
					{
						name: '测试4'
					},
					{
						name: '测试5'
					},
					{
						name: '测试6'
					},
				],
			}
		},
		methods: {
			goToBack() {
				uni.navigateBack({

				})
			}
		}
	}

	export default {
		mixins: [
			fixedTabbarMixin,
			tabsMixin,
		],
		components: {
			XaberUniSticky,
		},
		data() {
			return {
				 triggered: false,
				 _freshing: false,
				 container: () => uni.createSelectorQuery().select('#placeholder')
			}
		},
        onLoad() {
            this._freshing = false;
            setTimeout(() => {
                this.triggered = true;
            }, 1000)
        },
		methods: {
			onScroll(e) {
				this.detectScrollViewScroll(e);
			},
			onRefresh() {
				if (this._freshing) return;
				this._freshing = true;
				if (!this.triggered)//界面下拉触发，triggered可能不是true，要设为true
					this.triggered = true;
				setTimeout(() => {
					this.triggered = false;//触发onRestore，并关闭刷新图标
					this._freshing = false;
				}, 1000)
			},
		   onRestore() {
				this.triggered = 'restore'; // 需要重置
				console.log("onRestore");
			},
			onScrollToLower() {
				console.log('onScrollToLower')
			}
		}
	}
</script>

<style lang="scss">
@import "../../styles/alh";

page {
  height: 100%;
}


$placeholderHeight: 180upx;
$tabHeight: 100upx;

.container {
  font-size: 14px;
  line-height: 24px;
  height: 100%;

  .tab {
	  height: $tabHeight;
  }
}

.placeholder {
	height: $placeholderHeight;
}

#scrollView {
	height: calc(100% - #{$placeholderHeight});
}

.fixed-tabbar {
	position: fixed;
	left: 0;
	width: 100%;
	top: $placeholderHeight;
}
</style>
