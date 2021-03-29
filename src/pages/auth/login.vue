<template>
  <app-page class="page-login">
    <button @click="openAuth">打开授权手机号弹窗</button>
    <button @click="openLogin">打开登录弹窗</button>
	  <button @click="openAuto">自动判断环境</button>
    <uni-popup ref="popup" type="center">
      <al-auth
        :step="AUTH_STEP.ONE"
        @get-phone-success="onGetPhoneSuccess"
      ></al-auth>
    </uni-popup>
    <uni-popup ref="loginpop" type="center">
      <al-login-phone></al-login-phone>
    </uni-popup>
    <al-login-modal ref="autopop" ></al-login-modal>
  </app-page>
</template>

<script>
import { pageMixin } from "@/utils/mixins/page";
import AlAuth from "@/components/al-auth/al-auth";
import { authLoginMixin } from "@/utils/mixins/auth";
import AlLoginPhone from "@/components/al-login-phone/al-login-phone";
import AlLoginModal from "@/components/al-login-modal/al-login-modal";

export default {
  components: {AlLoginModal, AlLoginPhone, AlAuth },
  mixins: [pageMixin, authLoginMixin],
  data() {
    return {};
  },
  mounted() {
    // this.open();
  },
  methods: {
    openAuth() {
      this.$refs.popup.open();
    },
    openLogin() {
      this.$refs.loginpop.open();
    },
    openAuto() {
      this.$refs.autopop.open();
    }
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
  @include def-com-style(".al-login-modal") {
    padding: 0 20rpx 20rpx;
    border-radius: 10rpx;
  }
}
</style>
