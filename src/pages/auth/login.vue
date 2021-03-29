<template>
  <app-page class="page-login">
    <button @click="openAuth">打开授权手机号弹窗</button>
    <button @click="openLogin">打开登录弹窗</button>
    <uni-popup ref="popup" type="center">
      <al-auth
        :step="AUTH_STEP.ONE"
        @get-phone-success="onGetPhoneSuccess"
      ></al-auth>
    </uni-popup>
    <uni-popup ref="loginpop" type="center">
      <al-login mode="phone"></al-login>
    </uni-popup>
  </app-page>
</template>

<script>
import { pageMixin } from "@/utils/mixins/page";
import AlAuth from "@/components/al-auth/al-auth";
import { authLoginMixin } from "@/utils/mixins/auth";
import AlLogin from "@/components/al-login/al-login";

export default {
  components: {AlLogin, AlAuth },
  mixins: [pageMixin, authLoginMixin],
  data() {
    return {};
  },
  mounted() {
    // this.open();
  },
  methods: {
    openAuth() {
      // 通过组件定义的ref调用uni-popup方法
      this.$refs.popup.open();
    },
    openLogin() {
      // 通过组件定义的ref调用uni-popup方法
      this.$refs.loginpop.open();
    },
  },
};
</script>

<style lang="scss">
@import "../../styles/alh";

.page-login {
  @include def-com-style('.evan-form-item-container__label') {
    font-size: 32rpx;
    //color: #2D87D5;
    width: 4em;
  }
}
</style>
