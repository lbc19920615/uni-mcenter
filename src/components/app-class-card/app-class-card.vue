<template>
  <view class="app-class-card" @click="clickItem">
    <image src="/static/logo.png"
           mode="widthFix"
           class="app-class-card__avatar"></image>
    <view class="app-class-card__body">
      <view class="app-class-card__title">{{item}}</view>
      <view class="app-class-card__main">{{index}}</view>
      <view class="app-class-card__actions"><view class="app-class-card__action-inner">some action</view></view>
    </view>
  </view>
</template>

<script>
import {commonHooksMixin} from "@/utils/mixins/component";

export default {
  name: "app-class-card",
  mixins: [
      commonHooksMixin
  ],
  props: {
    item: {
      type: String,
      default: ""
    },
    index: {
      type: Number
    }
  },
  data() {
    return {
    }
  },
  methods: {
    comReady() {
      console.log('item', this.item)
    },
    clickItem() {
      this.$emit('click-card', this.item)
    }
  }
}
</script>

<style lang="scss">
@import "../../styles/alh";

$sel: ".app-class-card";

#{$sel} {
  padding: 30upx $commonPaddingH;
  box-sizing: border-box;
  background-color: var(--backround-color-common);
  border-radius: 20upx;
  &__avatar {
  }
  &__body {
    font-size: 32upx;
  }
  &__title {
    margin-bottom: 20upx;
  }
}

#{$sel} {
  display: flex;
  align-items: flex-start;
  &__avatar {
    width: 160upx;
  }
  &__body {
    flex: 1;
    padding-left: 30upx;
  }
  &__actions {
    display: flex;
  }
  &__action-inner {
    margin-left: auto;
  }
}
</style>
