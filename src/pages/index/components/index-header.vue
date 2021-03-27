<template>
  <view class="index-header" :style="headerStyle">
    <view class="index-header__inner">
      <view class="index-header-input" @click="clickAction('action0')">
        <image class="index-header__icon"
            src="https://oss.kaoyanvip.cn/attach/file1616811461448.png"></image>
        <text class="index-header__text">{{placeholder}}</text>
      </view>
      <image class="index-header__icon index-header__action"
             @click="clickAction('action1')"
             src="https://oss.kaoyanvip.cn/attach/file1616811854453.png"></image>
      <image class="index-header__icon index-header__action"
             @click="clickAction('action2')"
             src="https://oss.kaoyanvip.cn/attach/file1616811880242.png"></image>
    </view>
  </view>
</template>

<script>
import {commonHooksMixin} from "@/utils/mixins/component";

export default {
  name: "index-header",
  mixins: [
    commonHooksMixin
  ],
  props: {
    height: Number,
    placeholder: String
  },
  data() {
    return {
      headerStyle: ''
    }
  },
  methods: {
    comReady() {
      let height = this.$utils.calcPx(this.height);
      let headerStyle = ''
      if (height) {
        headerStyle = headerStyle +  `height: ${height};`
      }
      // #ifdef H5
      headerStyle = headerStyle + `top: ${this.$utils.getViewportTop(0)}px;`
      // #endif
      console.log(headerStyle)
      this.headerStyle = headerStyle
    },
    clickAction(type) {
      this.$emit('click-action', type)
    }
  }
}
</script>

<style lang="scss">
@import "styles/alh";

$sel: ".index-header";

#{$sel} {
  position: fixed; left: 0; top: 0; width: 100%;
  padding: 0 $commonPaddingH;
  box-sizing: border-box;
  &__inner {
    height: 100%;
    display: flex;
    align-items: center;
    flex-shrink: 0;
  }
  &-input {
    width: 526upx;
    height: 64upx;
    background: #F7F8FC;
    border-radius: 32upx;

    padding: 0 10upx;

    display: flex;
    align-items: center;
  }
  &__icon {
    @include size(56upx);
  }
  &__text {
    color: var(--color-gray-200);
    font-size: 28upx;
  }
  #{$sel}__action {
    margin-left: 27upx;
  }
}
</style>
