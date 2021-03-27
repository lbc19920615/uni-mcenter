<template>
  <view class="submit-bar">
    <div class="submit-bar-inner">submit-bar-inner</div>
  </view>
</template>

<script>
export default {
  name: "submit-bar"
}
</script>

<style lang="scss">
.submit-bar {
  position: fixed;
  width: 100%;
  bottom: 0;
  background-color: var(--color-gray-200);
  color: #fff;
  padding-bottom: var(--safe-area-inset-bottom);
  &-inner {
    height: 100%;
  }
}
</style>
