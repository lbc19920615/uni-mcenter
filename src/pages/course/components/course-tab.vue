<template>
	<view class="tab-box">
		<view class="tab-item" :id="'tab-item-' + index" v-for="(item,index) in tabs" :key="index" v-on:click="tabClick" :data-index="index">
			{{item}}
		</view>
		<view :style="[{ left: market_left, width: market_width + 'px' }]" class="market-underline"></view>
	</view>
</template>

<script>
	export default {
	  name: 'course-tab',
		data() {
			return {
				market_left: 0,
				market_width: 0,
			}
		},
		props: {
			tabs: {
				type: Array,
				default: () => ["全部","待付款","待发货"]
			},
			currentActive: {
				type: Number,
				default: 0
			},
      lineWidth: {
			  type: Number,
        default: 30
      }
		},
		mounted(){
			uni.createSelectorQuery().in(this).select('#tab-item-'+ this.currentActive).boundingClientRect().exec((res)=>{
        if (Array.isArray(res) && res[0]) {
          this.market_left = this.getLeft(res[0].left, res[0].width) + 'px';
          this.market_width = this.getWidth();
        }
			});
		},
		methods: {
	    getWidth(v) {
	      return this.lineWidth
      },
      getLeft(left, width) {
	      let w = (width - this.lineWidth) / 2
	      return left +  w
      },
			tabClick(e){
				let target = e.target;
				this.activeAction(target);
				this.$emit('click-tab',{index: target.dataset.index})
			},
			activeAction(target){
				let index = Number(target.dataset.index);
				uni.createSelectorQuery().in(this).select('#tab-item-' + index).boundingClientRect().exec((res)=>{
					if (Array.isArray(res) && res[0]) {
            this.market_left = this.getLeft(res[0].width * index, res[0].width) + 'px';
            this.market_width = this.getWidth();
          }
				});
			}
		}
	}
</script>

<style lang="scss">
	.tab-box{
		position: relative;
		width: 100%;
		height: 98rpx;
		display: flex;
		z-index: 10;
		background-color: white;
		font-size: 28rpx;
		align-items: center;
		justify-content: space-around;
		color: #333333;
	}
	.tab-item{
		line-height: 98rpx;
		height: 100%;
		flex: 1;
		text-align: center;
	}
	.market-underline{
		height: 6rpx;
		background-color: #797979;
		transition: 0.5s;
		width: 100%;
		position: absolute;
		bottom: 0;
	}
</style>
