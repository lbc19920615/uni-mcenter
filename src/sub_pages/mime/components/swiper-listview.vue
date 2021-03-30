<style lang="scss">
$tag: "swiper-listview";
$sel: ".swiper-listview";

#{$sel} {
  $navHeight: 60rpx;
  $paddingV: 20rpx;

  height: 100%;

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
    height: calc(100% - #{$navHeight + $paddingV * 2});
    > swiper {
      height: 100%;
    }
  }

  swiper-item {
    position: relative;
  }
}
</style>

<template>
  <view class="swiper-listview">
    <scroll-view class="nav-scroll"
                 :enable-flex="true"
                 scroll-with-animation
                 :throttle="false"
                 :scroll-left="scrollToLeft" scroll-x
                 @scroll="handleTabNavScroll">
      <view class="nav uni-nav">
        <view class="nav-item"
              :class="swiperIndex == index ? 'nav-item-act' : ''"
              :key="index" v-for="(item, index) in list" @click="taggleNav(index)">
          {{ item.title }}
        </view>
        <view class="nav-line" :style="lineStyle"></view>
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
                    v-for="(sub_item, sub_item_index) in item.content"

                    :key="sub_item_index">
               {{sub_item}} {{sub_item_index}}
              </view>
            </view>
          </scroll-view>
        </swiper-item>
      </swiper>
    </view>
  </view>
</template>

<script>
import shortUUID from "short-uuid";
import {commonHooksMixin} from "@/utils/mixins/component";

const mockData = [
  { title: '首页', content: ['首页-1', '首页-2', '首页-3', '首页-4',  '首页-5', '首页-6', '首页-7'] },
  { title: '测试', content: ['测试-1', '测试-2', '测试-3', '测试-4', '测试-5'] },
  { title: '我的', content: ['我的-1', '我的-2', '我的-3',] },
]


export default {
  name: "swiper-listview",
  mixins: [
      commonHooksMixin
  ],
  components: {},
  props: {},
  computed: {
    lineStyle() {
      return `width:${this.navItemWidth}px; left:${this.navItemLeft}px`;
    }
  },
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
      refreStatus: false
    }
  },
  methods: {
    comReady() {
      this.$nextTick(() => {
        // console.log('首页onLoad');
        this.init();
      })
    },
    // 获取dom信息
    init() {
      const query = uni.createSelectorQuery().in(this);
      query.select('.uni-nav').fields({ rect: true, size: true }, res => {
        this.parentLeft = res.left;
        this.componentWidth = res.width;
        console.log('res==>', res);
      });
      query.selectAll('.nav-item').fields({ rect: true, size: true }, data => {
        data.forEach((item, index) => {
          if (index === 0) {
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
    },
    // 滚动tabs以及移动下划线
    scrollTabNavDom() {
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
      this.scrollTabNavDom();
      this.$emit('currentIndex', this.swiperIndex);
    },
    // tabs-scrollview触底
    handleTabNavScroll(e) {
      this.scrollTabNavDom();
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
      // this.IsSwiperScrolltoupper = true
    },
    // swiper-ScrollLower触底
    swiperScrollLower() {
      // uni.showToast({
      //   icon: 'none',
      //   title: `此时为${this.list[this.swiperIndex].title}触底`
      // });
      // setTimeout(() => {
      //   this.getData();
      // }, 500);
      this.$emit('scroll-to-lower', {
        context: this
      })
    },
    stopRefreshLoadingStatus() {
      uni.hideLoading();
      this.refreStatus = false;
    },
    // 下拉事件
    handleRefresh() {
      let self = this
      function refreshList() {
        self.list[self.swiperIndex].content = [];
        for (var i = 0; i < 5; i++) {
          self.list[self.swiperIndex].content.push(
              self.list[self.swiperIndex].title + '下拉-' + i
          );
        }
      }

      if (this.IsSwiperScrolltoupper) {
        this.refreStatus = true;
        uni.showLoading({
          title: '下拉加载中'
        });
        self.$emit('refresh', {
          context: self,
          refreshList,
        })
      } else {
        setTimeout(() => {
          uni.hideLoading();
        }, 0)
      }
    }
  }
}
</script>
