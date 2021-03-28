<template>
  <view class="app-class-card" @click="clickItem">
    <image src="/static/logo.png"
           mode="widthFix"
           class="app-class-card__avatar"></image>
    <view class="app-class-card__body">
      <view class="app-class-card__title">{{innerItem}}</view>
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
  watch: {
    item(newVal) {
      console.log('newVal', newVal)
    }
  },
  data() {
    return {
      innerItem: ''
    }
  },
  methods: {
    comReady() {
      console.log('item', this.item)
      this.innerItem = this.item
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
  padding: 30rpx $commonPaddingH;
  box-sizing: border-box;
  background-color: var(--backround-color-common);
  border-radius: 20rpx;
  &__avatar {
  }
  &__body {
    font-size: 32rpx;
  }
  &__title {
    margin-bottom: 20rpx;
  }
}

#{$sel} {
  display: flex;
  align-items: flex-start;
  &__avatar {
    width: 160rpx;
  }
  &__body {
    flex: 1;
    padding-left: 30rpx;
  }
  &__actions {
    display: flex;
  }
  &__action-inner {
    margin-left: auto;
  }
}
</style>
