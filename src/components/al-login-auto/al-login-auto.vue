<template>
  <view class="al-login-auto">
<!-- #ifdef H5   -->
    <al-login-phone @validate-success="onLoginFormReady"></al-login-phone>
<!-- #endif -->

<!-- #ifndef H5 -->
    <al-auth-phone
        :step="AUTH_STEP.ONE"
        @get-phone-success="onPhoneFormReady"
    ></al-auth-phone>
<!-- #endif -->

  </view>
</template>

<script>
import AlAuthPhone from "@/components/al-auth-phone/al-auth-phone";
import {authLoginMixin} from "@/utils/mixins/auth";
import AlLoginPhone from "@/components/al-login-phone/al-login-phone";
export default {
  name: "al-login-auto",
  mixins: [
    authLoginMixin
  ],
  components: {
    AlLoginPhone,
    AlAuthPhone
  },
  methods: {
    onLoginFormReady(e) {
      this._handleLoginInfo({
        type: 'login_form',
        data: e
      })
    },
    onPhoneFormReady(e) {
      this._handleLoginInfo({
        type: 'mp_phone',
        data: e
      })
    },
    _handleLoginInfo({type = '', data = {}}) {
      console.log('_handleLoginInfo', type, data);
    }
  }
}
</script>

<style lang="scss">

</style>
