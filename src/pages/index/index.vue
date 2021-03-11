<template>
  <view class="container">
    <view class="swiper-con">
      <swiper
        class="swiper"
        :indicator-dots="indicatorDots"
        :autoplay="autoplay"
        :interval="interval"
        :duration="duration"
		:circular="true"
		indicator-active-color="#333"
      >
        <swiper-item>
          <view class="swiper-item uni-bg-red">
			<image class="swiper-image"
			mode="aspectFill" src="/static/pages/index/swipe1.png"></image>
		  </view>
        </swiper-item>
        <swiper-item>
          <view class="swiper-item uni-bg-green">
			  <image class="swiper-image"
			  mode="aspectFill" src="/static/pages/index/swipe2.png"></image>
		  </view>
        </swiper-item>
        <swiper-item>
          <view class="swiper-item uni-bg-blue">
			  <image class="swiper-image"
			  mode="aspectFill" src="/static/pages/index/swipe3.png"></image>
		  </view>
        </swiper-item>
      </swiper>
    </view>
	<view class="main-con">
		<liuyuno-tabs
		 class="main-tabs"
		 :tabData="tabs" :defaultIndex="defaultIndex" @tabClick='tabClick' />
		<index-fragment-main 
		v-show="defaultIndex === 0" ref="fagmain"></index-fragment-main>
		<view v-show="defaultIndex !== 0">
			<al-empty></al-empty>
		</view>
	</view>
  </view>
</template>

<script>
 import {mapGetters} from 'vuex'	
import indexFragmentMain from './components/index-fragment-main.vue'	
import liuyunoTabs from "@/components/liuyuno-tabs/liuyuno-tabs.vue";
	
let swiperMixin = {
  data() {
    return {
      background: ["color1", "color2", "color3"],
      indicatorDots: true,
      autoplay: true,
      interval: 10000,
      duration: 1000,
    };
  },
  methods: {
    changeIndicatorDots(e) {
      this.indicatorDots = !this.indicatorDots;
    },
    changeAutoplay(e) {
      this.autoplay = !this.autoplay;
    },
    intervalChange(e) {
      this.interval = e.target.value;
    },
    durationChange(e) {
      this.duration = e.target.value;
    },
  },
};

export default {
	mixins: [
		swiperMixin
	],
	components: {
		liuyunoTabs,
		indexFragmentMain
	},
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
		defaultIndex: 0,
    };
  },
  computed: {
	...mapGetters([
		'device'
	])  
  },
  mounted() {
	  this.$nextTick(() => {
		  console.log('你好这是从vuex得到的device', this.device)
		  this.$store.dispatch('app/SetDevice', uni.getSystemInfoSync().platform)
			setTimeout(() => {
					  console.log('你好这是从vuex得到的device', this.device)
				 this.$refs.fagmain.reload()
			}, 0)
	  })
  },
  methods: {
	  tabClick(e) {
		  // console.log('tabClick', e)
		this.defaultIndex = e  
	  }
  },
};
</script>


<style lang="scss">
@import "../../styles/alh";

/* 注意，父元素需要固定高度，z-paging的height:100%才会生效 */
page {
  height: 100%;
}

.container {	
  font-size: 14px;
  line-height: 24px;
  height: 100%;
}

$swiperHeight: 300upx;
.swiper-con {
	height: $swiperHeight;
}

.main-con {
	height: calc(100% - #{$swiperHeight});
}

$tabsHeight: 90upx;
.main-tabs {
	height: $tabsHeight;
}

.page-content {
height: calc(100% - #{$tabsHeight} - var(--safe-area-inset-bottom));
// background-color: #EEEEEE;
}

/* #ifdef MP-WEIXIN */
.page-content {
height: calc(100% - #{$tabsHeight} - #{$tabbarHeight} - var(--safe-area-inset-bottom));
}
/* #endif */

.swiper {
  height: 300rpx;
}
.swiper-item {
  display: block;
  height: 300rpx;
  line-height: 300rpx;
  text-align: center;
}

.swiper-image {
	width: 100%;
	height: 100%;
}
</style>
