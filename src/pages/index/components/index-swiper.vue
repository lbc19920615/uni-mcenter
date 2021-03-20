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
        previous-margin="60rpx"
        next-margin="60rpx"
        @change="onChange"
        @transition="onTransition"
    >
      <swiper-item v-for="(item, index) in list" :key="index">
        <view class="swiper-item"
              :class="currentIndex == index ? 'swiper--active': ''">
          <image class="swiper-image"
                 mode="aspectFill"
                 :src="item"></image>
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
      list: [
          'https://oss.kaoyanvip.cn/attach/file1615688418849.png',
          'https://oss.kaoyanvip.cn/attach/file1615688453203.png',
          'https://oss.kaoyanvip.cn/attach/file1615688463231.png',
      ],
      indicatorDots: true,
      autoplay: false,
      interval: 10000,
      duration: 1000,
      currentIndex: 0,
      swiperItemWidth: 0,
    };
  },
  mounted() {
    let self = this
    uni.createSelectorQuery().in(this).select('.swiper-item')
        .boundingClientRect(result => {
          self.swiperItemWidth = result.width
        }).exec()
  },
  methods: {
    onChange(e) {
      // console.log('onChange', e)
      this.currentIndex = e.detail.current
    },
    onTransition(e) {
      let {dx, dy} = e.detail
      // console.log(dx, dy)
    }
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
    padding: 0 20upx;
    text-align: center;
    transform: scale(1);
    //transition: transform .5s ease;
    transition: none;
    &.swiper--active {
      transform: scale(1);
      transition: transform .1s ease;
    }
  }

  .swiper-image {
    width: 100%;
    height: 100%;
    border-radius: 15rpx;
  }
}
</style>
