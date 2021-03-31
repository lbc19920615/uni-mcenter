<style lang="scss">
@import "../../styles/alh";

$tag: "al-modal";
$sel: ".al-modal";

#{$sel} {
  $headerHeight: 60rpx;
  --al-login-modal-bg-color: var(--background-color-common);
  //background-color: var(--al-login-modal-bg-color, --background-color-common);
  background-color: var(--al-login-modal-bg-color);
  &__header {
    height: $headerHeight;
  }
  &__title {
    flex: 1;
  }
  &__close {
    @include size(60rpx);
    font-size: 36rpx;
  }
}
</style>

<template>
<uni-popup :type="position" ref="pop">
  <view class="al-modal">
    <view class="ui-flex ui-items-center al-modal__header">
      <view class="al-modal__title"><text :decode="true">&nbsp;</text></view>
      <view class="ui-flex ui-items-center ui-justify-center al-modal__close"
            @click="handleClose"
      >x</view>
    </view>
    <slot></slot>
  </view>
</uni-popup>
</template>

<script>
export default {
  name: "al-modal",
  mixins: [],
  components: {},
  props: {
    position: String
  },
  data() {
    return {}
  },
  methods: {
    open() {
      this.visibile = true
      this.$refs.pop.open()
    },
    close() {
      this.$refs.pop.close()
    },
    onClosed() {
      this.visibile = false
    },
    handleClose() {
      this.close()
    }
  }
}
</script>
