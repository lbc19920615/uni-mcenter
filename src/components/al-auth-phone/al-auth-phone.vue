<style lang="scss">
@import "../../styles/alh";

.al-auth-phone {
  padding: 20upx;
  background-color: var(--backround-color-common);
}
</style>

<template>
  <view class="al-auth-phone">
    <view>请授权</view>
    <button type="button"
            open-type="getPhoneNumber"
            @getphonenumber="onGetphonenumber">一键授权手机号</button>
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
      }
    }
  }
}
</script>
