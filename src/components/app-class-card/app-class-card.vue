<template>
  <view class="app-class-card">
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
export default {
  name: "app-class-card",
  props: {
    item: {
      type: String,
      default() {
        return ""
      }
    },
    index: {
      type: [Number, String]
    }
  },
  data() {
    return {
      innerItem: ""
    }
  },
  watch: {
    item(newVal) {
      console.log('newVal', newVal)
      this.innerItem = newVal
    }
  },
  created() {
    console.log('item', this.item)
    this.innerItem = this.item
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
