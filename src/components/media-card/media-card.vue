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
    height: var(--media-card-avatar-height, $card-avatar-size);
    border-radius: var(--media-card-avatar-border-radius, 1000px);
  }
  &__body {
    box-sizing: border-box;
    padding-left: var(--media-card-body-padding-gutter, 15px);
  }
  &__title {
    font-size: var(--media-card-avatar-font-size, 24px);
    font-weight: var(--media-card-avatar-font-weight, bold);
  }
  &.revese {
    flex-direction: row-reverse;
    #{$sel}__body {
      padding-left: 0;
      padding-right: var(--media-card-body-padding-gutter, 15px);
    }
  }
}
</style>

<template>
  <view class="media-card" :class="{'revese': reverse}">
    <image class="media-card__avatar"></image>
    <view class="media-card__body">
      <view class="media-card__title">{{title}}</view>
      <slot></slot>
    </view>
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
