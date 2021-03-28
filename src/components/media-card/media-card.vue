<style lang="scss">
@import "../../styles/alh";

$tag: "media-card";
$sel: ".media-card";

$card-avatar-size: 60px;

#{$sel} {
  display: flex;
  align-items: flex-start;
  &__avatar {
    width: var(--media-card-avatar-width, $card-avatar-size);
    @include def-var($tag + '-avatar', "height", $card-avatar-size);
    border-radius: var(--media-card-avatar-border-radius, 1000px);
  }
  &__body {
    flex: 1;
    box-sizing: border-box;
    padding-left: var(--media-card-body-padding-left, 60rpx);
  }
  &__title {
    font-size: var(--media-card-avatar-font-size, 32rpx);
    //font-weight: var(--media-card-avatar-font-weight, bold);
    @include def-var($tag + '-title', "font-weight", bold);
  }
}
</style>

<template>
  <view class="media-card">
    <image class="media-card__avatar" :style="avatarStyle"></image>
    <div class="media-card__body">
      <div class="media-card__title">{{title}}</div>
      <slot></slot>
    </div>
  </view>
</template>

<script>
export default {
  name: "media-card",
  props: {
    avatarWidth: {
      type: Number,
      default: 60
    },
    title: String,
    reverse: Boolean
  },
  data() {
    return {
      avatarStyle: {
      }
    }
  }
}
</script>
