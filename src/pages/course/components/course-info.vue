<template>
  <view class="course-info">
    <view class="course-info__inner"></view>
  </view>
</template>

<script>
export default {
name: "course-info",
}
</script>

<style lang="scss">
@import "../../../styles/alh";

.course-info {
  @include aspect-ratio(9, 16);
  background-color: #2D87D5;
  &__inner {
    height: 100%; position: absolute; left: 0; top: 0
  }
}
</style>
