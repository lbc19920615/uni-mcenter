<template>
  <view class="course-info">
    <view style="height: 100%">course-info</view>
  </view>
</template>

<script>
export default {
name: "course-info"
}
</script>

<style lang="scss">
@import "../../../styles/alh";

.course-info {
  @include aspect-ratio(9, 16);
  background-color: #2D87D5;
}
</style>
