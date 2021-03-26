<style lang="scss">
@import "../../styles/alh";

.al-auth-phone {
  @include init-al-auth('.al-auth-phone');

  padding: 60upx 20upx;
  &__desc {
    text-align: center;
    > image {
      width: 120upx;
      height: 120upx;
    }
    margin-bottom: 210upx;
  }
  width: 510upx;
}
</style>

<template>
  <view class="al-auth-phone">
    <view class="al-auth-phone__inner">
      <view class="al-auth-phone__desc">
        <image src="/static/logo.png"
               class="app-class-card__avatar"></image>
      </view>
      <view class="al-auth-phone__title">申请使用你的手机号</view>
      <button
          class="al-auth-phone__button"
          hover-class="none"
          type="button"
          open-type="getPhoneNumber"
          @getphonenumber="onGetphonenumber">一键授权手机号</button>
    </view>
  </view>
</template>

<script>
export default {
  name: 'al-auth-phone',
  data() {
    return {}
  },
  methods: {
    onGetphonenumber(e) {
      const { encryptedData, errMsg, iv } = e.detail
      let obj = {
        encryptedData,
        iv,
      }
      // console.log('onGetphonenumber', e)
      if (errMsg === "getPhoneNumber:ok") {
        this.$emit('get-phone-success', obj)
      } else {
        this.$emit('get-phone-fail', obj)
      }
    }
  }
}
</script>
