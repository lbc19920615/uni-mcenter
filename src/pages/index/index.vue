<template>
  <app-page page-class="page-index-index">
    <!--       #ifndef APP-NVUE           -->
   <index-header
        placeholder="考研政治徐涛"
        @click-action="clickAction"
    ></index-header>
    <scroll-view class="nav-scroll"
                 :enable-flex="true"
                 scroll-with-animation
                 :throttle="false"
                 :scroll-left="scrollToLeft" scroll-x @scroll="handleScroll">
      <view class="nav uni-nav">
        <view class="nav-item"
              :class="swiperIndex == index ? 'nav-item-act' : ''"
              :key="index" v-for="(item, index) in list" @click="taggleNav(index)">
          {{ item.title }}
        </view>
        <view class="nav-line" :style="style"></view>
      </view>
    </scroll-view>
    <view class="swiper">
      <swiper :current="swiperIndex"
              :duration="300" class="swiper-1"
              easing-function="linear"
              @change="swiperChange"
      >
        <swiper-item v-for="(item, index) in list"
                     class="index-fragment"
                     :class="['index-fragment-' + index]"
                     :key="item.uuid">
          <scroll-view
              :lower-threshold="80"
              :refresher-triggered="refreStatus"
              @refresherrefresh="handleRefresh"
              :refresher-threshold="50"
              :upper-threshold="30"
              :refresher-enabled="true"
              class="swiper-scroll"
              scroll-y="true"
              @scroll="swiperScroll"
              @scrolltoupper="swiperScrolltoupper"
              @scrolltolower="swiperScrollLower"
          >
            <view class="swiper-item-wrap">
              <view class="swiper-item-list"
                    v-for="(sub_item, sub_item_index) in contents"
                    :key="sub_item_index">
                <template v-if="index === 0">
                  <!--      start 首页            -->
                  <view class="ui-m-t-20 ui-m-b-20"
                        v-if="sub_item_index === 0"
                  >
                    <index-swiper></index-swiper>
                  </view>
                  <view class="other-griditem"  v-else-if="sub_item_index === 1" >
					  <!-- #ifdef MP-WEIXIN || H5 -->
                    <index-routes></index-routes>
					<!-- #endif -->
					<!-- #ifdef MP-ALIPAY -->
					demos
					<!-- #endif -->
                  </view>
                  <view class="other-griditem" v-else>
                    <app-class-card :item="sub_item"
                                    :index="sub_item_index"
                                    @click-card="onClickCard"
                    ></app-class-card>
                  </view>
                  <!--      end 首页            -->
                </template>
                <template v-else>
                  <view class="other-griditem" > <text class="text"> {{sub_item_index}}</text> <text class="text">{{sub_item}}</text></view>
                </template>
              </view>
            </view>
          </scroll-view>
        </swiper-item>
      </swiper>
    </view>
    <!--  #endif  -->

    <!--       #ifdef MP-ALIPAY           -->
<!-- 	<swiper>
		<swiper-item>
			<scroll-view scroll-y="true" class="swiper-item-wrap" >
		   <view class="swiper-item-list"  v-for="(sub_item, sub_item_index) in contents">
			 <view class="other-griditem" > <text class="text"> {{sub_item_index}}</text> <text class="text">{{sub_item}}</text></view>
		   </view>
		 </scroll-view>
		</swiper-item>
		<swiper-item>
		   <scroll-view scroll-y="true" class="swiper-item-wrap" >
			  <view class="swiper-item-list"  v-for="(sub_item, sub_item_index) in contents">
				<view class="other-griditem" > <text class="text"> {{sub_item_index}}</text> <text class="text">{{sub_item}}</text></view>
			  </view>
			</scroll-view>
		</swiper-item>
	</swiper> -->
    <!--       #endif          -->
  </app-page>
</template>

<script>
import { router } from '@/router';
import shortUUID  from 'short-uuid'
import {demoPages} from "@/var";
import IndexSwiper from "@/pages/index/components/index-swiper";
import IndexRoutes from "@/pages/index/components/index-routes";
import AppClassCard from "@/components/app-class-card/app-class-card";
import IndexHeader from "@/pages/index/components/index-header";

const mockData = [
  { title: '首页', content: ['首页-1', '首页-2', '首页-3', '首页-4',  '首页-5', '首页-6', '首页-7'] },
  { title: '测试', content: ['测试-1', '测试-2', '测试-3', '测试-4', '测试-5'] },
  { title: '我的', content: ['我的-1', '我的-2', '我的-3',] },
  { title: 'hello', content: ['hello-1', 'hello-2', 'hello-3', 'hello-4', 'hello-5'] },
  { title: '测试-1', content: ['测试-1-1', '测试-1-2', '测试-1-3', '测试-1-4', '测试-1-5'] },
  { title: '测试-2', content: ['测试-2-1', '测试-2-2', '测试-2-3', '测试-2-4', '测试-2-5'] },
  { title: '测试-3', content: ['测试-3-1', '测试-3-2', '测试-3-3', '测试-3-4', '测试-3-5'] },
  { title: '测试-4', content: ['测试-4-1', '测试-4-2', '测试-4-3', '测试-4-4', '测试-4-5'] },
  { title: '测试-5', content: ['测试-5-1', '测试-5-2', '测试-5-3', '测试-5-4', '测试-5-5'] }
]

let indexHeaderMixin = {
  methods: {
    clickAction(type) {
      if (type === 'action0') {
        router.push({
          path: '/pages/demos/search_page'
        })
      }
    }
  }
}

let indexCardMixin = {
  methods: {
    onClickCard(e) {
      router.push({
        name: 'course_detail',
        params: {
          course_uuid: Date.now()
        }
      })
    }
  }
}

export default {
  components: {IndexHeader, AppClassCard, IndexRoutes, IndexSwiper},
  mixins: [
    indexHeaderMixin,
    indexCardMixin,
  ],
  data() {
    return {
      swiperIndex: 0, //当前的swiperindex
      navItemWidth: '', //选中下划线的宽度
      navItemLeft: 0, //选中下划线的显示位置
      scrollToLeft: 0, //scrollview需要滚动的距离
      navInfos: [], //所有navitem的节点信息
      parentLeft: 0, //nav盒子的节点信息
      componentWidth: 0, //nav盒子的宽度
      // 防止在中途就刷新 确保到顶部下拉
      IsSwiperScrolltoupper: true,
      list: mockData.map(v => {
        v.uuid = shortUUID.generate()
        return v
      }),
      demoList: demoPages,
      refreStatus: false,
    };
  },
  computed: {
    style() {
		return `width:${this.navItemWidth}px; left:${this.navItemLeft}px`;
    },
	contents() {
		return this.list[this.swiperIndex].content
	}
  },
  onLoad() {
    this.$nextTick(() => {
      // console.log('首页onLoad');
      // #ifdef MP-WEIXIN || H5
      this.init();
      // #endif
      //  #ifdef MP-ALIPAY
      setTimeout(() => {
		this.init();
      }, 0)
      // #endif
    })
  },
  methods: {
    // 获取dom信息
    init() {
      // const query = uni.createSelectorQuery().in(this);
      const query = uni.createSelectorQuery();
      query.select('.uni-nav').fields({ rect: true, size: true }, res => {
        this.parentLeft = res.left;
        this.componentWidth = res.width;
        console.log('res==>', res);
      });
      query.selectAll('.nav-item').fields({ rect: true, size: true }, data => {
        data.forEach((item, index) => {
          if (index == 0) {
            this.navItemWidth = item.width;
            this.navItemLeft = item.left;
          }
          this.navInfos.push({ width: item.width, left: item.left });
        });
      });
      query.exec();
    },
    // 点击导航切换swiper
    taggleNav(val) {
      this.swiperIndex = val;
      // #ifdef MP-ALIPAY
      console.log('this.swiperIndex', this.swiperIndex)
      this.scrollDom();
      // #endif
    },
    // 滚动tabs以及移动下划线
    scrollDom() {
      let info = this.navInfos[this.swiperIndex];
      let offsetLeft = info.left - this.parentLeft;
      let scrollLeft = offsetLeft - (this.componentWidth - info.width) / 2;
      this.scrollToLeft = scrollLeft < 0 ? 0 : scrollLeft;
      this.navItemLeft = this.navInfos[this.swiperIndex].left;
      setTimeout(() => {
        this.navItemWidth = info.width;
      }, 50);
    },
    // swiper的index变动
    swiperChange(e) {
      this.swiperIndex = e.detail.current;
      this.scrollDom();
      this.$emit('currentIndex', this.swiperIndex);
    },
    // tabs-scrollview触底
    handleScroll(e) {
      this.scrollDom();
    },
    swiperScroll(e) {
      const {scrollLeft, scrollTop, scrollHeight, scrollWidth, deltaX, deltaY} = e.detail
      // console.log('scrollTop', scrollTop)
      if (scrollTop > 80) {
        this.IsSwiperScrolltoupper = false
      } else {
        this.IsSwiperScrolltoupper = true
      }
    },
    swiperScrolltoupper() {
      console.log('swiperScrolltoupper')
    },
    // swiper-ScrollLower触底
    swiperScrollLower() {
      uni.showToast({
        icon: 'none',
        title: `此时为${this.list[this.swiperIndex].title}触底`
      });
      setTimeout(() => {
        uni.hideToast()
        this.getData();
      }, 500);
    },
    // 生成列表数据
    getData() {
      let self = this
      uni.showLoading({
        title: '加载中'
      });
      setTimeout(() => {
        let arr = JSON.parse(JSON.stringify(self.list[this.swiperIndex].content));
        let tem = []
        for (let index = 0; index < 10; index++) {
          tem.push(Math.random() + '-' + index + self.list[this.swiperIndex].title)
        }
        self.$set(self.list[this.swiperIndex], 'content', arr.concat(tem));
        uni.hideLoading();
      }, 1000);
    },
    // 下拉事件
    handleRefresh() {
      if (this.IsSwiperScrolltoupper) {
        this.refreStatus = true;
        uni.showLoading({
          title: '下拉加载中'
        });
        setTimeout(() => {
          this.list[this.swiperIndex].content = [];
          for (var i = 0; i < 5; i++) {
            this.list[this.swiperIndex].content.push(
                this.list[this.swiperIndex].title + '下拉-' + i
            );
          }
          uni.hideLoading();
        }, 1000);
        setTimeout(() => {
          this.refreStatus = false;
        }, 1000);
      } else {
        setTimeout(() => {
          uni.hideLoading();
        }, 0)
      }
    },
    touchStartAli() {
      console.log('touchStartAli')
    },
    touchMoveAli() {
      console.log('touchMoveAli')
    }
  }
};
</script>

<style lang="scss" >
@import "../../styles/alh";

$headerBarHeight: 80rpx;
$swiperListItemHeight: 600rpx;

@include def-com-style('.index-header') {
  height: $headerBarHeight;
}

$navHeight: 60rpx;
$paddingV: 20rpx;

page, .page-index-index {
  height: 100%;
}
.page-index-index {
	position: absolute;
	width: 100%;
}

.nav-item {
  display: inline-block;
  margin: 0 16rpx;
  text-align: center;
  transition: color 0.3s ease;
}

.nav {
  white-space: nowrap;
  position: relative;
  height: $navHeight;
  padding: 20rpx 0;
  font-size: 32rpx;
}

.nav-item-act {
  color: pink;
  font-weight: bolder;
}

.nav-line {
  position: absolute;
  bottom: 0;
  height: 10rpx;
  border-radius: 10rpx;
  background-color: pink;
  transition: left 0.3s ease;
}

.swiper {
  height: calc(100% - #{$navHeight + $paddingV * 2} - #{$headerBarHeight});
  > swiper {
    height: 100% !important;
  }
}
.swiper-scroll {
  height: 100%;
}

// index-fragment
.index-fragment {
  height: 100%;

  .other-griditem {
    padding: 0 30rpx;
    .text {
      font-size: 32rpx;
    }
  }

  // #ifndef APP-NVUE
  &:not(.index-fragment-0) {
	background-color: #007AFF;
    .other-griditem {
      height: $swiperListItemHeight;
	  color: #FFFFFF;
    }
  }
  // #endif
}

.index-fragment-0 {
  .other-griditem {
    margin-top: 30rpx;
  }
}
</style>
