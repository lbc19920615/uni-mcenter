<template>
  <app-page class="page-login">
    <button @click="open">打开授权手机号弹窗</button>
    <uni-popup ref="popup" type="center">
      <al-auth
        :step="AUTH_STEP.ONE"
        @get-phone-success="onGetPhoneSuccess"
      ></al-auth>
    </uni-popup>
  </app-page>
</template>

<script>
import { pageMixin } from "@/utils/mixins/page";
import AlAuth from "@/components/al-auth/al-auth";
import { authLoginMixin } from "@/utils/mixins/auth";

export default {
  components: { AlAuth },
  mixins: [pageMixin, authLoginMixin],
  data() {
    return {};
  },
  mounted() {
    // this.open();
  },
  methods: {
    open() {
      // 通过组件定义的ref调用uni-popup方法
      this.$refs.popup.open();
    },
  },
};
</script>

<style lang="scss">
</style>
