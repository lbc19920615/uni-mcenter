<style lang="scss">
.al-auth {
  &-button {
  }
}
</style>

<template>
  <view class="al-auth">
    <al-auth-phone v-if="curStep === AUTH_STEP.ONE"
                   @get-phone-success="onGetPhoneSuccess"
                  @get-phone-fail="onGetPhoneFail"
    ></al-auth-phone>
    <view v-if="curStep === AUTH_STEP.THREE"></view>
  </view>
</template>
<script>
import AlAuthPhone from "@/components/al-auth-phone/al-auth-phone";
import { AUTH_STEP } from "@/components/al-auth/var";

export default {
  name: 'AlAuth',
  components: {AlAuthPhone},
  props: {
    step: String
  },
  data() {
    return {
      curStep: this.step,
      AUTH_STEP
    }
  },
  methods: {
    onGetPhoneSuccess(e) {
      this.$emit('get-phone-success', e)
    },
    onGetPhoneFail(e) {
      this.$emit('get-phone-fail', e)
    }
  }
}
</script>
