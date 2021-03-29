<style lang="scss">
@import "../../styles/alh";

.al-login-modal {
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
  <uni-popup :mask-click="false" ref="pop" type="center"
    @close="onClosed"
  >
    <view class="al-login-modal">
      <view class="ui-flex ui-items-center al-login-modal__header">
        <view class="al-login-modal__title"><text :decode="true">&nbsp;</text></view>
        <view class="ui-flex ui-items-center ui-justify-center al-login-modal__close"
          @click="handleClose"
        >x</view>
      </view>
      <al-login-auto v-if="visibile"></al-login-auto>
    </view>
  </uni-popup>
</template>

<script>
import AlLoginAuto from "@/components/al-login-auto/al-login-auto";
export default {
  name: "al-login-modal",
  components: {AlLoginAuto},
  data() {
    return {
      visibile: false
    }
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
