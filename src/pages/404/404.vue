<template>
  <app-page class="page-404">
    <view>迷路啦，找不到页面</view>
  </app-page>
</template>

<script>
export default {
  data() {
    return {};
  },
  onLoad(...options) {
    console.log(options);
    console.log(this.$Route);
  },
  methods: {},
};
</script>

<style>
.page-404 {
  font-size: 36rpx;
}
</style>