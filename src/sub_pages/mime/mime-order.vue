<template>
  <app-page class="page-mime-order">
    <swiper-listview @refresh="refreshSwiperItem" @scroll-to-lower="scrollToLower"></swiper-listview>
  </app-page>
</template>

<script>
import SwiperListview from "@/sub_pages/mime/components/swiper-listview";
export default {
  name: "page-mime-order",
  components: {SwiperListview},
  methods: {
    getData(context) {
      uni.showLoading({
        title: '加载中'
      });
      setTimeout(() => {
        for (let index = 0; index < 10; index++) {
          let arr = context.list[context.swiperIndex].content;
          context.$set(arr, arr.length,
              Math.random() + '-' + index + context.list[context.swiperIndex].title);
        }
        uni.hideLoading();
      }, 1000);
    },
    refreshSwiperItem({context, refreshList}) {
      setTimeout(() => {
        refreshList();
        context.stopRefreshLoadingStatus()
      }, 1000);
    },
    scrollToLower({context}) {
      // uni.showToast({
      //   icon: 'none',
      //   title: `此时为${context.list[context.swiperIndex].title}触底`
      // });
      // setTimeout(() => {
      //   this.getData(context);
      // }, 500);
    }
  }
}
</script>

<style lang="scss">
$sel: '.page-mime-order';

page, .page-mime-order {
  height: 100%;
}

#{$sel} {
  font-size: 32rpx;
}
</style>
