<template>
  <app-page class="page-mime-order">
    <swiper-listview></swiper-listview>
  </app-page>
</template>

<script>
import SwiperListview from "@/sub_pages/mime/components/swiper-listview";
export default {
  name: "page-mime-order",
  components: {SwiperListview}
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
