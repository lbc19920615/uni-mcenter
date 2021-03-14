<template>
  <view class="index-swiper">
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
                 mode="aspectFill"
                 src="https://oss.kaoyanvip.cn/attach/file1615688418849.png"></image>
        </view>
      </swiper-item>
      <swiper-item>
        <view class="swiper-item uni-bg-green">
          <image class="swiper-image"
                 mode="aspectFill"
                 src="https://oss.kaoyanvip.cn/attach/file1615688453203.png"></image>
        </view>
      </swiper-item>
      <swiper-item>
        <view class="swiper-item uni-bg-blue">
          <image class="swiper-image"
                 mode="aspectFill"
                 src="https://oss.kaoyanvip.cn/attach/file1615688463231.png"></image>
        </view>
      </swiper-item>
    </swiper>
  </view>
</template>

<script>
export default {
  name: "index-swiper",
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
}
</script>

<style lang="scss">
.index-swiper {
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
}
</style>
